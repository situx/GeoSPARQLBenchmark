import os
import itertools
import json


def replaceInString(toreplace, firstliteral, secondliteral,firstliteralrel,secondliteralrel):
	return toreplace.replace("%%literal1%%",firstliteral).replace("%%literal2%%",secondliteral).replace("%%literalrel1%%",firstliteralrel).replace("%%literalrel2%%",secondliteralrel)

querypath = 'src/main/resources/geosparql11_compliance/gsb_querytemplates/'

answerpath = 'src/main/resources/geosparql11_compliance/gsb_answertemplates/'

configpath = 'src/main/resources/geosparql10_compliance/gsb_config/geosparql10_compliance.json'

querypaths = ['src/main/resources/geosparql10_compliance/gsb_queries/','src/main/resources/geosparql11_compliance/gsb_querytemplates/']

configpaths = ['src/main/resources/geosparql10_compliance/gsb_config/geosparql10_compliance.json','src/main/resources/geosparql11_compliance/gsb_config/geosparql11_compliance.json']

benchmarkconfig={}

files = os.listdir(querypath)
answerp = os.listdir(answerpath)

amountOfRequirements=32

benchmarkconfigttlhead="""
@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .
@prefix hobbit: <http://w3id.org/hobbit/vocab#> .
@prefix spec: <http://www.opengis.net/def/spec-element/> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .
@prefix owl:    <http://www.w3.org/2002/07/owl#> .
@prefix bench:  <http://w3id.org/bench#> .
@prefix qb: <http://purl.org/linked-data/cube#> .
#-------------------------------------------------------------------------------------------------------------------------------
bench:GSComplianceBenchmarkV2  a   hobbit:Benchmark;
    rdfs:label  "GeoSPARQL Compliance Benchmark (v2)"@en;
    rdfs:comment    "GeoSPARQL Compliance Benchmark (v2) for the HOBBIT Platform. The benchmark tests the system's compliance to the GeoSPARQL 1.0 and 1.1 specifications and their requirements. It provides a 0 - 100% compliance result, along with details about the failing tests and sub-tests for each requirement."@en;
    hobbit:hasAPI   <https://project-hobbit.eu/challenges/MOCHA2017-API>;
    hobbit:imageName    "git.project-hobbit.eu:4567/mjovanovik/gsb-benchmarkcontroller-v2";
    hobbit:usesImage    "git.project-hobbit.eu:4567/mjovanovik/gsb-datagenerator-v2";
    hobbit:usesImage    "git.project-hobbit.eu:4567/mjovanovik/gsb-seqtaskgenerator-v2";
    hobbit:usesImage    "git.project-hobbit.eu:4567/mjovanovik/gsb-evaluationmodule-v2";"""

geom_literals = {
    "WKT":"geo:asWKT",
	"GML":"geo:asGML",
    "GeoJSON":"geo:asGeoJSON",
    "KML":"geo:asKML",
	"DGGS":"geo:asDGGS"
}

geom_literals2 = [
    ("WKT","geo:asWKT"),
	("GML","geo:asGML"),
    ("GeoJSON","geo:asGeoJSON"),
    ("KML","geo:asKML"),
	("DGGS","geo:asDGGS")
]

combinations=list(itertools.permutations(geom_literals,2))
combinations+=list(map(lambda x, y:(x,y), geom_literals.keys(), geom_literals.keys()))

for comb in combinations:
    print(comb)

if not os.path.exists(answerpath+"result"):
    os.makedirs(answerpath+"result")

if not os.path.exists(querypath+"result"):
    os.makedirs(querypath+"result")

def expandLiteralsFromTemplates():
    first=True
    gsbquerycounter=0
    curreqcounter=0
    curreqamount=0
    reqstring=""
    benchmarkconfigttl=""
    for f in files:
        if not os.path.isfile(querypath+f):
            continue
        file = open(querypath+f, "r")
        filecontent=file.read()
        fileprefix=f[0:f.rfind("-")]
        if curreqcounter==0:
            curreqamount=0
        if reqstring=="" or reqstring==fileprefix:
            curreqcounter+=1
            curreqamount+=1
        elif curreqamount==0:
            #gsbevalweights+="\tpublic static final double GSB_ANSWER_WEIGHT_"+f.replace(".rq","").replace("query-r","").replace("-","_")+" = 1.0/"+str(amountOfRequirements)+";\n"
            curreqcounter=0
        else:
            curreqcounter=0
        reqstring=fileprefix
        answerfiles={}
        for ans in answerp:
            if fileprefix in ans:
                print(ans+" - "+fileprefix)
                ansfile = open(answerpath+ans, "r")
                filec=ansfile.read()
                answerfiles[ans]=filec
        print(answerfiles)
        variantcounter=1
        if not "%%literal1%%" in filecontent and not "%%literalrel1%%" in filecontent and not "%%literal2%%" in filecontent and not "%%literalrel1%%" in filecontent:     
            with open(querypath+"result/"+f, "w") as f2:
                f2.write(filecontent)
            file.close()
            continue
        if "%%literal2%%" in filecontent:
            for lit in combinations:
                newfile=replaceInString(filecontent,lit[0],lit[1],geom_literals[lit[0]],geom_literals[lit[1]])
                with open(querypath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq", "w") as f2:
                    f2.write(newfile)
                gsbquerycounter+=1
                first=True    
                answercounter=0
                for ans in answerfiles:
                    if first:
                        try:
                            with open(answerpath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+".srx", "w") as f2:
                                f2.write(answerfiles[ans])
                        except:
                            print("except")
                        first=False                    
                    else:
                        try:
                            with open(answerpath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+"-alternative-"+str(answercounter)+".srx", "w") as f2:
                                f2.write(answerfiles[ans])	
                        except:
                            print("except")                    
                    answercounter+=1                    
                variantcounter=variantcounter+1
            file.close()
        else:	
            for lit in geom_literals2:
                print(lit[0]+" "+lit[1])
                newfile=replaceInString(filecontent,lit[0],lit[0],lit[1],lit[1])
                try:
                    with open(querypath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq", "w") as f2:
                        f2.write(newfile)
                except:
                    print("except")
                gsbquerycounter+=1
                variantcounter=variantcounter+1
            file.close()

def generateConfiguration(querypath,benchmarkconfig,benchmarkconfigttl,benchmarkconfigttlhead):
    first=True
    gsbquerycounter=0
    curreqcounter=0
    curreqamount=0
    reqstring=""
    files = os.listdir(querypath)
    #answerp = os.listdir(answerpath)
    for f in files:
        print(querypath+f)
        if not os.path.isfile(querypath+f):
            continue
        file = open(querypath+f, "r")
        filecontent=file.read()
        fileprefix=f[0:f.rfind("-")]
        if curreqcounter==0:
            curreqamount=0
        if reqstring=="" or reqstring==fileprefix:
            curreqcounter+=1
            curreqamount+=1
        elif curreqamount==0:
            curreqcounter=0
        else:
            curreqcounter=0
        reqstring=fileprefix
        variantcounter=1
        if not "%%literal1%%" in filecontent and not "%%literalrel1%%" in filecontent and not "%%literal2%%" in filecontent and not "%%literalrel1%%" in filecontent:
            benchmarkconfigttl+="bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+benchmarkconfig["benchmarkshorturi"]+"Status a hobbit:KPI;\n"
            partnumber=-1
            if f.count("-")>1:
                querynumber=f[0:f.rfind("-")]
                partnumber=f[f.rfind("-")+1:].replace(".rq","")
            else:
                querynumber=f.replace(".rq","")
            if benchmarkconfig!=None and "benchmarkshortname" in benchmarkconfig:
                benchmarkconfigttl+="rdfs:label \""+f.replace(".rq","")
                if partnumber!=-1:
                    benchmarkconfigttl+=" (Part "+str(partnumber)+")"
                benchmarkconfigttl+=" ("+benchmarkconfig["benchmarkshortname"]+")\";\n"
            else:
                benchmarkconfigttl+="rdfs:label \""+f.replace(".rq","")+"\";\n"
            print("QueryNumber: "+str(querynumber))
            print("QueryNumber: "+str(f))
            print("QueryNumber: "+str(partnumber))
            if "reqToURI" in benchmarkconfig and querynumber in benchmarkconfig["reqToURI"]:
                benchmarkconfigttl+="spec:isTestResultOf <"+benchmarkconfig["reqToURI"][querynumber]+"> ;\n"
            if 	"reqToDescs" in benchmarkconfig and f in benchmarkconfig["reqToDescs"]:	
                benchmarkconfigttl+="rdfs:comment \"Requirement "+f.replace(".rq","")
                if partnumber!=-1:
                    benchmarkconfigttl+=" (Part "+str(partnumber)+")" 
                benchmarkconfigttl+=": "+benchmarkconfig["reqToDescs"][f]+"\";\n"
            else:
                benchmarkconfigttl+="rdfs:comment \""+f.replace(".rq","")
                if "benchmarkshortname" in benchmarkconfig:
                    benchmarkconfigttl+=" ("+benchmarkconfig["benchmarkshortname"]+")"
                benchmarkconfigttl+="\";\n"
            benchmarkconfigttl+="rdfs:range xsd:boolean .\n\n"  
            benchmarkconfigttlhead+="    hobbit:measuresKPI bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"Status ;\n"        
            continue
        if "%%literal2%%" in filecontent:
            for lit in combinations:
                benchmarkconfigttl+="bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+str(variantcounter)+"_"+benchmarkconfig["benchmarkshorturi"]+"Status a hobbit:KPI;\n"
                partnumber=-1
                if f.count("-")>1:
                    querynumber=f[0:f.rfind("-")]
                    partnumber=f[f.rfind("-")+1:].replace(".rq","")
                else:
                    querynumber=f.replace(".rq","")
                if benchmarkconfig!=None and "benchmarkshortname" in benchmarkconfig:
                    benchmarkconfigttl+="rdfs:label \""+f.replace(".rq","")
                    if partnumber!=-1:
                        benchmarkconfigttl+=" (Part "+str(partnumber)+")"
                    benchmarkconfigttl+=" ("+lit[0]+"-"+lit[1]+") ("+benchmarkconfig["benchmarkshortname"]+")\";\n"
                else:
                    benchmarkconfigttl+="rdfs:label \""+f.replace(".rq","")+"\";\n"
                print("QueryNumber: "+str(querynumber))
                print("QueryNumber: "+str(f))
                print("QueryNumber: "+str(partnumber))
                if "reqToURI" in benchmarkconfig and querynumber in benchmarkconfig["reqToURI"]:
                    benchmarkconfigttl+="spec:isTestResultOf <"+benchmarkconfig["reqToURI"][querynumber]+"> ;\n"
                if "reqToDescs" in benchmarkconfig and f in benchmarkconfig["reqToDescs"]:		
                    benchmarkconfigttl+="rdfs:comment \""+benchmarkconfig["reqToDescs"][f]+"\";\n"
                else:
                    benchmarkconfigttl+="rdfs:comment \""+f.replace(".rq","")
                    if "benchmarkshortname" in benchmarkconfig:
                        benchmarkconfigttl+=" ("+lit[0]+"-"+lit[1]+") ("+benchmarkconfig["benchmarkshortname"]+")"
                    benchmarkconfigttl+="\";\n"
                benchmarkconfigttl+="rdfs:range xsd:boolean .\n\n"  
                benchmarkconfigttlhead+="    hobbit:measuresKPI bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+str(variantcounter)+"Status ;\n"    
                gsbquerycounter+=1
                first=True                
                variantcounter=variantcounter+1
            file.close()
    return benchmarkconfigttl

expandLiteralsFromTemplates()
benchmarkconfigttl=""
i=0
for bencon in configpaths:
    with open(bencon) as json_file:
        benchmarkconfig = json.load(json_file)
    benchmarkconfigttl=generateConfiguration(querypaths[i],benchmarkconfig,benchmarkconfigttl,benchmarkconfigttlhead)
    i+=1
benchmarkconfigttlhead+="    hobbit:measuresKPI  bench:totalCorrectAnswers ;\n    hobbit:measuresKPI  bench:percentageCorrectAnswers .\n"
with open("benchmarkconfig_gen.ttl", "w") as f2:
    f2.write(benchmarkconfigttlhead)
    f2.write(benchmarkconfigttl)
