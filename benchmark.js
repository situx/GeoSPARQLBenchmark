var benchmarkconfig={
  "query-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?dggss\n} \n \n"
  },
  "query-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?dggss\n} \n \n"
  },
  "query-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?dggss\n} \n \n"
  },
  "query-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?dggss\n} \n \n"
  },
  "query-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?dggss\n} \n \n"
  },
  "query-r01.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nSELECT ?p ?o\nWHERE {\n  my:A ?p ?o\n}\nORDER BY ?p ?o\nLIMIT 1\n"
  },
  "query-r02.rq": {
    "answers": [],
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:SpatialObject\n}\nORDER BY ?f\n"
  },
  "query-r03.rq": {
    "answers": [],
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:Feature\n}\nORDER BY ?f\n"
  },
  "query-r04.rq": {
    "answers": [],
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:SpatialObjectCollection\n}\nORDER BY ?f \n"
  },
  "query-r05.rq": {
    "answers": [],
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:FeatureCollection\n}\nORDER BY ?f \n"
  },
  "query-r06-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?size\nWHERE {\n  my:A geo:hasSize ?size .\n} \n \n"
  },
  "query-r06-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mvolume\nWHERE {\n  my:A geo:hasMetricVolume ?mvolume .\n} \n"
  },
  "query-r06-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?msize\nWHERE {\n  my:A geo:hasMetricSize ?msize .\n} \n \n"
  },
  "query-r06-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?length\nWHERE {\n  my:A geo:hasLength ?length .\n} \n"
  },
  "query-r06-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasMetricLength ?mlength .\n} \n \n"
  },
  "query-r06-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?perimeterlength\nWHERE {\n  my:A geo:hasPerimeterLength ?perimeterlength .\n} \n \n"
  },
  "query-r06-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mperimeterlength\nWHERE {\n  my:A geo:hasMetricPerimeterLength ?mperimeterlength .\n} \n \n"
  },
  "query-r06-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?area\nWHERE {\n  my:A geo:hasArea ?area .\n} \n \n"
  },
  "query-r06-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?marea\nWHERE {\n  my:A geo:hasMetricArea ?marea .\n} \n \n"
  },
  "query-r06-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?volume\nWHERE {\n  my:A geo:hasVolume ?volume .\n} \n"
  },
  "query-r07-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  my:A geo:hasGeometry ?geom .\n}\n"
  },
  "query-r07-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?defaultGeom\nWHERE {\n  my:A geo:hasDefaultGeometry ?defaultGeom .\n}\n"
  },
  "query-r07-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?defaultGeom\nWHERE {\n  my:A geo:defaultGeometry ?defaultGeom .\n} \n"
  },
  "query-r07-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasCentroid ?centroid .\n}  \n"
  },
  "query-r07-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?bbox\nWHERE {\n  my:A geo:hasBoundingBox ?bbox .\n}  \n \n"
  },
  "query-r08-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfEquals ?f\n}\n"
  },
  "query-r08-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfDisjoint ?f\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r08-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfIntersects ?f\n  FILTER (?f != my:A)\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r08-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfTouches ?f\n}\n"
  },
  "query-r08-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:E geo:sfCrosses ?f\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r08-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfWithin ?f\n  FILTER (?f != my:B)\n}\n"
  },
  "query-r08-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfContains ?f\n  FILTER (?f != my:A)\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r08-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfOverlaps ?f\n}\n"
  },
  "query-r09-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehEquals ?f\n}\n"
  },
  "query-r09-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehDisjoint ?f\n}\n"
  },
  "query-r09-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehMeet ?f\n}\n"
  },
  "query-r09-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehOverlap ?f\n}\n"
  },
  "query-r09-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehCovers ?f\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r09-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehCoveredBy ?f\n}\n"
  },
  "query-r09-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:F geo:ehInside ?f\n}\n"
  },
  "query-r09-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehContains ?f\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r10-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8eq ?f\n}\n"
  },
  "query-r10-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8dc ?f\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r10-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ec ?f\n}\n"
  },
  "query-r10-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8po ?f\n}\n"
  },
  "query-r10-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8tppi ?f\n}\nORDER BY ?f\nLIMIT 1\n"
  },
  "query-r10-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8tpp ?f\n}\n"
  },
  "query-r10-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:rcc8ntpp ?f\n}\n"
  },
  "query-r10-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ntppi ?f\n}\n"
  },
  "query-r11.rq": {
    "answers": [],
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:Geometry\n}\nORDER BY ?f\n"
  },
  "query-r12.rq": {
    "answers": [],
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:GeometryCollection\n}\nORDER BY ?f\n \n"
  },
  "query-r13-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:dimension ?dimension .\n}\n"
  },
  "query-r13-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?hasSerialization\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSerialization ?hasSerialization .\n}\n"
  },
  "query-r13-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:coordinateDimension ?coordinateDimension .\n}\n"
  },
  "query-r13-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:spatialDimension ?spatialDimension .\n}\n"
  },
  "query-r13-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialResolution\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSpatialResolution ?spatialResolution .\n}\n"
  },
  "query-r13-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mspatialDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasMetricSpatialResolution ?mspatialResolution .\n}\n"
  },
  "query-r13-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialAccuracy\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSpatialAccuracy ?spatialAccuracy .\n}\n"
  },
  "query-r13-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mspatialAccuracy\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasMetricSpatialAccuracy ?mspatialAccuracy .\n}\n"
  },
  "query-r13-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:isEmpty ?isEmpty .\n}\n"
  },
  "query-r13-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:isSimple ?isSimple .\n}\n"
  },
  "query-r14.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?wkt\nWHERE {\n  my:AExactGeom geo:asWKT ?wkt .\n  FILTER (datatype(?wkt) = geo:wktLiteral)\n}\n"
  },
  "query-r15.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:J geo:hasDefaultGeometry ?jGeom .\n  ?jGeom geo:asWKT ?jWKT .\n  my:K geo:hasDefaultGeometry ?kGeom .\n  ?kGeom geo:asWKT ?kWKT .\n  BIND (geof:sfEquals(?jWKT, ?kWKT) as ?sfEquals)\n}\n"
  },
  "query-r16.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asWKT ?lWKT .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lWKT, ?mWKT) as ?sfEquals)\n}\n"
  },
  "query-r17-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asWKT ?iWKT .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asWKT ?hWKT .\n  BIND (geof:sfEquals(?iWKT, ?hWKT) as ?sfEquals)\n}\n"
  },
  "query-r17-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asWKT ?iWKT .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asWKT ?hWKT .\n  BIND (geof:sfEquals(?iWKT, ?hWKT) as ?sfEquals)\n}\n"
  },
  "query-r18.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?wkt\nWHERE {\n  my:AExactGeom geo:asWKT ?wkt\n}\n"
  },
  "query-r19-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?wktt\n} \n"
  },
  "query-r19-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?wktt\n} \n"
  },
  "query-r19-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?wktt\n} \n"
  },
  "query-r19-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?wktt\n} \n"
  },
  "query-r19-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:%%literalrel1%% ?wktt\n} \n"
  },
  "query-r20.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asGML ?gml\n  FILTER(regex(str(?gml), \".*(AbstractCurveSegment|ArcByCenterPoint|CircleByCenterPoint|ArcString|Arc|Circle|ArcStringByBulge|ArcByBulge|Clothoid|GeodesicString|Geodesic|LineStringSegment|LineString|OffsetCurve|SplineCurve|BSpline|Bezier|PolynomialSpline|CubicSpline|Curve|OrientableCurve|CompositeCurve|Ring|LinearRing|OrientableSurface|CompositeSurface|Shell|Surface|Polygon|PolyhedralSurface|TriangulatedSurface|TriangulatedIrrefularNetwork|Point|Solid|CompositeSolid|GeometricComplex|Composite|CompositeCurve|MultiGeometry|MultiCurve|MultiPoint|MultiSolid|MultiSurface|Cone|Cylinder|Sphere|Rectangle|Triangle).*\", \"i\"))\n  FILTER(datatype(?gml) = geo:gmlLiteral)\n}\nORDER BY ?geom\n"
  },
  "query-r21-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asGML ?iGML .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asGML ?hGML .\n  BIND (geof:sfEquals(?iGML, ?hGML) as ?sfEquals)\n}\n"
  },
  "query-r21-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asGML ?iGML .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asGML ?hGML .\n  BIND (geof:sfEquals(?iGML, ?hGML) as ?sfEquals)\n}\n"
  },
  "query-r23.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?gml\nWHERE {\n  my:AExactGeom geo:asGML ?gml\n}\n"
  },
  "query-r25.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asGeoJSON ?geojson\n  FILTER(regex(str(?geojson), \".*(Point|Polygon|LineString|MultiPolygon|MultiLineString|MultiPoint).*\", \"i\"))\n  FILTER(regex(str(?geojson), \"\\{.*\\:\\{.*\\:.*\\}\\}\", \"i\"))\n  FILTER(datatype(?geojson) = geo:geoJSONLiteral)\n}\nORDER BY ?geom \n"
  },
  "query-r26.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asGeoJSON ?lGeoJSON .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lGeoJSON, ?mWKT) as ?sfEquals)\n}\n \n"
  },
  "query-r27-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asGeoJSON ?iGeoJSON .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asGeoJSON ?hGeoJSON .\n  BIND (geof:sfEquals(?iGeoJSON, ?hGeoJSON) as ?sfEquals)\n}\n"
  },
  "query-r27-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asGeoJSON ?iGeoJSON .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asGeoJSON ?hGeoJSON .\n  BIND (geof:sfEquals(?iGeoJSON, ?hGeoJSON) as ?sfEquals)\n}\n"
  },
  "query-r28.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geojson\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?geojson\n}"
  },
  "query-r30.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asKML ?kml\n  FILTER(regex(str(?kml), \".*(Point|Polygon|LineString|LinearRing|MultiGeometry|Model|MultiPolygon|MultiLineString|MultiPoint).*\", \"i\"))\n  FILTER(datatype(?kml) = geo:kmlLiteral)\n}\nORDER BY ?geom \n \n"
  },
  "query-r31.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asKML ?lKML .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lKML, ?mWKT) as ?sfEquals)\n}\n"
  },
  "query-r32-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asKML ?iKML .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asKML ?hKML .\n  BIND (geof:sfEquals(?iKML, ?hKML) as ?sfEquals)\n}\n \n"
  },
  "query-r32-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asKML ?iKML .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asKML ?hKML .\n  BIND (geof:sfEquals(?iKML, ?hKML) as ?sfEquals)\n}\n \n"
  },
  "query-r33.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?kml\nWHERE {\n  my:GExactGeom geo:asKML ?kml\n}"
  },
  "query-r35.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asDggs ?dggs\n  FILTER(regex(str(?dggs), \".*CELLIST \\(.*\\).*\", \"i\"))\n  FILTER(datatype(?dggs) = geo:dggsLiteral)\n}\nORDER BY ?geom \n"
  },
  "query-r37.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?dggs\nWHERE {\n  my:OPointGeom geo:asDGGS ?dggs\n}\n"
  },
  "query-r39-1-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundary(?%%literal1%%) as ?boundary)\n}\n"
  },
  "query-r39-1-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundary(?%%literal1%%) as ?boundary)\n}\n"
  },
  "query-r39-1-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundary(?%%literal1%%) as ?boundary)\n}\n"
  },
  "query-r39-1-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundary(?%%literal1%%) as ?boundary)\n}\n"
  },
  "query-r39-1-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundary(?%%literal1%%) as ?boundary)\n}\n"
  },
  "query-r39-10-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:dimension(?%%literal1%%) as ?dimension)\n} \n \n"
  },
  "query-r39-10-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:dimension(?%%literal1%%) as ?dimension)\n} \n \n"
  },
  "query-r39-10-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:dimension(?%%literal1%%) as ?dimension)\n} \n \n"
  },
  "query-r39-10-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:dimension(?%%literal1%%) as ?dimension)\n} \n \n"
  },
  "query-r39-10-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:dimension(?%%literal1%%) as ?dimension)\n} \n \n"
  },
  "query-r39-11-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-10.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-11.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-12.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-13.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-14.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-15.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-16.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-17.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-18.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-19.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-20.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-21.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-22.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-23.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-24.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-25.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-6.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-7.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-8.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-11-9.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n"
  },
  "query-r39-12-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-10.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-11.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-12.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-13.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-14.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-15.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-16.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-17.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-18.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-19.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-20.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-21.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-22.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-23.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-24.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-25.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-6.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-7.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-8.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-12-9.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n"
  },
  "query-r39-13-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:envelope(?%%literal1%%) as ?envelope)\n}\n"
  },
  "query-r39-13-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:envelope(?%%literal1%%) as ?envelope)\n}\n"
  },
  "query-r39-13-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:envelope(?%%literal1%%) as ?envelope)\n}\n"
  },
  "query-r39-13-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:envelope(?%%literal1%%) as ?envelope)\n}\n"
  },
  "query-r39-13-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:envelope(?%%literal1%%) as ?envelope)\n}\n"
  },
  "query-r39-14-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryType(?%%literal1%%) as ?geometryType)\n}\n"
  },
  "query-r39-14-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryType(?%%literal1%%) as ?geometryType)\n}\n"
  },
  "query-r39-14-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryType(?%%literal1%%) as ?geometryType)\n}\n"
  },
  "query-r39-14-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryType(?%%literal1%%) as ?geometryType)\n}\n"
  },
  "query-r39-14-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryType(?%%literal1%%) as ?geometryType)\n}\n"
  },
  "query-r39-15-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aWKT, ?bGML) as ?intersection)\n}\n"
  },
  "query-r39-15-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aGeoJSON, ?bGML) as ?intersection)\n}\n"
  },
  "query-r39-15-11.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aGeoJSON, ?bKML) as ?intersection)\n}\n"
  },
  "query-r39-15-12.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aGeoJSON, ?bDGGS) as ?intersection)\n}\n"
  },
  "query-r39-15-13.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aKML, ?bWKT) as ?intersection)\n}\n"
  },
  "query-r39-15-14.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aKML, ?bGML) as ?intersection)\n}\n"
  },
  "query-r39-15-15.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aKML, ?bGeoJSON) as ?intersection)\n}\n"
  },
  "query-r39-15-16.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aKML, ?bDGGS) as ?intersection)\n}\n"
  },
  "query-r39-15-17.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aDGGS, ?bWKT) as ?intersection)\n}\n"
  },
  "query-r39-15-18.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aDGGS, ?bGML) as ?intersection)\n}\n"
  },
  "query-r39-15-19.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aDGGS, ?bGeoJSON) as ?intersection)\n}\n"
  },
  "query-r39-15-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aWKT, ?bGeoJSON) as ?intersection)\n}\n"
  },
  "query-r39-15-20.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aDGGS, ?bKML) as ?intersection)\n}\n"
  },
  "query-r39-15-21.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aWKT, ?bWKT) as ?intersection)\n}\n"
  },
  "query-r39-15-22.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aGML, ?bGML) as ?intersection)\n}\n"
  },
  "query-r39-15-23.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aGeoJSON, ?bGeoJSON) as ?intersection)\n}\n"
  },
  "query-r39-15-24.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aKML, ?bKML) as ?intersection)\n}\n"
  },
  "query-r39-15-25.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aDGGS, ?bDGGS) as ?intersection)\n}\n"
  },
  "query-r39-15-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aWKT, ?bKML) as ?intersection)\n}\n"
  },
  "query-r39-15-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aWKT, ?bDGGS) as ?intersection)\n}\n"
  },
  "query-r39-15-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aGML, ?bWKT) as ?intersection)\n}\n"
  },
  "query-r39-15-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aGML, ?bGeoJSON) as ?intersection)\n}\n"
  },
  "query-r39-15-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aGML, ?bKML) as ?intersection)\n}\n"
  },
  "query-r39-15-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aGML, ?bDGGS) as ?intersection)\n}\n"
  },
  "query-r39-15-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aGeoJSON, ?bWKT) as ?intersection)\n}\n"
  },
  "query-r39-16-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:is3D(?%%literal1%%) as ?is3D)\n}\n"
  },
  "query-r39-16-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:is3D(?%%literal1%%) as ?is3D)\n}\n"
  },
  "query-r39-16-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:is3D(?%%literal1%%) as ?is3D)\n}\n"
  },
  "query-r39-16-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:is3D(?%%literal1%%) as ?is3D)\n}\n"
  },
  "query-r39-16-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:is3D(?%%literal1%%) as ?is3D)\n}\n"
  },
  "query-r39-17-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isEmpty(?%%literal1%%) as ?isEmpty)\n}\n \n"
  },
  "query-r39-17-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isEmpty(?%%literal1%%) as ?isEmpty)\n}\n \n"
  },
  "query-r39-17-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isEmpty(?%%literal1%%) as ?isEmpty)\n}\n \n"
  },
  "query-r39-17-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isEmpty(?%%literal1%%) as ?isEmpty)\n}\n \n"
  },
  "query-r39-17-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isEmpty(?%%literal1%%) as ?isEmpty)\n}\n \n"
  },
  "query-r39-18-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isMeasured(?%%literal1%%) as ?isMeasured)\n}\n"
  },
  "query-r39-18-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isMeasured(?%%literal1%%) as ?isMeasured)\n}\n"
  },
  "query-r39-18-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isMeasured(?%%literal1%%) as ?isMeasured)\n}\n"
  },
  "query-r39-18-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isMeasured(?%%literal1%%) as ?isMeasured)\n}\n"
  },
  "query-r39-18-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isMeasured(?%%literal1%%) as ?isMeasured)\n}\n"
  },
  "query-r39-19-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isSimple(?%%literal1%%) as ?isSimple)\n}\n \n \n"
  },
  "query-r39-19-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isSimple(?%%literal1%%) as ?isSimple)\n}\n \n \n"
  },
  "query-r39-19-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isSimple(?%%literal1%%) as ?isSimple)\n}\n \n \n"
  },
  "query-r39-19-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isSimple(?%%literal1%%) as ?isSimple)\n}\n \n \n"
  },
  "query-r39-19-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:isSimple(?%%literal1%%) as ?isSimple)\n}\n \n \n"
  },
  "query-r39-2-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundingCircle(?%%literal1%%) as ?boundingCircle)\n}\n"
  },
  "query-r39-2-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundingCircle(?%%literal1%%) as ?boundingCircle)\n}\n"
  },
  "query-r39-2-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundingCircle(?%%literal1%%) as ?boundingCircle)\n}\n"
  },
  "query-r39-2-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundingCircle(?%%literal1%%) as ?boundingCircle)\n}\n"
  },
  "query-r39-2-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:boundingCircle(?%%literal1%%) as ?boundingCircle)\n}\n"
  },
  "query-r39-20-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:spatialDimension(?%%literal1%%) as ?spatialDimension)\n}\n"
  },
  "query-r39-20-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:spatialDimension(?%%literal1%%) as ?spatialDimension)\n}\n"
  },
  "query-r39-20-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:spatialDimension(?%%literal1%%) as ?spatialDimension)\n}\n"
  },
  "query-r39-20-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:spatialDimension(?%%literal1%%) as ?spatialDimension)\n}\n"
  },
  "query-r39-20-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:spatialDimension(?%%literal1%%) as ?spatialDimension)\n}\n"
  },
  "query-r39-21-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aWKT , ?dGML) as ?symDifference)\n}\n"
  },
  "query-r39-21-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aGeoJSON , ?dGML) as ?symDifference)\n}\n"
  },
  "query-r39-21-11.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aGeoJSON , ?dKML) as ?symDifference)\n}\n"
  },
  "query-r39-21-12.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aGeoJSON , ?dDGGS) as ?symDifference)\n}\n"
  },
  "query-r39-21-13.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aKML , ?dWKT) as ?symDifference)\n}\n"
  },
  "query-r39-21-14.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aKML , ?dGML) as ?symDifference)\n}\n"
  },
  "query-r39-21-15.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aKML , ?dGeoJSON) as ?symDifference)\n}\n"
  },
  "query-r39-21-16.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aKML , ?dDGGS) as ?symDifference)\n}\n"
  },
  "query-r39-21-17.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aDGGS , ?dWKT) as ?symDifference)\n}\n"
  },
  "query-r39-21-18.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aDGGS , ?dGML) as ?symDifference)\n}\n"
  },
  "query-r39-21-19.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aDGGS , ?dGeoJSON) as ?symDifference)\n}\n"
  },
  "query-r39-21-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aWKT , ?dGeoJSON) as ?symDifference)\n}\n"
  },
  "query-r39-21-20.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aDGGS , ?dKML) as ?symDifference)\n}\n"
  },
  "query-r39-21-21.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aWKT , ?dWKT) as ?symDifference)\n}\n"
  },
  "query-r39-21-22.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aGML , ?dGML) as ?symDifference)\n}\n"
  },
  "query-r39-21-23.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aGeoJSON , ?dGeoJSON) as ?symDifference)\n}\n"
  },
  "query-r39-21-24.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aKML , ?dKML) as ?symDifference)\n}\n"
  },
  "query-r39-21-25.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aDGGS , ?dDGGS) as ?symDifference)\n}\n"
  },
  "query-r39-21-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aWKT , ?dKML) as ?symDifference)\n}\n"
  },
  "query-r39-21-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aWKT , ?dDGGS) as ?symDifference)\n}\n"
  },
  "query-r39-21-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aGML , ?dWKT) as ?symDifference)\n}\n"
  },
  "query-r39-21-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aGML , ?dGeoJSON) as ?symDifference)\n}\n"
  },
  "query-r39-21-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aGML , ?dKML) as ?symDifference)\n}\n"
  },
  "query-r39-21-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aGML , ?dDGGS) as ?symDifference)\n}\n"
  },
  "query-r39-21-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aGeoJSON , ?dWKT) as ?symDifference)\n}\n"
  },
  "query-r39-22-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:transform(?%%literal1%%,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n"
  },
  "query-r39-22-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:transform(?%%literal1%%,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n"
  },
  "query-r39-22-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:transform(?%%literal1%%,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n"
  },
  "query-r39-22-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:transform(?%%literal1%%,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n"
  },
  "query-r39-22-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:transform(?%%literal1%%,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n"
  },
  "query-r39-23-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aWKT , ?bGML) as ?union)\n}\n"
  },
  "query-r39-23-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aGeoJSON , ?bGML) as ?union)\n}\n"
  },
  "query-r39-23-11.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aGeoJSON , ?bKML) as ?union)\n}\n"
  },
  "query-r39-23-12.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aGeoJSON , ?bDGGS) as ?union)\n}\n"
  },
  "query-r39-23-13.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aKML , ?bWKT) as ?union)\n}\n"
  },
  "query-r39-23-14.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aKML , ?bGML) as ?union)\n}\n"
  },
  "query-r39-23-15.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aKML , ?bGeoJSON) as ?union)\n}\n"
  },
  "query-r39-23-16.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aKML , ?bDGGS) as ?union)\n}\n"
  },
  "query-r39-23-17.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aDGGS , ?bWKT) as ?union)\n}\n"
  },
  "query-r39-23-18.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aDGGS , ?bGML) as ?union)\n}\n"
  },
  "query-r39-23-19.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aDGGS , ?bGeoJSON) as ?union)\n}\n"
  },
  "query-r39-23-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aWKT , ?bGeoJSON) as ?union)\n}\n"
  },
  "query-r39-23-20.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aDGGS , ?bKML) as ?union)\n}\n"
  },
  "query-r39-23-21.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aWKT , ?bWKT) as ?union)\n}\n"
  },
  "query-r39-23-22.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aGML , ?bGML) as ?union)\n}\n"
  },
  "query-r39-23-23.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aGeoJSON , ?bGeoJSON) as ?union)\n}\n"
  },
  "query-r39-23-24.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aKML , ?bKML) as ?union)\n}\n"
  },
  "query-r39-23-25.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aDGGS , ?bDGGS) as ?union)\n}\n"
  },
  "query-r39-23-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aWKT , ?bKML) as ?union)\n}\n"
  },
  "query-r39-23-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aWKT , ?bDGGS) as ?union)\n}\n"
  },
  "query-r39-23-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aGML , ?bWKT) as ?union)\n}\n"
  },
  "query-r39-23-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aGML , ?bGeoJSON) as ?union)\n}\n"
  },
  "query-r39-23-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aGML , ?bKML) as ?union)\n}\n"
  },
  "query-r39-23-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aGML , ?bDGGS) as ?union)\n}\n"
  },
  "query-r39-23-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aGeoJSON , ?bWKT) as ?union)\n}\n"
  },
  "query-r39-3-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricBuffer(?%%literal1%%, 10.0) as ?mbuffer)\n}\n"
  },
  "query-r39-3-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricBuffer(?%%literal1%%, 10.0) as ?mbuffer)\n}\n"
  },
  "query-r39-3-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricBuffer(?%%literal1%%, 10.0) as ?mbuffer)\n}\n"
  },
  "query-r39-3-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricBuffer(?%%literal1%%, 10.0) as ?mbuffer)\n}\n"
  },
  "query-r39-3-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricBuffer(?%%literal1%%, 10.0) as ?mbuffer)\n}\n"
  },
  "query-r39-4-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:buffer(?%%literal1%%, 10.0, uom:metre) as ?buffer)\n}\n"
  },
  "query-r39-4-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:buffer(?%%literal1%%, 10.0, uom:metre) as ?buffer)\n}\n"
  },
  "query-r39-4-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:buffer(?%%literal1%%, 10.0, uom:metre) as ?buffer)\n}\n"
  },
  "query-r39-4-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:buffer(?%%literal1%%, 10.0, uom:metre) as ?buffer)\n}\n"
  },
  "query-r39-4-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:buffer(?%%literal1%%, 10.0, uom:metre) as ?buffer)\n}\n"
  },
  "query-r39-5-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:centroid(?%%literal1%%) as ?centroid)\n}\n"
  },
  "query-r39-5-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:centroid(?%%literal1%%) as ?centroid)\n}\n"
  },
  "query-r39-5-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:centroid(?%%literal1%%) as ?centroid)\n}\n"
  },
  "query-r39-5-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:centroid(?%%literal1%%) as ?centroid)\n}\n"
  },
  "query-r39-5-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:centroid(?%%literal1%%) as ?centroid)\n}\n"
  },
  "query-r39-6-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:convexHull(?%%literal1%%) as ?convexHull)\n}\n"
  },
  "query-r39-6-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:convexHull(?%%literal1%%) as ?convexHull)\n}\n"
  },
  "query-r39-6-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:convexHull(?%%literal1%%) as ?convexHull)\n}\n"
  },
  "query-r39-6-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:convexHull(?%%literal1%%) as ?convexHull)\n}\n"
  },
  "query-r39-6-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:convexHull(?%%literal1%%) as ?convexHull)\n}\n"
  },
  "query-r39-7-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:concaveHull(?%%literal1%%) as ?concaveHull)\n}\n"
  },
  "query-r39-7-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:concaveHull(?%%literal1%%) as ?concaveHull)\n}\n"
  },
  "query-r39-7-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:concaveHull(?%%literal1%%) as ?concaveHull)\n}\n"
  },
  "query-r39-7-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:concaveHull(?%%literal1%%) as ?concaveHull)\n}\n"
  },
  "query-r39-7-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:concaveHull(?%%literal1%%) as ?concaveHull)\n}\n"
  },
  "query-r39-8-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:coordinateDimension(?%%literal1%%) as ?coordinateDimension)\n}\n"
  },
  "query-r39-8-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:coordinateDimension(?%%literal1%%) as ?coordinateDimension)\n}\n"
  },
  "query-r39-8-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:coordinateDimension(?%%literal1%%) as ?coordinateDimension)\n}\n"
  },
  "query-r39-8-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:coordinateDimension(?%%literal1%%) as ?coordinateDimension)\n}\n"
  },
  "query-r39-8-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:coordinateDimension(?%%literal1%%) as ?coordinateDimension)\n}\n"
  },
  "query-r39-9-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aWKT , ?bGML) as ?difference)\n}\n"
  },
  "query-r39-9-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aGeoJSON , ?bGML) as ?difference)\n}\n"
  },
  "query-r39-9-11.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aGeoJSON , ?bKML) as ?difference)\n}\n"
  },
  "query-r39-9-12.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aGeoJSON , ?bDGGS) as ?difference)\n}\n"
  },
  "query-r39-9-13.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aKML , ?bWKT) as ?difference)\n}\n"
  },
  "query-r39-9-14.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aKML , ?bGML) as ?difference)\n}\n"
  },
  "query-r39-9-15.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aKML , ?bGeoJSON) as ?difference)\n}\n"
  },
  "query-r39-9-16.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aKML , ?bDGGS) as ?difference)\n}\n"
  },
  "query-r39-9-17.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aDGGS , ?bWKT) as ?difference)\n}\n"
  },
  "query-r39-9-18.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aDGGS , ?bGML) as ?difference)\n}\n"
  },
  "query-r39-9-19.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aDGGS , ?bGeoJSON) as ?difference)\n}\n"
  },
  "query-r39-9-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aWKT , ?bGeoJSON) as ?difference)\n}\n"
  },
  "query-r39-9-20.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aDGGS , ?bKML) as ?difference)\n}\n"
  },
  "query-r39-9-21.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aWKT , ?bWKT) as ?difference)\n}\n"
  },
  "query-r39-9-22.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aGML , ?bGML) as ?difference)\n}\n"
  },
  "query-r39-9-23.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aGeoJSON , ?bGeoJSON) as ?difference)\n}\n"
  },
  "query-r39-9-24.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aKML , ?bKML) as ?difference)\n}\n"
  },
  "query-r39-9-25.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aDGGS , ?bDGGS) as ?difference)\n}\n"
  },
  "query-r39-9-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aWKT , ?bKML) as ?difference)\n}\n"
  },
  "query-r39-9-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aWKT , ?bDGGS) as ?difference)\n}\n"
  },
  "query-r39-9-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aGML , ?bWKT) as ?difference)\n}\n"
  },
  "query-r39-9-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aGML , ?bGeoJSON) as ?difference)\n}\n"
  },
  "query-r39-9-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aGML , ?bKML) as ?difference)\n}\n"
  },
  "query-r39-9-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aGML , ?bDGGS) as ?difference)\n}\n"
  },
  "query-r39-9-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aGeoJSON , ?bWKT) as ?difference)\n}\n"
  },
  "query-r40-1-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricLength(?%%literal1%%) as ?mlength)\n} \n"
  },
  "query-r40-1-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricLength(?%%literal1%%) as ?mlength)\n} \n"
  },
  "query-r40-1-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricLength(?%%literal1%%) as ?mlength)\n} \n"
  },
  "query-r40-1-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricLength(?%%literal1%%) as ?mlength)\n} \n"
  },
  "query-r40-1-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricLength(?%%literal1%%) as ?mlength)\n} \n"
  },
  "query-r40-10-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxZ(?%%literal1%%) AS ?maxZ)\n}\n"
  },
  "query-r40-10-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxZ(?%%literal1%%) AS ?maxZ)\n}\n"
  },
  "query-r40-10-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxZ(?%%literal1%%) AS ?maxZ)\n}\n"
  },
  "query-r40-10-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxZ(?%%literal1%%) AS ?maxZ)\n}\n"
  },
  "query-r40-10-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxZ(?%%literal1%%) AS ?maxZ)\n}\n"
  },
  "query-r40-11-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minX(?%%literal1%%) AS ?minX)\n}\n"
  },
  "query-r40-11-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minX(?%%literal1%%) AS ?minX)\n}\n"
  },
  "query-r40-11-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minX(?%%literal1%%) AS ?minX)\n}\n"
  },
  "query-r40-11-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minX(?%%literal1%%) AS ?minX)\n}\n"
  },
  "query-r40-11-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minX(?%%literal1%%) AS ?minX)\n}\n"
  },
  "query-r40-12-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minY(?%%literal1%%) AS ?minY)\n}\n"
  },
  "query-r40-12-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minY(?%%literal1%%) AS ?minY)\n}\n"
  },
  "query-r40-12-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minY(?%%literal1%%) AS ?minY)\n}\n"
  },
  "query-r40-12-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minY(?%%literal1%%) AS ?minY)\n}\n"
  },
  "query-r40-12-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minY(?%%literal1%%) AS ?minY)\n}\n"
  },
  "query-r40-13-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minZ(?%%literal1%%) AS ?minZ)\n}\n"
  },
  "query-r40-13-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minZ(?%%literal1%%) AS ?minZ)\n}\n"
  },
  "query-r40-13-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minZ(?%%literal1%%) AS ?minZ)\n}\n"
  },
  "query-r40-13-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minZ(?%%literal1%%) AS ?minZ)\n}\n"
  },
  "query-r40-13-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:minZ(?%%literal1%%) AS ?minZ)\n}\n"
  },
  "query-r40-14-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:numGeometries(?%%literal1%%) as ?numGeometries)\n} \n"
  },
  "query-r40-14-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:numGeometries(?%%literal1%%) as ?numGeometries)\n} \n"
  },
  "query-r40-14-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:numGeometries(?%%literal1%%) as ?numGeometries)\n} \n"
  },
  "query-r40-14-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:numGeometries(?%%literal1%%) as ?numGeometries)\n} \n"
  },
  "query-r40-14-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:numGeometries(?%%literal1%%) as ?numGeometries)\n} \n"
  },
  "query-r40-2-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:length(?%%literal1%%) as ?length)\n} \n"
  },
  "query-r40-2-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:length(?%%literal1%%) as ?length)\n} \n"
  },
  "query-r40-2-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:length(?%%literal1%%) as ?length)\n} \n"
  },
  "query-r40-2-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:length(?%%literal1%%) as ?length)\n} \n"
  },
  "query-r40-2-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:length(?%%literal1%%) as ?length)\n} \n"
  },
  "query-r40-3-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricPerimeter(?%%literal1%%) as ?mperimeter)\n} \n"
  },
  "query-r40-3-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricPerimeter(?%%literal1%%) as ?mperimeter)\n} \n"
  },
  "query-r40-3-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricPerimeter(?%%literal1%%) as ?mperimeter)\n} \n"
  },
  "query-r40-3-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricPerimeter(?%%literal1%%) as ?mperimeter)\n} \n"
  },
  "query-r40-3-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricPerimeter(?%%literal1%%) as ?mperimeter)\n} \n"
  },
  "query-r40-4-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:perimeter(?%%literal1%%) as ?perimeter)\n} \n"
  },
  "query-r40-4-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:perimeter(?%%literal1%%) as ?perimeter)\n} \n"
  },
  "query-r40-4-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:perimeter(?%%literal1%%) as ?perimeter)\n} \n"
  },
  "query-r40-4-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:perimeter(?%%literal1%%) as ?perimeter)\n} \n"
  },
  "query-r40-4-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:perimeter(?%%literal1%%) as ?perimeter)\n} \n"
  },
  "query-r40-5-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricArea(?%%literal1%%) as ?marea)\n} \n"
  },
  "query-r40-5-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricArea(?%%literal1%%) as ?marea)\n} \n"
  },
  "query-r40-5-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricArea(?%%literal1%%) as ?marea)\n} \n"
  },
  "query-r40-5-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricArea(?%%literal1%%) as ?marea)\n} \n"
  },
  "query-r40-5-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:metricArea(?%%literal1%%) as ?marea)\n} \n"
  },
  "query-r40-6-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:area(?%%literal1%%) as ?area)\n}\n"
  },
  "query-r40-6-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:area(?%%literal1%%) as ?area)\n}\n"
  },
  "query-r40-6-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:area(?%%literal1%%) as ?area)\n}\n"
  },
  "query-r40-6-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:area(?%%literal1%%) as ?area)\n}\n"
  },
  "query-r40-6-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:area(?%%literal1%%) as ?area)\n}\n"
  },
  "query-r40-7-1.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryN(?%%literal1%%,1) as ?geometryN)\n} \n"
  },
  "query-r40-7-2.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryN(?%%literal1%%,1) as ?geometryN)\n} \n"
  },
  "query-r40-7-3.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryN(?%%literal1%%,1) as ?geometryN)\n} \n"
  },
  "query-r40-7-4.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryN(?%%literal1%%,1) as ?geometryN)\n} \n"
  },
  "query-r40-7-5.rq": {
    "answers": [],
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:geometryN(?%%literal1%%,1) as ?geometryN)\n} \n"
  },
  "query-r40-8-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxX(?%%literal1%%) AS ?maxX)\n}\n"
  },
  "query-r40-8-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxX(?%%literal1%%) AS ?maxX)\n}\n"
  },
  "query-r40-8-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxX(?%%literal1%%) AS ?maxX)\n}\n"
  },
  "query-r40-8-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxX(?%%literal1%%) AS ?maxX)\n}\n"
  },
  "query-r40-8-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxX(?%%literal1%%) AS ?maxX)\n}\n"
  },
  "query-r40-9-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxY(?%%literal1%%) AS ?maxY)\n}\n"
  },
  "query-r40-9-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxY(?%%literal1%%) AS ?maxY)\n}\n"
  },
  "query-r40-9-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxY(?%%literal1%%) AS ?maxY)\n}\n"
  },
  "query-r40-9-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxY(?%%literal1%%) AS ?maxY)\n}\n"
  },
  "query-r40-9-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom %%literalrel1%% ?%%literal1%% .\n  BIND(geof:maxY(?%%literal1%%) AS ?maxY)\n}\n"
  },
  "query-r41-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:getSRID(?%%literal1%%) as ?srid)\n}\n"
  },
  "query-r41-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:getSRID(?%%literal1%%) as ?srid)\n}\n"
  },
  "query-r41-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:getSRID(?%%literal1%%) as ?srid)\n}\n"
  },
  "query-r41-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:getSRID(?%%literal1%%) as ?srid)\n}\n"
  },
  "query-r41-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom %%literalrel1%% ?%%literal1%% .\n  BIND (geof:getSRID(?%%literal1%%) as ?srid)\n}\n"
  },
  "query-r42-1-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?%%literal1%%) AS ?bbox)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-1-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?%%literal1%%) AS ?bbox)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-1-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?%%literal1%%) AS ?bbox)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-1-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?%%literal1%%) AS ?bbox)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-1-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?%%literal1%%) AS ?bbox)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-2-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?%%literal1%%) AS ?bcircle)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-2-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?%%literal1%%) AS ?bcircle)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-2-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?%%literal1%%) AS ?bcircle)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-2-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?%%literal1%%) AS ?bcircle)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-2-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?%%literal1%%) AS ?bcircle)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-3-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?%%literal1%%) AS ?centroid)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-3-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?%%literal1%%) AS ?centroid)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-3-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?%%literal1%%) AS ?centroid)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-3-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?%%literal1%%) AS ?centroid)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-3-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?%%literal1%%) AS ?centroid)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-4-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?%%literal1%%) AS ?concavehull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-4-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?%%literal1%%) AS ?concavehull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-4-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?%%literal1%%) AS ?concavehull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-4-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?%%literal1%%) AS ?concavehull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-4-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?%%literal1%%) AS ?concavehull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-5-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?%%literal1%%) AS ?convexhull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-5-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?%%literal1%%) AS ?convexhull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-5-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?%%literal1%%) AS ?convexhull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-5-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?%%literal1%%) AS ?convexhull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-5-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?%%literal1%%) AS ?convexhull)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-6-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?%%literal1%%) AS ?union)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-6-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?%%literal1%%) AS ?union)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-6-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?%%literal1%%) AS ?union)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-6-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?%%literal1%%) AS ?union)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r42-6-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?%%literal1%%) AS ?union)\nWHERE {\n  ?geom %%literalrel1%% ?%%literal1%% .\n}\nGROUP BY ?%%literal1%%\n"
  },
  "query-r43-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-10.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-11.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-12.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-13.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-14.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-15.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-16.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-17.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-18.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-19.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-20.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-21.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-22.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-23.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-24.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-25.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r43-9.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n"
  },
  "query-r44-1-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:sfEquals(?a%%literal1%%, ?a%%literal1%%) as ?sfEquals)\n}\n"
  },
  "query-r44-1-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:sfEquals(?a%%literal1%%, ?a%%literal1%%) as ?sfEquals)\n}\n"
  },
  "query-r44-1-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:sfEquals(?a%%literal1%%, ?a%%literal1%%) as ?sfEquals)\n}\n"
  },
  "query-r44-1-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:sfEquals(?a%%literal1%%, ?a%%literal1%%) as ?sfEquals)\n}\n"
  },
  "query-r44-1-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:sfEquals(?a%%literal1%%, ?a%%literal1%%) as ?sfEquals)\n}\n"
  },
  "query-r44-2-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cWKT, ?fGML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fGML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fKML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fDGGS) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cKML, ?fWKT) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cKML, ?fGML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cKML, ?fGeoJSON) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cKML, ?fDGGS) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cDGGS, ?fWKT) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cDGGS, ?fGML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cDGGS, ?fGeoJSON) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cWKT, ?fGeoJSON) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cDGGS, ?fKML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cWKT, ?fWKT) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cGML, ?fGML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fGeoJSON) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cKML, ?fKML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cDGGS, ?fDGGS) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cWKT, ?fKML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cWKT, ?fDGGS) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cGML, ?fWKT) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cGML, ?fGeoJSON) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cGML, ?fKML) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cGML, ?fDGGS) as ?sfDisjoint)\n}\n"
  },
  "query-r44-2-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fWKT) as ?sfDisjoint)\n}\n"
  },
  "query-r44-3-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aWKT, ?dGML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dGML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dKML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dDGGS) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aKML, ?dWKT) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aKML, ?dGML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aKML, ?dGeoJSON) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aKML, ?dDGGS) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aDGGS, ?dWKT) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aDGGS, ?dGML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aDGGS, ?dGeoJSON) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aWKT, ?dGeoJSON) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aDGGS, ?dKML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aWKT, ?dWKT) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aGML, ?dGML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dGeoJSON) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aKML, ?dKML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aDGGS, ?dDGGS) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aWKT, ?dKML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aWKT, ?dDGGS) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aGML, ?dWKT) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aGML, ?dGeoJSON) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aGML, ?dKML) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aGML, ?dDGGS) as ?sfIntersects)\n}\n"
  },
  "query-r44-3-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"intersects\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"intersects\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dWKT) as ?sfIntersects)\n}\n"
  },
  "query-r44-4-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aWKT, ?cGML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aGeoJSON, ?cGML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aGeoJSON, ?cKML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aGeoJSON, ?cDGGS) as ?sfTouches)\n}\n"
  },
  "query-r44-4-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aKML, ?cWKT) as ?sfTouches)\n}\n"
  },
  "query-r44-4-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aKML, ?cGML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aKML, ?cGeoJSON) as ?sfTouches)\n}\n"
  },
  "query-r44-4-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aKML, ?cDGGS) as ?sfTouches)\n}\n"
  },
  "query-r44-4-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aDGGS, ?cWKT) as ?sfTouches)\n}\n"
  },
  "query-r44-4-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aDGGS, ?cGML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aDGGS, ?cGeoJSON) as ?sfTouches)\n}\n"
  },
  "query-r44-4-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aWKT, ?cGeoJSON) as ?sfTouches)\n}\n"
  },
  "query-r44-4-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aDGGS, ?cKML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aWKT, ?cWKT) as ?sfTouches)\n}\n"
  },
  "query-r44-4-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aGML, ?cGML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aGeoJSON, ?cGeoJSON) as ?sfTouches)\n}\n"
  },
  "query-r44-4-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aKML, ?cKML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aDGGS, ?cDGGS) as ?sfTouches)\n}\n"
  },
  "query-r44-4-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aWKT, ?cKML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aWKT, ?cDGGS) as ?sfTouches)\n}\n"
  },
  "query-r44-4-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aGML, ?cWKT) as ?sfTouches)\n}\n"
  },
  "query-r44-4-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aGML, ?cGeoJSON) as ?sfTouches)\n}\n"
  },
  "query-r44-4-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aGML, ?cKML) as ?sfTouches)\n}\n"
  },
  "query-r44-4-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aGML, ?cDGGS) as ?sfTouches)\n}\n"
  },
  "query-r44-4-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"touches\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"touches\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aGeoJSON, ?cWKT) as ?sfTouches)\n}\n"
  },
  "query-r44-5-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eWKT, ?aGML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aGML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aKML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aDGGS) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eKML, ?aWKT) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eKML, ?aGML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eKML, ?aGeoJSON) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eKML, ?aDGGS) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eDGGS, ?aWKT) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eDGGS, ?aGML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eDGGS, ?aGeoJSON) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eWKT, ?aGeoJSON) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eDGGS, ?aKML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eWKT, ?aWKT) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eGML, ?aGML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aGeoJSON) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eKML, ?aKML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eDGGS, ?aDGGS) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eWKT, ?aKML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eWKT, ?aDGGS) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eGML, ?aWKT) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eGML, ?aGeoJSON) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eGML, ?aKML) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eGML, ?aDGGS) as ?sfCrosses)\n}\n"
  },
  "query-r44-5-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"crosses\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"crosses\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aWKT) as ?sfCrosses)\n}\n"
  },
  "query-r44-6-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bWKT, ?aGML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bGeoJSON, ?aGML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bGeoJSON, ?aKML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bGeoJSON, ?aDGGS) as ?sfWithin)\n}\n"
  },
  "query-r44-6-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bKML, ?aWKT) as ?sfWithin)\n}\n"
  },
  "query-r44-6-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bKML, ?aGML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bKML, ?aGeoJSON) as ?sfWithin)\n}\n"
  },
  "query-r44-6-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bKML, ?aDGGS) as ?sfWithin)\n}\n"
  },
  "query-r44-6-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bDGGS, ?aWKT) as ?sfWithin)\n}\n"
  },
  "query-r44-6-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bDGGS, ?aGML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bDGGS, ?aGeoJSON) as ?sfWithin)\n}\n"
  },
  "query-r44-6-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bWKT, ?aGeoJSON) as ?sfWithin)\n}\n"
  },
  "query-r44-6-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bDGGS, ?aKML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bWKT, ?aWKT) as ?sfWithin)\n}\n"
  },
  "query-r44-6-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bGML, ?aGML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bGeoJSON, ?aGeoJSON) as ?sfWithin)\n}\n"
  },
  "query-r44-6-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bKML, ?aKML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bDGGS, ?aDGGS) as ?sfWithin)\n}\n"
  },
  "query-r44-6-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bWKT, ?aKML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bWKT, ?aDGGS) as ?sfWithin)\n}\n"
  },
  "query-r44-6-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bGML, ?aWKT) as ?sfWithin)\n}\n"
  },
  "query-r44-6-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bGML, ?aGeoJSON) as ?sfWithin)\n}\n"
  },
  "query-r44-6-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bGML, ?aKML) as ?sfWithin)\n}\n"
  },
  "query-r44-6-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bGML, ?aDGGS) as ?sfWithin)\n}\n"
  },
  "query-r44-6-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"within\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"within\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bGeoJSON, ?aWKT) as ?sfWithin)\n}\n"
  },
  "query-r44-7-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aWKT, ?fGML) as ?sfContains)\n}\n"
  },
  "query-r44-7-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aGeoJSON, ?fGML) as ?sfContains)\n}\n"
  },
  "query-r44-7-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aGeoJSON, ?fKML) as ?sfContains)\n}\n"
  },
  "query-r44-7-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aGeoJSON, ?fDGGS) as ?sfContains)\n}\n"
  },
  "query-r44-7-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aKML, ?fWKT) as ?sfContains)\n}\n"
  },
  "query-r44-7-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aKML, ?fGML) as ?sfContains)\n}\n"
  },
  "query-r44-7-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aKML, ?fGeoJSON) as ?sfContains)\n}\n"
  },
  "query-r44-7-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aKML, ?fDGGS) as ?sfContains)\n}\n"
  },
  "query-r44-7-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aDGGS, ?fWKT) as ?sfContains)\n}\n"
  },
  "query-r44-7-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aDGGS, ?fGML) as ?sfContains)\n}\n"
  },
  "query-r44-7-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aDGGS, ?fGeoJSON) as ?sfContains)\n}\n"
  },
  "query-r44-7-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aWKT, ?fGeoJSON) as ?sfContains)\n}\n"
  },
  "query-r44-7-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aDGGS, ?fKML) as ?sfContains)\n}\n"
  },
  "query-r44-7-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aWKT, ?fWKT) as ?sfContains)\n}\n"
  },
  "query-r44-7-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aGML, ?fGML) as ?sfContains)\n}\n"
  },
  "query-r44-7-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aGeoJSON, ?fGeoJSON) as ?sfContains)\n}\n"
  },
  "query-r44-7-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aKML, ?fKML) as ?sfContains)\n}\n"
  },
  "query-r44-7-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aDGGS, ?fDGGS) as ?sfContains)\n}\n"
  },
  "query-r44-7-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aWKT, ?fKML) as ?sfContains)\n}\n"
  },
  "query-r44-7-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aWKT, ?fDGGS) as ?sfContains)\n}\n"
  },
  "query-r44-7-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aGML, ?fWKT) as ?sfContains)\n}\n"
  },
  "query-r44-7-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aGML, ?fGeoJSON) as ?sfContains)\n}\n"
  },
  "query-r44-7-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aGML, ?fKML) as ?sfContains)\n}\n"
  },
  "query-r44-7-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aGML, ?fDGGS) as ?sfContains)\n}\n"
  },
  "query-r44-7-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aGeoJSON, ?fWKT) as ?sfContains)\n}\n"
  },
  "query-r44-8-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aWKT, ?dGML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dGML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dKML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dDGGS) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aKML, ?dWKT) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aKML, ?dGML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aKML, ?dGeoJSON) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aKML, ?dDGGS) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aDGGS, ?dWKT) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aDGGS, ?dGML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aDGGS, ?dGeoJSON) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aWKT, ?dGeoJSON) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aDGGS, ?dKML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aWKT, ?dWKT) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aGML, ?dGML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dGeoJSON) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aKML, ?dKML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aDGGS, ?dDGGS) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aWKT, ?dKML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aWKT, ?dDGGS) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aGML, ?dWKT) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aGML, ?dGeoJSON) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aGML, ?dKML) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aGML, ?dDGGS) as ?sfOverlaps)\n}\n"
  },
  "query-r44-8-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlaps\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlaps\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dWKT) as ?sfOverlaps)\n}\n"
  },
  "query-r45-1-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:ehEquals(?a%%literal1%%, ?a%%literal1%%) as ?ehEquals)\n}\n"
  },
  "query-r45-1-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:ehEquals(?a%%literal1%%, ?a%%literal1%%) as ?ehEquals)\n}\n"
  },
  "query-r45-1-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:ehEquals(?a%%literal1%%, ?a%%literal1%%) as ?ehEquals)\n}\n"
  },
  "query-r45-1-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:ehEquals(?a%%literal1%%, ?a%%literal1%%) as ?ehEquals)\n}\n"
  },
  "query-r45-1-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:ehEquals(?a%%literal1%%, ?a%%literal1%%) as ?ehEquals)\n}\n"
  },
  "query-r45-2-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bWKT, ?cGML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cGML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cKML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cDGGS) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bKML, ?cWKT) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bKML, ?cGML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bKML, ?cGeoJSON) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bKML, ?cDGGS) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bDGGS, ?cWKT) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bDGGS, ?cGML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bDGGS, ?cGeoJSON) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bWKT, ?cGeoJSON) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bDGGS, ?cKML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bWKT, ?cWKT) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bGML, ?cGML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cGeoJSON) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bKML, ?cKML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bDGGS, ?cDGGS) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bWKT, ?cKML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bWKT, ?cDGGS) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bGML, ?cWKT) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bGML, ?cGeoJSON) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bGML, ?cKML) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bGML, ?cDGGS) as ?ehDisjoint)\n}\n"
  },
  "query-r45-2-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disjoint\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disjoint\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cWKT) as ?ehDisjoint)\n}\n"
  },
  "query-r45-3-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aWKT, ?cGML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aGeoJSON, ?cGML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aGeoJSON, ?cKML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aGeoJSON, ?cDGGS) as ?ehMeet)\n}\n"
  },
  "query-r45-3-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aKML, ?cWKT) as ?ehMeet)\n}\n"
  },
  "query-r45-3-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aKML, ?cGML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aKML, ?cGeoJSON) as ?ehMeet)\n}\n"
  },
  "query-r45-3-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aKML, ?cDGGS) as ?ehMeet)\n}\n"
  },
  "query-r45-3-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aDGGS, ?cWKT) as ?ehMeet)\n}\n"
  },
  "query-r45-3-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aDGGS, ?cGML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aDGGS, ?cGeoJSON) as ?ehMeet)\n}\n"
  },
  "query-r45-3-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aWKT, ?cGeoJSON) as ?ehMeet)\n}\n"
  },
  "query-r45-3-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aDGGS, ?cKML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aWKT, ?cWKT) as ?ehMeet)\n}\n"
  },
  "query-r45-3-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aGML, ?cGML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aGeoJSON, ?cGeoJSON) as ?ehMeet)\n}\n"
  },
  "query-r45-3-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aKML, ?cKML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aDGGS, ?cDGGS) as ?ehMeet)\n}\n"
  },
  "query-r45-3-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aWKT, ?cKML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aWKT, ?cDGGS) as ?ehMeet)\n}\n"
  },
  "query-r45-3-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aGML, ?cWKT) as ?ehMeet)\n}\n"
  },
  "query-r45-3-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aGML, ?cGeoJSON) as ?ehMeet)\n}\n"
  },
  "query-r45-3-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aGML, ?cKML) as ?ehMeet)\n}\n"
  },
  "query-r45-3-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aGML, ?cDGGS) as ?ehMeet)\n}\n"
  },
  "query-r45-3-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"meet\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"meet\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aGeoJSON, ?cWKT) as ?ehMeet)\n}\n"
  },
  "query-r45-4-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n"
  },
  "query-r45-4-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"overlap\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"overlap\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n"
  },
  "query-r45-5-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aWKT, ?bGML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aGeoJSON, ?bGML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aGeoJSON, ?bKML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aGeoJSON, ?bDGGS) as ?ehCovers)\n}\n"
  },
  "query-r45-5-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aKML, ?bWKT) as ?ehCovers)\n}\n"
  },
  "query-r45-5-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aKML, ?bGML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aKML, ?bGeoJSON) as ?ehCovers)\n}\n"
  },
  "query-r45-5-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aKML, ?bDGGS) as ?ehCovers)\n}\n"
  },
  "query-r45-5-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aDGGS, ?bWKT) as ?ehCovers)\n}\n"
  },
  "query-r45-5-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aDGGS, ?bGML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aDGGS, ?bGeoJSON) as ?ehCovers)\n}\n"
  },
  "query-r45-5-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aWKT, ?bGeoJSON) as ?ehCovers)\n}\n"
  },
  "query-r45-5-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aDGGS, ?bKML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aWKT, ?bWKT) as ?ehCovers)\n}\n"
  },
  "query-r45-5-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aGML, ?bGML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aGeoJSON, ?bGeoJSON) as ?ehCovers)\n}\n"
  },
  "query-r45-5-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aKML, ?bKML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aDGGS, ?bDGGS) as ?ehCovers)\n}\n"
  },
  "query-r45-5-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aWKT, ?bKML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aWKT, ?bDGGS) as ?ehCovers)\n}\n"
  },
  "query-r45-5-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aGML, ?bWKT) as ?ehCovers)\n}\n"
  },
  "query-r45-5-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aGML, ?bGeoJSON) as ?ehCovers)\n}\n"
  },
  "query-r45-5-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aGML, ?bKML) as ?ehCovers)\n}\n"
  },
  "query-r45-5-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aGML, ?bDGGS) as ?ehCovers)\n}\n"
  },
  "query-r45-5-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"covers\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"covers\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aGeoJSON, ?bWKT) as ?ehCovers)\n}\n"
  },
  "query-r45-6-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bWKT, ?aGML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aGML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aKML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aDGGS) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bKML, ?aWKT) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bKML, ?aGML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bKML, ?aGeoJSON) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bKML, ?aDGGS) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aWKT) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aGML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aGeoJSON) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bWKT, ?aGeoJSON) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aKML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bWKT, ?aWKT) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bGML, ?aGML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aGeoJSON) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bKML, ?aKML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aDGGS) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bWKT, ?aKML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bWKT, ?aDGGS) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bGML, ?aWKT) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bGML, ?aGeoJSON) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bGML, ?aKML) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bGML, ?aDGGS) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-6-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"coveredBy\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"coveredBy\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aWKT) as ?ehCoveredBy)\n}\n"
  },
  "query-r45-7-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fWKT, ?aGML) as ?ehInside)\n}\n"
  },
  "query-r45-7-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fGeoJSON, ?aGML) as ?ehInside)\n}\n"
  },
  "query-r45-7-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fGeoJSON, ?aKML) as ?ehInside)\n}\n"
  },
  "query-r45-7-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fGeoJSON, ?aDGGS) as ?ehInside)\n}\n"
  },
  "query-r45-7-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fKML, ?aWKT) as ?ehInside)\n}\n"
  },
  "query-r45-7-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fKML, ?aGML) as ?ehInside)\n}\n"
  },
  "query-r45-7-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fKML, ?aGeoJSON) as ?ehInside)\n}\n"
  },
  "query-r45-7-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fKML, ?aDGGS) as ?ehInside)\n}\n"
  },
  "query-r45-7-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fDGGS, ?aWKT) as ?ehInside)\n}\n"
  },
  "query-r45-7-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fDGGS, ?aGML) as ?ehInside)\n}\n"
  },
  "query-r45-7-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fDGGS, ?aGeoJSON) as ?ehInside)\n}\n"
  },
  "query-r45-7-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fWKT, ?aGeoJSON) as ?ehInside)\n}\n"
  },
  "query-r45-7-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fDGGS, ?aKML) as ?ehInside)\n}\n"
  },
  "query-r45-7-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fWKT, ?aWKT) as ?ehInside)\n}\n"
  },
  "query-r45-7-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fGML, ?aGML) as ?ehInside)\n}\n"
  },
  "query-r45-7-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fGeoJSON, ?aGeoJSON) as ?ehInside)\n}\n"
  },
  "query-r45-7-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fKML, ?aKML) as ?ehInside)\n}\n"
  },
  "query-r45-7-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fDGGS, ?aDGGS) as ?ehInside)\n}\n"
  },
  "query-r45-7-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fWKT, ?aKML) as ?ehInside)\n}\n"
  },
  "query-r45-7-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fWKT, ?aDGGS) as ?ehInside)\n}\n"
  },
  "query-r45-7-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fGML, ?aWKT) as ?ehInside)\n}\n"
  },
  "query-r45-7-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fGML, ?aGeoJSON) as ?ehInside)\n}\n"
  },
  "query-r45-7-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fGML, ?aKML) as ?ehInside)\n}\n"
  },
  "query-r45-7-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fGML, ?aDGGS) as ?ehInside)\n}\n"
  },
  "query-r45-7-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"inside\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"inside\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fGeoJSON, ?aWKT) as ?ehInside)\n}\n"
  },
  "query-r45-8-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aWKT, ?fGML) as ?ehContains)\n}\n"
  },
  "query-r45-8-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aGeoJSON, ?fGML) as ?ehContains)\n}\n"
  },
  "query-r45-8-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aGeoJSON, ?fKML) as ?ehContains)\n}\n"
  },
  "query-r45-8-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aGeoJSON, ?fDGGS) as ?ehContains)\n}\n"
  },
  "query-r45-8-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aKML, ?fWKT) as ?ehContains)\n}\n"
  },
  "query-r45-8-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aKML, ?fGML) as ?ehContains)\n}\n"
  },
  "query-r45-8-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aKML, ?fGeoJSON) as ?ehContains)\n}\n"
  },
  "query-r45-8-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aKML, ?fDGGS) as ?ehContains)\n}\n"
  },
  "query-r45-8-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aDGGS, ?fWKT) as ?ehContains)\n}\n"
  },
  "query-r45-8-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aDGGS, ?fGML) as ?ehContains)\n}\n"
  },
  "query-r45-8-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aDGGS, ?fGeoJSON) as ?ehContains)\n}\n"
  },
  "query-r45-8-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aWKT, ?fGeoJSON) as ?ehContains)\n}\n"
  },
  "query-r45-8-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aDGGS, ?fKML) as ?ehContains)\n}\n"
  },
  "query-r45-8-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aWKT, ?fWKT) as ?ehContains)\n}\n"
  },
  "query-r45-8-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aGML, ?fGML) as ?ehContains)\n}\n"
  },
  "query-r45-8-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aGeoJSON, ?fGeoJSON) as ?ehContains)\n}\n"
  },
  "query-r45-8-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aKML, ?fKML) as ?ehContains)\n}\n"
  },
  "query-r45-8-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aDGGS, ?fDGGS) as ?ehContains)\n}\n"
  },
  "query-r45-8-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aWKT, ?fKML) as ?ehContains)\n}\n"
  },
  "query-r45-8-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aWKT, ?fDGGS) as ?ehContains)\n}\n"
  },
  "query-r45-8-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aGML, ?fWKT) as ?ehContains)\n}\n"
  },
  "query-r45-8-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aGML, ?fGeoJSON) as ?ehContains)\n}\n"
  },
  "query-r45-8-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aGML, ?fKML) as ?ehContains)\n}\n"
  },
  "query-r45-8-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aGML, ?fDGGS) as ?ehContains)\n}\n"
  },
  "query-r45-8-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"contains\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"contains\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aGeoJSON, ?fWKT) as ?ehContains)\n}\n"
  },
  "query-r46-1-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:rcc8eq(?a%%literal1%%, ?a%%literal1%%) as ?rcc8eq)\n}\n"
  },
  "query-r46-1-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:rcc8eq(?a%%literal1%%, ?a%%literal1%%) as ?rcc8eq)\n}\n"
  },
  "query-r46-1-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:rcc8eq(?a%%literal1%%, ?a%%literal1%%) as ?rcc8eq)\n}\n"
  },
  "query-r46-1-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:rcc8eq(?a%%literal1%%, ?a%%literal1%%) as ?rcc8eq)\n}\n"
  },
  "query-r46-1-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom %%literalrel1%% ?a%%literal1%% .\n  BIND (geof:rcc8eq(?a%%literal1%%, ?a%%literal1%%) as ?rcc8eq)\n}\n"
  },
  "query-r46-2-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bWKT, ?cGML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cGML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cKML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cDGGS) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bKML, ?cWKT) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bKML, ?cGML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bKML, ?cGeoJSON) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bKML, ?cDGGS) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bDGGS, ?cWKT) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bDGGS, ?cGML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bDGGS, ?cGeoJSON) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bWKT, ?cGeoJSON) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bDGGS, ?cKML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bWKT, ?cWKT) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bGML, ?cGML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cGeoJSON) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bKML, ?cKML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bDGGS, ?cDGGS) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bWKT, ?cKML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bWKT, ?cDGGS) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bGML, ?cWKT) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bGML, ?cGeoJSON) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bGML, ?cKML) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bGML, ?cDGGS) as ?rcc8dc)\n}\n"
  },
  "query-r46-2-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"disconnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"disconnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cWKT) as ?rcc8dc)\n}\n"
  },
  "query-r46-3-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aWKT, ?cGML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cGML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cKML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cDGGS) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aKML, ?cWKT) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aKML, ?cGML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aKML, ?cGeoJSON) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aKML, ?cDGGS) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aDGGS, ?cWKT) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aDGGS, ?cGML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aDGGS, ?cGeoJSON) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aWKT, ?cGeoJSON) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aDGGS, ?cKML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aWKT, ?cWKT) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aGML, ?cGML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cGeoJSON) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aKML, ?cKML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aDGGS, ?cDGGS) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aWKT, ?cKML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aWKT, ?cDGGS) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aGML, ?cWKT) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aGML, ?cGeoJSON) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aGML, ?cKML) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aGML, ?cDGGS) as ?rcc8ec)\n}\n"
  },
  "query-r46-3-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"externallyConnected\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"externallyConnected\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cWKT) as ?rcc8ec)\n}\n"
  },
  "query-r46-4-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aWKT, ?dGML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aGeoJSON, ?dGML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aGeoJSON, ?dKML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aGeoJSON, ?dDGGS) as ?rcc8po)\n}\n"
  },
  "query-r46-4-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aKML, ?dWKT) as ?rcc8po)\n}\n"
  },
  "query-r46-4-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aKML, ?dGML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aKML, ?dGeoJSON) as ?rcc8po)\n}\n"
  },
  "query-r46-4-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aKML, ?dDGGS) as ?rcc8po)\n}\n"
  },
  "query-r46-4-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aDGGS, ?dWKT) as ?rcc8po)\n}\n"
  },
  "query-r46-4-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aDGGS, ?dGML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aDGGS, ?dGeoJSON) as ?rcc8po)\n}\n"
  },
  "query-r46-4-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aWKT, ?dGeoJSON) as ?rcc8po)\n}\n"
  },
  "query-r46-4-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aDGGS, ?dKML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aWKT, ?dWKT) as ?rcc8po)\n}\n"
  },
  "query-r46-4-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aGML, ?dGML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aGeoJSON, ?dGeoJSON) as ?rcc8po)\n}\n"
  },
  "query-r46-4-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aKML, ?dKML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aDGGS, ?dDGGS) as ?rcc8po)\n}\n"
  },
  "query-r46-4-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aWKT, ?dKML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aWKT, ?dDGGS) as ?rcc8po)\n}\n"
  },
  "query-r46-4-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aGML, ?dWKT) as ?rcc8po)\n}\n"
  },
  "query-r46-4-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aGML, ?dGeoJSON) as ?rcc8po)\n}\n"
  },
  "query-r46-4-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aGML, ?dKML) as ?rcc8po)\n}\n"
  },
  "query-r46-4-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aGML, ?dDGGS) as ?rcc8po)\n}\n"
  },
  "query-r46-4-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"partiallyOverlapping\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"partiallyOverlapping\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aGeoJSON, ?dWKT) as ?rcc8po)\n}\n"
  },
  "query-r46-5-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aWKT, ?bGML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bGML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bKML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bDGGS) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aKML, ?bWKT) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aKML, ?bGML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aKML, ?bGeoJSON) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aKML, ?bDGGS) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aDGGS, ?bWKT) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aDGGS, ?bGML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aDGGS, ?bGeoJSON) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aWKT, ?bGeoJSON) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aDGGS, ?bKML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aWKT, ?bWKT) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aGML, ?bGML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bGeoJSON) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aKML, ?bKML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aDGGS, ?bDGGS) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aWKT, ?bKML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aWKT, ?bDGGS) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aGML, ?bWKT) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aGML, ?bGeoJSON) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aGML, ?bKML) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aGML, ?bDGGS) as ?rcc8tppi)\n}\n"
  },
  "query-r46-5-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bWKT) as ?rcc8tppi)\n}\n"
  },
  "query-r46-6-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bWKT, ?aGML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aGML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aKML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aDGGS) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bKML, ?aWKT) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bKML, ?aGML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bKML, ?aGeoJSON) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bKML, ?aDGGS) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bDGGS, ?aWKT) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bDGGS, ?aGML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bDGGS, ?aGeoJSON) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bWKT, ?aGeoJSON) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bDGGS, ?aKML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bWKT, ?aWKT) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bGML, ?aGML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aGeoJSON) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bKML, ?aKML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bDGGS, ?aDGGS) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bWKT, ?aKML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bWKT, ?aDGGS) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bGML, ?aWKT) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bGML, ?aGeoJSON) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bGML, ?aKML) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bGML, ?aDGGS) as ?rcc8tpp)\n}\n"
  },
  "query-r46-6-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"tangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"tangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aWKT) as ?rcc8tpp)\n}\n"
  },
  "query-r46-7-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gWKT, ?aGML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aGML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aKML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aDGGS) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gKML, ?aWKT) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gKML, ?aGML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gKML, ?aGeoJSON) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gKML, ?aDGGS) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aWKT) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aGML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aGeoJSON) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gWKT, ?aGeoJSON) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aKML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gWKT, ?aWKT) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gGML, ?aGML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aGeoJSON) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gKML, ?aKML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aDGGS) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gWKT, ?aKML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gWKT, ?aDGGS) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gGML, ?aWKT) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gGML, ?aGeoJSON) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gGML, ?aKML) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gGML, ?aDGGS) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-7-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPart\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPart\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aWKT) as ?rcc8ntpp)\n}\n"
  },
  "query-r46-8-1.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aWKT, ?gGML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-10.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gGML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-11.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gKML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-12.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gDGGS) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-13.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aKML, ?gWKT) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-14.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aKML, ?gGML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-15.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aKML, ?gGeoJSON) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-16.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aKML, ?gDGGS) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-17.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gWKT) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-18.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gGML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-19.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gGeoJSON) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-2.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aWKT, ?gGeoJSON) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-20.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gKML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-21.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aWKT, ?gWKT) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-22.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aGML, ?gGML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-23.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gGeoJSON) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-24.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aKML, ?gKML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-25.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gDGGS) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-3.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aWKT, ?gKML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-4.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aWKT, ?gDGGS) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-5.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aGML, ?gWKT) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-6.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aGML, ?gGeoJSON) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-7.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aGML, ?gKML) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-8.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aGML, ?gDGGS) as ?rcc8ntppi)\n}\n"
  },
  "query-r46-8-9.rq": {
    "answers": [
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">true</literal></binding>\n  </result>\n </results>\n</sparql>\n",
      "<sparql xmlns=\"http://www.w3.org/2005/sparql-results#\">\n <head>\n  <variable name=\"nonTangentialProperPartInverse\"/>\n </head>\n <results distinct=\"false\" ordered=\"true\">\n  <result>\n   <binding name=\"nonTangentialProperPartInverse\"><literal datatype=\"http://www.w3.org/2001/XMLSchema#boolean\">1</literal></binding>\n  </result>\n </results>\n</sparql>\n"
    ],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gWKT) as ?rcc8ntppi)\n}\n"
  },
  "query-r47-1.rq": {
    "answers": [],
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type geo:Feature \n}\nORDER BY ?f\n"
  },
  "query-r47-2.rq": {
    "answers": [],
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f geo:hasGeometry ?g\n}\nORDER BY ?f\n"
  },
  "query-r47-3.rq": {
    "answers": [],
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f geo:hasDefaultGeometry ?g\n}\nORDER BY ?f\n"
  },
  "query-r48-1.rq": {
    "answers": [],
    "query": "# INFERENCE\nPREFIX sf: <http://www.opengis.net/ont/sf#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type sf:Surface\n}\nORDER BY ?f\n"
  },
  "query-r48-2.rq": {
    "answers": [],
    "query": "# INFERENCE\nPREFIX sf: <http://www.opengis.net/ont/sf#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type sf:Curve\n}\nORDER BY ?f\n"
  },
  "query-r49.rq": {
    "answers": [],
    "query": "# INFERENCE\nPREFIX gml: <http://www.opengis.net/ont/gml#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type gml:Surface\n}\nORDER BY ?f\n"
  },
  "query-r50-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:sfEquals ?f\n}\nORDER BY ?f\n"
  },
  "query-r50-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfDisjoint ?f\n}\nORDER BY ?f\n"
  },
  "query-r50-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfIntersects ?f\n}\nORDER BY ?f\n"
  },
  "query-r50-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:sfTouches ?f\n}\nORDER BY ?f\n"
  },
  "query-r50-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:E geo:sfCrosses ?f\n}\nORDER BY ?f\n"
  },
  "query-r50-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:sfWithin my:A\n}\nORDER BY ?f\n"
  },
  "query-r50-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfContains ?f\n}\nORDER BY ?f\n"
  },
  "query-r50-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:sfOverlaps ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehEquals ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehDisjoint ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:ehMeet ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:ehOverlap ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehCovers ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehCoveredBy ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehInside ?f\n}\nORDER BY ?f\n"
  },
  "query-r51-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehContains ?f\n}\nORDER BY ?f\n"
  },
  "query-r52-1.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:rcc8eq ?f\n}\nORDER BY ?f\n"
  },
  "query-r52-2.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8dc ?f\n}\nORDER BY ?f\n"
  },
  "query-r52-3.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:rcc8ec ?f\n}\nORDER BY ?f\n"
  },
  "query-r52-4.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:rcc8po ?f\n}\nORDER BY ?f\n"
  },
  "query-r52-5.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8tppi ?f\n}\nORDER BY ?f\n"
  },
  "query-r52-6.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:rcc8tpp my:A\n}\nORDER BY ?f\n"
  },
  "query-r52-7.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:rcc8ntpp my:A\n}\nORDER BY ?f\n"
  },
  "query-r52-8.rq": {
    "answers": [],
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ntppi ?f\n}\nORDER BY ?f\n"
  }
}