from rdflib import Graph
import sys
import json
from rdflib.plugins.sparql.results.xmlresults import XMLResultSerializer
from io import StringIO
import xml.dom.minidom

datasetpath="src/main/resources/geosparql11_compliance/gsb_dataset/dataset.ttl"
querypath="src/main/resources/geosparql11_compliance/gsb_querytemplates/"

with open('geosparql11_compliance.json', 'r') as file:
    gspcomp = json.load(file)


g=Graph()
g.parse(datasetpath)

querypath+=sys.argv[1]
if sys.argv[1] in gspcomp["reqLabels"]:
    print(gspcomp["reqLabels"][sys.argv[1]])

f = open(querypath, "r")
thequery=f.read()

print(thequery)

sio=StringIO("")
qres = g.query(thequery)
xmlres=XMLResultSerializer(qres)
xmlres.serialize(sio)
#print(sio.getvalue())
dom = xml.dom.minidom.parseString(sio.getvalue())
pretty_xml_as_string = dom.toprettyxml()
print(pretty_xml_as_string)
for res in qres:
    print(res)