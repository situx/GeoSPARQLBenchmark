var gsb_11_benchmarkconfig={
  "query-r01.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"p\", \"o\"]}, \"results\": {\"bindings\": [{\"o\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}, \"p\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#hasExactGeometry\"}}]}}": true
    },
    "definition": "Requirement 1: Implementations shall support the SPARQL Query Language for RDF [W3C SPARQL], the SPARQL Protocol for RDF [W3C SPARQL Protocol] and the SPARQL Query Results XML Format [W3C SPARQL Result Format] ",
    "label": "Requirement 1: SPARQL Protocol",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nSELECT ?p ?o\nWHERE {\n  my:A ?p ?o\n}\nORDER BY ?p ?o\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/core/sparql-protocol",
    "weight": 0.019230769230769232
  },
  "query-r02.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}": true
    },
    "definition": "Requirement 2: Implementations shall allow the RDFS class geo:SpatialObject to be used in SPARQL graph patterns.",
    "label": "Requirement 2: Spatial Object Class",
    "module": "CORE",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:SpatialObject\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/core/spatial-object-class",
    "weight": 0.019230769230769232
  },
  "query-r03.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}]}}": true
    },
    "definition": "Requirement 3: Implementations shall allow the RDFS class geo:Feature to be used in SPARQL graph patterns.",
    "label": "Requirement 3: Feature Class",
    "module": "CORE",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:Feature\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/core/feature-class",
    "weight": 0.019230769230769232
  },
  "query-r04.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#ASpatialObjectCollection\"}}]}}": true
    },
    "definition": "Requirement 4: Requirement 4: Implementations shall allow the RDFS class geo:SpatialObjectCollection to be used in SPARQL graph patterns.",
    "label": "Requirement 4: Spatial Object Collection Class",
    "module": "CORE",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:SpatialObjectCollection\n}\nORDER BY ?f \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/spatial-measure-class",
    "weight": 0.019230769230769232
  },
  "query-r05.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AFeatureCollection\"}}]}}": true
    },
    "definition": "Requirement 5: Requirement 5: Implementations shall allow the RDFS class geo:FeatureCollection to be used in SPARQL graph patterns.",
    "label": "Requirement 5: Feature Collection Class",
    "module": "CORE",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:FeatureCollection\n}\nORDER BY ?f \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/spatial-object-collection-class",
    "weight": 0.019230769230769232
  },
  "query-r06-1.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 1): Implementations shall allow the property geo:hasSize to be used in SPARQL graph patterns.",
    "label": "Requirement 6-1: Spatial Object Properties geo:hasSize",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?size\nWHERE {\n  my:A geo:hasSize ?size .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-10.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 10): Implementations shall allow the property geo:hasMetricVolume to be used in SPARQL graph patterns.",
    "label": "Requirement 6-10: Spatial Object Properties geo:hasMetricVolume",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mvolume\nWHERE {\n  my:A geo:hasMetricVolume ?mvolume .\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-2.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 2): Implementations shall allow the property geo:hasMetricSize to be used in SPARQL graph patterns.",
    "label": "Requirement 6-2: Spatial Object Properties geo:hasMetricSize",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?msize\nWHERE {\n  my:A geo:hasMetricSize ?msize .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-3.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 3): Implementations shall allow the property geo:hasLength to be used in SPARQL graph patterns.",
    "label": "Requirement 6-3: Spatial Object Properties geo:hasLength",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?length\nWHERE {\n  my:A geo:hasLength ?length .\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-4.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 4): Implementations shall allow the property geo:hasMetricLength to be used in SPARQL graph patterns.",
    "label": "Requirement 6-4: Spatial Object Properties geo:hasMetricLength",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasMetricLength ?mlength .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-5.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 5): Implementations shall allow the property geo:hasPerimeterLength to be used in SPARQL graph patterns.",
    "label": "Requirement 6-5: Spatial Object Properties geo:hasPerimeterLength",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?perimeterlength\nWHERE {\n  my:A geo:hasPerimeterLength ?perimeterlength .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-6.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 6): Implementations shall allow the property geo:hasMetricPerimeterLength to be used in SPARQL graph patterns.",
    "label": "Requirement 6-6: Spatial Object Properties geo:hasMetricPerimeterLength",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mperimeterlength\nWHERE {\n  my:A geo:hasMetricPerimeterLength ?mperimeterlength .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-7.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 7): Implementations shall allow the property geo:hasArea to be used in SPARQL graph patterns.",
    "label": "Requirement 6-7: Spatial Object Properties geo:hasArea",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?area\nWHERE {\n  my:A geo:hasArea ?area .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-8.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 8): Implementations shall allow the property geo:hasMetricArea to be used in SPARQL graph patterns.",
    "label": "Requirement 6-8: Spatial Object Properties geo:hasMetricArea",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?marea\nWHERE {\n  my:A geo:hasMetricArea ?marea .\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r06-9.rq": {
    "answers": {},
    "definition": "Requirement 6 (Part 9): Implementations shall allow the property geo:hasVolume to be used in SPARQL graph patterns.",
    "label": "Requirement 6-9: Spatial Object Properties geo:hasVolume",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?volume\nWHERE {\n  my:A geo:hasVolume ?volume .\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/feature-collection-class",
    "weight": ""
  },
  "query-r07-1.rq": {
    "answers": {},
    "definition": "Requirement 7 (Part 1): Implementations shall allow the property geo:hasGeometry to be used in SPARQL graph patterns.",
    "label": "Requirement 7-1: Feature Properties geo:hasGeometry",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  my:A geo:hasGeometry ?geom .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.0021367521367521365
  },
  "query-r07-2.rq": {
    "answers": {},
    "definition": "Requirement 7 (Part 2): Implementations shall allow the property geo:hasDefaultGeometry to be used in SPARQL graph patterns.",
    "label": "Requirement 7-2: Feature Properties geo:hasDefaultGeometry",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?defaultGeom\nWHERE {\n  my:A geo:hasDefaultGeometry ?defaultGeom .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.0021367521367521365
  },
  "query-r07-3.rq": {
    "answers": {},
    "definition": "Requirement 7 (Part 3): Implementations shall allow the property geo:defaultGeometry to be used in SPARQL graph patterns.",
    "label": "Requirement 7-3: Feature Properties geo:defaultGeometry",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?defaultGeom\nWHERE {\n  my:A geo:defaultGeometry ?defaultGeom .\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.0021367521367521365
  },
  "query-r07-4.rq": {
    "answers": {},
    "definition": "Requirement 7 (Part 4): Implementations shall allow the property geo:hasCentroid to be used in SPARQL graph patterns.",
    "label": "Requirement 7-4: Feature Properties geo:hasCentroid",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasCentroid ?centroid .\n}  \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.0021367521367521365
  },
  "query-r07-5.rq": {
    "answers": {},
    "definition": "Requirement 7 (Part 5): Implementations shall allow the property geo:hasBoundingBox to be used in SPARQL graph patterns.",
    "label": "Requirement 7-5: Feature Properties geo:hasBoundingBox",
    "module": "CORE",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?bbox\nWHERE {\n  my:A geo:hasBoundingBox ?bbox .\n}  \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.0021367521367521365
  },
  "query-r08-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 1): Implementations shall allow the property geo:sfEquals to be used in SPARQL graph patterns.",
    "label": "Requirement 8-1: Simple Feature Spatial Relations: geo:sfEquals",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfEquals ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 2): Implementations shall allow the property geo:sfDisjoint to be used in SPARQL graph patterns.",
    "label": "Requirement 8-2: Simple Feature Spatial Relations: geo:sfDisjoint",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfDisjoint ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 3): Implementations shall allow the property geo:sfIntersects to be used in SPARQL graph patterns.",
    "label": "Requirement 8-3: Simple Feature Spatial Relations: geo:sfIntersects",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfIntersects ?f\n  FILTER (?f != my:A)\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-4.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 4): Implementations shall allow the property geo:sfTouches to be used in SPARQL graph patterns.",
    "label": "Requirement 8-4: Simple Feature Spatial Relations: geo:sfTouches",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfTouches ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-5.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 5): Implementations shall allow the property geo:sfCrosses to be used in SPARQL graph patterns.",
    "label": "Requirement 8-5: Simple Feature Spatial Relations: geo:sfCrosses",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:E geo:sfCrosses ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-6.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 6): Implementations shall allow the property geo:sfWithin to be used in SPARQL graph patterns.",
    "label": "Requirement 8-6: Simple Feature Spatial Relations: geo:sfWithin",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfWithin ?f\n  FILTER (?f != my:B)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-7.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 7): Implementations shall allow the property geo:sfContains to be used in SPARQL graph patterns.",
    "label": "Requirement 8-7: Simple Feature Spatial Relations: geo:sfContains",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfContains ?f\n  FILTER (?f != my:A)\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r08-8.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}": true
    },
    "definition": "Requirement 8 (Part 8): Implementations shall allow the property geo:sfOverlaps to be used in SPARQL graph patterns.",
    "label": "Requirement 8-8: Simple Feature Spatial Relations: geo:sfOverlaps",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfOverlaps ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 1): Implementations shall allow the property geo:ehEquals to be used in SPARQL graph patterns.",
    "label": "Requirement 9-1: Egenhofer Spatial Relations: geo:ehEquals",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehEquals ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 2): Implementations shall allow the property geo:ehDisjoint to be used in SPARQL graph patterns.",
    "label": "Requirement 9-2: Egenhofer Spatial Relations: geo:ehDisjoint",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehDisjoint ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 3): Implementations shall allow the property geo:ehMeet to be used in SPARQL graph patterns.",
    "label": "Requirement 9-3: Egenhofer Spatial Relations: geo:ehMeet",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehMeet ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-4.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 4): Implementations shall allow the property geo:ehOverlap to be used in SPARQL graph patterns.",
    "label": "Requirement 9-4: Egenhofer Spatial Relations: geo:ehOverlap",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehOverlap ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-5.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 5): Implementations shall allow the property geo:ehCovers to be used in SPARQL graph patterns.",
    "label": "Requirement 9-5: Egenhofer Spatial Relations: geo:ehCovers",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehCovers ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-6.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 6): Implementations shall allow the property geo:ehCoveredBy to be used in SPARQL graph patterns.",
    "label": "Requirement 9-6: Egenhofer Spatial Relations: geo:ehCoveredBy",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehCoveredBy ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-7.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 7): Implementations shall allow the property geo:ehInside to be used in SPARQL graph patterns.",
    "label": "Requirement 9-7: Egenhofer Spatial Relations: geo:ehInside",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:F geo:ehInside ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r09-8.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}": true
    },
    "definition": "Requirement 9 (Part 8): Implementations shall allow the property geo:ehContains to be used in SPARQL graph patterns.",
    "label": "Requirement 9-8: Egenhofer Spatial Relations: geo:ehContains",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehContains ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 1): Implementations shall allow the property geo:rcc8eq to be used in SPARQL graph patterns.",
    "label": "Requirement 10-1: RCC8 Spatial Relations: geo:rcc8eq",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8eq ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 2): Implementations shall allow the property geo:rcc8dc to be used in SPARQL graph patterns.",
    "label": "Requirement 10-2: RCC8 Spatial Relations: geo:rcc8dc",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8dc ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 3): Implementations shall allow the property geo:rcc8ec to be used in SPARQL graph patterns.",
    "label": "Requirement 10-3: RCC8 Spatial Relations: geo:rcc8ec",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ec ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-4.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 4): Implementations shall allow the property geo:rcc8po to be used in SPARQL graph patterns.",
    "label": "Requirement 10-4: RCC8 Spatial Relations: geo:rcc8po",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8po ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-5.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 5): Implementations shall allow the property geo:rcc8tppi to be used in SPARQL graph patterns.",
    "label": "Requirement 10-5: RCC8 Spatial Relations: geo:rcc8tppi",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8tppi ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-6.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 6): Implementations shall allow the property geo:rcc8tpp to be used in SPARQL graph patterns.",
    "label": "Requirement 10-6: RCC8 Spatial Relations: geo:rcc8tpp",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8tpp ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-7.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 7): Implementations shall allow the property geo:rcc8ntpp to be used in SPARQL graph patterns.",
    "label": "Requirement 10-7: RCC8 Spatial Relations: geo:rcc8ntpp",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:rcc8ntpp ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r10-8.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}]}}": true
    },
    "definition": "Requirement 10 (Part 8): Implementations shall allow the property geo:rcc8ntppi to be used in SPARQL graph patterns.",
    "label": "Requirement 10-8: RCC8 Spatial Relations: geo:rcc8ntppi",
    "module": "TOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ntppi ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.002403846153846154
  },
  "query-r11.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}": true
    },
    "definition": "Requirement 11: Implementations shall allow the RDFS class geo:Geometry to be used in SPARQL graph patterns.",
    "label": "Requirement 11: Geometry Class",
    "module": "GEOEXT",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:Geometry\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-class",
    "weight": 0.019230769230769232
  },
  "query-r12.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AGeometryCollection\"}}]}}": true
    },
    "definition": "Requirement 12: Implementations shall allow the RDFS class geo:GeometryCollection to be used in SPARQL graph patterns.",
    "label": "Requirement 12: Geometry Collection Class",
    "module": "GEOEXT",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:GeometryCollection\n}\nORDER BY ?f\n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/core/geometry-collection-class",
    "weight": 0.019230769230769232
  },
  "query-r13-1.rq": {
    "answers": {},
    "definition": "query-r13-1",
    "label": "Requirement 13-1:  Geometry Properties: geo:dimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:dimension ?dimension .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.003205128205128205
  },
  "query-r13-10.rq": {
    "answers": {},
    "definition": "query-r13-10",
    "label": "Requirement 13-10:  Geometry Properties: geo:hasSerialization",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?hasSerialization\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSerialization ?hasSerialization .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": ""
  },
  "query-r13-2.rq": {
    "answers": {},
    "definition": "query-r13-2",
    "label": "Requirement 13-2:  Geometry Properties: geo:coordinateDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:coordinateDimension ?coordinateDimension .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.003205128205128205
  },
  "query-r13-3.rq": {
    "answers": {},
    "definition": "query-r13-3",
    "label": "Requirement 13-3:  Geometry Properties: geo:spatialDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:spatialDimension ?spatialDimension .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.003205128205128205
  },
  "query-r13-4.rq": {
    "answers": {},
    "definition": "query-r13-4",
    "label": "Requirement 13-4:  Geometry Properties: geo:hasSpatialResolution",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialResolution\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSpatialResolution ?spatialResolution .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.003205128205128205
  },
  "query-r13-5.rq": {
    "answers": {},
    "definition": "query-r13-5",
    "label": "Requirement 13-5:  Geometry Properties: geo:hasMetricSpatialResolution",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mspatialDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasMetricSpatialResolution ?mspatialResolution .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.003205128205128205
  },
  "query-r13-6.rq": {
    "answers": {},
    "definition": "query-r13-6",
    "label": "Requirement 13-6:  Geometry Properties: geo:hasSpatialAccuracy",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialAccuracy\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSpatialAccuracy ?spatialAccuracy .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.003205128205128205
  },
  "query-r13-7.rq": {
    "answers": {},
    "definition": "query-r13-7",
    "label": "Requirement 13-7:  Geometry Properties: geo:hasMetricSpatialAccuracy",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?mspatialAccuracy\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasMetricSpatialAccuracy ?mspatialAccuracy .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": ""
  },
  "query-r13-8.rq": {
    "answers": {},
    "definition": "query-r13-8",
    "label": "Requirement 13-8:  Geometry Properties: geo:isEmpty",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:isEmpty ?isEmpty .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": ""
  },
  "query-r13-9.rq": {
    "answers": {},
    "definition": "query-r13-9",
    "label": "Requirement 13-9:  Geometry Properties: geo:isSimple",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:isSimple ?isSimple .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": ""
  },
  "query-r14.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"wkt\"]}, \"results\": {\"bindings\": [{\"wkt\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"<http://www.opengis.net/def/crs/OGC/1.3/CRS84> Polygon((-83.6 34.1, -83.2 34.1, -83.2 34.5, -83.6 34.5, -83.6 34.1))\"}}]}}": true
    },
    "definition": "Requirement 14: All RDFS Literals of type geo:wktLiteral shall consist of an optional URI identifying the coordinate reference system followed by Simple Features Well Known Text (WKT) describing a geometric value. Valid geo:wktLiterals are formed by concatenating a valid, absolute URI as defined in [RFC 2396], one or more spaces (Unicode U+0020 character) as a separator, and a WKT string as defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 14: WKT Literal",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?wkt\nWHERE {\n  my:AExactGeom geo:asWKT ?wkt .\n  FILTER (datatype(?wkt) = geo:wktLiteral)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal",
    "weight": 0.019230769230769232
  },
  "query-r15.rq": {
    "answers": {},
    "definition": "Requirement 15: The URI <http://www.opengis.net/def/crs/OGC/1.3/CRS84> shall be assumed as the spatial reference system for geo:wktLiterals that do not specify an explicit spatial reference system URI.",
    "label": "Requirement 15: WKT Literal Default SRS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:J geo:hasDefaultGeometry ?jGeom .\n  ?jGeom geo:asWKT ?jWKT .\n  my:K geo:hasDefaultGeometry ?kGeom .\n  ?kGeom geo:asWKT ?kWKT .\n  BIND (geof:sfEquals(?jWKT, ?kWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal-default-srs",
    "weight": 0.019230769230769232
  },
  "query-r16.rq": {
    "answers": {},
    "definition": "Requirement 16: Coordinate tuples within geo:wktLiterals shall be interpreted using the axis order defined in the spatial reference system used.",
    "label": "Requirement 16: WKT Axis Order",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asWKT ?lWKT .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lWKT, ?mWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-axis-order",
    "weight": 0.019230769230769232
  },
  "query-r17-1.rq": {
    "answers": {},
    "definition": "Requirement 17 (Part 1): An empty RDFS Literal of type geo:wktLiteral shall be interpreted as an empty geometry. Part 1 tests LineString geometries.",
    "label": "Requirement 17-1: Empty WKT Literal: LineString",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asWKT ?iWKT .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asWKT ?hWKT .\n  BIND (geof:sfEquals(?iWKT, ?hWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r17-2.rq": {
    "answers": {},
    "definition": "Requirement 17 (Part 2): An empty RDFS Literal of type geo:wktLiteral shall be interpreted as an empty geometry. Part 2 tests Point geometries.",
    "label": "Requirement 17-2: Empty WKT Literal: Point",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asWKT ?iWKT .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asWKT ?hWKT .\n  BIND (geof:sfEquals(?iWKT, ?hWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r18.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"wkt\"]}, \"results\": {\"bindings\": [{\"wkt\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"<http://www.opengis.net/def/crs/OGC/1.3/CRS84> Polygon((-83.6 34.1, -83.2 34.1, -83.2 34.5, -83.6 34.5, -83.6 34.1))\"}}]}}": true
    },
    "definition": "Requirement 18: Implementations shall allow the RDF property geo:asWKT to be used in SPARQL graph patterns.",
    "label": "Requirement 18: geo:asWKT Property",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?wkt\nWHERE {\n  my:AExactGeom geo:asWKT ?wkt\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-as-wkt-literal",
    "weight": 0.019230769230769232
  },
  "query-r19-1.rq": {
    "answers": {},
    "definition": "Requirement 19 (Part 1): Implementations shall support geof:asWKT as a SPARQL extension function: geo:asWKT",
    "label": "Requirement 19-1: geof:asWKT Function: geo:asWKT",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:asWKT ?wktt\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asWKT-function",
    "weight": 0.003846153846153846
  },
  "query-r19-2.rq": {
    "answers": {},
    "definition": "Requirement 19 (Part 2): Implementations shall support geof:asWKT as a SPARQL extension function: geo:asGML",
    "label": "Requirement 19-2: geof:asWKT Function: geo:asGML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:asGML ?wktt\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asWKT-function",
    "weight": 0.003846153846153846
  },
  "query-r19-3.rq": {
    "answers": {},
    "definition": "Requirement 19 (Part 3): Implementations shall support geof:asWKT as a SPARQL extension function: geo:asGeoJSON",
    "label": "Requirement 19-3: geof:asWKT Function: geo:asGeoJSON",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?wktt\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asWKT-function",
    "weight": 0.003846153846153846
  },
  "query-r19-4.rq": {
    "answers": {},
    "definition": "Requirement 19 (Part 4): Implementations shall support geof:asWKT as a SPARQL extension function: geo:asKML",
    "label": "Requirement 19-4: geof:asWKT Function: geo:asKML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:asKML ?wktt\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asWKT-function",
    "weight": 0.003846153846153846
  },
  "query-r19-5.rq": {
    "answers": {},
    "definition": "Requirement 19 (Part 5): Implementations shall support geof:asWKT as a SPARQL extension function: geo:asDGGS",
    "label": "Requirement 19-5: geof:asWKT Function: geo:asDGGS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asWKT(?wktt) as ?wkt)\nWHERE {\n  my:AExactGeom geo:asDGGS ?wktt\n} \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asWKT-function",
    "weight": 0.003846153846153846
  },
  "query-r20.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"geom\"]}, \"results\": {\"bindings\": [{\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}": true
    },
    "definition": "Requirement 20: All geo:gmlLiterals shall consist of a valid element from the GML schema that implements a subtype of GM_Object as defined in [OGC 07-036].",
    "label": "Requirement 20: GML Literal",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asGML ?gml\n  FILTER(regex(str(?gml), \".*(AbstractCurveSegment|ArcByCenterPoint|CircleByCenterPoint|ArcString|Arc|Circle|ArcStringByBulge|ArcByBulge|Clothoid|GeodesicString|Geodesic|LineStringSegment|LineString|OffsetCurve|SplineCurve|BSpline|Bezier|PolynomialSpline|CubicSpline|Curve|OrientableCurve|CompositeCurve|Ring|LinearRing|OrientableSurface|CompositeSurface|Shell|Surface|Polygon|PolyhedralSurface|TriangulatedSurface|TriangulatedIrrefularNetwork|Point|Solid|CompositeSolid|GeometricComplex|Composite|CompositeCurve|MultiGeometry|MultiCurve|MultiPoint|MultiSolid|MultiSurface|Cone|Cylinder|Sphere|Rectangle|Triangle).*\", \"i\"))\n  FILTER(datatype(?gml) = geo:gmlLiteral)\n}\nORDER BY ?geom\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/gml-literal",
    "weight": 0.019230769230769232
  },
  "query-r21-1.rq": {
    "answers": {},
    "definition": "Requirement 21 (Part 1): An empty geo:gmlLiteral shall be interpreted as an empty geometry. Part 1 tests LineString geometries.",
    "label": "Requirement 21-1: Empty GML Literal: LineString",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asGML ?iGML .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asGML ?hGML .\n  BIND (geof:sfEquals(?iGML, ?hGML) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/gml-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r21-2.rq": {
    "answers": {},
    "definition": "Requirement 21 (Part 2): An empty geo:gmlLiteral shall be interpreted as an empty geometry. Part 2 tests Point geometries.",
    "label": "Requirement 21-2: Empty GML Literal: Point",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asGML ?iGML .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asGML ?hGML .\n  BIND (geof:sfEquals(?iGML, ?hGML) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/gml-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r23.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"gml\"]}, \"results\": {\"bindings\": [{\"gml\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"\\n        <gml:Polygon xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\" srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.6 34.1 -83.2 34.1 -83.2 34.5 -83.6 34.5 -83.6 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\\n    \"}}]}}": true
    },
    "definition": "Requirement 23: Implementations shall allow the RDF property geo:asGML to be used in SPARQL graph patterns.",
    "label": "Requirement 23: geo:asGML Property",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?gml\nWHERE {\n  my:AExactGeom geo:asGML ?gml\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-as-gml-literal",
    "weight": 0.019230769230769232
  },
  "query-r24-1.rq": {
    "answers": {},
    "definition": "Requirement 24 (Part 1): Implementations shall support geof:asGML as a SPARQL extension function: geo:asWKT",
    "label": "Requirement 24-1: geof:asGML Function: geo:asWKT",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGML(?gmll) as ?gml)\nWHERE {\n  my:AExactGeom geo:geo:asWKT ?gmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGML-function",
    "weight": ""
  },
  "query-r24-2.rq": {
    "answers": {},
    "definition": "Requirement 24 (Part 2): Implementations shall support geof:asGML as a SPARQL extension function: geo:asGML",
    "label": "Requirement 24-2: geof:asGML Function: geo:asGML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGML(?gmll) as ?gml)\nWHERE {\n  my:AExactGeom geo:geo:asGML ?gmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGML-function",
    "weight": ""
  },
  "query-r24-3.rq": {
    "answers": {},
    "definition": "Requirement 24 (Part 3): Implementations shall support geof:asGML as a SPARQL extension function: geo:asGeoJSON",
    "label": "Requirement 24-3: geof:asGML Function: geo:asGeoJSON",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGML(?gmll) as ?gml)\nWHERE {\n  my:AExactGeom geo:geo:asGeoJSON ?gmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGML-function",
    "weight": ""
  },
  "query-r24-4.rq": {
    "answers": {},
    "definition": "Requirement 24 (Part 4): Implementations shall support geof:asGML as a SPARQL extension function: geo:asKML",
    "label": "Requirement 24-4: geof:asGML Function: geo:asKML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGML(?gmll) as ?gml)\nWHERE {\n  my:AExactGeom geo:geo:asKML ?gmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGML-function",
    "weight": ""
  },
  "query-r24-5.rq": {
    "answers": {},
    "definition": "Requirement 24 (Part 5): Implementations shall support geof:asGML as a SPARQL extension function: geo:asDGGS",
    "label": "Requirement 24-5: geof:asGML Function: geo:asDGGS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGML(?gmll) as ?gml)\nWHERE {\n  my:AExactGeom geo:geo:asDGGS ?gmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGML-function",
    "weight": ""
  },
  "query-r25.rq": {
    "answers": {},
    "definition": "Requirement 25: All geo:geoJSONLiteral instances shall consist of the Geometry objects as defined in the GeoJSON specification GEOJSON.",
    "label": "Requirement 25: GeoJSON Literal",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asGeoJSON ?geojson\n  FILTER(regex(str(?geojson), \".*(Point|Polygon|LineString|MultiPolygon|MultiLineString|MultiPoint).*\", \"i\"))\n  FILTER(regex(str(?geojson), \"\\{.*\\:\\{.*\\:.*\\}\\}\", \"i\"))\n  FILTER(datatype(?geojson) = geo:geoJSONLiteral)\n}\nORDER BY ?geom \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geojson-literal",
    "weight": 0.019230769230769232
  },
  "query-r26.rq": {
    "answers": {},
    "definition": "Requirement 26: RDFS Literals of type geo:geoJSONLiteral do not contain a SRS definition. All literals of this type shall, according to the GeoJSON specification, be encoded only in, and be assumed to use, the WGS84 geodetic longitude-latitude spatial reference system (http://www.opengis.net/def/crs/OGC/1.3/CRS84).",
    "label": "Requirement 26: GeoJSON Literal SRS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asGeoJSON ?lGeoJSON .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lGeoJSON, ?mWKT) as ?sfEquals)\n}\n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geojson-literal-srs",
    "weight": 0.019230769230769232
  },
  "query-r27-1.rq": {
    "answers": {},
    "definition": "Requirement 27 (Part 1): An empty geo:geoJSONLiteral shall be interpreted as an empty geometry. Part 1 tests LineString geometries.",
    "label": "Requirement 27-1: Empty GeoJSON Literal: LineString",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asGeoJSON ?iGeoJSON .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asGeoJSON ?hGeoJSON .\n  BIND (geof:sfEquals(?iGeoJSON, ?hGeoJSON) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geojson-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r27-2.rq": {
    "answers": {},
    "definition": "Requirement 27 (Part 2): An empty geo:geoJSONLiteral shall be interpreted as an empty geometry. Part 2 tests Point geometries.",
    "label": "Requirement 27-2: Empty GeoJSON Literal: Point",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asGeoJSON ?iGeoJSON .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asGeoJSON ?hGeoJSON .\n  BIND (geof:sfEquals(?iGeoJSON, ?hGeoJSON) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geojson-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r28.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"geojson\"]}, \"results\": {\"bindings\": [{\"geojson\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#geoJSONLiteral\", \"type\": \"literal\", \"value\": \"\\n        {\\\"type\\\": \\\"Polygon\\\", \\\"coordinates\\\": [[[-83.6, 34.1], [-83.2, 34.1], [-83.2, 34.5], [-83.6, 34.5], [-83.6, 34.1]]]}\\n    \"}}]}}": true
    },
    "definition": "Requirement 28: Implementations shall allow the RDF property geo:asGeoJSON to be used in SPARQL graph patterns.",
    "label": "Requirement 28: geo:asGeoJSON Property",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geojson\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?geojson\n}",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-geojson-literal",
    "weight": 0.019230769230769232
  },
  "query-r29-1.rq": {
    "answers": {},
    "definition": "Requirement 29 (Part 1): Implementations shall support geof:asGeoJSON as a SPARQL extension function: geo:asWKT",
    "label": "Requirement 29-1: geof:asGeoJSON Function: geo:asWKT",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGeoJSON(?geojsonn) as ?geojson)\nWHERE {\n  my:AExactGeom geo:geo:asWKT ?geojsonn\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGeoJSON-function",
    "weight": ""
  },
  "query-r29-2.rq": {
    "answers": {},
    "definition": "Requirement 29 (Part 2): Implementations shall support geof:asGeoJSON as a SPARQL extension function: geo:asGML",
    "label": "Requirement 29-2: geof:asGeoJSON Function: geo:asGML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGeoJSON(?geojsonn) as ?geojson)\nWHERE {\n  my:AExactGeom geo:geo:asGML ?geojsonn\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGeoJSON-function",
    "weight": ""
  },
  "query-r29-3.rq": {
    "answers": {},
    "definition": "Requirement 29 (Part 3): Implementations shall support geof:asGeoJSON as a SPARQL extension function: geo:asGeoJSON",
    "label": "Requirement 29-3: geof:asGeoJSON Function: geo:asGeoJSON",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGeoJSON(?geojsonn) as ?geojson)\nWHERE {\n  my:AExactGeom geo:geo:asGeoJSON ?geojsonn\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGeoJSON-function",
    "weight": ""
  },
  "query-r29-4.rq": {
    "answers": {},
    "definition": "Requirement 29 (Part 4): Implementations shall support geof:asGeoJSON as a SPARQL extension function: geo:asKML",
    "label": "Requirement 29-4: geof:asGeoJSON Function: geo:asKML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGeoJSON(?geojsonn) as ?geojson)\nWHERE {\n  my:AExactGeom geo:geo:asKML ?geojsonn\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGeoJSON-function",
    "weight": ""
  },
  "query-r29-5.rq": {
    "answers": {},
    "definition": "Requirement 29 (Part 5): Implementations shall support geof:asGeoJSON as a SPARQL extension function: geo:asDGGS",
    "label": "Requirement 29-5: geof:asGeoJSON Function: geo:asDGGS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asGeoJSON(?geojsonn) as ?geojson)\nWHERE {\n  my:AExactGeom geo:geo:asDGGS ?geojsonn\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asGeoJSON-function",
    "weight": ""
  },
  "query-r30.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"geom\"]}, \"results\": {\"bindings\": [{\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}]}}": true
    },
    "definition": "Requirement 30: All geo:kmlLiteral instances shall consist of the Geometry objects as defined in the KML specification [OGCKML].",
    "label": "Requirement 30: KML Literal",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asKML ?kml\n  FILTER(regex(str(?kml), \".*(Point|Polygon|LineString|LinearRing|MultiGeometry|Model|MultiPolygon|MultiLineString|MultiPoint).*\", \"i\"))\n  FILTER(datatype(?kml) = geo:kmlLiteral)\n}\nORDER BY ?geom \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/kml-literal",
    "weight": 0.019230769230769232
  },
  "query-r31.rq": {
    "answers": {},
    "definition": "Requirement 31: Requirement 31: RDFS Literals of type geo:kmlLiteral do not contain a SRS definition. All literals of this type shall according to the KML specification only be encoded in and assumed to use the WGS84 geodetic longitude-latitude spatial reference system (http://www.opengis.net/def/crs/OGC/1.3/CRS84).",
    "label": "Requirement 31: KML Literal SRS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asKML ?lKML .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lKML, ?mWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/kml-literal-srs",
    "weight": 0.019230769230769232
  },
  "query-r32-1.rq": {
    "answers": {},
    "definition": "Requirement 32 (Part 1): An empty geo:kmlLiteral shall be interpreted as an empty geometry. Part 1 tests LineString geometries.",
    "label": "Requirement 32-1: Empty KML Literal: LineString",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asKML ?iKML .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asKML ?hKML .\n  BIND (geof:sfEquals(?iKML, ?hKML) as ?sfEquals)\n}\n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/kml-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r32-2.rq": {
    "answers": {},
    "definition": "Requirement 32 (Part 2): An empty geo:kmlLiteral shall be interpreted as an empty geometry. Part 2 tests Point geometries.",
    "label": "Requirement 32-2: Empty KML Literal: Point",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asKML ?iKML .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asKML ?hKML .\n  BIND (geof:sfEquals(?iKML, ?hKML) as ?sfEquals)\n}\n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/kml-literal-empty",
    "weight": 0.009615384615384616
  },
  "query-r33.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"kml\"]}, \"results\": {\"bindings\": [{\"kml\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#asKML\", \"type\": \"literal\", \"value\": \"\\n        <Polygon><outerBoundaryIs><LinearRing><coordinates>-83.5,34.2 -83.3,34.2 -83.3,34.4 -83.5,34.4 -83.5,34.2</coordinates></LinearRing></outerBoundaryIs></Polygon>\\n    \"}}]}}": true
    },
    "definition": "Requirement 33: Implementations shall allow the RDF property geo:asKML to be used in SPARQL graph patterns.",
    "label": "Requirement 33: geo:asKML Property",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?kml\nWHERE {\n  my:GExactGeom geo:asKML ?kml\n}",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-kml-literal",
    "weight": 0.019230769230769232
  },
  "query-r34-1.rq": {
    "answers": {},
    "definition": "Requirement 34 (Part 1): Implementations shall support geof:asKML as a SPARQL extension function: geo:asWKT",
    "label": "Requirement 34-1: geof:asKML Function: geo:asWKT",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asKML(?kmll) as ?kml)\nWHERE {\n  my:AExactGeom geo:geo:asWKT ?kmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asKML-function",
    "weight": ""
  },
  "query-r34-2.rq": {
    "answers": {},
    "definition": "Requirement 34 (Part 2): Implementations shall support geof:asKML as a SPARQL extension function: geo:asGML",
    "label": "Requirement 34-2: geof:asKML Function: geo:asGML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asKML(?kmll) as ?kml)\nWHERE {\n  my:AExactGeom geo:geo:asGML ?kmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asKML-function",
    "weight": ""
  },
  "query-r34-3.rq": {
    "answers": {},
    "definition": "Requirement 34 (Part 3): Implementations shall support geof:asKML as a SPARQL extension function: geo:asGeoJSON",
    "label": "Requirement 34-3: geof:asKML Function: geo:asGeoJSON",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asKML(?kmll) as ?kml)\nWHERE {\n  my:AExactGeom geo:geo:asGeoJSON ?kmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asKML-function",
    "weight": ""
  },
  "query-r34-4.rq": {
    "answers": {},
    "definition": "Requirement 34 (Part 4): Implementations shall support geof:asKML as a SPARQL extension function: geo:asKML",
    "label": "Requirement 34-4: geof:asKML Function: geo:asKML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asKML(?kmll) as ?kml)\nWHERE {\n  my:AExactGeom geo:geo:asKML ?kmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asKML-function",
    "weight": ""
  },
  "query-r34-5.rq": {
    "answers": {},
    "definition": "Requirement 34 (Part 5): Implementations shall support geof:asKML as a SPARQL extension function: geo:asDGGS",
    "label": "Requirement 34-5: geof:asKML Function: geo:asDGGS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asKML(?kmll) as ?kml)\nWHERE {\n  my:AExactGeom geo:geo:asDGGS ?kmll\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/asKML-function",
    "weight": ""
  },
  "query-r35.rq": {
    "answers": {},
    "definition": "Requirement 35: Implementations shall support geof:asKML as a SPARQL extension function.",
    "label": "Requirement 35: DGGS Literal",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asDggs ?dggs\n  FILTER(regex(str(?dggs), \".*CELLIST \\(.*\\).*\", \"i\"))\n  FILTER(datatype(?dggs) = geo:dggsLiteral)\n}\nORDER BY ?geom \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/dggs-literal",
    "weight": ""
  },
  "query-r37.rq": {
    "answers": {},
    "definition": "Requirement 37: Implementations shall allow the RDF property geo:asDGGS to be used in SPARQL graph patterns.",
    "label": "Requirement 37: geo:asDGGS Property",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?dggs\nWHERE {\n  my:OPointGeom geo:asDGGS ?dggs\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/auspix-dggs-literal",
    "weight": 0.019230769230769232
  },
  "query-r38-1.rq": {
    "answers": {},
    "definition": "Requirement 38 (Part 1): Implementations shall support geof:asDGGS as a SPARQL extension function: geo:asWKT",
    "label": "Requirement 38-1: geof:asDGGS Function: geo:asWKT",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:asWKT ?dggss\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-dggs-literal",
    "weight": ""
  },
  "query-r38-2.rq": {
    "answers": {},
    "definition": "Requirement 38 (Part 2): Implementations shall support geof:asDGGS as a SPARQL extension function: geo:asGML",
    "label": "Requirement 38-2: geof:asDGGS Function: geo:asGML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:asGML ?dggss\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-dggs-literal",
    "weight": ""
  },
  "query-r38-3.rq": {
    "answers": {},
    "definition": "Requirement 38 (Part 3): Implementations shall support geof:asDGGS as a SPARQL extension function: geo:asGeoJSON",
    "label": "Requirement 38-3: geof:asDGGS Function: geo:asGeoJSON",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?dggss\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-dggs-literal",
    "weight": ""
  },
  "query-r38-4.rq": {
    "answers": {},
    "definition": "Requirement 38 (Part 4): Implementations shall support geof:asDGGS as a SPARQL extension function: geo:asKML",
    "label": "Requirement 38-4: geof:asDGGS Function: geo:asKML",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:asKML ?dggss\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-dggs-literal",
    "weight": ""
  },
  "query-r38-5.rq": {
    "answers": {},
    "definition": "Requirement 38 (Part 5): Implementations shall support geof:asDGGS as a SPARQL extension function: geo:asDGGS",
    "label": "Requirement 38-5: geof:asDGGS Function: geo:asDGGS",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:asDggs(?dggss) as ?dggs)\nWHERE {\n  my:AExactGeom geo:asDGGS ?dggss\n} \n \n",
    "uri": "http://www.opengis.net/spec/geosparql/1.1/req/geometry-extension/geometry-as-dggs-literal",
    "weight": ""
  },
  "query-r39-1-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 1) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundary as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-1-1 (WKT): Non-topological Query functions (Simple Features) geof:boundary",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:boundary(?WKT) as ?boundary)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-1-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 1) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundary as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-1-2 (GML): Non-topological Query functions (Simple Features) geof:boundary",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:boundary(?GML) as ?boundary)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-1-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 1) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundary as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-1-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:boundary",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:boundary(?GeoJSON) as ?boundary)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-1-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 1) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundary as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-1-4 (KML): Non-topological Query functions (Simple Features) geof:boundary",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:boundary(?KML) as ?boundary)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-1-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 1) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundary as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-1-5 (DGGS): Non-topological Query functions (Simple Features) geof:boundary",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:boundary(?DGGS) as ?boundary)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-10-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 10) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:dimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-10-1 (WKT): Non-topological Query functions (Simple Features) geof:dimension",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:dimension(?WKT) as ?dimension)\n} \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-10-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 10) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:dimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-10-2 (GML): Non-topological Query functions (Simple Features) geof:dimension",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:dimension(?GML) as ?dimension)\n} \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-10-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 10) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:dimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-10-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:dimension",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:dimension(?GeoJSON) as ?dimension)\n} \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-10-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 10) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:dimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-10-4 (KML): Non-topological Query functions (Simple Features) geof:dimension",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:dimension(?KML) as ?dimension)\n} \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-10-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 10) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:dimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-10-5 (DGGS): Non-topological Query functions (Simple Features) geof:dimension",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:dimension(?DGGS) as ?dimension)\n} \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-10.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-10 (GML-WKT): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-11.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-11 (GML-GeoJSON): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-12.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-12 (GML-KML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-13.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-13 (GML-DGGS): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-14.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GeoJSON-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-14 (GeoJSON-WKT): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-15.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GeoJSON-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-15 (GeoJSON-GML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-16.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GeoJSON-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-16 (GeoJSON-KML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-17.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GeoJSON-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-17 (GeoJSON-DGGS): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-18.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (KML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-18 (KML-WKT): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-19.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (KML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-19 (KML-GML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-2 (GML-GML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGML, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-20.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (KML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-20 (KML-GeoJSON): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-21.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (KML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-21 (KML-DGGS): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-22.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (DGGS-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-22 (DGGS-WKT): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fWKT) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-23.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (DGGS-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-23 (DGGS-GML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-24.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (DGGS-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-24 (DGGS-GeoJSON): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-25.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (DGGS-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-25 (DGGS-KML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cGeoJSON, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-4 (KML-KML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cKML, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cDGGS, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-6.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (WKT-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-6 (WKT-GML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fGML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-7.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (WKT-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-7 (WKT-GeoJSON): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fGeoJSON) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-8.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (WKT-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-8 (WKT-KML): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fKML) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-11-9.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 11) (WKT-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricDistance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-11-9 (WKT-DGGS): Non-topological Query functions (Simple Features) geof:metricDistance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?metricDistance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:metricDistance(?cWKT, ?fDGGS) as ?metricDistance)\n}\nORDER BY ASC(?metricDistance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-10.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-10 (GML-WKT): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-11.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-11 (GML-GeoJSON): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-12.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-12 (GML-KML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-13.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-13 (GML-DGGS): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-14.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GeoJSON-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-14 (GeoJSON-WKT): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-15.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GeoJSON-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-15 (GeoJSON-GML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-16.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GeoJSON-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-16 (GeoJSON-KML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-17.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GeoJSON-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-17 (GeoJSON-DGGS): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-18.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (KML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-18 (KML-WKT): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-19.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (KML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-19 (KML-GML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-2 (GML-GML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-20.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (KML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-20 (KML-GeoJSON): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-21.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (KML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-21 (KML-DGGS): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-22.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (DGGS-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-22 (DGGS-WKT): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-23.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (DGGS-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-23 (DGGS-GML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-24.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (DGGS-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-24 (DGGS-GeoJSON): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-25.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (DGGS-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-25 (DGGS-KML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGeoJSON, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-4 (KML-KML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cKML, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cDGGS, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-6.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (WKT-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-6 (WKT-GML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-7.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (WKT-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-7 (WKT-GeoJSON): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fGeoJSON, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-8.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (WKT-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-8 (WKT-KML): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fKML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-12-9.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 12) (WKT-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:distance as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-12-9 (WKT-DGGS): Non-topological Query functions (Simple Features) geof:distance",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fDGGS, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-13-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 13) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:envelope as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-13-1 (WKT): Non-topological Query functions (Simple Features) geof:envelope",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:envelope(?WKT) as ?envelope)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-13-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 13) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:envelope as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-13-2 (GML): Non-topological Query functions (Simple Features) geof:envelope",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:envelope(?GML) as ?envelope)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-13-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 13) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:envelope as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-13-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:envelope",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:envelope(?GeoJSON) as ?envelope)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-13-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 13) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:envelope as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-13-4 (KML): Non-topological Query functions (Simple Features) geof:envelope",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:envelope(?KML) as ?envelope)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-13-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 13) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:envelope as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-13-5 (DGGS): Non-topological Query functions (Simple Features) geof:envelope",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:envelope(?DGGS) as ?envelope)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-14-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 14) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:geometryType as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-14-1 (WKT): Non-topological Query functions (Simple Features) geof:geometryType",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:geometryType(?WKT) as ?geometryType)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-14-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 14) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:geometryType as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-14-2 (GML): Non-topological Query functions (Simple Features) geof:geometryType",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:geometryType(?GML) as ?geometryType)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-14-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 14) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:geometryType as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-14-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:geometryType",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:geometryType(?GeoJSON) as ?geometryType)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-14-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 14) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:geometryType as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-14-4 (KML): Non-topological Query functions (Simple Features) geof:geometryType",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:geometryType(?KML) as ?geometryType)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-14-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 14) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:geometryType as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-14-5 (DGGS): Non-topological Query functions (Simple Features) geof:geometryType",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryType\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:geometryType(?DGGS) as ?geometryType)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aWKT, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-10.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-10 (GML-WKT): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aGML, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-11.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-11 (GML-GeoJSON): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aGML, ?bGeoJSON) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-12.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-12 (GML-KML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aGML, ?bKML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-13.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-13 (GML-DGGS): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aGML, ?bDGGS) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-14.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GeoJSON-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-14 (GeoJSON-WKT): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aGeoJSON, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-15.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GeoJSON-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-15 (GeoJSON-GML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aGeoJSON, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-16.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GeoJSON-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-16 (GeoJSON-KML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aGeoJSON, ?bKML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-17.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GeoJSON-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-17 (GeoJSON-DGGS): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aGeoJSON, ?bDGGS) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-18.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (KML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-18 (KML-WKT): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aKML, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-19.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (KML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-19 (KML-GML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aKML, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-2 (GML-GML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aGML, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-20.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (KML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-20 (KML-GeoJSON): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aKML, ?bGeoJSON) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-21.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (KML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-21 (KML-DGGS): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aKML, ?bDGGS) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-22.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (DGGS-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-22 (DGGS-WKT): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aDGGS, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-23.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (DGGS-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-23 (DGGS-GML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aDGGS, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-24.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (DGGS-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-24 (DGGS-GeoJSON): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aDGGS, ?bGeoJSON) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-25.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (DGGS-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-25 (DGGS-KML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aDGGS, ?bKML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aGeoJSON, ?bGeoJSON) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-4 (KML-KML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aKML, ?bKML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aDGGS, ?bDGGS) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-6.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (WKT-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-6 (WKT-GML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aWKT, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-7.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (WKT-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-7 (WKT-GeoJSON): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:intersection(?aWKT, ?bGeoJSON) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-8.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (WKT-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-8 (WKT-KML): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:intersection(?aWKT, ?bKML) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-15-9.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 15) (WKT-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:intersection as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-15-9 (WKT-DGGS): Non-topological Query functions (Simple Features) geof:intersection",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:intersection(?aWKT, ?bDGGS) as ?intersection)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-16-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 16) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:is3D as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-16-1 (WKT): Non-topological Query functions (Simple Features) geof:is3D",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:is3D(?WKT) as ?is3D)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-16-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 16) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:is3D as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-16-2 (GML): Non-topological Query functions (Simple Features) geof:is3D",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:is3D(?GML) as ?is3D)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-16-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 16) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:is3D as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-16-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:is3D",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:is3D(?GeoJSON) as ?is3D)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-16-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 16) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:is3D as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-16-4 (KML): Non-topological Query functions (Simple Features) geof:is3D",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:is3D(?KML) as ?is3D)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-16-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 16) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:is3D as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-16-5 (DGGS): Non-topological Query functions (Simple Features) geof:is3D",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?is3D\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:is3D(?DGGS) as ?is3D)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-17-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 17) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isEmpty as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-17-1 (WKT): Non-topological Query functions (Simple Features) geof:isEmpty",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:isEmpty(?WKT) as ?isEmpty)\n}\n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-17-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 17) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isEmpty as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-17-2 (GML): Non-topological Query functions (Simple Features) geof:isEmpty",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:isEmpty(?GML) as ?isEmpty)\n}\n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-17-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 17) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isEmpty as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-17-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:isEmpty",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:isEmpty(?GeoJSON) as ?isEmpty)\n}\n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-17-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 17) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isEmpty as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-17-4 (KML): Non-topological Query functions (Simple Features) geof:isEmpty",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:isEmpty(?KML) as ?isEmpty)\n}\n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-17-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 17) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isEmpty as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-17-5 (DGGS): Non-topological Query functions (Simple Features) geof:isEmpty",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:isEmpty(?DGGS) as ?isEmpty)\n}\n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-18-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 18) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isMeasured as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-18-1 (WKT): Non-topological Query functions (Simple Features) geof:isMeasured",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:isMeasured(?WKT) as ?isMeasured)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-18-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 18) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isMeasured as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-18-2 (GML): Non-topological Query functions (Simple Features) geof:isMeasured",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:isMeasured(?GML) as ?isMeasured)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-18-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 18) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isMeasured as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-18-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:isMeasured",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:isMeasured(?GeoJSON) as ?isMeasured)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-18-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 18) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isMeasured as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-18-4 (KML): Non-topological Query functions (Simple Features) geof:isMeasured",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:isMeasured(?KML) as ?isMeasured)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-18-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 18) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isMeasured as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-18-5 (DGGS): Non-topological Query functions (Simple Features) geof:isMeasured",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isMeasured\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:isMeasured(?DGGS) as ?isMeasured)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-19-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 19) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isSimple as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-19-1 (WKT): Non-topological Query functions (Simple Features) geof:isSimple",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:isSimple(?WKT) as ?isSimple)\n}\n \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-19-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 19) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isSimple as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-19-2 (GML): Non-topological Query functions (Simple Features) geof:isSimple",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:isSimple(?GML) as ?isSimple)\n}\n \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-19-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 19) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isSimple as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-19-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:isSimple",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:isSimple(?GeoJSON) as ?isSimple)\n}\n \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-19-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 19) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isSimple as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-19-4 (KML): Non-topological Query functions (Simple Features) geof:isSimple",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:isSimple(?KML) as ?isSimple)\n}\n \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-19-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 19) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:isSimple as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-19-5 (DGGS): Non-topological Query functions (Simple Features) geof:isSimple",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:isSimple(?DGGS) as ?isSimple)\n}\n \n \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-2-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 2) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundingCircle as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-2-1 (WKT): Non-topological Query functions (Simple Features) geof:boundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:boundingCircle(?WKT) as ?boundingCircle)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-2-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 2) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundingCircle as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-2-2 (GML): Non-topological Query functions (Simple Features) geof:boundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:boundingCircle(?GML) as ?boundingCircle)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-2-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 2) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundingCircle as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-2-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:boundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:boundingCircle(?GeoJSON) as ?boundingCircle)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-2-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 2) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundingCircle as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-2-4 (KML): Non-topological Query functions (Simple Features) geof:boundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:boundingCircle(?KML) as ?boundingCircle)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-2-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 2) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:boundingCircle as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-2-5 (DGGS): Non-topological Query functions (Simple Features) geof:boundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundingCircle\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:boundingCircle(?DGGS) as ?boundingCircle)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-20-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 20) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:spatialDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-20-1 (WKT): Non-topological Query functions (Simple Features) geof:spatialDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:spatialDimension(?WKT) as ?spatialDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-20-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 20) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:spatialDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-20-2 (GML): Non-topological Query functions (Simple Features) geof:spatialDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:spatialDimension(?GML) as ?spatialDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-20-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 20) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:spatialDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-20-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:spatialDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:spatialDimension(?GeoJSON) as ?spatialDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-20-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 20) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:spatialDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-20-4 (KML): Non-topological Query functions (Simple Features) geof:spatialDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:spatialDimension(?KML) as ?spatialDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-20-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 20) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:spatialDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-20-5 (DGGS): Non-topological Query functions (Simple Features) geof:spatialDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:spatialDimension(?DGGS) as ?spatialDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aWKT , ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-10.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-10 (GML-WKT): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aGML , ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-11.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-11 (GML-GeoJSON): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aGML , ?dGeoJSON) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-12.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-12 (GML-KML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aGML , ?dKML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-13.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-13 (GML-DGGS): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aGML , ?dDGGS) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-14.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GeoJSON-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-14 (GeoJSON-WKT): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aGeoJSON , ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-15.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GeoJSON-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-15 (GeoJSON-GML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aGeoJSON , ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-16.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GeoJSON-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-16 (GeoJSON-KML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aGeoJSON , ?dKML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-17.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GeoJSON-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-17 (GeoJSON-DGGS): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aGeoJSON , ?dDGGS) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-18.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (KML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-18 (KML-WKT): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aKML , ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-19.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (KML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-19 (KML-GML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aKML , ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-2 (GML-GML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aGML , ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-20.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (KML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-20 (KML-GeoJSON): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aKML , ?dGeoJSON) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-21.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (KML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-21 (KML-DGGS): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aKML , ?dDGGS) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-22.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (DGGS-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-22 (DGGS-WKT): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aDGGS , ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-23.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (DGGS-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-23 (DGGS-GML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aDGGS , ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-24.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (DGGS-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-24 (DGGS-GeoJSON): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aDGGS , ?dGeoJSON) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-25.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (DGGS-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-25 (DGGS-KML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aDGGS , ?dKML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aGeoJSON , ?dGeoJSON) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-4 (KML-KML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aKML , ?dKML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aDGGS , ?dDGGS) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-6.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (WKT-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-6 (WKT-GML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aWKT , ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-7.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (WKT-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-7 (WKT-GeoJSON): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:symDifference(?aWKT , ?dGeoJSON) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-8.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (WKT-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-8 (WKT-KML): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:symDifference(?aWKT , ?dKML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-21-9.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 21) (WKT-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:symDifference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-21-9 (WKT-DGGS): Non-topological Query functions (Simple Features) geof:symDifference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:symDifference(?aWKT , ?dDGGS) as ?symDifference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-22-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 22) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:transform as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-22-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:transform",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:transform(?WKT,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-22-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 22) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:transform as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-22-2 (GML-GML): Non-topological Query functions (Simple Features) geof:transform",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:transform(?GML,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-22-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 22) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:transform as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-22-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:transform",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:transform(?GeoJSON,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-22-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 22) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:transform as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-22-4 (KML-KML): Non-topological Query functions (Simple Features) geof:transform",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:transform(?KML,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-22-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 22) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:transform as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-22-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:transform",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?transformed\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:transform(?DGGS,\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\") as ?transformed)\n} \n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aWKT , ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-10.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-10 (GML-WKT): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aGML , ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-11.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-11 (GML-GeoJSON): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aGML , ?bGeoJSON) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-12.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-12 (GML-KML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aGML , ?bKML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-13.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-13 (GML-DGGS): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aGML , ?bDGGS) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-14.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GeoJSON-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-14 (GeoJSON-WKT): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aGeoJSON , ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-15.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GeoJSON-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-15 (GeoJSON-GML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aGeoJSON , ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-16.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GeoJSON-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-16 (GeoJSON-KML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aGeoJSON , ?bKML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-17.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GeoJSON-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-17 (GeoJSON-DGGS): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aGeoJSON , ?bDGGS) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-18.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (KML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-18 (KML-WKT): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aKML , ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-19.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (KML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-19 (KML-GML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aKML , ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-2 (GML-GML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aGML , ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-20.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (KML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-20 (KML-GeoJSON): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aKML , ?bGeoJSON) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-21.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (KML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-21 (KML-DGGS): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aKML , ?bDGGS) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-22.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (DGGS-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-22 (DGGS-WKT): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aDGGS , ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-23.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (DGGS-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-23 (DGGS-GML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aDGGS , ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-24.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (DGGS-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-24 (DGGS-GeoJSON): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aDGGS , ?bGeoJSON) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-25.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (DGGS-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-25 (DGGS-KML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aDGGS , ?bKML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aGeoJSON , ?bGeoJSON) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-4 (KML-KML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aKML , ?bKML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aDGGS , ?bDGGS) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-6.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (WKT-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-6 (WKT-GML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aWKT , ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-7.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (WKT-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-7 (WKT-GeoJSON): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:union(?aWKT , ?bGeoJSON) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-8.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (WKT-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-8 (WKT-KML): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:union(?aWKT , ?bKML) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-23-9.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 23) (WKT-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:union as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-23-9 (WKT-DGGS): Non-topological Query functions (Simple Features) geof:union",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:union(?aWKT , ?bDGGS) as ?union)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-3-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 3) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricBuffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-3-1 (WKT): Non-topological Query functions (Simple Features) geof:metricBuffer",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:metricBuffer(?WKT, 10.0) as ?mbuffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-3-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 3) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricBuffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-3-2 (GML): Non-topological Query functions (Simple Features) geof:metricBuffer",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:metricBuffer(?GML, 10.0) as ?mbuffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-3-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 3) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricBuffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-3-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:metricBuffer",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:metricBuffer(?GeoJSON, 10.0) as ?mbuffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-3-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 3) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricBuffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-3-4 (KML): Non-topological Query functions (Simple Features) geof:metricBuffer",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:metricBuffer(?KML, 10.0) as ?mbuffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-3-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 3) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:metricBuffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-3-5 (DGGS): Non-topological Query functions (Simple Features) geof:metricBuffer",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mbuffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:metricBuffer(?DGGS, 10.0) as ?mbuffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-4-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 4) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:buffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-4-1 (WKT): Non-topological Query functions (Simple Features) geof:buffer",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:buffer(?WKT, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-4-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 4) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:buffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-4-2 (GML): Non-topological Query functions (Simple Features) geof:buffer",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:buffer(?GML, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-4-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 4) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:buffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-4-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:buffer",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:buffer(?GeoJSON, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-4-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 4) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:buffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-4-4 (KML): Non-topological Query functions (Simple Features) geof:buffer",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:buffer(?KML, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-4-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 4) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:buffer as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-4-5 (DGGS): Non-topological Query functions (Simple Features) geof:buffer",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:buffer(?DGGS, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-5-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 5) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:centroid as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-5-1 (WKT): Non-topological Query functions (Simple Features) geof:centroid",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:centroid(?WKT) as ?centroid)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-5-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 5) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:centroid as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-5-2 (GML): Non-topological Query functions (Simple Features) geof:centroid",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:centroid(?GML) as ?centroid)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-5-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 5) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:centroid as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-5-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:centroid",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:centroid(?GeoJSON) as ?centroid)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-5-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 5) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:centroid as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-5-4 (KML): Non-topological Query functions (Simple Features) geof:centroid",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:centroid(?KML) as ?centroid)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-5-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 5) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:centroid as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-5-5 (DGGS): Non-topological Query functions (Simple Features) geof:centroid",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?centroid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:centroid(?DGGS) as ?centroid)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-6-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 6) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:convexHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-6-1 (WKT): Non-topological Query functions (Simple Features) geof:convexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:convexHull(?WKT) as ?convexHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-6-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 6) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:convexHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-6-2 (GML): Non-topological Query functions (Simple Features) geof:convexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:convexHull(?GML) as ?convexHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-6-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 6) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:convexHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-6-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:convexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:convexHull(?GeoJSON) as ?convexHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-6-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 6) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:convexHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-6-4 (KML): Non-topological Query functions (Simple Features) geof:convexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:convexHull(?KML) as ?convexHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-6-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 6) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:convexHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-6-5 (DGGS): Non-topological Query functions (Simple Features) geof:convexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:convexHull(?DGGS) as ?convexHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-7-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 7) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:concaveHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-7-1 (WKT): Non-topological Query functions (Simple Features) geof:concaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:concaveHull(?WKT) as ?concaveHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-7-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 7) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:concaveHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-7-2 (GML): Non-topological Query functions (Simple Features) geof:concaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:concaveHull(?GML) as ?concaveHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-7-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 7) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:concaveHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-7-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:concaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:concaveHull(?GeoJSON) as ?concaveHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-7-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 7) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:concaveHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-7-4 (KML): Non-topological Query functions (Simple Features) geof:concaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:concaveHull(?KML) as ?concaveHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-7-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 7) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:concaveHull as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-7-5 (DGGS): Non-topological Query functions (Simple Features) geof:concaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?concaveHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:concaveHull(?DGGS) as ?concaveHull)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-8-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 8) (WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:coordinateDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-8-1 (WKT): Non-topological Query functions (Simple Features) geof:coordinateDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:coordinateDimension(?WKT) as ?coordinateDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-8-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 8) (GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:coordinateDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-8-2 (GML): Non-topological Query functions (Simple Features) geof:coordinateDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:coordinateDimension(?GML) as ?coordinateDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-8-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 8) (GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:coordinateDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-8-3 (GeoJSON): Non-topological Query functions (Simple Features) geof:coordinateDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:coordinateDimension(?GeoJSON) as ?coordinateDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-8-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 8) (KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:coordinateDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-8-4 (KML): Non-topological Query functions (Simple Features) geof:coordinateDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:coordinateDimension(?KML) as ?coordinateDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-8-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 8) (DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:coordinateDimension as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-8-5 (DGGS): Non-topological Query functions (Simple Features) geof:coordinateDimension",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:coordinateDimension(?DGGS) as ?coordinateDimension)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-1.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (WKT-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-1 (WKT-WKT): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aWKT , ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-10.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-10 (GML-WKT): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aGML , ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-11.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-11 (GML-GeoJSON): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aGML , ?bGeoJSON) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-12.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-12 (GML-KML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aGML , ?bKML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-13.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-13 (GML-DGGS): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aGML , ?bDGGS) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-14.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GeoJSON-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-14 (GeoJSON-WKT): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aGeoJSON , ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-15.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GeoJSON-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-15 (GeoJSON-GML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aGeoJSON , ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-16.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GeoJSON-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-16 (GeoJSON-KML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aGeoJSON , ?bKML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-17.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GeoJSON-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-17 (GeoJSON-DGGS): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aGeoJSON , ?bDGGS) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-18.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (KML-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-18 (KML-WKT): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aKML , ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-19.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (KML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-19 (KML-GML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aKML , ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-2.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GML-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-2 (GML-GML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aGML , ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-20.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (KML-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-20 (KML-GeoJSON): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aKML , ?bGeoJSON) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-21.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (KML-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-21 (KML-DGGS): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aKML , ?bDGGS) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-22.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (DGGS-WKT): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-22 (DGGS-WKT): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT  ?bWKT  .\n  BIND (geof:difference(?aDGGS , ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-23.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (DGGS-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-23 (DGGS-GML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aDGGS , ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-24.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (DGGS-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-24 (DGGS-GeoJSON): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aDGGS , ?bGeoJSON) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-25.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (DGGS-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-25 (DGGS-KML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aDGGS , ?bKML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-3.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (GeoJSON-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-3 (GeoJSON-GeoJSON): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aGeoJSON , ?bGeoJSON) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-4.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (KML-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-4 (KML-KML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aKML , ?bKML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-5.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (DGGS-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-5 (DGGS-DGGS): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aDGGS , ?bDGGS) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-6.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (WKT-GML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-6 (WKT-GML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML  ?bGML  .\n  BIND (geof:difference(?aWKT , ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-7.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (WKT-GeoJSON): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-7 (WKT-GeoJSON): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON  ?bGeoJSON  .\n  BIND (geof:difference(?aWKT , ?bGeoJSON) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-8.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (WKT-KML): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-8 (WKT-KML): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML  ?bKML  .\n  BIND (geof:difference(?aWKT , ?bKML) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r39-9-9.rq": {
    "answers": {},
    "definition": "Requirement 39 (Part 9) (WKT-DGGS): Requirement 39 (Part 1) (WKT): Implementations shall support the function geof:difference as a SPARQL extension function, consistent with definitions of these functions in Simple Features [OGCSFACA] ISO 19125-1, for non-DGGS geometry literals.",
    "label": "Requirement 39-9-9 (WKT-DGGS): Non-topological Query functions (Simple Features) geof:difference",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT  .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS  ?bDGGS  .\n  BIND (geof:difference(?aWKT , ?bDGGS) as ?difference)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r40-1-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 1) (WKT): Implementations shall support the function geof:metricLength as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-1-1 (WKT): Non-topological Query functions (Non Simple Features) geof:metricLength",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:metricLength(?WKT) as ?mlength)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-1-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 1) (GML): Implementations shall support the function geof:metricLength as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-1-2 (GML): Non-topological Query functions (Non Simple Features) geof:metricLength",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:metricLength(?GML) as ?mlength)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-1-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 1) (GeoJSON): Implementations shall support the function geof:metricLength as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-1-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:metricLength",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:metricLength(?GeoJSON) as ?mlength)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-1-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 1) (KML): Implementations shall support the function geof:metricLength as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-1-4 (KML): Non-topological Query functions (Non Simple Features) geof:metricLength",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:metricLength(?KML) as ?mlength)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-1-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 1) (DGGS): Implementations shall support the function geof:metricLength as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-1-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:metricLength",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mlength\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:metricLength(?DGGS) as ?mlength)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-10-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 10) (WKT): Implementations shall support the function geof:maxZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-10-1 (WKT): Non-topological Query functions (Non Simple Features) geof:maxZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom geo:asWKT ?WKT .\n  BIND(geof:maxZ(?WKT) AS ?maxZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-10-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 10) (GML): Implementations shall support the function geof:maxZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-10-2 (GML): Non-topological Query functions (Non Simple Features) geof:maxZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom geo:asGML ?GML .\n  BIND(geof:maxZ(?GML) AS ?maxZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-10-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 10) (GeoJSON): Implementations shall support the function geof:maxZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-10-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:maxZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom geo:asGeoJSON ?GeoJSON .\n  BIND(geof:maxZ(?GeoJSON) AS ?maxZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-10-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 10) (KML): Implementations shall support the function geof:maxZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-10-4 (KML): Non-topological Query functions (Non Simple Features) geof:maxZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom geo:asKML ?KML .\n  BIND(geof:maxZ(?KML) AS ?maxZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-10-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 10) (DGGS): Implementations shall support the function geof:maxZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-10-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:maxZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxZ\nWHERE {\n  my:NExactGeom geo:asDGGS ?DGGS .\n  BIND(geof:maxZ(?DGGS) AS ?maxZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-11-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 11) (WKT-WKT): Implementations shall support the function geof:minX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-11-1 (WKT-WKT): Non-topological Query functions (Non Simple Features) geof:minX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom geo:asWKT ?WKT .\n  BIND(geof:minX(?WKT) AS ?minX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-11-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 11) (GML-GML): Implementations shall support the function geof:minX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-11-2 (GML-GML): Non-topological Query functions (Non Simple Features) geof:minX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom geo:asGML ?GML .\n  BIND(geof:minX(?GML) AS ?minX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-11-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 11) (GeoJSON-GeoJSON): Implementations shall support the function geof:minX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-11-3 (GeoJSON-GeoJSON): Non-topological Query functions (Non Simple Features) geof:minX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?GeoJSON .\n  BIND(geof:minX(?GeoJSON) AS ?minX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-11-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 11) (KML-KML): Implementations shall support the function geof:minX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-11-4 (KML-KML): Non-topological Query functions (Non Simple Features) geof:minX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom geo:asKML ?KML .\n  BIND(geof:minX(?KML) AS ?minX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-11-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 11) (DGGS-DGGS): Implementations shall support the function geof:minX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-11-5 (DGGS-DGGS): Non-topological Query functions (Non Simple Features) geof:minX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minX\nWHERE {\n  my:AExactGeom geo:asDGGS ?DGGS .\n  BIND(geof:minX(?DGGS) AS ?minX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-12-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 12) (WKT-WKT): Implementations shall support the function geof:minY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-12-1 (WKT-WKT): Non-topological Query functions (Non Simple Features) geof:minY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom geo:asWKT ?WKT .\n  BIND(geof:minY(?WKT) AS ?minY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-12-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 12) (GML-GML): Implementations shall support the function geof:minY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-12-2 (GML-GML): Non-topological Query functions (Non Simple Features) geof:minY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom geo:asGML ?GML .\n  BIND(geof:minY(?GML) AS ?minY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-12-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 12) (GeoJSON-GeoJSON): Implementations shall support the function geof:minY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-12-3 (GeoJSON-GeoJSON): Non-topological Query functions (Non Simple Features) geof:minY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?GeoJSON .\n  BIND(geof:minY(?GeoJSON) AS ?minY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-12-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 12) (KML-KML): Implementations shall support the function geof:minY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-12-4 (KML-KML): Non-topological Query functions (Non Simple Features) geof:minY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom geo:asKML ?KML .\n  BIND(geof:minY(?KML) AS ?minY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-12-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 12) (DGGS-DGGS): Implementations shall support the function geof:minY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-12-5 (DGGS-DGGS): Non-topological Query functions (Non Simple Features) geof:minY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minY\nWHERE {\n  my:AExactGeom geo:asDGGS ?DGGS .\n  BIND(geof:minY(?DGGS) AS ?minY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-13-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 13) (WKT): Implementations shall support the function geof:minZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-13-1 (WKT): Non-topological Query functions (Non Simple Features) geof:minZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom geo:asWKT ?WKT .\n  BIND(geof:minZ(?WKT) AS ?minZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-13-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 13) (GML): Implementations shall support the function geof:minZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-13-2 (GML): Non-topological Query functions (Non Simple Features) geof:minZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom geo:asGML ?GML .\n  BIND(geof:minZ(?GML) AS ?minZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-13-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 13) (GeoJSON): Implementations shall support the function geof:minZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-13-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:minZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom geo:asGeoJSON ?GeoJSON .\n  BIND(geof:minZ(?GeoJSON) AS ?minZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-13-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 13) (KML): Implementations shall support the function geof:minZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-13-4 (KML): Non-topological Query functions (Non Simple Features) geof:minZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom geo:asKML ?KML .\n  BIND(geof:minZ(?KML) AS ?minZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-13-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 13) (DGGS): Implementations shall support the function geof:minZ as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-13-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:minZ",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?minZ\nWHERE {\n  my:NExactGeom geo:asDGGS ?DGGS .\n  BIND(geof:minZ(?DGGS) AS ?minZ)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-14-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 14) (WKT): Implementations shall support the function geof:numGeometries as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-14-1 (WKT): Non-topological Query functions (Non Simple Features) geof:numGeometries",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:numGeometries(?WKT) as ?numGeometries)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-14-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 14) (GML): Implementations shall support the function geof:numGeometries as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-14-2 (GML): Non-topological Query functions (Non Simple Features) geof:numGeometries",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:numGeometries(?GML) as ?numGeometries)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-14-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 14) (GeoJSON): Implementations shall support the function geof:numGeometries as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-14-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:numGeometries",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:numGeometries(?GeoJSON) as ?numGeometries)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-14-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 14) (KML): Implementations shall support the function geof:numGeometries as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-14-4 (KML): Non-topological Query functions (Non Simple Features) geof:numGeometries",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:numGeometries(?KML) as ?numGeometries)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-14-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 14) (DGGS): Implementations shall support the function geof:numGeometries as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-14-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:numGeometries",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?numGeometries\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:numGeometries(?DGGS) as ?numGeometries)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-2-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 2) (WKT): Implementations shall support the function geof:length as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-2-1 (WKT): Non-topological Query functions (Non Simple Features) geof:length",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:length(?WKT) as ?length)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-2-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 2) (GML): Implementations shall support the function geof:length as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-2-2 (GML): Non-topological Query functions (Non Simple Features) geof:length",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:length(?GML) as ?length)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-2-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 2) (GeoJSON): Implementations shall support the function geof:length as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-2-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:length",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:length(?GeoJSON) as ?length)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-2-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 2) (KML): Implementations shall support the function geof:length as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-2-4 (KML): Non-topological Query functions (Non Simple Features) geof:length",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:length(?KML) as ?length)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-2-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 2) (DGGS): Implementations shall support the function geof:length as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-2-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:length",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?length\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:length(?DGGS) as ?length)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-3-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 3) (WKT): Implementations shall support the function geof:metricPerimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-3-1 (WKT): Non-topological Query functions (Non Simple Features) geof:metricPerimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:metricPerimeter(?WKT) as ?mperimeter)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-3-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 3) (GML): Implementations shall support the function geof:metricPerimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-3-2 (GML): Non-topological Query functions (Non Simple Features) geof:metricPerimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:metricPerimeter(?GML) as ?mperimeter)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-3-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 3) (GeoJSON): Implementations shall support the function geof:metricPerimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-3-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:metricPerimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:metricPerimeter(?GeoJSON) as ?mperimeter)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-3-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 3) (KML): Implementations shall support the function geof:metricPerimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-3-4 (KML): Non-topological Query functions (Non Simple Features) geof:metricPerimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:metricPerimeter(?KML) as ?mperimeter)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-3-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 3) (DGGS): Implementations shall support the function geof:metricPerimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-3-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:metricPerimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?mperimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:metricPerimeter(?DGGS) as ?mperimeter)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-4-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 4) (WKT): Implementations shall support the function geof:perimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-4-1 (WKT): Non-topological Query functions (Non Simple Features) geof:perimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:perimeter(?WKT) as ?perimeter)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-4-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 4) (GML): Implementations shall support the function geof:perimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-4-2 (GML): Non-topological Query functions (Non Simple Features) geof:perimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:perimeter(?GML) as ?perimeter)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-4-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 4) (GeoJSON): Implementations shall support the function geof:perimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-4-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:perimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:perimeter(?GeoJSON) as ?perimeter)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-4-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 4) (KML): Implementations shall support the function geof:perimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-4-4 (KML): Non-topological Query functions (Non Simple Features) geof:perimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:perimeter(?KML) as ?perimeter)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-4-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 4) (DGGS): Implementations shall support the function geof:perimeter as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-4-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:perimeter",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?perimeter\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:perimeter(?DGGS) as ?perimeter)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-5-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 5) (WKT): Implementations shall support the function geof:metricArea as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-5-1 (WKT): Non-topological Query functions (Non Simple Features) geof:metricArea",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:metricArea(?WKT) as ?marea)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-5-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 5) (GML): Implementations shall support the function geof:metricArea as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-5-2 (GML): Non-topological Query functions (Non Simple Features) geof:metricArea",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:metricArea(?GML) as ?marea)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-5-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 5) (GeoJSON): Implementations shall support the function geof:metricArea as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-5-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:metricArea",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:metricArea(?GeoJSON) as ?marea)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-5-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 5) (KML): Implementations shall support the function geof:metricArea as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-5-4 (KML): Non-topological Query functions (Non Simple Features) geof:metricArea",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:metricArea(?KML) as ?marea)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-5-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 5) (DGGS): Implementations shall support the function geof:metricArea as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-5-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:metricArea",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?marea\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:metricArea(?DGGS) as ?marea)\n} \n",
    "uri": "",
    "weight": 0.0007692307692307692
  },
  "query-r40-6-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 6) (WKT): Implementations shall support the function geof:area as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-6-1 (WKT): Non-topological Query functions (Non Simple Features) geof:area",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:area(?WKT) as ?area)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-6-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 6) (GML): Implementations shall support the function geof:area as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-6-2 (GML): Non-topological Query functions (Non Simple Features) geof:area",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:area(?GML) as ?area)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-6-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 6) (GeoJSON): Implementations shall support the function geof:area as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-6-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:area",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:area(?GeoJSON) as ?area)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-6-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 6) (KML): Implementations shall support the function geof:area as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-6-4 (KML): Non-topological Query functions (Non Simple Features) geof:area",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:area(?KML) as ?area)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-6-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 6) (DGGS): Implementations shall support the function geof:area as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-6-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:area",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?area\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:area(?DGGS) as ?area)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-7-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 7) (WKT): Implementations shall support the function geof:geometryN as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-7-1 (WKT): Non-topological Query functions (Non Simple Features) geof:geometryN",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:geometryN(?WKT,1) as ?geometryN)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-7-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 7) (GML): Implementations shall support the function geof:geometryN as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-7-2 (GML): Non-topological Query functions (Non Simple Features) geof:geometryN",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:geometryN(?GML,1) as ?geometryN)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-7-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 7) (GeoJSON): Implementations shall support the function geof:geometryN as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-7-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:geometryN",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:geometryN(?GeoJSON,1) as ?geometryN)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-7-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 7) (KML): Implementations shall support the function geof:geometryN as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-7-4 (KML): Non-topological Query functions (Non Simple Features) geof:geometryN",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:geometryN(?KML,1) as ?geometryN)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-7-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 7) (DGGS): Implementations shall support the function geof:geometryN as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-7-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:geometryN",
    "module": "GEOEXT",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?geometryN\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:geometryN(?DGGS,1) as ?geometryN)\n} \n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-8-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 8) (WKT): Implementations shall support the function geof:maxX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-8-1 (WKT): Non-topological Query functions (Non Simple Features) geof:maxX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom geo:asWKT ?WKT .\n  BIND(geof:maxX(?WKT) AS ?maxX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-8-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 8) (GML): Implementations shall support the function geof:maxX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-8-2 (GML): Non-topological Query functions (Non Simple Features) geof:maxX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom geo:asGML ?GML .\n  BIND(geof:maxX(?GML) AS ?maxX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-8-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 8) (GeoJSON): Implementations shall support the function geof:maxX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-8-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:maxX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?GeoJSON .\n  BIND(geof:maxX(?GeoJSON) AS ?maxX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-8-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 8) (KML): Implementations shall support the function geof:maxX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-8-4 (KML): Non-topological Query functions (Non Simple Features) geof:maxX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom geo:asKML ?KML .\n  BIND(geof:maxX(?KML) AS ?maxX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-8-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 8) (DGGS): Implementations shall support the function geof:maxX as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-8-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:maxX",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxX\nWHERE {\n  my:AExactGeom geo:asDGGS ?DGGS .\n  BIND(geof:maxX(?DGGS) AS ?maxX)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-9-1.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 9) (WKT): Implementations shall support the function geof:maxY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-9-1 (WKT): Non-topological Query functions (Non Simple Features) geof:maxY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom geo:asWKT ?WKT .\n  BIND(geof:maxY(?WKT) AS ?maxY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-9-2.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 9) (GML): Implementations shall support the function geof:maxY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-9-2 (GML): Non-topological Query functions (Non Simple Features) geof:maxY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom geo:asGML ?GML .\n  BIND(geof:maxY(?GML) AS ?maxY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-9-3.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 9) (GeoJSON): Implementations shall support the function geof:maxY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-9-3 (GeoJSON): Non-topological Query functions (Non Simple Features) geof:maxY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom geo:asGeoJSON ?GeoJSON .\n  BIND(geof:maxY(?GeoJSON) AS ?maxY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-9-4.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 9) (KML): Implementations shall support the function geof:maxY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-9-4 (KML): Non-topological Query functions (Non Simple Features) geof:maxY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom geo:asKML ?KML .\n  BIND(geof:maxY(?KML) AS ?maxY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r40-9-5.rq": {
    "answers": {},
    "definition": "Requirement 40 (Part 9) (DGGS): Implementations shall support the function geof:maxY as SPARQL extension functions which are defined in this standard, for non-DGGS geometry literals.",
    "label": "Requirement 40-9-5 (DGGS): Non-topological Query functions (Non Simple Features) geof:maxY",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?maxY\nWHERE {\n  my:AExactGeom geo:asDGGS ?DGGS .\n  BIND(geof:maxY(?DGGS) AS ?maxY)\n}\n",
    "uri": "",
    "weight": 0.0038461538461538
  },
  "query-r41-1.rq": {
    "answers": {},
    "definition": "Requirement 41 (Part 1) (WKT): Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 41-1 (WKT): SRID Function: geof:getSRID",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?WKT .\n  BIND (geof:getSRID(?WKT) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.0038461538461538
  },
  "query-r41-2.rq": {
    "answers": {},
    "definition": "Requirement 41 (Part 2) (GML): Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 41-2 (GML): SRID Function: geof:getSRID",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?GML .\n  BIND (geof:getSRID(?GML) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.0038461538461538
  },
  "query-r41-3.rq": {
    "answers": {},
    "definition": "Requirement 41 (Part 3) (GeoJSON): Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 41-3 (GeoJSON): SRID Function: geof:getSRID",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGeoJSON ?GeoJSON .\n  BIND (geof:getSRID(?GeoJSON) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.0038461538461538
  },
  "query-r41-4.rq": {
    "answers": {},
    "definition": "Requirement 41 (Part 4) (KML): Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 41-4 (KML): SRID Function: geof:getSRID",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asKML ?KML .\n  BIND (geof:getSRID(?KML) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.0038461538461538
  },
  "query-r41-5.rq": {
    "answers": {},
    "definition": "Requirement 41 (Part 5) (DGGS): Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 41-5 (DGGS): SRID Function: geof:getSRID",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asDGGS ?DGGS .\n  BIND (geof:getSRID(?DGGS) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.0038461538461538
  },
  "query-r42-1-1.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 1) (WKT): Implementations shall support geof:aggBoundingBox as a SPARQL extension function.",
    "label": "Requirement 42-1-1 (WKT): Spatial Aggregate Functions: geof:aggBoundingBox",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?WKT) AS ?bbox)\nWHERE {\n  ?geom geo:asWKT ?WKT .\n}\nGROUP BY ?WKT\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-1-2.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 1) (GML): Implementations shall support geof:aggBoundingBox as a SPARQL extension function.",
    "label": "Requirement 42-1-2 (GML): Spatial Aggregate Functions: geof:aggBoundingBox",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?GML) AS ?bbox)\nWHERE {\n  ?geom geo:asGML ?GML .\n}\nGROUP BY ?GML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-1-3.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 1) (GeoJSON): Implementations shall support geof:aggBoundingBox as a SPARQL extension function.",
    "label": "Requirement 42-1-3 (GeoJSON): Spatial Aggregate Functions: geof:aggBoundingBox",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?GeoJSON) AS ?bbox)\nWHERE {\n  ?geom geo:asGeoJSON ?GeoJSON .\n}\nGROUP BY ?GeoJSON\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-1-4.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 1) (KML): Implementations shall support geof:aggBoundingBox as a SPARQL extension function.",
    "label": "Requirement 42-1-4 (KML): Spatial Aggregate Functions: geof:aggBoundingBox",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?KML) AS ?bbox)\nWHERE {\n  ?geom geo:asKML ?KML .\n}\nGROUP BY ?KML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-1-5.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 1) (DGGS): Implementations shall support geof:aggBoundingBox as a SPARQL extension function.",
    "label": "Requirement 42-1-5 (DGGS): Spatial Aggregate Functions: geof:aggBoundingBox",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \nSELECT (geof:aggBoundingBox(?DGGS) AS ?bbox)\nWHERE {\n  ?geom geo:asDGGS ?DGGS .\n}\nGROUP BY ?DGGS\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-2-1.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 2) (WKT): Implementations shall support geof:aggBoundingCircle as a SPARQL extension function.",
    "label": "Requirement 42-2-1 (WKT): Spatial Aggregate Functions: geof:aggBoundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?WKT) AS ?bcircle)\nWHERE {\n  ?geom geo:asWKT ?WKT .\n}\nGROUP BY ?WKT\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-2-2.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 2) (GML): Implementations shall support geof:aggBoundingCircle as a SPARQL extension function.",
    "label": "Requirement 42-2-2 (GML): Spatial Aggregate Functions: geof:aggBoundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?GML) AS ?bcircle)\nWHERE {\n  ?geom geo:asGML ?GML .\n}\nGROUP BY ?GML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-2-3.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 2) (GeoJSON): Implementations shall support geof:aggBoundingCircle as a SPARQL extension function.",
    "label": "Requirement 42-2-3 (GeoJSON): Spatial Aggregate Functions: geof:aggBoundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?GeoJSON) AS ?bcircle)\nWHERE {\n  ?geom geo:asGeoJSON ?GeoJSON .\n}\nGROUP BY ?GeoJSON\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-2-4.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 2) (KML): Implementations shall support geof:aggBoundingCircle as a SPARQL extension function.",
    "label": "Requirement 42-2-4 (KML): Spatial Aggregate Functions: geof:aggBoundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?KML) AS ?bcircle)\nWHERE {\n  ?geom geo:asKML ?KML .\n}\nGROUP BY ?KML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-2-5.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 2) (DGGS): Implementations shall support geof:aggBoundingCircle as a SPARQL extension function.",
    "label": "Requirement 42-2-5 (DGGS): Spatial Aggregate Functions: geof:aggBoundingCircle",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggBoundingCircle(?DGGS) AS ?bcircle)\nWHERE {\n  ?geom geo:asDGGS ?DGGS .\n}\nGROUP BY ?DGGS\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-3-1.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 3) (WKT): Implementations shall support geof:aggCentroid as a SPARQL extension function.",
    "label": "Requirement 42-3-1 (WKT): Spatial Aggregate Functions: geof:aggCentroid",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?WKT) AS ?centroid)\nWHERE {\n  ?geom geo:asWKT ?WKT .\n}\nGROUP BY ?WKT\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-3-2.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 3) (GML): Implementations shall support geof:aggCentroid as a SPARQL extension function.",
    "label": "Requirement 42-3-2 (GML): Spatial Aggregate Functions: geof:aggCentroid",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?GML) AS ?centroid)\nWHERE {\n  ?geom geo:asGML ?GML .\n}\nGROUP BY ?GML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-3-3.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 3) (GeoJSON): Implementations shall support geof:aggCentroid as a SPARQL extension function.",
    "label": "Requirement 42-3-3 (GeoJSON): Spatial Aggregate Functions: geof:aggCentroid",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?GeoJSON) AS ?centroid)\nWHERE {\n  ?geom geo:asGeoJSON ?GeoJSON .\n}\nGROUP BY ?GeoJSON\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-3-4.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 3) (KML): Implementations shall support geof:aggCentroid as a SPARQL extension function.",
    "label": "Requirement 42-3-4 (KML): Spatial Aggregate Functions: geof:aggCentroid",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?KML) AS ?centroid)\nWHERE {\n  ?geom geo:asKML ?KML .\n}\nGROUP BY ?KML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-3-5.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 3) (DGGS): Implementations shall support geof:aggCentroid as a SPARQL extension function.",
    "label": "Requirement 42-3-5 (DGGS): Spatial Aggregate Functions: geof:aggCentroid",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggCentroid(?DGGS) AS ?centroid)\nWHERE {\n  ?geom geo:asDGGS ?DGGS .\n}\nGROUP BY ?DGGS\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-4-1.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 4) (WKT): Implementations shall support geof:aggConcaveHull as a SPARQL extension function.",
    "label": "Requirement 42-4-1 (WKT): Spatial Aggregate Functions: geof:aggConcaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?WKT) AS ?concavehull)\nWHERE {\n  ?geom geo:asWKT ?WKT .\n}\nGROUP BY ?WKT\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-4-2.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 4) (GML): Implementations shall support geof:aggConcaveHull as a SPARQL extension function.",
    "label": "Requirement 42-4-2 (GML): Spatial Aggregate Functions: geof:aggConcaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?GML) AS ?concavehull)\nWHERE {\n  ?geom geo:asGML ?GML .\n}\nGROUP BY ?GML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-4-3.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 4) (GeoJSON): Implementations shall support geof:aggConcaveHull as a SPARQL extension function.",
    "label": "Requirement 42-4-3 (GeoJSON): Spatial Aggregate Functions: geof:aggConcaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?GeoJSON) AS ?concavehull)\nWHERE {\n  ?geom geo:asGeoJSON ?GeoJSON .\n}\nGROUP BY ?GeoJSON\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-4-4.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 4) (KML): Implementations shall support geof:aggConcaveHull as a SPARQL extension function.",
    "label": "Requirement 42-4-4 (KML): Spatial Aggregate Functions: geof:aggConcaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?KML) AS ?concavehull)\nWHERE {\n  ?geom geo:asKML ?KML .\n}\nGROUP BY ?KML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-4-5.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 4) (DGGS): Implementations shall support geof:aggConcaveHull as a SPARQL extension function.",
    "label": "Requirement 42-4-5 (DGGS): Spatial Aggregate Functions: geof:aggConcaveHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConcaveHull(?DGGS) AS ?concavehull)\nWHERE {\n  ?geom geo:asDGGS ?DGGS .\n}\nGROUP BY ?DGGS\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-5-1.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 5) (WKT): Implementations shall support geof:aggConvexHull as a SPARQL extension function.",
    "label": "Requirement 42-5-1 (WKT): Spatial Aggregate Functions: geof:aggConvexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?WKT) AS ?convexhull)\nWHERE {\n  ?geom geo:asWKT ?WKT .\n}\nGROUP BY ?WKT\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-5-2.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 5) (GML): Implementations shall support geof:aggConvexHull as a SPARQL extension function.",
    "label": "Requirement 42-5-2 (GML): Spatial Aggregate Functions: geof:aggConvexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?GML) AS ?convexhull)\nWHERE {\n  ?geom geo:asGML ?GML .\n}\nGROUP BY ?GML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-5-3.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 5) (GeoJSON): Implementations shall support geof:aggConvexHull as a SPARQL extension function.",
    "label": "Requirement 42-5-3 (GeoJSON): Spatial Aggregate Functions: geof:aggConvexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?GeoJSON) AS ?convexhull)\nWHERE {\n  ?geom geo:asGeoJSON ?GeoJSON .\n}\nGROUP BY ?GeoJSON\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-5-4.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 5) (KML): Implementations shall support geof:aggConvexHull as a SPARQL extension function.",
    "label": "Requirement 42-5-4 (KML): Spatial Aggregate Functions: geof:aggConvexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?KML) AS ?convexhull)\nWHERE {\n  ?geom geo:asKML ?KML .\n}\nGROUP BY ?KML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-5-5.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 5) (DGGS): Implementations shall support geof:aggConvexHull as a SPARQL extension function.",
    "label": "Requirement 42-5-5 (DGGS): Spatial Aggregate Functions: geof:aggConvexHull",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggConvexHull(?DGGS) AS ?convexhull)\nWHERE {\n  ?geom geo:asDGGS ?DGGS .\n}\nGROUP BY ?DGGS\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-6-1.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 6) (WKT): Implementations shall support geof:aggUnion as a SPARQL extension function.",
    "label": "Requirement 42-6-1 (WKT): Spatial Aggregate Functions: geof:aggUnion",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?WKT) AS ?union)\nWHERE {\n  ?geom geo:asWKT ?WKT .\n}\nGROUP BY ?WKT\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-6-2.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 6) (GML): Implementations shall support geof:aggUnion as a SPARQL extension function.",
    "label": "Requirement 42-6-2 (GML): Spatial Aggregate Functions: geof:aggUnion",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?GML) AS ?union)\nWHERE {\n  ?geom geo:asGML ?GML .\n}\nGROUP BY ?GML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-6-3.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 6) (GeoJSON): Implementations shall support geof:aggUnion as a SPARQL extension function.",
    "label": "Requirement 42-6-3 (GeoJSON): Spatial Aggregate Functions: geof:aggUnion",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?GeoJSON) AS ?union)\nWHERE {\n  ?geom geo:asGeoJSON ?GeoJSON .\n}\nGROUP BY ?GeoJSON\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-6-4.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 6) (KML): Implementations shall support geof:aggUnion as a SPARQL extension function.",
    "label": "Requirement 42-6-4 (KML): Spatial Aggregate Functions: geof:aggUnion",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?KML) AS ?union)\nWHERE {\n  ?geom geo:asKML ?KML .\n}\nGROUP BY ?KML\n",
    "uri": "",
    "weight": ""
  },
  "query-r42-6-5.rq": {
    "answers": {},
    "definition": "Requirement 42 (Part 6) (DGGS): Implementations shall support geof:aggUnion as a SPARQL extension function.",
    "label": "Requirement 42-6-5 (DGGS): Spatial Aggregate Functions: geof:aggUnion",
    "module": "GEOEXT",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT (geof:aggUnion(?DGGS) AS ?union)\nWHERE {\n  ?geom geo:asDGGS ?DGGS .\n}\nGROUP BY ?DGGS\n",
    "uri": "",
    "weight": ""
  },
  "query-r43-1.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 1) (WKT-WKT): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-1 (WKT-WKT): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-10.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 10) (GML-WKT): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-10 (GML-WKT): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-11.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 11) (GML-GeoJSON): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-11 (GML-GeoJSON): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-12.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 12) (GML-KML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-12 (GML-KML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-13.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 13) (GML-DGGS): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-13 (GML-DGGS): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-14.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 14) (GeoJSON-WKT): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-14 (GeoJSON-WKT): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-15.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 15) (GeoJSON-GML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-15 (GeoJSON-GML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-16.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 16) (GeoJSON-KML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-16 (GeoJSON-KML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-17.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 17) (GeoJSON-DGGS): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-17 (GeoJSON-DGGS): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-18.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 18) (KML-WKT): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-18 (KML-WKT): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-19.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 19) (KML-GML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-19 (KML-GML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-2.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 2) (GML-GML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-2 (GML-GML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-20.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 20) (KML-GeoJSON): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-20 (KML-GeoJSON): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-21.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 21) (KML-DGGS): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-21 (KML-DGGS): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-22.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 22) (DGGS-WKT): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-22 (DGGS-WKT): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-23.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 23) (DGGS-GML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-23 (DGGS-GML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-24.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 24) (DGGS-GeoJSON): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-24 (DGGS-GeoJSON): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-25.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 25) (DGGS-KML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-25 (DGGS-KML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-3.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 3) (GeoJSON-GeoJSON): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-3 (GeoJSON-GeoJSON): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGeoJSON, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-4.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 4) (KML-KML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-4 (KML-KML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aKML, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-5.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 5) (DGGS-DGGS): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-5 (DGGS-DGGS): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aDGGS, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-6.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 6) (WKT-GML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-6 (WKT-GML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-7.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 7) (WKT-GeoJSON): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-7 (WKT-GeoJSON): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bGeoJSON .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bGeoJSON, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-8.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 8) (WKT-KML): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-8 (WKT-KML): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bKML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bKML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r43-9.rq": {
    "answers": {},
    "definition": "Requirement 43 (Part 9) (WKT-DGGS): Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 43-9 (WKT-DGGS): Relate Function: geof:relate",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bDGGS .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bDGGS, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": ""
  },
  "query-r44-1-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 1) (WKT-WKT): Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-1-1 (WKT-WKT): Simple Features Query Functions: geof:sfEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfEquals(?aWKT, ?aWKT) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-1-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 1) (GML-GML): Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-1-2 (GML-GML): Simple Features Query Functions: geof:sfEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfEquals(?aGML, ?aGML) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-1-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 1) (GeoJSON-GeoJSON): Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-1-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfEquals(?aGeoJSON, ?aGeoJSON) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-1-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 1) (KML-KML): Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-1-4 (KML-KML): Simple Features Query Functions: geof:sfEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfEquals(?aKML, ?aKML) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-1-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 1) (DGGS-DGGS): Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-1-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfEquals(?aDGGS, ?aDGGS) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (WKT-WKT): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-1 (WKT-WKT): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cWKT, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GML-WKT): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-10 (GML-WKT): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cGML, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GML-GeoJSON): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cGML, ?fGeoJSON) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GML-KML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-12 (GML-KML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cGML, ?fKML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GML-DGGS): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-13 (GML-DGGS): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cGML, ?fDGGS) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GeoJSON-WKT): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GeoJSON-GML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GeoJSON-KML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fKML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GeoJSON-DGGS): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fDGGS) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (KML-WKT): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-18 (KML-WKT): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cKML, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (KML-GML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-19 (KML-GML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cKML, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GML-GML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-2 (GML-GML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cGML, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (KML-GeoJSON): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cKML, ?fGeoJSON) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (KML-DGGS): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-21 (KML-DGGS): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cKML, ?fDGGS) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (DGGS-WKT): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-22 (DGGS-WKT): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cDGGS, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (DGGS-GML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-23 (DGGS-GML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cDGGS, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (DGGS-GeoJSON): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cDGGS, ?fGeoJSON) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (DGGS-KML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-25 (DGGS-KML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cDGGS, ?fKML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (GeoJSON-GeoJSON): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cGeoJSON, ?fGeoJSON) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (KML-KML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-4 (KML-KML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cKML, ?fKML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (DGGS-DGGS): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cDGGS, ?fDGGS) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (WKT-GML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-6 (WKT-GML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cWKT, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (WKT-GeoJSON): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfDisjoint(?cWKT, ?fGeoJSON) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (WKT-KML): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-8 (WKT-KML): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfDisjoint(?cWKT, ?fKML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-2-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 2) (WKT-DGGS): Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-2-9 (WKT-DGGS): Simple Features Query Functions: geof:sfDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfDisjoint(?cWKT, ?fDGGS) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (WKT-WKT): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-1 (WKT-WKT): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aWKT, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GML-WKT): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-10 (GML-WKT): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aGML, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GML-GeoJSON): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aGML, ?dGeoJSON) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GML-KML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-12 (GML-KML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aGML, ?dKML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GML-DGGS): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-13 (GML-DGGS): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aGML, ?dDGGS) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GeoJSON-WKT): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GeoJSON-GML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GeoJSON-KML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dKML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GeoJSON-DGGS): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dDGGS) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (KML-WKT): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-18 (KML-WKT): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aKML, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (KML-GML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-19 (KML-GML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aKML, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GML-GML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-2 (GML-GML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aGML, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (KML-GeoJSON): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aKML, ?dGeoJSON) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (KML-DGGS): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-21 (KML-DGGS): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aKML, ?dDGGS) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (DGGS-WKT): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-22 (DGGS-WKT): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aDGGS, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (DGGS-GML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-23 (DGGS-GML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aDGGS, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (DGGS-GeoJSON): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aDGGS, ?dGeoJSON) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (DGGS-KML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-25 (DGGS-KML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aDGGS, ?dKML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (GeoJSON-GeoJSON): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aGeoJSON, ?dGeoJSON) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (KML-KML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-4 (KML-KML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aKML, ?dKML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (DGGS-DGGS): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aDGGS, ?dDGGS) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (WKT-GML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-6 (WKT-GML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aWKT, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (WKT-GeoJSON): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfIntersects(?aWKT, ?dGeoJSON) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (WKT-KML): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-8 (WKT-KML): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfIntersects(?aWKT, ?dKML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-3-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 3) (WKT-DGGS): Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-3-9 (WKT-DGGS): Simple Features Query Functions: geof:sfIntersects",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfIntersects(?aWKT, ?dDGGS) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (WKT-WKT): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-1 (WKT-WKT): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aWKT, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GML-WKT): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-10 (GML-WKT): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aGML, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GML-GeoJSON): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aGML, ?cGeoJSON) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GML-KML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-12 (GML-KML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aGML, ?cKML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GML-DGGS): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-13 (GML-DGGS): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aGML, ?cDGGS) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GeoJSON-WKT): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aGeoJSON, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GeoJSON-GML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aGeoJSON, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GeoJSON-KML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aGeoJSON, ?cKML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GeoJSON-DGGS): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aGeoJSON, ?cDGGS) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (KML-WKT): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-18 (KML-WKT): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aKML, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (KML-GML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-19 (KML-GML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aKML, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GML-GML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-2 (GML-GML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aGML, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (KML-GeoJSON): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aKML, ?cGeoJSON) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (KML-DGGS): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-21 (KML-DGGS): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aKML, ?cDGGS) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (DGGS-WKT): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-22 (DGGS-WKT): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aDGGS, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (DGGS-GML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-23 (DGGS-GML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aDGGS, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (DGGS-GeoJSON): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aDGGS, ?cGeoJSON) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (DGGS-KML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-25 (DGGS-KML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aDGGS, ?cKML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (GeoJSON-GeoJSON): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aGeoJSON, ?cGeoJSON) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (KML-KML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-4 (KML-KML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aKML, ?cKML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (DGGS-DGGS): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aDGGS, ?cDGGS) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (WKT-GML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-6 (WKT-GML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aWKT, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (WKT-GeoJSON): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:sfTouches(?aWKT, ?cGeoJSON) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (WKT-KML): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-8 (WKT-KML): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:sfTouches(?aWKT, ?cKML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-4-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 4) (WKT-DGGS): Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-4-9 (WKT-DGGS): Simple Features Query Functions: geof:sfTouches",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:sfTouches(?aWKT, ?cDGGS) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (WKT-WKT): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-1 (WKT-WKT): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eWKT, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GML-WKT): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-10 (GML-WKT): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eGML, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GML-GeoJSON): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eGML, ?aGeoJSON) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GML-KML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-12 (GML-KML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eGML, ?aKML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GML-DGGS): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-13 (GML-DGGS): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eGML, ?aDGGS) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GeoJSON-WKT): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GeoJSON-GML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GeoJSON-KML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aKML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GeoJSON-DGGS): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aDGGS) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (KML-WKT): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-18 (KML-WKT): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eKML, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (KML-GML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-19 (KML-GML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eKML, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GML-GML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-2 (GML-GML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eGML, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (KML-GeoJSON): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eKML, ?aGeoJSON) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (KML-DGGS): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-21 (KML-DGGS): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eKML, ?aDGGS) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (DGGS-WKT): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-22 (DGGS-WKT): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eDGGS, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (DGGS-GML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-23 (DGGS-GML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eDGGS, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (DGGS-GeoJSON): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eDGGS, ?aGeoJSON) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (DGGS-KML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-25 (DGGS-KML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eDGGS, ?aKML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (GeoJSON-GeoJSON): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGeoJSON ?eGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eGeoJSON, ?aGeoJSON) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (KML-KML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-4 (KML-KML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asKML ?eKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eKML, ?aKML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (DGGS-DGGS): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asDGGS ?eDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eDGGS, ?aDGGS) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (WKT-GML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-6 (WKT-GML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eWKT, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (WKT-GeoJSON): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfCrosses(?eWKT, ?aGeoJSON) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (WKT-KML): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-8 (WKT-KML): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfCrosses(?eWKT, ?aKML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-5-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 5) (WKT-DGGS): Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-5-9 (WKT-DGGS): Simple Features Query Functions: geof:sfCrosses",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfCrosses(?eWKT, ?aDGGS) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (WKT-WKT): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-1 (WKT-WKT): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bWKT, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GML-WKT): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-10 (GML-WKT): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bGML, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GML-GeoJSON): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bGML, ?aGeoJSON) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GML-KML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-12 (GML-KML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bGML, ?aKML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GML-DGGS): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-13 (GML-DGGS): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bGML, ?aDGGS) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GeoJSON-WKT): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bGeoJSON, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GeoJSON-GML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bGeoJSON, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GeoJSON-KML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bGeoJSON, ?aKML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GeoJSON-DGGS): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bGeoJSON, ?aDGGS) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (KML-WKT): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-18 (KML-WKT): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bKML, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (KML-GML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-19 (KML-GML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bKML, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GML-GML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-2 (GML-GML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bGML, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (KML-GeoJSON): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bKML, ?aGeoJSON) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (KML-DGGS): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-21 (KML-DGGS): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bKML, ?aDGGS) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (DGGS-WKT): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-22 (DGGS-WKT): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bDGGS, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (DGGS-GML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-23 (DGGS-GML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bDGGS, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (DGGS-GeoJSON): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bDGGS, ?aGeoJSON) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (DGGS-KML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-25 (DGGS-KML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bDGGS, ?aKML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (GeoJSON-GeoJSON): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bGeoJSON, ?aGeoJSON) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (KML-KML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-4 (KML-KML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bKML, ?aKML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (DGGS-DGGS): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bDGGS, ?aDGGS) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (WKT-GML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-6 (WKT-GML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bWKT, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (WKT-GeoJSON): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:sfWithin(?bWKT, ?aGeoJSON) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (WKT-KML): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-8 (WKT-KML): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:sfWithin(?bWKT, ?aKML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-6-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 6) (WKT-DGGS): Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-6-9 (WKT-DGGS): Simple Features Query Functions: geof:sfWithin",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:sfWithin(?bWKT, ?aDGGS) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (WKT-WKT): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-1 (WKT-WKT): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aWKT, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GML-WKT): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-10 (GML-WKT): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aGML, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GML-GeoJSON): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aGML, ?fGeoJSON) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GML-KML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-12 (GML-KML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aGML, ?fKML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GML-DGGS): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-13 (GML-DGGS): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aGML, ?fDGGS) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GeoJSON-WKT): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aGeoJSON, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GeoJSON-GML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aGeoJSON, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GeoJSON-KML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aGeoJSON, ?fKML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GeoJSON-DGGS): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aGeoJSON, ?fDGGS) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (KML-WKT): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-18 (KML-WKT): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aKML, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (KML-GML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-19 (KML-GML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aKML, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GML-GML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-2 (GML-GML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aGML, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (KML-GeoJSON): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aKML, ?fGeoJSON) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (KML-DGGS): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-21 (KML-DGGS): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aKML, ?fDGGS) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (DGGS-WKT): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-22 (DGGS-WKT): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aDGGS, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (DGGS-GML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-23 (DGGS-GML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aDGGS, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (DGGS-GeoJSON): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aDGGS, ?fGeoJSON) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (DGGS-KML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-25 (DGGS-KML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aDGGS, ?fKML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (GeoJSON-GeoJSON): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aGeoJSON, ?fGeoJSON) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (KML-KML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-4 (KML-KML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aKML, ?fKML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (DGGS-DGGS): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aDGGS, ?fDGGS) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (WKT-GML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-6 (WKT-GML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aWKT, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (WKT-GeoJSON): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:sfContains(?aWKT, ?fGeoJSON) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (WKT-KML): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-8 (WKT-KML): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:sfContains(?aWKT, ?fKML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-7-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 7) (WKT-DGGS): Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-7-9 (WKT-DGGS): Simple Features Query Functions: geof:sfContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:sfContains(?aWKT, ?fDGGS) as ?sfContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-1.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (WKT-WKT): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-1 (WKT-WKT): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aWKT, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-10.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GML-WKT): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-10 (GML-WKT): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aGML, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-11.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GML-GeoJSON): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-11 (GML-GeoJSON): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aGML, ?dGeoJSON) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-12.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GML-KML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-12 (GML-KML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aGML, ?dKML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-13.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GML-DGGS): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-13 (GML-DGGS): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aGML, ?dDGGS) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-14.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GeoJSON-WKT): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-14 (GeoJSON-WKT): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-15.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GeoJSON-GML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-15 (GeoJSON-GML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-16.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GeoJSON-KML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-16 (GeoJSON-KML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dKML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-17.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GeoJSON-DGGS): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-17 (GeoJSON-DGGS): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dDGGS) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-18.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (KML-WKT): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-18 (KML-WKT): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aKML, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-19.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (KML-GML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-19 (KML-GML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aKML, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-2.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GML-GML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-2 (GML-GML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aGML, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-20.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (KML-GeoJSON): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-20 (KML-GeoJSON): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aKML, ?dGeoJSON) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-21.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (KML-DGGS): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-21 (KML-DGGS): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aKML, ?dDGGS) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-22.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (DGGS-WKT): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-22 (DGGS-WKT): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aDGGS, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-23.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (DGGS-GML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-23 (DGGS-GML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aDGGS, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-24.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (DGGS-GeoJSON): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-24 (DGGS-GeoJSON): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aDGGS, ?dGeoJSON) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-25.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (DGGS-KML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-25 (DGGS-KML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aDGGS, ?dKML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-3.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (GeoJSON-GeoJSON): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-3 (GeoJSON-GeoJSON): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aGeoJSON, ?dGeoJSON) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-4.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (KML-KML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-4 (KML-KML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aKML, ?dKML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-5.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (DGGS-DGGS): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-5 (DGGS-DGGS): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aDGGS, ?dDGGS) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-6.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (WKT-GML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-6 (WKT-GML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aWKT, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-7.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (WKT-GeoJSON): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-7 (WKT-GeoJSON): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:sfOverlaps(?aWKT, ?dGeoJSON) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-8.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (WKT-KML): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-8 (WKT-KML): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:sfOverlaps(?aWKT, ?dKML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r44-8-9.rq": {
    "answers": {},
    "definition": "Requirement 44 (Part 8) (WKT-DGGS): Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 44-8-9 (WKT-DGGS): Simple Features Query Functions: geof:sfOverlaps",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:sfOverlaps(?aWKT, ?dDGGS) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-1-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 1) (WKT-WKT): Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-1-1 (WKT-WKT): Egenhofer Query Functions: geof:ehEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehEquals(?aWKT, ?aWKT) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-1-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 1) (GML-GML): Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-1-2 (GML-GML): Egenhofer Query Functions: geof:ehEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehEquals(?aGML, ?aGML) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-1-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 1) (GeoJSON-GeoJSON): Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-1-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehEquals(?aGeoJSON, ?aGeoJSON) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-1-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 1) (KML-KML): Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-1-4 (KML-KML): Egenhofer Query Functions: geof:ehEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehEquals(?aKML, ?aKML) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-1-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 1) (DGGS-DGGS): Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-1-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehEquals",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehEquals(?aDGGS, ?aDGGS) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (WKT-WKT): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-1 (WKT-WKT): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bWKT, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GML-WKT): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-10 (GML-WKT): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bGML, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GML-GeoJSON): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bGML, ?cGeoJSON) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GML-KML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-12 (GML-KML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bGML, ?cKML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GML-DGGS): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-13 (GML-DGGS): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bGML, ?cDGGS) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GeoJSON-WKT): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GeoJSON-GML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GeoJSON-KML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cKML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GeoJSON-DGGS): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cDGGS) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (KML-WKT): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-18 (KML-WKT): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bKML, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (KML-GML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-19 (KML-GML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bKML, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GML-GML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-2 (GML-GML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bGML, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (KML-GeoJSON): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bKML, ?cGeoJSON) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (KML-DGGS): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-21 (KML-DGGS): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bKML, ?cDGGS) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (DGGS-WKT): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bDGGS, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (DGGS-GML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-23 (DGGS-GML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bDGGS, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (DGGS-GeoJSON): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bDGGS, ?cGeoJSON) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (DGGS-KML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-25 (DGGS-KML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bDGGS, ?cKML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (GeoJSON-GeoJSON): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bGeoJSON, ?cGeoJSON) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (KML-KML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-4 (KML-KML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bKML, ?cKML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (DGGS-DGGS): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bDGGS, ?cDGGS) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (WKT-GML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-6 (WKT-GML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bWKT, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (WKT-GeoJSON): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehDisjoint(?bWKT, ?cGeoJSON) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (WKT-KML): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-8 (WKT-KML): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehDisjoint(?bWKT, ?cKML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-2-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 2) (WKT-DGGS): Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-2-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehDisjoint",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehDisjoint(?bWKT, ?cDGGS) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (WKT-WKT): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-1 (WKT-WKT): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aWKT, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GML-WKT): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-10 (GML-WKT): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aGML, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GML-GeoJSON): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aGML, ?cGeoJSON) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GML-KML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-12 (GML-KML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aGML, ?cKML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GML-DGGS): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-13 (GML-DGGS): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aGML, ?cDGGS) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GeoJSON-WKT): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aGeoJSON, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GeoJSON-GML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aGeoJSON, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GeoJSON-KML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aGeoJSON, ?cKML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GeoJSON-DGGS): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aGeoJSON, ?cDGGS) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (KML-WKT): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-18 (KML-WKT): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aKML, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (KML-GML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-19 (KML-GML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aKML, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GML-GML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-2 (GML-GML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aGML, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (KML-GeoJSON): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aKML, ?cGeoJSON) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (KML-DGGS): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-21 (KML-DGGS): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aKML, ?cDGGS) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (DGGS-WKT): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aDGGS, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (DGGS-GML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-23 (DGGS-GML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aDGGS, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (DGGS-GeoJSON): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aDGGS, ?cGeoJSON) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (DGGS-KML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-25 (DGGS-KML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aDGGS, ?cKML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (GeoJSON-GeoJSON): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aGeoJSON, ?cGeoJSON) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (KML-KML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-4 (KML-KML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aKML, ?cKML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (DGGS-DGGS): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aDGGS, ?cDGGS) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (WKT-GML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-6 (WKT-GML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aWKT, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (WKT-GeoJSON): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:ehMeet(?aWKT, ?cGeoJSON) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (WKT-KML): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-8 (WKT-KML): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:ehMeet(?aWKT, ?cKML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-3-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 3) (WKT-DGGS): Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-3-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehMeet",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:ehMeet(?aWKT, ?cDGGS) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (WKT-WKT): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-1 (WKT-WKT): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GML-WKT): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-10 (GML-WKT): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GML-GeoJSON): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GML-KML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-12 (GML-KML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GML-DGGS): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-13 (GML-DGGS): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GeoJSON-WKT): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GeoJSON-GML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GeoJSON-KML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GeoJSON-DGGS): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (KML-WKT): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-18 (KML-WKT): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (KML-GML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-19 (KML-GML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GML-GML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-2 (GML-GML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (KML-GeoJSON): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (KML-DGGS): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-21 (KML-DGGS): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (DGGS-WKT): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (DGGS-GML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-23 (DGGS-GML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (DGGS-GeoJSON): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (DGGS-KML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-25 (DGGS-KML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (GeoJSON-GeoJSON): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (KML-KML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-4 (KML-KML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (DGGS-DGGS): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (WKT-GML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-6 (WKT-GML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (WKT-GeoJSON): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dGeoJSON) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (WKT-KML): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-8 (WKT-KML): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dKML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-4-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 4) (WKT-DGGS): Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-4-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehOverlap",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:ehOverlap(?a%%lliteral1%%, ?dDGGS) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (WKT-WKT): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-1 (WKT-WKT): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aWKT, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GML-WKT): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-10 (GML-WKT): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aGML, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GML-GeoJSON): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aGML, ?bGeoJSON) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GML-KML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-12 (GML-KML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aGML, ?bKML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GML-DGGS): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-13 (GML-DGGS): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aGML, ?bDGGS) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GeoJSON-WKT): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aGeoJSON, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GeoJSON-GML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aGeoJSON, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GeoJSON-KML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aGeoJSON, ?bKML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GeoJSON-DGGS): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aGeoJSON, ?bDGGS) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (KML-WKT): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-18 (KML-WKT): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aKML, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (KML-GML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-19 (KML-GML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aKML, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GML-GML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-2 (GML-GML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aGML, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (KML-GeoJSON): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aKML, ?bGeoJSON) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (KML-DGGS): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-21 (KML-DGGS): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aKML, ?bDGGS) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (DGGS-WKT): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aDGGS, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (DGGS-GML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-23 (DGGS-GML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aDGGS, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (DGGS-GeoJSON): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aDGGS, ?bGeoJSON) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (DGGS-KML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-25 (DGGS-KML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aDGGS, ?bKML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (GeoJSON-GeoJSON): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aGeoJSON, ?bGeoJSON) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (KML-KML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-4 (KML-KML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aKML, ?bKML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (DGGS-DGGS): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aDGGS, ?bDGGS) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (WKT-GML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-6 (WKT-GML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aWKT, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (WKT-GeoJSON): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:ehCovers(?aWKT, ?bGeoJSON) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (WKT-KML): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-8 (WKT-KML): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:ehCovers(?aWKT, ?bKML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-5-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 5) (WKT-DGGS): Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-5-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehCovers",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:ehCovers(?aWKT, ?bDGGS) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (WKT-WKT): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-1 (WKT-WKT): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bWKT, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GML-WKT): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-10 (GML-WKT): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bGML, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GML-GeoJSON): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bGML, ?aGeoJSON) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GML-KML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-12 (GML-KML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bGML, ?aKML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GML-DGGS): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-13 (GML-DGGS): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bGML, ?aDGGS) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GeoJSON-WKT): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GeoJSON-GML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GeoJSON-KML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aKML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GeoJSON-DGGS): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aDGGS) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (KML-WKT): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-18 (KML-WKT): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bKML, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (KML-GML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-19 (KML-GML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bKML, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GML-GML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-2 (GML-GML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bGML, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (KML-GeoJSON): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bKML, ?aGeoJSON) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (KML-DGGS): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-21 (KML-DGGS): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bKML, ?aDGGS) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (DGGS-WKT): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (DGGS-GML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-23 (DGGS-GML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (DGGS-GeoJSON): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aGeoJSON) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (DGGS-KML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-25 (DGGS-KML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aKML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (GeoJSON-GeoJSON): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bGeoJSON, ?aGeoJSON) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (KML-KML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-4 (KML-KML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bKML, ?aKML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (DGGS-DGGS): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bDGGS, ?aDGGS) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (WKT-GML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-6 (WKT-GML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bWKT, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (WKT-GeoJSON): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehCoveredBy(?bWKT, ?aGeoJSON) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (WKT-KML): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-8 (WKT-KML): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehCoveredBy(?bWKT, ?aKML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-6-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 6) (WKT-DGGS): Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-6-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehCoveredBy",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehCoveredBy(?bWKT, ?aDGGS) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (WKT-WKT): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-1 (WKT-WKT): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fWKT, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GML-WKT): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-10 (GML-WKT): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fGML, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GML-GeoJSON): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fGML, ?aGeoJSON) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GML-KML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-12 (GML-KML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fGML, ?aKML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GML-DGGS): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-13 (GML-DGGS): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fGML, ?aDGGS) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GeoJSON-WKT): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fGeoJSON, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GeoJSON-GML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fGeoJSON, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GeoJSON-KML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fGeoJSON, ?aKML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GeoJSON-DGGS): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fGeoJSON, ?aDGGS) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (KML-WKT): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-18 (KML-WKT): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fKML, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (KML-GML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-19 (KML-GML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fKML, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GML-GML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-2 (GML-GML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fGML, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (KML-GeoJSON): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fKML, ?aGeoJSON) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (KML-DGGS): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-21 (KML-DGGS): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fKML, ?aDGGS) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (DGGS-WKT): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fDGGS, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (DGGS-GML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-23 (DGGS-GML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fDGGS, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (DGGS-GeoJSON): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fDGGS, ?aGeoJSON) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (DGGS-KML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-25 (DGGS-KML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fDGGS, ?aKML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (GeoJSON-GeoJSON): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fGeoJSON, ?aGeoJSON) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (KML-KML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-4 (KML-KML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fKML, ?aKML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (DGGS-DGGS): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fDGGS, ?aDGGS) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (WKT-GML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-6 (WKT-GML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fWKT, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (WKT-GeoJSON): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:ehInside(?fWKT, ?aGeoJSON) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (WKT-KML): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-8 (WKT-KML): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:ehInside(?fWKT, ?aKML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-7-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 7) (WKT-DGGS): Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-7-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehInside",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:ehInside(?fWKT, ?aDGGS) as ?ehInside)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-1.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (WKT-WKT): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-1 (WKT-WKT): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aWKT, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-10.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GML-WKT): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-10 (GML-WKT): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aGML, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-11.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GML-GeoJSON): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-11 (GML-GeoJSON): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aGML, ?fGeoJSON) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-12.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GML-KML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-12 (GML-KML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aGML, ?fKML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-13.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GML-DGGS): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-13 (GML-DGGS): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aGML, ?fDGGS) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-14.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GeoJSON-WKT): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-14 (GeoJSON-WKT): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aGeoJSON, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-15.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GeoJSON-GML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-15 (GeoJSON-GML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aGeoJSON, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-16.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GeoJSON-KML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-16 (GeoJSON-KML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aGeoJSON, ?fKML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-17.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GeoJSON-DGGS): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-17 (GeoJSON-DGGS): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aGeoJSON, ?fDGGS) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-18.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (KML-WKT): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-18 (KML-WKT): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aKML, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-19.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (KML-GML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-19 (KML-GML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aKML, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-2.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GML-GML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-2 (GML-GML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aGML, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-20.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (KML-GeoJSON): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-20 (KML-GeoJSON): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aKML, ?fGeoJSON) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-21.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (KML-DGGS): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-21 (KML-DGGS): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aKML, ?fDGGS) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-22.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (DGGS-WKT): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-22 (DGGS-WKT): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aDGGS, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-23.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (DGGS-GML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-23 (DGGS-GML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aDGGS, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-24.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (DGGS-GeoJSON): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-24 (DGGS-GeoJSON): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aDGGS, ?fGeoJSON) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-25.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (DGGS-KML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-25 (DGGS-KML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aDGGS, ?fKML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-3.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (GeoJSON-GeoJSON): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-3 (GeoJSON-GeoJSON): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aGeoJSON, ?fGeoJSON) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-4.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (KML-KML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-4 (KML-KML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aKML, ?fKML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-5.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (DGGS-DGGS): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-5 (DGGS-DGGS): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aDGGS, ?fDGGS) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-6.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (WKT-GML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-6 (WKT-GML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aWKT, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-7.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (WKT-GeoJSON): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-7 (WKT-GeoJSON): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGeoJSON ?fGeoJSON .\n  BIND (geof:ehContains(?aWKT, ?fGeoJSON) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-8.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (WKT-KML): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-8 (WKT-KML): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asKML ?fKML .\n  BIND (geof:ehContains(?aWKT, ?fKML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r45-8-9.rq": {
    "answers": {},
    "definition": "Requirement 45 (Part 8) (WKT-DGGS): Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 45-8-9 (WKT-DGGS): Egenhofer Query Functions: geof:ehContains",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asDGGS ?fDGGS .\n  BIND (geof:ehContains(?aWKT, ?fDGGS) as ?ehContains)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-1-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 1) (WKT-WKT): Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-1-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8eq",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8eq(?aWKT, ?aWKT) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-1-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 1) (GML-GML): Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-1-2 (GML-GML): RCC8 Query Functions: geof:rcc8eq",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8eq(?aGML, ?aGML) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-1-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 1) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-1-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8eq",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8eq(?aGeoJSON, ?aGeoJSON) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-1-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 1) (KML-KML): Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-1-4 (KML-KML): RCC8 Query Functions: geof:rcc8eq",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8eq(?aKML, ?aKML) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-1-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 1) (DGGS-DGGS): Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-1-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8eq",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8eq(?aDGGS, ?aDGGS) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (WKT-WKT): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bWKT, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GML-WKT): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-10 (GML-WKT): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bGML, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GML-GeoJSON): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bGML, ?cGeoJSON) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GML-KML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-12 (GML-KML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bGML, ?cKML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GML-DGGS): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bGML, ?cDGGS) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GeoJSON-WKT): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GeoJSON-GML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GeoJSON-KML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cKML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GeoJSON-DGGS): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cDGGS) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (KML-WKT): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-18 (KML-WKT): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bKML, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (KML-GML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-19 (KML-GML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bKML, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GML-GML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-2 (GML-GML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bGML, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (KML-GeoJSON): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bKML, ?cGeoJSON) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (KML-DGGS): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bKML, ?cDGGS) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (DGGS-WKT): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bDGGS, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (DGGS-GML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bDGGS, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (DGGS-GeoJSON): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bDGGS, ?cGeoJSON) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (DGGS-KML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bDGGS, ?cKML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bGeoJSON, ?cGeoJSON) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (KML-KML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-4 (KML-KML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bKML, ?cKML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (DGGS-DGGS): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bDGGS, ?cDGGS) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (WKT-GML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-6 (WKT-GML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bWKT, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (WKT-GeoJSON): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8dc(?bWKT, ?cGeoJSON) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (WKT-KML): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-8 (WKT-KML): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8dc(?bWKT, ?cKML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-2-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 2) (WKT-DGGS): Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-2-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8dc",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8dc(?bWKT, ?cDGGS) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (WKT-WKT): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aWKT, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GML-WKT): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-10 (GML-WKT): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aGML, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GML-GeoJSON): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aGML, ?cGeoJSON) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GML-KML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-12 (GML-KML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aGML, ?cKML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GML-DGGS): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aGML, ?cDGGS) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GeoJSON-WKT): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GeoJSON-GML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GeoJSON-KML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cKML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GeoJSON-DGGS): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cDGGS) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (KML-WKT): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-18 (KML-WKT): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aKML, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (KML-GML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-19 (KML-GML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aKML, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GML-GML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-2 (GML-GML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aGML, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (KML-GeoJSON): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aKML, ?cGeoJSON) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (KML-DGGS): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aKML, ?cDGGS) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (DGGS-WKT): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aDGGS, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (DGGS-GML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aDGGS, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (DGGS-GeoJSON): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aDGGS, ?cGeoJSON) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (DGGS-KML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aDGGS, ?cKML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aGeoJSON, ?cGeoJSON) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (KML-KML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-4 (KML-KML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aKML, ?cKML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (DGGS-DGGS): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aDGGS, ?cDGGS) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (WKT-GML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-6 (WKT-GML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aWKT, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (WKT-GeoJSON): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGeoJSON ?cGeoJSON .\n  BIND (geof:rcc8ec(?aWKT, ?cGeoJSON) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (WKT-KML): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-8 (WKT-KML): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asKML ?cKML .\n  BIND (geof:rcc8ec(?aWKT, ?cKML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-3-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 3) (WKT-DGGS): Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-3-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8ec",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asDGGS ?cDGGS .\n  BIND (geof:rcc8ec(?aWKT, ?cDGGS) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (WKT-WKT): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aWKT, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GML-WKT): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-10 (GML-WKT): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aGML, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GML-GeoJSON): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aGML, ?dGeoJSON) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GML-KML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-12 (GML-KML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aGML, ?dKML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GML-DGGS): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aGML, ?dDGGS) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GeoJSON-WKT): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aGeoJSON, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GeoJSON-GML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aGeoJSON, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GeoJSON-KML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aGeoJSON, ?dKML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GeoJSON-DGGS): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aGeoJSON, ?dDGGS) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (KML-WKT): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-18 (KML-WKT): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aKML, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (KML-GML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-19 (KML-GML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aKML, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GML-GML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-2 (GML-GML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aGML, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (KML-GeoJSON): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aKML, ?dGeoJSON) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (KML-DGGS): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aKML, ?dDGGS) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (DGGS-WKT): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aDGGS, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (DGGS-GML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aDGGS, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (DGGS-GeoJSON): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aDGGS, ?dGeoJSON) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (DGGS-KML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aDGGS, ?dKML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aGeoJSON, ?dGeoJSON) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (KML-KML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-4 (KML-KML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aKML, ?dKML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (DGGS-DGGS): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aDGGS, ?dDGGS) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (WKT-GML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-6 (WKT-GML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aWKT, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (WKT-GeoJSON): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGeoJSON ?dGeoJSON .\n  BIND (geof:rcc8po(?aWKT, ?dGeoJSON) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (WKT-KML): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-8 (WKT-KML): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asKML ?dKML .\n  BIND (geof:rcc8po(?aWKT, ?dKML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-4-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 4) (WKT-DGGS): Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-4-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8po",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asDGGS ?dDGGS .\n  BIND (geof:rcc8po(?aWKT, ?dDGGS) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (WKT-WKT): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aWKT, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GML-WKT): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-10 (GML-WKT): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aGML, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GML-GeoJSON): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aGML, ?bGeoJSON) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GML-KML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-12 (GML-KML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aGML, ?bKML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GML-DGGS): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aGML, ?bDGGS) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GeoJSON-WKT): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GeoJSON-GML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GeoJSON-KML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bKML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GeoJSON-DGGS): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bDGGS) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (KML-WKT): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-18 (KML-WKT): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aKML, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (KML-GML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-19 (KML-GML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aKML, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GML-GML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-2 (GML-GML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aGML, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (KML-GeoJSON): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aKML, ?bGeoJSON) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (KML-DGGS): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aKML, ?bDGGS) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (DGGS-WKT): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aDGGS, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (DGGS-GML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aDGGS, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (DGGS-GeoJSON): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aDGGS, ?bGeoJSON) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (DGGS-KML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aDGGS, ?bKML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aGeoJSON, ?bGeoJSON) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (KML-KML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-4 (KML-KML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aKML, ?bKML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (DGGS-DGGS): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aDGGS, ?bDGGS) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (WKT-GML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-6 (WKT-GML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aWKT, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (WKT-GeoJSON): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  BIND (geof:rcc8tppi(?aWKT, ?bGeoJSON) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (WKT-KML): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-8 (WKT-KML): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  BIND (geof:rcc8tppi(?aWKT, ?bKML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-5-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 5) (WKT-DGGS): Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-5-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8tppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  BIND (geof:rcc8tppi(?aWKT, ?bDGGS) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (WKT-WKT): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bWKT, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GML-WKT): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-10 (GML-WKT): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bGML, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GML-GeoJSON): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bGML, ?aGeoJSON) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GML-KML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-12 (GML-KML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bGML, ?aKML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GML-DGGS): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bGML, ?aDGGS) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GeoJSON-WKT): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GeoJSON-GML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GeoJSON-KML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aKML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GeoJSON-DGGS): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aDGGS) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (KML-WKT): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-18 (KML-WKT): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bKML, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (KML-GML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-19 (KML-GML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bKML, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GML-GML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-2 (GML-GML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bGML, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (KML-GeoJSON): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bKML, ?aGeoJSON) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (KML-DGGS): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bKML, ?aDGGS) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (DGGS-WKT): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bDGGS, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (DGGS-GML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bDGGS, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (DGGS-GeoJSON): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bDGGS, ?aGeoJSON) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (DGGS-KML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bDGGS, ?aKML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGeoJSON ?bGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bGeoJSON, ?aGeoJSON) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (KML-KML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-4 (KML-KML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asKML ?bKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bKML, ?aKML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (DGGS-DGGS): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asDGGS ?bDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bDGGS, ?aDGGS) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (WKT-GML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-6 (WKT-GML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bWKT, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (WKT-GeoJSON): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8tpp(?bWKT, ?aGeoJSON) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (WKT-KML): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-8 (WKT-KML): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8tpp(?bWKT, ?aKML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-6-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 6) (WKT-DGGS): Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-6-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8tpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8tpp(?bWKT, ?aDGGS) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (WKT-WKT): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gWKT, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GML-WKT): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-10 (GML-WKT): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gGML, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GML-GeoJSON): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gGML, ?aGeoJSON) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GML-KML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-12 (GML-KML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gGML, ?aKML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GML-DGGS): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gGML, ?aDGGS) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GeoJSON-WKT): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GeoJSON-GML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GeoJSON-KML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aKML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GeoJSON-DGGS): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aDGGS) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (KML-WKT): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-18 (KML-WKT): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gKML, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (KML-GML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-19 (KML-GML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gKML, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GML-GML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-2 (GML-GML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gGML, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (KML-GeoJSON): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gKML, ?aGeoJSON) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (KML-DGGS): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gKML, ?aDGGS) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (DGGS-WKT): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (DGGS-GML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (DGGS-GeoJSON): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aGeoJSON) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (DGGS-KML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aKML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gGeoJSON, ?aGeoJSON) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (KML-KML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-4 (KML-KML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gKML, ?aKML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (DGGS-DGGS): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gDGGS, ?aDGGS) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (WKT-GML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-6 (WKT-GML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gWKT, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (WKT-GeoJSON): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  BIND (geof:rcc8ntpp(?gWKT, ?aGeoJSON) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (WKT-KML): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-8 (WKT-KML): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  BIND (geof:rcc8ntpp(?gWKT, ?aKML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-7-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 7) (WKT-DGGS): Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-7-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8ntpp",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  BIND (geof:rcc8ntpp(?gWKT, ?aDGGS) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-1.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (WKT-WKT): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-1 (WKT-WKT): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aWKT, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-10.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GML-WKT): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-10 (GML-WKT): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aGML, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-11.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GML-GeoJSON): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-11 (GML-GeoJSON): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aGML, ?gGeoJSON) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-12.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GML-KML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-12 (GML-KML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aGML, ?gKML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-13.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GML-DGGS): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-13 (GML-DGGS): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aGML, ?gDGGS) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-14.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GeoJSON-WKT): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-14 (GeoJSON-WKT): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-15.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GeoJSON-GML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-15 (GeoJSON-GML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-16.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GeoJSON-KML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-16 (GeoJSON-KML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gKML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-17.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GeoJSON-DGGS): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-17 (GeoJSON-DGGS): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gDGGS) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-18.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (KML-WKT): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-18 (KML-WKT): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aKML, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-19.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (KML-GML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-19 (KML-GML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aKML, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-2.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GML-GML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-2 (GML-GML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aGML, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-20.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (KML-GeoJSON): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-20 (KML-GeoJSON): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aKML, ?gGeoJSON) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-21.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (KML-DGGS): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-21 (KML-DGGS): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aKML, ?gDGGS) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-22.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (DGGS-WKT): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-22 (DGGS-WKT): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-23.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (DGGS-GML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-23 (DGGS-GML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-24.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (DGGS-GeoJSON): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-24 (DGGS-GeoJSON): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gGeoJSON) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-25.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (DGGS-KML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-25 (DGGS-KML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gKML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-3.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (GeoJSON-GeoJSON): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-3 (GeoJSON-GeoJSON): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGeoJSON ?aGeoJSON .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aGeoJSON, ?gGeoJSON) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-4.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (KML-KML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-4 (KML-KML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asKML ?aKML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aKML, ?gKML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-5.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (DGGS-DGGS): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-5 (DGGS-DGGS): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asDGGS ?aDGGS .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aDGGS, ?gDGGS) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-6.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (WKT-GML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-6 (WKT-GML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aWKT, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-7.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (WKT-GeoJSON): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-7 (WKT-GeoJSON): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGeoJSON ?gGeoJSON .\n  BIND (geof:rcc8ntppi(?aWKT, ?gGeoJSON) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-8.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (WKT-KML): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-8 (WKT-KML): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asKML ?gKML .\n  BIND (geof:rcc8ntppi(?aWKT, ?gKML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r46-8-9.rq": {
    "answers": {},
    "definition": "Requirement 46 (Part 8) (WKT-DGGS): Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 46-8-9 (WKT-DGGS): RCC8 Query Functions: geof:rcc8ntppi",
    "module": "GTOP",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asDGGS ?gDGGS .\n  BIND (geof:rcc8ntppi(?aWKT, ?gDGGS) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": ""
  },
  "query-r47-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}": true
    },
    "definition": "Requirement 47 (Part 1): Basic graph pattern matching shall use the semantics defined by the RDFS Entailment Regime [W3C SPARQL Entailment]. Part 1 tests Subclass Inference using geo:Feature.",
    "label": "Requirement 47-1: Basic Graph Pattern: Subclass Inference using geo:Feature",
    "module": "RDFSE",
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type geo:Feature \n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/bgp-rdfs-ent",
    "weight": ""
  },
  "query-r47-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}": true
    },
    "definition": "Requirement 47 (Part 2): Basic graph pattern matching shall use the semantics defined by the RDFS Entailment Regime [W3C SPARQL Entailment]. Part 2 tests SubProperty Inference using geo:hasGeometry.",
    "label": "Requirement 47-2: Basic Graph Pattern: SubProperty Inference using geo:hasGeometry",
    "module": "RDFSE",
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f geo:hasGeometry ?g\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/bgp-rdfs-ent",
    "weight": ""
  },
  "query-r47-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}": true
    },
    "definition": "Requirement 47 (Part 3): Basic graph pattern matching shall use the semantics defined by the RDFS Entailment Regime [W3C SPARQL Entailment]. Part 3 tests SubProperty Inference using geo:hasDefaultGeometry.",
    "label": "Requirement 47-3: Basic Graph Pattern: SubProperty Inference using geo:hasDefaultGeometry",
    "module": "RDFSE",
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f geo:hasDefaultGeometry ?g\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/bgp-rdfs-ent",
    "weight": ""
  },
  "query-r48-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}]}}": true
    },
    "definition": "Requirement 48 (Part 1): WKT Geometry Types: Subclass Inference using sf:Surface",
    "label": "Requirement 48-1: WKT Geometry Types: Subclass Inference using sf:Surface",
    "module": "RDFSE",
    "query": "# INFERENCE\nPREFIX sf: <http://www.opengis.net/ont/sf#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type sf:Surface\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/wkt-geometry-types",
    "weight": ""
  },
  "query-r48-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}]}}": true
    },
    "definition": "Requirement 48 (Part 2): WKT Geometry Types: Subclass Inference using sf:Curve",
    "label": "Requirement 48-2: WKT Geometry Types: Subclass Inference using sf:Curve",
    "module": "RDFSE",
    "query": "# INFERENCE\nPREFIX sf: <http://www.opengis.net/ont/sf#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type sf:Curve\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/wkt-geometry-types",
    "weight": ""
  },
  "query-r49.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}]}}": true
    },
    "definition": "Requirement 49: Implementations shall support graph patterns involving terms from an RDFS/OWL class hierarchy of geometry types consistent with the GML schema that implements GM_Object using the specified version of GML [OGC 07-036].",
    "label": "Requirement 49: GML Geometry Types",
    "module": "RDFSE",
    "query": "# INFERENCE\nPREFIX gml: <http://www.opengis.net/ont/gml#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type gml:Surface\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/gml-geometry-types",
    "weight": ""
  },
  "query-r50-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 1): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfEquals.",
    "label": "Requirement 50-1: Simple Features Query Transformation Rules: geor:sfEquals",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:sfEquals ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 2): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfDisjoint.",
    "label": "Requirement 50-2: Simple Features Query Transformation Rules: geor:sfDisjoint",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfDisjoint ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 3): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfIntersects.",
    "label": "Requirement 50-3: Simple Features Query Transformation Rules: geor:sfIntersects",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfIntersects ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-4.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 4): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfTouches.",
    "label": "Requirement 50-4: Simple Features Query Transformation Rules: geor:sfTouches",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:sfTouches ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-5.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 5): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfCrosses.",
    "label": "Requirement 50-5: Simple Features Query Transformation Rules: geor:sfCrosses",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:E geo:sfCrosses ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-6.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 6): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfWithin.",
    "label": "Requirement 50-6: Simple Features Query Transformation Rules: geor:sfWithin",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:sfWithin my:A\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-7.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 7): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfContains.",
    "label": "Requirement 50-7: Simple Features Query Transformation Rules: geor:sfContains",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfContains ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r50-8.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 50 (Part 8): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfOverlaps.",
    "label": "Requirement 50-8: Simple Features Query Transformation Rules: geor:sfOverlaps",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:sfOverlaps ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": ""
  },
  "query-r51-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 1): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehEquals.",
    "label": "Requirement 51-1: Egenhofer Query Transformation Rules: geor:ehEquals",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehEquals ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 2): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehDisjoint.",
    "label": "Requirement 51-2: Egenhofer Query Transformation Rules: geor:ehDisjoint",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehDisjoint ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 3): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehMeet.",
    "label": "Requirement 51-3: Egenhofer Query Transformation Rules: geor:ehMeet",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:ehMeet ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-4.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 4): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehOverlap.",
    "label": "Requirement 51-4: Egenhofer Query Transformation Rules: geor:ehOverlap",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:ehOverlap ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-5.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 5): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehCovers.",
    "label": "Requirement 51-5: Egenhofer Query Transformation Rules: geor:ehCovers",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehCovers ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-6.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 6): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehCoveredBy.",
    "label": "Requirement 51-6: Egenhofer Query Transformation Rules: geor:ehCoveredBy",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehCoveredBy ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-7.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 7): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehInside.",
    "label": "Requirement 51-7: Egenhofer Query Transformation Rules: geor:ehInside",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehInside ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r51-8.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}]}}": true
    },
    "definition": "Requirement 51 (Part 8): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehContains.",
    "label": "Requirement 51-8: Egenhofer Query Transformation Rules: geor:ehContains",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehContains ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": ""
  },
  "query-r52-1.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 1): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8eq.",
    "label": "Requirement 52-1: RCC8 Query Transformation Rules: geor:rcc8eq",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:rcc8eq ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-2.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 2): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8dc.",
    "label": "Requirement 52-2: RCC8 Query Transformation Rules: geor:rcc8dc",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8dc ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-3.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 3): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8ec.",
    "label": "Requirement 52-3: RCC8 Query Transformation Rules: geor:rcc8ec",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:rcc8ec ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-4.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 4): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8po.",
    "label": "Requirement 52-4: RCC8 Query Transformation Rules: geor:rcc8po",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:rcc8po ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-5.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 5): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8tppi.",
    "label": "Requirement 52-5: RCC8 Query Transformation Rules: geor:rcc8tppi",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8tppi ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-6.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 6): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8tpp.",
    "label": "Requirement 52-6: RCC8 Query Transformation Rules: geor:rcc8tpp",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:rcc8tpp my:A\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-7.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 7): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8ntpp.",
    "label": "Requirement 52-7: RCC8 Query Transformation Rules: geor:rcc8ntpp",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:rcc8ntpp my:A\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  },
  "query-r52-8.rq": {
    "answers": {
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}": true
    },
    "definition": "Requirement 52 (Part 8): Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8ntppi.",
    "label": "Requirement 52-8: RCC8 Query Transformation Rules: geor:rcc8ntppi",
    "module": "QRW",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ntppi ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": ""
  }
}