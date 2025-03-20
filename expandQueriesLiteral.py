import os
import itertools
import json
from io import StringIO
from rdflib import Graph, URIRef, Literal,RDF,OWL,RDFS,SKOS,XSD
from rdflib.plugins.sparql.results.xmlresults import XMLResultParser
from rdflib.plugins.sparql.results.jsonresults import JSONResultSerializer

def replaceInString(toreplace, firstliteral, secondliteral,firstliteralrel,secondliteralrel):
	return toreplace.replace("%%literal1%%",firstliteral).replace("%%literal2%%",secondliteral).replace("%%literalrel1%%",firstliteralrel).replace("%%literalrel2%%",secondliteralrel)

querypath = 'src/main/resources/geosparql11_compliance/gsb_querytemplates/'

answerpath = 'src/main/resources/geosparql11_compliance/gsb_answertemplates/'

configpath = 'src/main/resources/geosparql10_compliance/gsb_config/geosparql10_compliance.json'

answerpaths = ['src/main/resources/geosparql10_compliance/gsb_answers/','src/main/resources/geosparql11_compliance/gsb_answertemplates/result/']

answertemplatepaths = ['src/main/resources/geosparql10_compliance/gsb_answers/','src/main/resources/geosparql11_compliance/gsb_answertemplates/']

querytemplatepaths = ['src/main/resources/geosparql10_compliance/gsb_querytemplates/','src/main/resources/geosparql11_compliance/gsb_querytemplates/']

querypaths = ['src/main/resources/geosparql10_compliance/gsb_queries/','src/main/resources/geosparql11_compliance/gsb_querytemplates/result/']

configpaths = ['src/main/resources/geosparql10_compliance/gsb_config/geosparql10_compliance.json','src/main/resources/geosparql11_compliance/gsb_config/geosparql11_compliance.json']

benchmarkconfig={}

benchmarkjsconfig={}

queryToVariants={}

amountOfRequirements=32

benchmarkconfigttlhead="""
@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .
@prefix hobbit: <http://w3id.org/hobbit/vocab#> .
@prefix spec: <http://www.opengis.net/def/spec-element/> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix owl:    <http://www.w3.org/2002/07/owl#> .
@prefix bench:  <http://w3id.org/bench#> .
@prefix qb: <http://purl.org/linked-data/cube#> .
#-------------------------------------------------------------------------------------------------------------------------------

spec:Requirement rdf:type owl:Class .
spec:Requirement rdfs:label \"requirement\"@en .
spec:ConformanceTest rdf:type owl:Class .
spec:ConformanceTest rdfs:label \"conformance test\"@en .
hobbit:imageName rdf:type owl:DatatypeProperty .
hobbit:imageName rdfs:label \"image name\"@en .
hobbit:usesImage rdf:type owl:DatatypeProperty .
hobbit:usesImage rdfs:label \"uses image\"@en .
rdfs:label rdf:type owl:AnnotationProperty .
rdfs:comment rdf:type owl:AnnotationProperty .
hobbit:hasAPI rdf:type owl:ObjectProperty .
hobbit:hasAPI rdfs:label \"has API\"@en .
hobbit:Benchmark rdf:type owl:Class .
hobbit:Benchmark rdfs:label \"Benchmark\"@en .
hobbit:KPI rdf:type owl:Class .
hobbit:KPI rdfs:label \"KPI\"@en .
hobbit:API rdf:type owl:Class .
hobbit:API rdfs:label "API"@en .
hobbit:measuresKPI rdf:type owl:ObjectProperty .
hobbit:measuresKPI rdfs:label \"measures KPI\"@en .
spec:isTestResultOf rdf:type owl:ObjectProperty .
spec:isTestResultOf rdfs:label \"is test result of\"@en .

bench:benchmarkVersion a hobbit:Parameter, hobbit:ConfigurableParameter, hobbit:FeatureParameter;
    rdfs:label "GeoSPARQL Version"@en;
    rdfs:comment "The version of GeoSPARQL to be tested"@en;
    rdfs:domain	hobbit:Benchmark;
    rdfs:range bench:BenchmarkVersion ;
    hobbit:defaultValue bench:geosparql10 .

bench:BenchmarkVersion a rdfs:Class, owl:Class .

bench:geosparql10compliance a bench:BenchmarkVersion;
	rdfs:label "GeoSPARQL 1.0 Compliance"@en;
	rdfs:comment "GeoSPARQL 1.0 Compliance"@en .

bench:geosparql11compliance a bench:BenchmarkVersion;
	rdfs:label "GeoSPARQL 1.1 Compliance"@en;
	rdfs:comment "GeoSPARQL 1.1 Compliance"@en .
    
bench:geosparql10performance a bench:BenchmarkVersion ;
    rdfs:label "GeoSPARQL 1.0 Performance"@en ;
    rdfs:comment "GeoSPARQL 1.0 Performance"@en .
	
bench:geosparql11performance a bench:BenchmarkVersion ;
    rdfs:label "GeoSPARQL 1.1 Performance"@en ;
    rdfs:comment "GeoSPARQL 1.1 Performance"@en .

<https://project-hobbit.eu/challenges/MOCHA2017-API>    a   hobbit:API .

bench:GSComplianceBenchmarkV2  a   hobbit:Benchmark;
    rdfs:label  "GeoSPARQL Compliance Benchmark (v2)"@en;
    rdfs:comment    "GeoSPARQL Compliance Benchmark (v2) for the HOBBIT Platform. The benchmark tests the system's compliance to the GeoSPARQL 1.0 and 1.1 specifications and their requirements. It provides a 0 - 100% compliance result, along with details about the failing tests and sub-tests for each requirement."@en;
    hobbit:hasAPI   <https://project-hobbit.eu/challenges/MOCHA2017-API>;
    hobbit:imageName    "git.project-hobbit.eu:4567/mjovanovik/gsb-benchmarkcontroller-v2";
    hobbit:usesImage    "git.project-hobbit.eu:4567/mjovanovik/gsb-datagenerator-v2";
    hobbit:usesImage    "git.project-hobbit.eu:4567/mjovanovik/gsb-seqtaskgenerator-v2";
    hobbit:usesImage    "git.project-hobbit.eu:4567/mjovanovik/gsb-evaluationmodule-v2" ."""



#geom_literals = {
#    "WKT":"geo:asWKT",
#	"GML":"geo:asGML",
#    "GeoJSON":"geo:asGeoJSON",
#    "KML":"geo:asKML",
#	"DGGS":"geo:asDGGS"
#}

benchmarkuri="bench:GSComplianceBenchmarkV2"

#geom_literals2 = [
#   ("WKT","geo:asWKT"),
#	("GML","geo:asGML"),
#    ("GeoJSON","geo:asGeoJSON"),
#    ("KML","geo:asKML"),
#	("DGGS","geo:asDGGS")
#]

def generateConfigLabelsFromTemplate(benchmarkconfig):
    geom_literals=benchmarkconfig["geoProperties"]
    geom_literals2=benchmarkconfig["literalTypes"]
    combinations=list(itertools.permutations(geom_literals,2))
    #print(combinations)
    combinations=list(map(lambda x, y:(x,y), geom_literals.keys(), geom_literals.keys()))+combinations
    if "reqTemplates" in benchmarkconfig:
        benchmarkconfig["reqLabels"]={}
        benchmarkconfig["reqToDescs"]={}
        for temp in benchmarkconfig["reqTemplates"]:
            if "labeltemplate" in benchmarkconfig["reqTemplates"][temp]:
                if "{{items}}" in benchmarkconfig["reqTemplates"][temp]["labeltemplate"] and "items" in benchmarkconfig["reqTemplates"][temp]:
                    subreqcounter=1
                    for item in benchmarkconfig["reqTemplates"][temp]["items"]:
                        if benchmarkconfig["reqTemplates"][temp]["items"][item]==0:
                            reqnum=temp.replace(".rq","")+"-"+str(subreqcounter)+".rq"
                            onlynum=reqnum.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                            thelabel="Requirement "+str(onlynum)+benchmarkconfig["reqTemplates"][temp]["labeltemplate"][benchmarkconfig["reqTemplates"][temp]["labeltemplate"].find(":"):]
                            benchmarkconfig["reqLabels"][reqnum]=thelabel.replace("{{items}}",item).replace("{{index}}",str(subreqcounter))
                        elif benchmarkconfig["reqTemplates"][temp]["items"][item]==1:
                            litcounter=1
                            for lit in geom_literals:
                                if len(benchmarkconfig["reqTemplates"][temp]["items"])==1:
                                    reqnum=temp.replace(".rq","")+"-"+str(litcounter)+".rq"
                                else:
                                    reqnum=temp.replace(".rq","")+"-"+str(subreqcounter)+"-"+str(litcounter)+".rq"
                                onlynum=reqnum.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                                thelabel="Requirement "+str(onlynum)+" ("+str(lit)+")"+benchmarkconfig["reqTemplates"][temp]["labeltemplate"][benchmarkconfig["reqTemplates"][temp]["labeltemplate"].find(":"):]
                                benchmarkconfig["reqLabels"][reqnum]=thelabel.replace("{{items}}",item).replace("{{index}}",str(subreqcounter))
                                litcounter+=1
                        elif benchmarkconfig["reqTemplates"][temp]["items"][item]==2:
                            litcounter=1
                            for lit in combinations:
                                if len(benchmarkconfig["reqTemplates"][temp]["items"])==1:
                                    reqnum=temp.replace(".rq","")+"-"+str(litcounter)+".rq"
                                else:
                                    reqnum=temp.replace(".rq","")+"-"+str(subreqcounter)+"-"+str(litcounter)+".rq"
                                onlynum=reqnum.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                                thelabel="Requirement "+str(onlynum)+" ("+str(lit[0])+"-"+str(lit[1])+")"+benchmarkconfig["reqTemplates"][temp]["labeltemplate"][benchmarkconfig["reqTemplates"][temp]["labeltemplate"].find(":"):]
                                benchmarkconfig["reqLabels"][reqnum]=thelabel.replace("{{items}}",item).replace("{{index}}",str(subreqcounter))
                                litcounter+=1
                        subreqcounter+=1
                else:
                    benchmarkconfig["reqLabels"][temp]=benchmarkconfig["reqTemplates"][temp]["labeltemplate"]
            if "deftemplate" in benchmarkconfig["reqTemplates"][temp]:
                if "{{items}}" in benchmarkconfig["reqTemplates"][temp]["deftemplate"]:
                    subreqcounter=1
                    for item in benchmarkconfig["reqTemplates"][temp]["items"]:
                        if benchmarkconfig["reqTemplates"][temp]["items"][item]==0:
                            hreqnum=temp.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                            reqnum=temp.replace(".rq","")+"-"+str(subreqcounter)+".rq"
                            onlynum=reqnum.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                            thelabel="Requirement "+str(hreqnum)+" (Part "+str(subreqcounter)+"): "+benchmarkconfig["reqTemplates"][temp]["deftemplate"]
                            benchmarkconfig["reqToDescs"][reqnum]=thelabel.replace("{{items}}",item).replace("{{index}}",str(subreqcounter))
                        elif benchmarkconfig["reqTemplates"][temp]["items"][item]==1:
                            litcounter=1
                            for lit in geom_literals:
                                hreqnum=temp.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                                if len(benchmarkconfig["reqTemplates"][temp]["items"])==1:
                                    reqnum=temp.replace(".rq","")+"-"+str(litcounter)+".rq"
                                    thelabel="Requirement "+str(hreqnum)+" (Part "+str(litcounter)+") ("+str(lit)+"): "+benchmarkconfig["reqTemplates"][temp]["deftemplate"]
                                else:
                                    reqnum=temp.replace(".rq","")+"-"+str(subreqcounter)+"-"+str(litcounter)+".rq"
                                    thelabel="Requirement "+str(hreqnum)+" (Part "+str(subreqcounter)+") ("+str(lit)+"): "+benchmarkconfig["reqTemplates"][temp]["deftemplate"]
                                onlynum=reqnum.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                                
                                benchmarkconfig["reqToDescs"][reqnum]=thelabel.replace("{{items}}",item).replace("{{index}}",str(subreqcounter))
                                litcounter+=1
                        elif benchmarkconfig["reqTemplates"][temp]["items"][item]==2:
                            litcounter=1
                            for lit in combinations:
                                hreqnum=temp.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                                if len(benchmarkconfig["reqTemplates"][temp]["items"])==1:
                                    reqnum=temp.replace(".rq","")+"-"+str(litcounter)+".rq"
                                    thelabel="Requirement "+str(hreqnum)+" (Part "+str(litcounter)+") ("+str(lit[0])+"-"+str(lit[1])+"): "+benchmarkconfig["reqTemplates"][temp]["deftemplate"]
                                else:
                                    reqnum=temp.replace(".rq","")+"-"+str(subreqcounter)+"-"+str(litcounter)+".rq"
                                    thelabel="Requirement "+str(hreqnum)+" (Part "+str(subreqcounter)+") ("+str(lit[0])+"-"+str(lit[1])+"): "+benchmarkconfig["reqTemplates"][temp]["deftemplate"]
                                onlynum=reqnum.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                                
                                benchmarkconfig["reqToDescs"][reqnum]=thelabel.replace("{{items}}",item).replace("{{index}}",str(subreqcounter))
                                litcounter+=1
                        subreqcounter+=1
                else:
                    hreqnum=temp.replace(".rq","").replace("query-","").replace("r0","").replace("r","")
                    benchmarkconfig["reqToDescs"][temp]="Requirement "+str(hreqnum)+": "+benchmarkconfig["reqTemplates"][temp]["deftemplate"]  
    #print(benchmarkconfig["reqLabels"])
    #print(benchmarkconfig["reqToDescs"])
    #print(combinations)

def find_nth_occurrence(string, sub_string, n):
    start_index = string.find(sub_string)
    while start_index >= 0 and n > 1:
        start_index = string.find(sub_string, start_index + 1)
        n -= 1
    return start_index

def createWeightsForQueries(quervarmap,benchmarkname):
    numberreqs=len(quervarmap)+1
    print("Number Of Reqs: "+str(numberreqs))
    reqweight=100/numberreqs
    print("ReqWeight: "+str(reqweight))
    reqToWeights={}
    for var in quervarmap:
        if len(quervarmap[var])==1:
            reqToWeights[var]=reqweight
        elif len(quervarmap[var])>1:
            partweight=reqweight/len(quervarmap[var])
            print(var)
            print("ReqWeight: "+str(reqweight))
            print("PartWeight: "+str(reqweight)+"/"+str(len(quervarmap[var]))+" "+str(partweight))
            highweightsum=(2/3)*reqweight
            lowweightsum=(1/3)*reqweight

            print("ReqWeight * 2/3 sum for high weights: "+str((2/3)*reqweight))
            print("ReqWeight * 1/3 sum for low weights: "+str((1/3)*reqweight))
            print(quervarmap[var])
            highweightcount=1
            lowweightcount=1
            highweightperQuer={}
            for quer in quervarmap[var]:
                if quer not in highweightperQuer:
                    highweightperQuer[quer]=0
                if quervarmap[var][quer]:
                    highweightcount+=1
                    highweightperQuer[quer]+=1
            countperquer=0
            quersum=0
            for inp in highweightperQuer:
                quersum+=highweightperQuer[inp]
                countperquer+=1          
            if highweightcount==0:
                highweightcount=1       
            lowweightcount=len(quervarmap[var])-highweightcount           
            if lowweightcount==0:
                lowweightcount=1
            
            highpartweight=(1/highweightcount)*highweightsum
            lowpartweight=(1/lowweightcount)*lowweightsum
            print("HighPartWeight: "+str(highpartweight))
            print("LowPartWeight: "+str(lowpartweight))
            added={}
            if lowweightcount>0:
                for quer in quervarmap[var]:
                    if quervarmap[var][quer]:
                        reqToWeights[quer]=highpartweight
                        added[quer]=highpartweight
                    else:
                        reqToWeights[quer]=lowpartweight
                        added[quer]=lowpartweight
            else:
                for quer in quervarmap[var]:
                    if quervarmap[var][quer]:
                        reqToWeights[quer]=partweight
                        added[quer]=partweight
                    else:
                        reqToWeights[quer]=partweight
                        added[quer]=partweight
            print(added)
            addedsum=0
            for item in added:
                addedsum+=added[item]
            print("AddedSum: "+str(addedsum)+" - "+str(reqweight))
    #print(reqToWeights)
    with open(benchmarkname+"_weights.js", "w", encoding="utf-8") as f2:
        f2.write(json.dumps(reqToWeights,indent=2,sort_keys=True))

def convertXMLResultToJSONResult(xmlresultstring):
    jsonio=StringIO("")
    #print(xmlresultstring)
    #"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+
    sio=StringIO(xmlresultstring)
    xmlparser=XMLResultParser()
    xmlres=xmlparser.parse(source=sio)
    #print(xmlres)
    jsonres=JSONResultSerializer(xmlres)
    #print(jsonres)
    jsonres.serialize(jsonio)
    #print(jsonio.getvalue())
    return json.dumps(json.loads(jsonio.getvalue()),sort_keys=True)

def expandLiteralsFromTemplates(benchmarkconfig,querypath,answerpath):
    first=True
    gsbquerycounter=0
    curreqcounter=0
    curreqamount=0
    reqstring=""
    benchmarkconfigttl=""
    files = os.listdir(querypath)
    answerp = os.listdir(answerpath)
    if not os.path.exists(answerpath+"result"):
        os.makedirs(answerpath+"result")
    if not os.path.exists(querypath+"result"):
        os.makedirs(querypath+"result")
    geom_literals=benchmarkconfig["geoProperties"]
    geom_literals2=benchmarkconfig["literalTypes"]
    combinations=list(itertools.permutations(geom_literals,2))
    combinations=list(map(lambda x, y:(x,y), geom_literals.keys(), geom_literals.keys()))+list(itertools.permutations(geom_literals,2))
    for comb in combinations:
        print(comb)
    for f in files:
        if not os.path.isfile(querypath+f):
            continue
        index=find_nth_occurrence(f, "-", 2)
        if f[0:index] not in queryToVariants:
            queryToVariants[f[0:index]]={}
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
        #print("ANSWERPAAATHCONFIG: "+str(answerpath))
        for ans in answerp:
            if fileprefix in ans:
                #print(ans+" - "+fileprefix)
                ansfile = open(answerpath+ans, "r")
                filec=ansfile.read()
                answerfiles[ans]=filec
        #print(answerfiles)
        variantcounter=1
        if not "%%literal1%%" in filecontent and not "%%literalrel1%%" in filecontent and not "%%literal2%%" in filecontent and not "%%literalrel1%%" in filecontent:
            queryToVariants[f[0:index]][f]=True            
            with open(querypath+"result/"+f, "w", encoding="utf-8") as f2:
                f2.write(filecontent)
                answercounter=0
            for ans in answerfiles:
                if first:
                    try:
                        with open(answerpath+"result/"+ans.replace(".rq",".srx"), "w", encoding="utf-8") as f2:
                            f2.write(answerfiles[ans])
                    except:
                        print("except")
                    first=False                    
                else:
                    try:
                        with open(answerpath+"result/"+ans.replace(".rq",".srx"), "w", encoding="utf-8") as f2:
                            f2.write(answerfiles[ans])	
                    except:
                        print("except")                    
                answercounter+=1   
            file.close()
            continue
        if "%%literalrel1%%" in filecontent and not "%%literal2%%" in filecontent and not "%%literal1%%" in filecontent:
            for lit in geom_literals:
                #print(lit[0]+" "+lit[1])
                newfile=replaceInString(filecontent,"","",geom_literals[lit],geom_literals[lit])
                if f.find("-")==f.rfind("-"):
                    queryToVariants[f[0:index]][f.replace(".rq","")+"-"+str(variantcounter)+".rq"]=True
                    try:
                        with open(querypath+"result/"+f.replace(".rq","")+"-"+str(variantcounter)+".rq", "w", encoding="utf-8") as f2:
                            f2.write(newfile)
                    except:
                        print("except")                    
                else:
                    queryToVariants[f[0:index]][f[0:index]+"-"+str(variantcounter)+".rq"]=True
                    try:
                        with open(querypath+"result/"+f[0:index]+"-"+str(variantcounter)+".rq", "w", encoding="utf-8") as f2:
                            f2.write(newfile)
                    except:
                        print("except")
                gsbquerycounter+=1
                variantcounter=variantcounter+1
            file.close()
        elif "%%literal2%%" in filecontent:
            for lit in combinations:
                if lit[0]==lit[1]:
                    queryToVariants[f[0:index]][f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq"]=True
                else:
                    queryToVariants[f[0:index]][f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq"]=False
                newfile=replaceInString(filecontent,lit[0],lit[1],geom_literals[lit[0]],geom_literals[lit[1]])
                with open(querypath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq", "w") as f2:
                    f2.write(newfile)
                gsbquerycounter+=1
                first=True    
                answercounter=0
                for ans in answerfiles:
                    if first:
                        try:
                            with open(answerpath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+".srx", "w", encoding="utf-8") as f2:
                                f2.write(answerfiles[ans])
                        except:
                            print("except")
                        first=False                    
                    else:
                        try:
                            with open(answerpath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+"-alternative-"+str(answercounter)+".srx", "w", encoding="utf-8") as f2:
                                f2.write(answerfiles[ans])	
                        except:
                            print("except")                    
                    answercounter+=1                    
                variantcounter=variantcounter+1
            file.close()
        else:	
            for lit in geom_literals2:
                #print(lit[0]+" "+lit[1])
                newfile=replaceInString(filecontent,lit,lit,geom_literals[lit],geom_literals[lit])
                if lit==geom_literals2[lit]:
                    queryToVariants[f[0:index]][f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq"]=True
                else:
                    queryToVariants[f[0:index]][f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq"]=False
                try:
                    with open(querypath+"result/"+f[0:f.rfind("-")]+"-"+str(variantcounter)+".rq", "w", encoding="utf-8") as f2:
                        f2.write(newfile)
                except:
                    print("except")
                gsbquerycounter+=1
                variantcounter=variantcounter+1
            answercounter=0
            for ans in answerfiles:
                if first:
                    try:
                        with open(answerpath+"result/"+ans, "w", encoding="utf-8") as f2:
                            f2.write(answerfiles[ans])
                    except:
                        print("except")
                    first=False                    
                else:
                    try:
                        with open(answerpath+"result/"+ans, "w", encoding="utf-8") as f2:
                            f2.write(answerfiles[ans])	
                    except:
                        print("except")                    
                answercounter+=1   
            file.close()

def generateConfiguration(querypath,answerpath,benchmarkconfig,benchmarkconfigttl):
    first=True
    gsbquerycounter=0
    curreqcounter=0
    curreqamount=0
    reqstring=""
    files = os.listdir(querypath)
    answerp = os.listdir(answerpath)
    #print("ANSWERPAAAATH: "+str(answerpath))
    benchmarkname="The Benchmark"
    if "benchmarkshorturi" in benchmarkconfig:
        benchmarkname=benchmarkconfig["benchmarkshorturi"]
    benchmarkjs={}
    for f in files:
        #print(querypath+f)
        if not os.path.isfile(querypath+f):
            continue
        file = open(querypath+f, "r", encoding="utf-8")
        filecontent=file.read()
        benchmarkjs[f]={"query":filecontent,"answers":{},"label":"","definition":"","uri":"","weight":""}
        #print("EXISTS: "+str(answerpath+f.replace(".rq",".srx")))
        if os.path.exists(answerpath+f.replace(".rq",".srx")):
            afile = open(answerpath+f.replace(".rq",".srx"), "r", encoding="utf-8")
            afilecontent=afile.read()
            #print(afilecontent)
            jsonres=convertXMLResultToJSONResult(afilecontent)
            benchmarkjs[f]["answers"][jsonres]=True
        for i in range(1,10):
            if os.path.exists(answerpath+f.replace(".rq","")+"-alternative-"+str(i)+".srx"):
                afile = open(answerpath+f.replace(".rq","")+"-alternative-"+str(i)+".srx", "r", encoding="utf-8")
                afilecontent=afile.read()
                jsonres=convertXMLResultToJSONResult(afilecontent)
                benchmarkjs[f]["answers"][jsonres]=True
                break
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
        index=find_nth_occurrence(f, "-", 2)
        if index==-1:
            querynumbersmall=f.replace(".rq","")
        else:
            querynumbersmall=f[0:index]
        #print("QUERYNUMERSMALL: "+str(querynumbersmall))
        if not "%%literal1%%" in filecontent and not "%%literalrel1%%" in filecontent and not "%%literal2%%" in filecontent and not "%%literalrel1%%" in filecontent:
            kpiuri="http://w3id.org/bench#Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+benchmarkconfig["benchmarkshorturi"]+"Status"
            benchmarkconfigttl.add((URIRef(benchmarkuri),URIRef("http://w3id.org/hobbit/vocab#measuresKPI"),URIRef(kpiuri)))
            benchmarkconfigttl.add((URIRef(kpiuri),RDF.type,URIRef("http://w3id.org/hobbit/vocab#KPI")))
            benchmarkconfigttl.add((URIRef(kpiuri),RDFS.range,XSD.boolean))
            partnumber=-1
            if f.count("-")>1:
                querynumber=f[0:f.rfind("-")]
                partnumber=f[f.rfind("-")+1:].replace(".rq","")
            else:
                querynumber=f.replace(".rq","")
            if benchmarkconfig!=None and "benchmarkshortname" in benchmarkconfig:
                thelabel=f.replace(".rq","")
                if partnumber!=-1:
                    thelabel+=" (Part "+str(partnumber)+")"
                thelabel+=" ("+benchmarkconfig["benchmarkshortname"]+")"
                benchmarkconfigttl.add((URIRef(kpiuri),RDFS.label,Literal(thelabel)))
            else:
                benchmarkconfigttl.add((URIRef(kpiuri),RDFS.label,Literal(f.replace(".rq",""))))
            #print("QueryNumber: "+str(querynumber))
            #print("QueryNumber: "+str(f))
            #print("QueryNumber: "+str(partnumber))
            if "reqToURI" in benchmarkconfig and querynumber in benchmarkconfig["reqToURI"]:
                benchmarkjs[f]["uri"]=benchmarkconfig["reqToURI"][querynumber]
                benchmarkconfigttl.add((URIRef(kpiuri),URIRef("http://www.opengis.net/def/spec-element/isTestResultOf"),URIRef(benchmarkconfig["reqToURI"][querynumber].replace("req","conf"))))
                benchmarkconfigttl.add((URIRef(benchmarkconfig["reqToURI"][querynumber]),RDF.type,URIRef("http://www.opengis.net/def/spec-element/Requirement")))
                benchmarkconfigttl.add((URIRef(benchmarkconfig["reqToURI"][querynumber].replace("req","conf")),RDF.type,URIRef("http://www.opengis.net/def/spec-element/ConformanceTest")))
                #benchmarkconfigttl+="spec:isTestResultOf <"+benchmarkconfig["reqToURI"][querynumber]+"> .\n"
                #benchmarkconfigttl+="<"+benchmarkconfig["reqToURI"][querynumber]+"> rdf:type spec:Requirement .\n"
                #benchmarkconfigttl+="<"+benchmarkconfig["reqToURI"][querynumber].replace("req","conf")+"> rdf:type spec:ConformanceTest .\n"
                #benchmarkconfigttl+="bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+benchmarkconfig["benchmarkshorturi"]+"Status " 
            if "reqToExtension" in benchmarkconfig and querynumbersmall in benchmarkconfig["reqToExtension"]:
                benchmarkjs[f]["module"]=benchmarkconfig["reqToExtension"][querynumbersmall]
            if "reqWeights" in benchmarkconfig and f in benchmarkconfig["reqWeights"]:
                benchmarkjs[f]["weight"]=benchmarkconfig["reqWeights"][f]
            if 	"reqToDescs" in benchmarkconfig and f in benchmarkconfig["reqToDescs"]:	
                thecomment="Requirement "+f.replace(".rq","")
                if partnumber!=-1:
                    thecomment+=" (Part "+str(partnumber)+")" 
                thecomment+=": "+benchmarkconfig["reqToDescs"][f]
                benchmarkconfigttl.add((URIRef(kpiuri),RDFS.comment,Literal(thecomment,lang="en")))
                benchmarkconfigttl.add((URIRef(kpiuri),SKOS.definition,Literal(thecomment,lang="en")))
                benchmarkjs[f]["definition"]=benchmarkconfig["reqToDescs"][f]
            else:
                thecomment=f.replace(".rq","")
                if "benchmarkshortname" in benchmarkconfig:
                    thecomment+=" ("+benchmarkconfig["benchmarkshortname"]+")"
                benchmarkconfigttl.add((URIRef(kpiuri),RDFS.comment,Literal(thecomment,lang="en")))
                benchmarkconfigttl.add((URIRef(kpiuri),SKOS.definition,Literal(thecomment,lang="en")))
                benchmarkjs[f]["definition"]=f.replace(".rq","")
            if "reqLabels" in benchmarkconfig and f in benchmarkconfig["reqLabels"]:
                benchmarkconfigttl.add((URIRef(kpiuri),SKOS.altLabel,Literal(benchmarkconfig["reqLabels"][f],lang="en")))
                benchmarkjs[f]["label"]=benchmarkconfig["reqLabels"][f]                
            #benchmarkconfigttl+="rdfs:range xsd:boolean .\n\n"  
            #benchmarkconfigttlhead+="    hobbit:measuresKPI bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"Status ;\n"        
            continue
        if "%%literal2%%" in filecontent:
            for lit in combinations:
                kpiuri="http://w3id.org/bench#Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+str(variantcounter)+"_"+benchmarkconfig["benchmarkshorturi"]+"Status"
                benchmarkconfigttl.add((URIRef(kpiuri),RDF.type,URIRef("http://w3id.org/hobbit/vocab#KPI")))
                partnumber=-1
                if f.count("-")>1:
                    querynumber=f[0:f.rfind("-")]
                    partnumber=f[f.rfind("-")+1:].replace(".rq","")
                else:
                    querynumber=f.replace(".rq","")
                if benchmarkconfig!=None and "benchmarkshortname" in benchmarkconfig:
                    thelabel=f.replace(".rq","")
                    if partnumber!=-1:
                        thelabel+=" (Part "+str(partnumber)+")"
                    thelabel+=" ("+lit[0]+"-"+lit[1]+") ("+benchmarkconfig["benchmarkshortname"]+")"
                    benchmarkconfigttl.add((URIRef(kpiuri),RDFS.label,Literal(thelabel,lang="en")))
                else:
                    benchmarkconfigttl.add((URIRef(kpiuri),RDFS.label,Literal(f.replace(".rq",""),lang="en")))
                #print("QueryNumber: "+str(querynumber))
                #print("QueryNumber: "+str(f))
                #print("QueryNumber: "+str(partnumber))
                if "reqToURI" in benchmarkconfig and querynumber in benchmarkconfig["reqToURI"]:
                    benchmarkconfigttl.add((URIRef(kpiuri),URIRef("http://www.opengis.net/def/spec-element/isTestResultOf"),URIRef(benchmarkconfig["reqToURI"][querynumber])))
                    benchmarkjs[f]["uri"]=benchmarkconfig["reqToURI"][querynumber]
                if "reqToExtension" in benchmarkconfig and querynumbersmall in benchmarkconfig["reqToExtension"]:
                    benchmarkjs[f]["module"]=benchmarkconfig["reqToExtension"][querynumbersmall]
                if "reqWeights" in benchmarkconfig and f in benchmarkconfig["reqWeights"]:
                    benchmarkjs[f]["weight"]=benchmarkconfig["reqWeights"][f]
                if "reqToDescs" in benchmarkconfig and f in benchmarkconfig["reqToDescs"]:		
                    benchmarkjs[f]["definition"]=benchmarkconfig["reqToDescs"][f]
                    benchmarkconfigttl.add((URIRef(kpiuri),RDFS.comment,Literal(benchmarkconfig["reqToDescs"][f],lang="en")))
                    benchmarkconfigttl.add((URIRef(kpiuri),SKOS.definition,Literal(benchmarkconfig["reqToDescs"][f],lang="en")))                
                else:
                    thecomment=f.replace(".rq","")
                    if "benchmarkshortname" in benchmarkconfig:
                        thecomment+=" ("+lit[0]+"-"+lit[1]+") ("+benchmarkconfig["benchmarkshortname"]+")"
                    benchmarkjs[f]["definition"]=f.replace(".rq","")
                    benchmarkconfigttl.add((URIRef(kpiuri),RDFS.comment,Literal(thecomment,lang="en")))
                    benchmarkconfigttl.add((URIRef(kpiuri),SKOS.definition,Literal(thecomment,lang="en")))   
                if "reqLabels" in benchmarkconfig and f in benchmarkconfig["reqLabels"]:
                    benchmarkjs[f]["label"]=benchmarkconfig["reqLabels"][f]
                    benchmarkconfigttl.add((URIRef(kpiuri),SKOS.altLabel,Literal(benchmarkconfig["reqLabels"][f],lang="en")))
                #benchmarkconfigttl+="rdfs:range xsd:boolean .\n\n"  
                #benchmarkconfigttlhead+="    hobbit:measuresKPI bench:Q"+f.replace(".rq","").replace("query-r","").replace("-","_")+"_"+str(variantcounter)+"Status ;\n"    
                gsbquerycounter+=1
                first=True                
                variantcounter=variantcounter+1
            file.close()
    with open("js/"+benchmarkname+"_benchmark.js", "w", encoding="utf-8") as f2:
        f2.write("var "+benchmarkname+"_benchmarkconfig="+json.dumps(benchmarkjs,indent=2,sort_keys=True))
    return benchmarkconfigttl

#i=0
#for bencon in configpaths:
#    with open(bencon) as json_file:
#        benchmarkconfig = json.load(json_file)
#    if i==0:
#        
#    i+=1
benchmarkconfigttl=Graph()
i=0
for bencon in configpaths:
    with open(bencon) as json_file:
        benchmarkconfig = json.load(json_file)
    if i>=0:
        generateConfigLabelsFromTemplate(benchmarkconfig)
        expandLiteralsFromTemplates(benchmarkconfig,querytemplatepaths[i],answertemplatepaths[i])        
        benchmarkconfigttl.parse(data=benchmarkconfigttlhead)
        benchmarkconfigttl=generateConfiguration(querypaths[i],answerpaths[i],benchmarkconfig,benchmarkconfigttl)
        benchmarkconfigttl.serialize(destination='hobbit-settings/benchmark_'+str(benchmarkconfig["benchmarkshorturi"])+'.ttl', format='turtle')
        #print(queryToVariants)
        createWeightsForQueries(queryToVariants,benchmarkconfig["benchmarkshorturi"])
        #benchmarkconfigttlhead+="    hobbit:measuresKPI  bench:totalCorrectAnswers ;\n    hobbit:measuresKPI  bench:percentageCorrectAnswers . bench:percentageCorrectAnswers rdf:type hobbit:KPI .\n"
        #print(benchmarkconfigttlhead+benchmarkconfigttl)
        #graph2 = Graph()
        #graph2.parse(data = benchmarkconfigttlhead+benchmarkconfigttl, format='n3')
        #
    i+=1


#with open("benchmarkconfig_gen.ttl", "w", encoding="utf-8") as f2:
#    f2.write(benchmarkconfigttlhead)
#    f2.write(benchmarkconfigttl)
