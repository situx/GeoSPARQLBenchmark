var gsb_10_benchmarkconfig={
  "query-r01.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"p\", \"o\"]}, \"results\": {\"bindings\": [{\"o\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}, \"p\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#hasExactGeometry\"}}]}}"
    ],
    "definition": "Implementations shall support the SPARQL Query Language for RDF [W3C SPARQL], the SPARQL Protocol for RDF [W3C SPARQL Protocol] and the SPARQL Query Results XML Format [W3C SPARQL Result Format] ",
    "label": "Requirement 1: SPARQL Protocol",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nSELECT ?p ?o\nWHERE {\n  my:A ?p ?o\n}\nORDER BY ?p ?o\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/core/sparql-protocol",
    "weight": 0.03333333333333333
  },
  "query-r02.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}"
    ],
    "definition": "Implementations shall allow the RDFS class geo:SpatialObject to be used in SPARQL graph patterns.",
    "label": "Requirement 2: Spatial Object Class",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:SpatialObject\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/core/spatial-object-class",
    "weight": 0.03333333333333333
  },
  "query-r03.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}]}}"
    ],
    "definition": "Implementations shall allow the RDFS class geo:Feature to be used in SPARQL graph patterns.",
    "label": "Requirement 3: Feature Class",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:Feature\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/core/feature-class",
    "weight": 0.03333333333333333
  },
  "query-r04-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfEquals to be used in SPARQL graph patterns.",
    "label": "Requirement 4-1: Simple Feature Spatial Relations: geo:sfEquals",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfEquals ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfDisjoint to be used in SPARQL graph patterns.",
    "label": "Requirement 4-2: Simple Feature Spatial Relations: geo:sfDisjoint",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfDisjoint ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfIntersects to be used in SPARQL graph patterns.",
    "label": "Requirement 4-3: Simple Feature Spatial Relations: geo:sfIntersects",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfIntersects ?f\n  FILTER (?f != my:A)\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfTouches to be used in SPARQL graph patterns.",
    "label": "Requirement 4-4: Simple Feature Spatial Relations: geo:sfTouches",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfTouches ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfCrosses to be used in SPARQL graph patterns.",
    "label": "Requirement 4-5: Simple Feature Spatial Relations: geo:sfCrosses",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:E geo:sfCrosses ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfWithin to be used in SPARQL graph patterns.",
    "label": "Requirement 4-6: Simple Feature Spatial Relations: geo:sfWithin",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfWithin ?f\n  FILTER (?f != my:B)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-7.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfContains to be used in SPARQL graph patterns.",
    "label": "Requirement 4-7: Simple Feature Spatial Relations: geo:sfContains",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfContains ?f\n  FILTER (?f != my:A)\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r04-8.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:sfOverlaps to be used in SPARQL graph patterns.",
    "label": "Requirement 4-8: Simple Feature Spatial Relations: geo:sfOverlaps",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfOverlaps ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/sf-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehEquals to be used in SPARQL graph patterns.",
    "label": "Requirement 5-1: Egenhofer Spatial Relations: geo:ehEquals",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehEquals ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehDisjoint to be used in SPARQL graph patterns.",
    "label": "Requirement 5-2: Egenhofer Spatial Relations: geo:ehDisjoint",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehDisjoint ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehMeet to be used in SPARQL graph patterns.",
    "label": "Requirement 5-3: Egenhofer Spatial Relations: geo:ehMeet",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehMeet ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehOverlap to be used in SPARQL graph patterns.",
    "label": "Requirement 5-4: Egenhofer Spatial Relations: geo:ehOverlap",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehOverlap ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehCovers to be used in SPARQL graph patterns.",
    "label": "Requirement 5-5: Egenhofer Spatial Relations: geo:ehCovers",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehCovers ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehCoveredBy to be used in SPARQL graph patterns.",
    "label": "Requirement 5-6: Egenhofer Spatial Relations: geo:ehCoveredBy",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehCoveredBy ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-7.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehInside to be used in SPARQL graph patterns.",
    "label": "Requirement 5-7: Egenhofer Spatial Relations: geo:ehInside",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:F geo:ehInside ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r05-8.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:ehContains to be used in SPARQL graph patterns.",
    "label": "Requirement 5-8: Egenhofer Spatial Relations: geo:ehContains",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehContains ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/eh-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8eq to be used in SPARQL graph patterns.",
    "label": "Requirement 6-1: RCC8 Spatial Relations: geo:rcc8eq",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8eq ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8dc to be used in SPARQL graph patterns.",
    "label": "Requirement 6-2: RCC8 Spatial Relations: geo:rcc8dc",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8dc ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8ec to be used in SPARQL graph patterns.",
    "label": "Requirement 6-3: RCC8 Spatial Relations: geo:rcc8ec",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ec ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8po to be used in SPARQL graph patterns.",
    "label": "Requirement 6-4: RCC8 Spatial Relations: geo:rcc8po",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8po ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8tppi to be used in SPARQL graph patterns.",
    "label": "Requirement 6-5: RCC8 Spatial Relations: geo:rcc8tppi",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8tppi ?f\n}\nORDER BY ?f\nLIMIT 1\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8tpp to be used in SPARQL graph patterns.",
    "label": "Requirement 6-6: RCC8 Spatial Relations: geo:rcc8tpp",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8tpp ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-7.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8ntpp to be used in SPARQL graph patterns.",
    "label": "Requirement 6-7: RCC8 Spatial Relations: geo:rcc8ntpp",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:rcc8ntpp ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r06-8.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:rcc8ntppi to be used in SPARQL graph patterns.",
    "label": "Requirement 6-8: RCC8 Spatial Relations: geo:rcc8ntppi",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ntppi ?f\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/topology-vocab-extension/rcc8-spatial-relations",
    "weight": 0.004166666666666667
  },
  "query-r07.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}"
    ],
    "definition": "Implementations shall allow the RDFS class geo:Geometry to be used in SPARQL graph patterns.",
    "label": "Requirement 7: Geometry Class",
    "query": "PREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT ?f\nWHERE {\n  ?f rdf:type geo:Geometry\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-class",
    "weight": 0.03333333333333333
  },
  "query-r08-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"geom\"]}, \"results\": {\"bindings\": [{\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:hasGeometry to be used in SPARQL graph patterns.",
    "label": "Requirement 8-1: Feature Properties: geo:hasGeometry",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  my:A geo:hasGeometry ?geom .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.016666666666666666
  },
  "query-r08-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"defaultGeom\"]}, \"results\": {\"bindings\": [{\"defaultGeom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:hasDefaultGeometry to be used in SPARQL graph patterns.",
    "label": "Requirement 8-2: Feature Properties: geo:hasDefaultGeometry",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?defaultGeom\nWHERE {\n  my:A geo:hasDefaultGeometry ?defaultGeom .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/feature-properties",
    "weight": 0.016666666666666666
  },
  "query-r09-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"dimension\"]}, \"results\": {\"bindings\": [{\"dimension\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#integer\", \"type\": \"literal\", \"value\": \"2\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:dimension to be used in SPARQL graph patterns.",
    "label": "Requirement 9-1: Geometry Properties: geo:dimension",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?dimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:dimension ?dimension .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.005555555555555556
  },
  "query-r09-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"coordinateDimension\"]}, \"results\": {\"bindings\": [{\"coordinateDimension\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#integer\", \"type\": \"literal\", \"value\": \"2\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:coordinateDimension to be used in SPARQL graph patterns.",
    "label": "Requirement 9-2: Geometry Properties: geo:coordinateDimension",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?coordinateDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:coordinateDimension ?coordinateDimension .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.005555555555555556
  },
  "query-r09-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"spatialDimension\"]}, \"results\": {\"bindings\": [{\"spatialDimension\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#integer\", \"type\": \"literal\", \"value\": \"2\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:spatialDimension to be used in SPARQL graph patterns.",
    "label": "Requirement 9-3: Geometry Properties: geo:spatialDimension",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?spatialDimension\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:spatialDimension ?spatialDimension .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.005555555555555556
  },
  "query-r09-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"isEmpty\"]}, \"results\": {\"bindings\": [{\"isEmpty\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"false\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:isEmpty to be used in SPARQL graph patterns.",
    "label": "Requirement 9-4: Geometry Properties: geo:isEmpty",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?isEmpty\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:isEmpty ?isEmpty .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.005555555555555556
  },
  "query-r09-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"isSimple\"]}, \"results\": {\"bindings\": [{\"isSimple\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:isSimple to be used in SPARQL graph patterns.",
    "label": "Requirement 9-5: Geometry Properties: geo:isSimple",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?isSimple\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:isSimple ?isSimple .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.005555555555555556
  },
  "query-r09-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"hasSerialization\"]}, \"results\": {\"bindings\": [{\"hasSerialization\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.6 34.1,-83.2 34.1,-83.2 34.5,-83.6 34.5,-83.6 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall allow the property geo:hasSerialization to be used in SPARQL graph patterns.",
    "label": "Requirement 9-6: Geometry Properties: geo:hasSerialization",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?hasSerialization\nWHERE {\n  my:A geo:hasGeometry ?aGeom .\n  ?aGeom geo:hasSerialization ?hasSerialization .\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-properties",
    "weight": 0.005555555555555556
  },
  "query-r10.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"wkt\"]}, \"results\": {\"bindings\": [{\"wkt\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"<http://www.opengis.net/def/crs/OGC/1.3/CRS84> Polygon((-83.6 34.1, -83.2 34.1, -83.2 34.5, -83.6 34.5, -83.6 34.1))\"}}]}}"
    ],
    "definition": "All RDFS Literals of type geo:wktLiteral shall consist of an optional URI identifying the coordinate reference system followed by Simple Features Well Known Text (WKT) describing a geometric value. Valid geo:wktLiterals are formed by concatenating a valid, absolute URI as defined in [RFC 2396], one or more spaces (Unicode U+0020 character) as a separator, and a WKT string as defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 10: WKT Literal",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?wkt\nWHERE {\n  my:AExactGeom geo:asWKT ?wkt .\n  FILTER (datatype(?wkt) = geo:wktLiteral)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal",
    "weight": 0.03333333333333333
  },
  "query-r11.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "The URI <http://www.opengis.net/def/crs/OGC/1.3/CRS84> shall be assumed as the spatial reference system for geo:wktLiterals that do not specify an explicit spatial reference system URI.",
    "label": "Requirement 11: WKT Literal Default SRS",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:J geo:hasDefaultGeometry ?jGeom .\n  ?jGeom geo:asWKT ?jWKT .\n  my:K geo:hasDefaultGeometry ?kGeom .\n  ?kGeom geo:asWKT ?kWKT .\n  BIND (geof:sfEquals(?jWKT, ?kWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal-default-srs",
    "weight": 0.03333333333333333
  },
  "query-r12.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Coordinate tuples within geo:wktLiterals shall be interpreted using the axis order defined in the spatial reference system used.",
    "label": "Requirement 12: WKT Literal Axis Order",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:L my:hasExactGeometry ?lGeom .\n  ?lGeom geo:asWKT ?lWKT .\n  my:M my:hasExactGeometry ?mGeom .\n  ?mGeom geo:asWKT ?mWKT .\n  BIND (geof:sfEquals(?lWKT, ?mWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-axis-order",
    "weight": 0.03333333333333333
  },
  "query-r13-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "An empty RDFS Literal of type geo:wktLiteral shall be interpreted as an empty geometry. Part 1 tests LineString geometries.",
    "label": "Requirement 13-1: Empty WKT Literal: LineString",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asWKT ?iWKT .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asWKT ?hWKT .\n  BIND (geof:sfEquals(?iWKT, ?hWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal-empty",
    "weight": 0.016666666666666666
  },
  "query-r13-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "An empty RDFS Literal of type geo:wktLiteral shall be interpreted as an empty geometry. Part 2 tests Point geometries.",
    "label": "Requirement 13-2: Empty WKT Literal: Point",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asWKT ?iWKT .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asWKT ?hWKT .\n  BIND (geof:sfEquals(?iWKT, ?hWKT) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/wkt-literal-empty",
    "weight": 0.016666666666666666
  },
  "query-r14.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"wkt\"]}, \"results\": {\"bindings\": [{\"wkt\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"<http://www.opengis.net/def/crs/OGC/1.3/CRS84> Polygon((-83.6 34.1, -83.2 34.1, -83.2 34.5, -83.6 34.5, -83.6 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall allow the RDF property geo:asWKT to be used in SPARQL graph patterns.",
    "label": "Requirement 14: geo:asWKT Property",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?wkt\nWHERE {\n  my:AExactGeom geo:asWKT ?wkt\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-as-wkt-literal",
    "weight": 0.03333333333333333
  },
  "query-r15.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"geom\"]}, \"results\": {\"bindings\": [{\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"geom\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}"
    ],
    "definition": "All geo:gmlLiterals shall consist of a valid element from the GML schema that implements a subtype of GM_Object as defined in [OGC 07-036].",
    "label": "Requirement 15: GML Literal",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?geom\nWHERE {\n  ?geom geo:asGML ?gml\n  FILTER(regex(str(?gml), \".*(AbstractCurveSegment|ArcByCenterPoint|CircleByCenterPoint|ArcString|Arc|Circle|ArcStringByBulge|ArcByBulge|Clothoid|GeodesicString|Geodesic|LineStringSegment|LineString|OffsetCurve|SplineCurve|BSpline|Bezier|PolynomialSpline|CubicSpline|Curve|OrientableCurve|CompositeCurve|Ring|LinearRing|OrientableSurface|CompositeSurface|Shell|Surface|Polygon|PolyhedralSurface|TriangulatedSurface|TriangulatedIrrefularNetwork|Point|Solid|CompositeSolid|GeometricComplex|Composite|CompositeCurve|MultiGeometry|MultiCurve|MultiPoint|MultiSolid|MultiSurface|Cone|Cylinder|Sphere|Rectangle|Triangle).*\", \"i\"))\n  FILTER(datatype(?gml) = geo:gmlLiteral)\n}\nORDER BY ?geom\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/gml-literal",
    "weight": 0.03333333333333333
  },
  "query-r16-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "An empty geo:gmlLiteral shall be interpreted as an empty geometry. Part 1 tests LineString geometries.",
    "label": "Requirement 16-1: Empty GML Literal: LineString",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I geo:hasDefaultGeometry ?iGeom .\n  ?iGeom geo:asGML ?iGML .\n  my:H geo:hasDefaultGeometry ?hGeom .\n  ?hGeom geo:asGML ?hGML .\n  BIND (geof:sfEquals(?iGML, ?hGML) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/gml-literal-empty",
    "weight": 0.016666666666666666
  },
  "query-r16-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "An empty geo:gmlLiteral shall be interpreted as an empty geometry. Part 2 tests Point geometries.",
    "label": "Requirement 16-2: Empty GML Literal: Point",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:I my:hasPointGeometry ?iGeom .\n  ?iGeom geo:asGML ?iGML .\n  my:H my:hasPointGeometry ?hGeom .\n  ?hGeom geo:asGML ?hGML .\n  BIND (geof:sfEquals(?iGML, ?hGML) as ?sfEquals)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/gml-literal-empty",
    "weight": 0.016666666666666666
  },
  "query-r18.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"gml\"]}, \"results\": {\"bindings\": [{\"gml\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\" srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.6 34.1 -83.2 34.1 -83.2 34.5 -83.6 34.5 -83.6 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall allow the RDF property geo:asGML to be used in SPARQL graph patterns.",
    "label": "Requirement 18: geo:asGML Property",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?gml\nWHERE {\n  my:AExactGeom geo:asGML ?gml\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/geometry-as-gml-literal",
    "weight": 0.03333333333333333
  },
  "query-r19-1-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\", \"distance\"]}, \"results\": {\"bindings\": [{\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"0.0\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"9387.01\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"10194.1\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}]}}"
    ],
    "definition": "Implementations shall support geof:distance as a SPARQL extension function, consistent with the definition of the corresponding function distance in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-1-1: Non-topological Query Functions: geof:distance (WKT-WKT)",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-1-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\", \"distance\"]}, \"results\": {\"bindings\": [{\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"0.0\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"9387.01\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"10194.1\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}]}}"
    ],
    "definition": "Implementations shall support geof:distance as a SPARQL extension function, consistent with the definition of the corresponding function distance in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-1-2: Non-topological Query Functions: geof:distance (GML-GML)",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-1-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\", \"distance\"]}, \"results\": {\"bindings\": [{\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"0.0\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"9387.01\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"10194.1\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}]}}"
    ],
    "definition": "Implementations shall support geof:distance as a SPARQL extension function, consistent with the definition of the corresponding function distance in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-1-3: Non-topological Query Functions: geof:distance (WKT-GML)",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cWKT, ?fGML, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-1-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\", \"distance\"]}, \"results\": {\"bindings\": [{\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"0.0\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"9387.01\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"distance\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#double\", \"type\": \"literal\", \"value\": \"10194.1\"}, \"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}]}}"
    ],
    "definition": "Implementations shall support geof:distance as a SPARQL extension function, consistent with the definition of the corresponding function distance in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-1-4: Non-topological Query Functions: geof:distance (GML-WKT)",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?f ?distance\nWHERE {\n  my:C my:hasExactGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  ?f my:hasExactGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  FILTER (?fGeom != ?cGeom)\n  FILTER (?f != my:H )\n  FILTER (?f != my:I )\n  BIND (geof:distance(?cGML, ?fWKT, uom:metre) as ?distance)\n}\nORDER BY ASC(?distance)\nLIMIT 3\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-2-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"buffer\"]}, \"results\": {\"bindings\": [{\"buffer\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-93.6 34.1,-93.6 34.5,-93.407852804032 36.450903220161,-92.838795325113 38.326834323651,-91.914696123025 40.055702330196,-90.671067811865 41.571067811865,-89.155702330196 42.814696123025,-87.426834323651 43.738795325113,-85.550903220161 44.307852804032,-83.6 44.5,-83.2 44.5,-81.249096779839 44.307852804032,-79.373165676349 43.738795325113,-77.644297669804 42.814696123025,-76.128932188135 41.571067811865,-74.885303876975 40.055702330196,-73.961204674887 38.326834323651,-73.392147195968 36.450903220161,-73.2 34.5,-73.2 34.1,-73.392147195968 32.149096779839,-73.961204674887 30.273165676349,-74.885303876975 28.544297669804,-76.128932188135 27.028932188135,-77.644297669804 25.785303876975,-79.373165676349 24.861204674887,-81.249096779839 24.292147195968,-83.2 24.1,-83.6 24.1,-85.550903220161 24.292147195968,-87.426834323651 24.861204674887,-89.155702330196 25.785303876975,-90.671067811865 27.028932188135,-91.914696123025 28.544297669804,-92.838795325113 30.273165676349,-93.407852804032 32.149096779839,-93.6 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:buffer as a SPARQL extension function, consistent with the definition of the corresponding function buffer in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-2-1: Non-topological Query Functions: geof:buffer (WKT)",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?wkt .\n  BIND (geof:buffer(?wkt, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-2-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"buffer\"]}, \"results\": {\"bindings\": [{\"buffer\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\" srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\"><gml:exterior><gml:LinearRing><gml:posList>-93.6 34.1 -93.6 34.5 -93.407852804032 36.450903220161 -92.838795325113 38.326834323651 -91.914696123025 40.055702330196 -90.671067811865 41.571067811865 -89.155702330196 42.814696123025 -87.426834323651 43.738795325113 -85.550903220161 44.307852804032 -83.6 44.5 -83.2 44.5 -81.249096779839 44.307852804032 -79.373165676349 43.738795325113 -77.644297669804 42.814696123025 -76.128932188135 41.571067811865 -74.885303876975 40.055702330196 -73.961204674887 38.326834323651 -73.392147195968 36.450903220161 -73.2 34.5 -73.2 34.1 -73.392147195968 32.149096779839 -73.961204674887 30.273165676349 -74.885303876975 28.544297669804 -76.128932188135 27.028932188135 -77.644297669804 25.785303876975 -79.373165676349 24.861204674887 -81.249096779839 24.292147195968 -83.2 24.1 -83.6 24.1 -85.550903220161 24.292147195968 -87.426834323651 24.861204674887 -89.155702330196 25.785303876975 -90.671067811865 27.028932188135 -91.914696123025 28.544297669804 -92.838795325113 30.273165676349 -93.407852804032 32.149096779839 -93.6 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:buffer as a SPARQL extension function, consistent with the definition of the corresponding function buffer in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-2-2: Non-topological Query Functions: geof:buffer (GML)",
    "query": "PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>\nPREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?buffer\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?gml .\n  BIND (geof:buffer(?gml, 10.0, uom:metre) as ?buffer)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-3-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"convexHull\"]}, \"results\": {\"bindings\": [{\"convexHull\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.6 34.1,-83.6 34.5,-83.2 34.5,-83.2 34.1,-83.6 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:convexHull as a SPARQL extension function, consistent with the definition of the corresponding function convexHull in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-3-1: Non-topological Query Functions: geof:convexHull (WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?wkt .\n  BIND (geof:convexHull(?wkt) as ?convexHull)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-3-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"convexHull\"]}, \"results\": {\"bindings\": [{\"convexHull\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\" srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.6 34.1 -83.6 34.5 -83.2 34.5 -83.2 34.1 -83.6 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:convexHull as a SPARQL extension function, consistent with the definition of the corresponding function convexHull in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-3-2: Non-topological Query Functions: geof:convexHull (GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?convexHull\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?gml .\n  BIND (geof:convexHull(?gml) as ?convexHull)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-4-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersection\"]}, \"results\": {\"bindings\": [{\"intersection\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.4 34.1,-83.6 34.1,-83.6 34.3,-83.4 34.3,-83.4 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:intersection as a SPARQL extension function, consistent with the definition of the corresponding function intersection in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-4-1: Non-topological Query Functions: geof:intersection (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aWKT, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-4-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersection\"]}, \"results\": {\"bindings\": [{\"intersection\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\" srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.4 34.1 -83.6 34.1 -83.6 34.3 -83.4 34.3 -83.4 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:intersection as a SPARQL extension function, consistent with the definition of the corresponding function intersection in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-4-2: Non-topological Query Functions: geof:intersection (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aGML, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-4-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersection\"]}, \"results\": {\"bindings\": [{\"intersection\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.4 34.1,-83.6 34.1,-83.6 34.3,-83.4 34.3,-83.4 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:intersection as a SPARQL extension function, consistent with the definition of the corresponding function intersection in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-4-3: Non-topological Query Functions: geof:intersection (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:intersection(?aWKT, ?bGML) as ?intersection)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-4-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersection\"]}, \"results\": {\"bindings\": [{\"intersection\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\" srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.4 34.1 -83.6 34.1 -83.6 34.3 -83.4 34.3 -83.4 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:intersection as a SPARQL extension function, consistent with the definition of the corresponding function intersection in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-4-3: Non-topological Query Functions: geof:intersection (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?intersection\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:intersection(?aGML, ?bWKT) as ?intersection)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-5-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"union\"]}, \"results\": {\"bindings\": [{\"union\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.4 34.1,-83.6 34.1,-83.6 34.3,-83.6 34.5,-83.2 34.5,-83.2 34.1,-83.4 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:union as a SPARQL extension function, consistent with the definition of the corresponding function union in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-5-1: Non-topological Query Functions: geof:union (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aWKT, ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-5-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"union\"]}, \"results\": {\"bindings\": [{\"union\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.4 34.1 -83.6 34.1 -83.6 34.3 -83.6 34.5 -83.2 34.5 -83.2 34.1 -83.4 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:union as a SPARQL extension function, consistent with the definition of the corresponding function union in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-5-2: Non-topological Query Functions: geof:union (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aGML, ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-5-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"union\"]}, \"results\": {\"bindings\": [{\"union\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.4 34.1,-83.6 34.1,-83.6 34.3,-83.6 34.5,-83.2 34.5,-83.2 34.1,-83.4 34.1))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:union as a SPARQL extension function, consistent with the definition of the corresponding function union in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-5-3: Non-topological Query Functions: geof:union (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:union(?aWKT, ?bGML) as ?union)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-5-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"union\"]}, \"results\": {\"bindings\": [{\"union\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.4 34.1 -83.6 34.1 -83.6 34.3 -83.6 34.5 -83.2 34.5 -83.2 34.1 -83.4 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:union as a SPARQL extension function, consistent with the definition of the corresponding function union in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-5-4: Non-topological Query Functions: geof:union (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?union\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:union(?aGML, ?bWKT) as ?union)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-6-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"difference\"]}, \"results\": {\"bindings\": [{\"difference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.6 34.3,-83.6 34.5,-83.2 34.5,-83.2 34.1,-83.4 34.1,-83.4 34.3,-83.6 34.3))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:difference as a SPARQL extension function, consistent with the definition of the corresponding function difference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-6-1: Non-topological Query Functions: geof:difference (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:difference(?aWKT, ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-6-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"difference\"]}, \"results\": {\"bindings\": [{\"difference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.6 34.3 -83.6 34.5 -83.2 34.5 -83.2 34.1 -83.4 34.1 -83.4 34.3 -83.6 34.3</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:difference as a SPARQL extension function, consistent with the definition of the corresponding function difference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-6-2: Non-topological Query Functions: geof:difference (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:difference(?aGML, ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-6-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"difference\"]}, \"results\": {\"bindings\": [{\"difference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"POLYGON((-83.6 34.3,-83.6 34.5,-83.2 34.5,-83.2 34.1,-83.4 34.1,-83.4 34.3,-83.6 34.3))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:difference as a SPARQL extension function, consistent with the definition of the corresponding function difference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-6-3: Non-topological Query Functions: geof:difference (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:difference(?aWKT, ?bGML) as ?difference)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-6-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"difference\"]}, \"results\": {\"bindings\": [{\"difference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.6 34.3 -83.6 34.5 -83.2 34.5 -83.2 34.1 -83.4 34.1 -83.4 34.3 -83.6 34.3</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:difference as a SPARQL extension function, consistent with the definition of the corresponding function difference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-6-4: Non-topological Query Functions: geof:difference (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?difference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:difference(?aGML, ?bWKT) as ?difference)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-7-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"symDifference\"]}, \"results\": {\"bindings\": [{\"symDifference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"MULTIPOLYGON(((-83.3 34.1,-83.6 34.1,-83.6 34.5,-83.2 34.5,-83.2 34.2,-83.3 34.2,-83.3 34.1)),((-83.3 34.1,-83.2 34.1,-83.2 34.2,-83.1 34.2,-83.1 34,-83.3 34,-83.3 34.1)))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:symDifference as a SPARQL extension function, consistent with the definition of the corresponding function symDifference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-7-1: Non-topological Query Functions: geof:symDfference (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aWKT, ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-7-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"symDifference\"]}, \"results\": {\"bindings\": [{\"symDifference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:MultiSurface srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>-83.3 34.1 -83.6 34.1 -83.6 34.5 -83.2 34.5 -83.2 34.2 -83.3 34.2 -83.3 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>-83.3 34.1 -83.2 34.1 -83.2 34.2 -83.1 34.2 -83.1 34.0 -83.3 34.0 -83.3 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:symDifference as a SPARQL extension function, consistent with the definition of the corresponding function symDifference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-7-2: Non-topological Query Functions: geof:symDifference (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aGML, ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": 0.0012345679012345679
  },
  "query-r19-7-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"symDifference\"]}, \"results\": {\"bindings\": [{\"symDifference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"MULTIPOLYGON(((-83.3 34.1,-83.6 34.1,-83.6 34.5,-83.2 34.5,-83.2 34.2,-83.3 34.2,-83.3 34.1)),((-83.3 34.1,-83.2 34.1,-83.2 34.2,-83.1 34.2,-83.1 34,-83.3 34,-83.3 34.1)))\"}}]}}"
    ],
    "definition": "Implementations shall support geof:symDifference as a SPARQL extension function, consistent with the definition of the corresponding function symDifference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-7-3: Non-topological Query Functions: geof:symDifference (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:symDifference(?aWKT, ?dGML) as ?symDifference)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-7-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"symDifference\"]}, \"results\": {\"bindings\": [{\"symDifference\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:MultiSurface srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>-83.3 34.1 -83.6 34.1 -83.6 34.5 -83.2 34.5 -83.2 34.2 -83.3 34.2 -83.3 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>-83.3 34.1 -83.2 34.1 -83.2 34.2 -83.1 34.2 -83.1 34.0 -83.3 34.0 -83.3 34.1</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:symDifference as a SPARQL extension function, consistent with the definition of the corresponding function symDifference in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-7-4: Non-topological Query Functions: geof:symDifference (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?symDifference\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:symDifference(?aGML, ?dWKT) as ?symDifference)\n}\n",
    "uri": "",
    "weight": 0.0006172839506172839
  },
  "query-r19-8-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"envelope\"]}, \"results\": {\"bindings\": [{\"envelope\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"BOX(-83.600009965897 34.099995934963,-83.199990081787 34.50000411272)\"}}]}}"
    ],
    "definition": "Implementations shall support geof:envelope as a SPARQL extension function, consistent with the definition of the corresponding function envelope in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-8-1: Non-topological Query Functions: geof:envelope (WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?wkt .\n  BIND (geof:envelope(?wkt) as ?envelope)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-8-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"envelope\"]}, \"results\": {\"bindings\": [{\"envelope\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:Polygon srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:exterior><gml:LinearRing><gml:posList>-83.6 34.1 -83.2 34.5 -83.2 34.1 -83.6 34.1 -83.6 34.5</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:envelope as a SPARQL extension function, consistent with the definition of the corresponding function envelope in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-8-2: Non-topological Query Functions: geof:envelope (GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?envelope\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?gml .\n  BIND (geof:envelope(?gml) as ?envelope)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-9-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"boundary\"]}, \"results\": {\"bindings\": [{\"boundary\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#wktLiteral\", \"type\": \"literal\", \"value\": \"LINESTRING(-83.6 34.1,-83.2 34.1,-83.2 34.5,-83.6 34.5,-83.6 34.1)\"}}]}}"
    ],
    "definition": "Implementations shall support geof:boundary as a SPARQL extension function, consistent with the definition of the corresponding function boundary in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-9-1: Non-topological Query Functions: geof:boundary (WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?wkt .\n  BIND (geof:boundary(?wkt) as ?boundary)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r19-9-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"boundary\"]}, \"results\": {\"bindings\": [{\"boundary\": {\"datatype\": \"http://www.opengis.net/ont/geosparql#gmlLiteral\", \"type\": \"literal\", \"value\": \"<gml:LineString srsName=\\\"http://www.opengis.net/def/crs/OGC/1.3/CRS84\\\" xmlns:gml=\\\"http://www.opengis.net/ont/gml\\\"><gml:posList>-83.6 34.1 -83.2 34.1 -83.2 34.5 -83.6 34.5 -83.6 34.1</gml:posList></gml:LineString>\"}}]}}"
    ],
    "definition": "Implementations shall support geof:boundary as a SPARQL extension function, consistent with the definition of the corresponding function boundary in Simple Features [ISO 19125-1].",
    "label": "Requirement 19-9-2: Non-topological Query Functions: geof:boundary (GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?boundary\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?gml .\n  BIND (geof:boundary(?gml) as ?boundary)\n}\n",
    "uri": "",
    "weight": 0.001851851851851852
  },
  "query-r20-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"srid\"]}, \"results\": {\"bindings\": [{\"srid\": {\"type\": \"literal\", \"value\": \"http://www.opengis.net/def/crs/OGC/1.3/CRS84\"}}]}}"
    ],
    "definition": "Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 20-1: SRID Function: geof:getSRID (WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asWKT ?wkt .\n  BIND (geof:getSRID(?wkt) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.016666666666666666
  },
  "query-r20-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"srid\"]}, \"results\": {\"bindings\": [{\"srid\": {\"type\": \"literal\", \"value\": \"http://www.opengis.net/def/crs/OGC/1.3/CRS84\"}}]}}"
    ],
    "definition": "Implementations shall support geof:getSRID as a SPARQL extension function.",
    "label": "Requirement 20-2: SRID Function: geof:getSRID (GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nSELECT ?srid\nWHERE {\n  my:A geo:hasDefaultGeometry ?geom .\n  ?geom geo:asGML ?gml .\n  BIND (geof:getSRID(?gml) as ?srid)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-extension/srid-function",
    "weight": 0.016666666666666666
  },
  "query-r21-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"relates\"]}, \"results\": {\"bindings\": [{\"relates\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 21-1: Relate Query Function: geof:relate (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": 0.011111111111111112
  },
  "query-r21-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"relates\"]}, \"results\": {\"bindings\": [{\"relates\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 21-2: Relate Query Function: geof:relate (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": 0.011111111111111112
  },
  "query-r21-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"relates\"]}, \"results\": {\"bindings\": [{\"relates\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 21-3: Relate Query Function: geof:relate (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aWKT, ?bGML, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": 0.005555555555555556
  },
  "query-r21-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"relates\"]}, \"results\": {\"bindings\": [{\"relates\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:relate as a SPARQL extension function, consistent with the relate operator defined in Simple Features [ISO 19125-1].",
    "label": "Requirement 21-4: Relate Query Function: geof:relate (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?relate) as ?relates)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  # \"T*****FF*\" refers to a 'contains' relation in DE-9IM\n  BIND (geof:relate(?aGML, ?bWKT, \"T*****FF*\"^^xsd:string) as ?relate)\n}\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/relate-query-function",
    "weight": 0.005555555555555556
  },
  "query-r22-1-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-1-1: Simple Features Query Functions: geof:sfEquals (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfEquals(?aWKT, ?aWKT) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-1-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-1-2: Simple Features Query Functions: geof:sfEquals (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfEquals(?aGML, ?aGML) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-1-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-1-3: Simple Features Query Functions: geof:sfEquals (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT ;\n         geo:asGML ?aGML .\n  BIND (geof:sfEquals(?aWKT, ?aGML) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-1-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-1-4: Simple Features Query Functions: geof:sfEquals (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT ;\n         geo:asGML ?aGML .\n  BIND (geof:sfEquals(?aGML, ?aWKT) as ?sfEquals)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-2-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-2-1: Simple Features Query Functions: geof:sfDisjoint (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cWKT, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-2-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-2-2: Simple Features Query Functions: geof:sfDisjoint (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cGML, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-2-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-2-3: Simple Features Query Functions: geof:sfDisjoint (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfDisjoint(?cWKT, ?fGML) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-2-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-2-4: Simple Features Query Functions: geof:sfDisjoint (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfDisjoint) as ?disjoint)\nWHERE {\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfDisjoint(?cGML, ?fWKT) as ?sfDisjoint)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-3-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersects\"]}, \"results\": {\"bindings\": [{\"intersects\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-3-1: Simple Features Query Functions: geof:sfIntersects (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aWKT, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-3-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersects\"]}, \"results\": {\"bindings\": [{\"intersects\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-3-2: Simple Features Query Functions: geof:sfIntersects (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aGML, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-3-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersects\"]}, \"results\": {\"bindings\": [{\"intersects\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-3-3: Simple Features Query Functions: geof:sfIntersects (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfIntersects(?aWKT, ?dGML) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-3-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"intersects\"]}, \"results\": {\"bindings\": [{\"intersects\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfIntersects as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-3-4: Simple Features Query Functions: geof:sfIntersects (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfIntersects) as ?intersects)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfIntersects(?aGML, ?dWKT) as ?sfIntersects)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-4-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"touches\"]}, \"results\": {\"bindings\": [{\"touches\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-4-1: Simple Features Query Functions: geof:sfTouches (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aWKT, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-4-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"touches\"]}, \"results\": {\"bindings\": [{\"touches\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-4-2: Simple Features Query Functions: geof:sfTouches (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aGML, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-4-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"touches\"]}, \"results\": {\"bindings\": [{\"touches\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-4-3: Simple Features Query Functions: geof:sfTouches (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:sfTouches(?aWKT, ?cGML) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-4-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"touches\"]}, \"results\": {\"bindings\": [{\"touches\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfTouches as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-4-4: Simple Features Query Functions: geof:sfTouches (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfTouches) as ?touches)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:sfTouches(?aGML, ?cWKT) as ?sfTouches)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-5-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"crosses\"]}, \"results\": {\"bindings\": [{\"crosses\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-5-1: Simple Features Query Functions: geof:sfCrosses (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eWKT, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-5-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"crosses\"]}, \"results\": {\"bindings\": [{\"crosses\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-5-2: Simple Features Query Functions: geof:sfCrosses (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eGML, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-5-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"crosses\"]}, \"results\": {\"bindings\": [{\"crosses\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-5-3: Simple Features Query Functions: geof:sfCrosses (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asWKT ?eWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfCrosses(?eWKT, ?aGML) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-5-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"crosses\"]}, \"results\": {\"bindings\": [{\"crosses\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfCrosses as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-5-4: Simple Features Query Functions: geof:sfCrosses (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfCrosses) as ?crosses)\nWHERE {\n  my:E geo:hasDefaultGeometry ?eGeom .\n  ?eGeom geo:asGML ?eGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfCrosses(?eGML, ?aWKT) as ?sfCrosses)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-6-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"within\"]}, \"results\": {\"bindings\": [{\"within\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-6-1: Simple Features Query Functions: geof:sfWithin (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bWKT, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-6-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"within\"]}, \"results\": {\"bindings\": [{\"within\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-6-2: Simple Features Query Functions: geof:sfWithin (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bGML, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-6-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"within\"]}, \"results\": {\"bindings\": [{\"within\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-6-3: Simple Features Query Functions: geof:sfWithin (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:sfWithin(?bWKT, ?aGML) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-6-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"within\"]}, \"results\": {\"bindings\": [{\"within\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfWithin as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-6-4: Simple Features Query Functions: geof:sfWithin (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfWithin) as ?within)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:sfWithin(?bGML, ?aWKT) as ?sfWithin)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-7-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-7-1: Simple Features Query Functions: geof:sfContains (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aWKT, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-7-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-7-2: Simple Features Query Functions: geof:sfContains (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aGML, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-7-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-7-3: Simple Features Query Functions: geof:sfContains (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:sfContains(?aWKT, ?fGML) as ?sfContains)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-7-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-7-4: Simple Features Query Functions: geof:sfContains (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:sfContains(?aGML, ?fWKT) as ?sfContains)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-8-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlaps\"]}, \"results\": {\"bindings\": [{\"overlaps\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-8-1: Simple Features Query Functions: geof:sfOverlaps (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aWKT, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-8-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlaps\"]}, \"results\": {\"bindings\": [{\"overlaps\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-8-2: Simple Features Query Functions: geof:sfOverlaps (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aGML, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r22-8-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlaps\"]}, \"results\": {\"bindings\": [{\"overlaps\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-8-3: Simple Features Query Functions: geof:sfOverlaps (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:sfOverlaps(?aWKT, ?dGML) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r22-8-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlaps\"]}, \"results\": {\"bindings\": [{\"overlaps\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:sfOverlaps as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 22-8-4: Simple Features Query Functions: geof:sfOverlaps (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?sfOverlaps) as ?overlaps)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:sfOverlaps(?aGML, ?dWKT) as ?sfOverlaps)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-1-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-1-1: Simple Features Query Functions: geof:ehEquals (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehEquals(?aWKT, ?aWKT) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-1-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-1-2: Simple Features Query Functions: geof:ehEquals (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehEquals(?aGML, ?aGML) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-1-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-1-3: Simple Features Query Functions: geof:ehEquals (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT ;\n         geo:asGML ?aGML .\n  BIND (geof:ehEquals(?aWKT, ?aGML) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-1-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehEquals as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-1-4: Simple Features Query Functions: geof:ehEquals (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehEquals) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT ;\n         geo:asGML ?aGML .\n  BIND (geof:ehEquals(?aGML, ?aWKT) as ?ehEquals)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-2-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-2-1: Simple Features Query Functions: geof:ehDisjoint (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bWKT, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-2-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-2-2: Simple Features Query Functions: geof:ehDisjoint (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bGML, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-2-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-2-3: Simple Features Query Functions: geof:ehDisjoint (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehDisjoint(?bWKT, ?cGML) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-2-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disjoint\"]}, \"results\": {\"bindings\": [{\"disjoint\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehDisjoint as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-2-4: Simple Features Query Functions: geof:ehDisjoint (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehDisjoint) as ?disjoint)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehDisjoint(?bGML, ?cWKT) as ?ehDisjoint)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-3-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"meet\"]}, \"results\": {\"bindings\": [{\"meet\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-3-1: Simple Features Query Functions: geof:ehMeet (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aWKT, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-3-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"meet\"]}, \"results\": {\"bindings\": [{\"meet\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-3-2: Simple Features Query Functions: geof:ehMeet (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aGML, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-3-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"meet\"]}, \"results\": {\"bindings\": [{\"meet\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-3-3: Simple Features Query Functions: geof:ehMeet (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:ehMeet(?aWKT, ?cGML) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-3-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"meet\"]}, \"results\": {\"bindings\": [{\"meet\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehMeet as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-3-4: Simple Features Query Functions: geof:ehMeet (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehMeet) as ?meet)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:ehMeet(?aGML, ?cWKT) as ?ehMeet)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-4-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlap\"]}, \"results\": {\"bindings\": [{\"overlap\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-4-1: Simple Features Query Functions: geof:ehOverlap (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?aWKT, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-4-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlap\"]}, \"results\": {\"bindings\": [{\"overlap\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-4-2: Simple Features Query Functions: geof:ehOverlap (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?aGML, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-4-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlap\"]}, \"results\": {\"bindings\": [{\"overlap\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-4-3: Simple Features Query Functions: geof:ehOverlap (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:ehOverlap(?aWKT, ?dGML) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-4-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"overlap\"]}, \"results\": {\"bindings\": [{\"overlap\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehOverlap as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-4-4: Simple Features Query Functions: geof:ehOverlap (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehOverlap) as ?overlap)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:ehOverlap(?aGML, ?dWKT) as ?ehOverlap)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-5-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"covers\"]}, \"results\": {\"bindings\": [{\"covers\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-5-1: Simple Features Query Functions: geof:ehCovers (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aWKT, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-5-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"covers\"]}, \"results\": {\"bindings\": [{\"covers\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-5-2: Simple Features Query Functions: geof:ehCovers (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aGML, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-5-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"covers\"]}, \"results\": {\"bindings\": [{\"covers\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-5-3: Simple Features Query Functions: geof:ehCovers (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:ehCovers(?aWKT, ?bGML) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-5-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"covers\"]}, \"results\": {\"bindings\": [{\"covers\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCovers as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-5-4: Simple Features Query Functions: geof:ehCovers (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCovers) as ?covers)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:ehCovers(?aGML, ?bWKT) as ?ehCovers)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-6-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"coveredBy\"]}, \"results\": {\"bindings\": [{\"coveredBy\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-6-1: Simple Features Query Functions: geof:ehCoveredBy (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bWKT, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-6-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"coveredBy\"]}, \"results\": {\"bindings\": [{\"coveredBy\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-6-2: Simple Features Query Functions: geof:ehCoveredBy (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bGML, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-6-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"coveredBy\"]}, \"results\": {\"bindings\": [{\"coveredBy\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-6-3: Simple Features Query Functions: geof:ehCoveredBy (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehCoveredBy(?bWKT, ?aGML) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-6-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"coveredBy\"]}, \"results\": {\"bindings\": [{\"coveredBy\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehCoveredBy as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-6-4: Simple Features Query Functions: geof:ehCoveredBy (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehCoveredBy) as ?coveredBy)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehCoveredBy(?bGML, ?aWKT) as ?ehCoveredBy)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-7-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"inside\"]}, \"results\": {\"bindings\": [{\"inside\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-7-1: Simple Features Query Functions: geof:ehInside (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fWKT, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-7-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"inside\"]}, \"results\": {\"bindings\": [{\"inside\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-7-2: Simple Features Query Functions: geof:ehInside (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fGML, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-7-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"inside\"]}, \"results\": {\"bindings\": [{\"inside\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-7-3: Simple Features Query Functions: geof:ehInside (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:ehInside(?fWKT, ?aGML) as ?ehInside)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-7-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"inside\"]}, \"results\": {\"bindings\": [{\"inside\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehInside as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-7-4: Simple Features Query Functions: geof:ehInside (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehInside) as ?inside)\nWHERE {\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:ehInside(?fGML, ?aWKT) as ?ehInside)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-8-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-8-1: Simple Features Query Functions: geof:ehContains (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aWKT, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-8-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-8-2: Simple Features Query Functions: geof:ehContains (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aGML, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r23-8-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-8-3: Simple Features Query Functions: geof:ehContains (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asGML ?fGML .\n  BIND (geof:ehContains(?aWKT, ?fGML) as ?ehContains)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r23-8-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"contains\"]}, \"results\": {\"bindings\": [{\"contains\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:ehContains as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 23-8-4: Simple Features Query Functions: geof:ehContains (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?ehContains) as ?contains)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:F geo:hasDefaultGeometry ?fGeom .\n  ?fGeom geo:asWKT ?fWKT .\n  BIND (geof:ehContains(?aGML, ?fWKT) as ?ehContains)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-1-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-1-1: Simple Features Query Functions: geof:rcc8eq (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8eq(?aWKT, ?aWKT) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-1-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-1-2: Simple Features Query Functions: geof:rcc8eq (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8eq(?aGML, ?aGML) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-1-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-1-3: Simple Features Query Functions: geof:rcc8eq (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT ;\n         geo:asGML ?aGML .\n  BIND (geof:rcc8eq(?aWKT, ?aGML) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-1-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"equals\"]}, \"results\": {\"bindings\": [{\"equals\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8eq as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-1-4: Simple Features Query Functions: geof:rcc8eq (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8eq) as ?equals)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT ;\n         geo:asGML ?aGML .\n  BIND (geof:rcc8eq(?aGML, ?aWKT) as ?rcc8eq)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-2-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disconnected\"]}, \"results\": {\"bindings\": [{\"disconnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-2-1: Simple Features Query Functions: geof:rcc8dc (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bWKT, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-2-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disconnected\"]}, \"results\": {\"bindings\": [{\"disconnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-2-2: Simple Features Query Functions: geof:rcc8dc (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bGML, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-2-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disconnected\"]}, \"results\": {\"bindings\": [{\"disconnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-2-3: Simple Features Query Functions: geof:rcc8dc (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8dc(?bWKT, ?cGML) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-2-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"disconnected\"]}, \"results\": {\"bindings\": [{\"disconnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8dc as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-2-4: Simple Features Query Functions: geof:rcc8dc (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8dc) as ?disconnected)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8dc(?bGML, ?cWKT) as ?rcc8dc)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-3-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"externallyConnected\"]}, \"results\": {\"bindings\": [{\"externallyConnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-3-1: Simple Features Query Functions: geof:rcc8ec (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aWKT, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-3-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"externallyConnected\"]}, \"results\": {\"bindings\": [{\"externallyConnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-3-2: Simple Features Query Functions: geof:rcc8ec (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aGML, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-3-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"externallyConnected\"]}, \"results\": {\"bindings\": [{\"externallyConnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-3-3: Simple Features Query Functions: geof:rcc8ec (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asGML ?cGML .\n  BIND (geof:rcc8ec(?aWKT, ?cGML) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-3-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"externallyConnected\"]}, \"results\": {\"bindings\": [{\"externallyConnected\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ec as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-3-4: Simple Features Query Functions: geof:rcc8ec (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ec) as ?externallyConnected)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:C geo:hasDefaultGeometry ?cGeom .\n  ?cGeom geo:asWKT ?cWKT .\n  BIND (geof:rcc8ec(?aGML, ?cWKT) as ?rcc8ec)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-4-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"partiallyOverlapping\"]}, \"results\": {\"bindings\": [{\"partiallyOverlapping\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-4-1: Simple Features Query Functions: geof:rcc8po (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aWKT, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-4-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"partiallyOverlapping\"]}, \"results\": {\"bindings\": [{\"partiallyOverlapping\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-4-2: Simple Features Query Functions: geof:rcc8po (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aGML, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-4-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"partiallyOverlapping\"]}, \"results\": {\"bindings\": [{\"partiallyOverlapping\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-4-3: Simple Features Query Functions: geof:rcc8po (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asGML ?dGML .\n  BIND (geof:rcc8po(?aWKT, ?dGML) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-4-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"partiallyOverlapping\"]}, \"results\": {\"bindings\": [{\"partiallyOverlapping\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8po as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-4-4: Simple Features Query Functions: geof:rcc8po (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8po) as ?partiallyOverlapping)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:D geo:hasDefaultGeometry ?dGeom .\n  ?dGeom geo:asWKT ?dWKT .\n  BIND (geof:rcc8po(?aGML, ?dWKT) as ?rcc8po)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-5-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"tangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-5-1: Simple Features Query Functions: geof:rcc8tppi (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aWKT, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-5-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"tangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-5-2: Simple Features Query Functions: geof:rcc8tppi (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aGML, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-5-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"tangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-5-3: Simple Features Query Functions: geof:rcc8tppi (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  BIND (geof:rcc8tppi(?aWKT, ?bGML) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-5-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"tangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-5-4: Simple Features Query Functions: geof:rcc8tppi (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tppi) as ?tangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  BIND (geof:rcc8tppi(?aGML, ?bWKT) as ?rcc8tppi)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-6-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPart\"]}, \"results\": {\"bindings\": [{\"tangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-6-1: Simple Features Query Functions: geof:rcc8tpp (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bWKT, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-6-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPart\"]}, \"results\": {\"bindings\": [{\"tangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-6-2: Simple Features Query Functions: geof:rcc8tpp (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bGML, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-6-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPart\"]}, \"results\": {\"bindings\": [{\"tangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-6-3: Simple Features Query Functions: geof:rcc8tpp (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asWKT ?bWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8tpp(?bWKT, ?aGML) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-6-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"tangentialProperPart\"]}, \"results\": {\"bindings\": [{\"tangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8tpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-6-4: Simple Features Query Functions: geof:rcc8tpp (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8tpp) as ?tangentialProperPart)\nWHERE {\n  my:B geo:hasDefaultGeometry ?bGeom .\n  ?bGeom geo:asGML ?bGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8tpp(?bGML, ?aWKT) as ?rcc8tpp)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-7-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPart\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-7-1: Simple Features Query Functions: geof:rcc8ntpp (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gWKT, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-7-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPart\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-7-2: Simple Features Query Functions: geof:rcc8ntpp (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gGML, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-7-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPart\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-7-3: Simple Features Query Functions: geof:rcc8ntpp (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  BIND (geof:rcc8ntpp(?gWKT, ?aGML) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-7-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPart\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPart\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntpp as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-7-4: Simple Features Query Functions: geof:rcc8ntpp (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntpp) as ?nonTangentialProperPart)\nWHERE {\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  BIND (geof:rcc8ntpp(?gGML, ?aWKT) as ?rcc8ntpp)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-8-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-8-1: Simple Features Query Functions: geof:rcc8ntppi (WKT-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aWKT, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-8-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-8-2: Simple Features Query Functions: geof:rcc8ntppi (GML-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aGML, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": 0.001388888888888889
  },
  "query-r24-8-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-8-3: Simple Features Query Functions: geof:rcc8ntppi (WKT-GML)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asWKT ?aWKT .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asGML ?gGML .\n  BIND (geof:rcc8ntppi(?aWKT, ?gGML) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r24-8-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"nonTangentialProperPartInverse\"]}, \"results\": {\"bindings\": [{\"nonTangentialProperPartInverse\": {\"datatype\": \"http://www.w3.org/2001/XMLSchema#boolean\", \"type\": \"literal\", \"value\": \"true\"}}]}}"
    ],
    "definition": "Implementations shall support geof:rcc8ntppi as a SPARQL extension function, consistent with its corresponding DE-9IM intersection pattern, as defined by Simple Features [ISO 19125-1].",
    "label": "Requirement 24-8-4: Simple Features Query Functions: geof:rcc8ntppi (GML-WKT)",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX geof: <http://www.opengis.net/def/function/geosparql/>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nSELECT (xsd:boolean(?rcc8ntppi) as ?nonTangentialProperPartInverse)\nWHERE {\n  my:A geo:hasDefaultGeometry ?aGeom .\n  ?aGeom geo:asGML ?aGML .\n  my:G geo:hasDefaultGeometry ?gGeom .\n  ?gGeom geo:asWKT ?gWKT .\n  BIND (geof:rcc8ntppi(?aGML, ?gWKT) as ?rcc8ntppi)\n}\n",
    "uri": "",
    "weight": 0.0006944444444444445
  },
  "query-r25-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RDFS Entailment Regime [W3C SPARQL Entailment]. Part 1 tests subclass inference using geo:Feature.",
    "label": "Requirement 25-1: Basic Graph Pattern: Subclass Inference",
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type geo:Feature \n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/bgp-rdfs-ent",
    "weight": 0.011111111111111112
  },
  "query-r25-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RDFS Entailment Regime [W3C SPARQL Entailment]. Part 2 tests subproperty inference using geo:hasGeometry.",
    "label": "Requirement 25-2: Basic Graph Pattern: SubProperty Inference geo:hasGeometry",
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f geo:hasGeometry ?g\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/bgp-rdfs-ent",
    "weight": 0.011111111111111112
  },
  "query-r25-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#M\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RDFS Entailment Regime [W3C SPARQL Entailment]. Part 3 tests subproperty inference using geo:hasDefaultGeometry.",
    "label": "Requirement 25-3: Basic Graph Pattern: SubProperty Inference geo:hasDefaultGeometry",
    "query": "# INFERENCE\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f geo:hasDefaultGeometry ?g\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/bgp-rdfs-ent",
    "weight": 0.011111111111111112
  },
  "query-r26-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}]}}"
    ],
    "definition": "Implementations shall support graph patterns involving terms from an RDFS/OWL class hierarchy of geometry types consistent with the one in the specified version of Simple Features [ISO 19125-1]. Part 1 tests subclass inference using sf:Surface.",
    "label": "Requirement 26-1: WKT Geometry Types: Subclass Inference using sf:Surface",
    "query": "# INFERENCE\nPREFIX sf: <http://www.opengis.net/ont/sf#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type sf:Surface\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/wkt-geometry-types",
    "weight": 0.016666666666666666
  },
  "query-r26-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}]}}"
    ],
    "definition": "Implementations shall support graph patterns involving terms from an RDFS/OWL class hierarchy of geometry types consistent with the one in the specified version of Simple Features [ISO 19125-1]. Part 2 tests subclass inference using sf:Curve.",
    "label": "Requirement 26-2: WKT Geometry Types: Subclass Inference using sf:Curve",
    "query": "# INFERENCE\nPREFIX sf: <http://www.opengis.net/ont/sf#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type sf:Curve\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/wkt-geometry-types",
    "weight": 0.016666666666666666
  },
  "query-r27.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}]}}"
    ],
    "definition": "Implementations shall support graph patterns involving terms from an RDFS/OWL class hierarchy of geometry types consistent with the GML schema that implements GM_Object using the specified version of GML [OGC 07-036].",
    "label": "Requirement 27: GML Geometry Types",
    "query": "# INFERENCE\nPREFIX gml: <http://www.opengis.net/ont/gml#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nSELECT DISTINCT ?f\nWHERE {\n  ?f rdf:type gml:Surface\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/geometry-topology-extension/gml-geometry-types",
    "weight": 0.03333333333333333
  },
  "query-r28-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfEquals.",
    "label": "Requirement 28-1: Simple Features Query Transformation Rules: geor:sfEquals",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:sfEquals ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfDisjoint.",
    "label": "Requirement 28-2: Simple Features Query Transformation Rules: geor:sfDisjoint",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:sfDisjoint ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfIntersects.",
    "label": "Requirement 28-3: Simple Features Query Transformation Rules: geor:sfIntersects",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfIntersects ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfTouches.",
    "label": "Requirement 28-4: Simple Features Query Transformation Rules: geor:sfTouches",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:sfTouches ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfCrosses.",
    "label": "Requirement 28-5: Simple Features Query Transformation Rules: geor:sfCrosses",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:E geo:sfCrosses ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfWithin.",
    "label": "Requirement 28-6: Simple Features Query Transformation Rules: geor:sfWithin",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:sfWithin my:A\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-7.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfContains.",
    "label": "Requirement 28-7: Simple Features Query Transformation Rules: geor:sfContains",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:sfContains ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r28-8.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:sfOverlaps.",
    "label": "Requirement 28-8: Simple Features Query Transformation Rules: geor:sfOverlaps",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:sfOverlaps ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/sf-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehEquals.",
    "label": "Requirement 29-1: Egenhofer Query Transformation Rules: geor:ehEquals",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehEquals ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#E\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#EExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#H\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#HPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#I\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#IPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#L\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#LExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#MExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehDisjoint.",
    "label": "Requirement 29-2: Egenhofer Query Transformation Rules: geor:ehDisjoint",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:ehDisjoint ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehMeet.",
    "label": "Requirement 29-3: Egenhofer Query Transformation Rules: geor:ehMeet",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:ehMeet ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehOverlap.",
    "label": "Requirement 29-4: Egenhofer Query Transformation Rules: geor:ehOverlap",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:ehOverlap ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehCovers.",
    "label": "Requirement 29-5: Egenhofer Query Transformation Rules: geor:ehCovers",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehCovers ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehCoveredBy.",
    "label": "Requirement 29-6: Egenhofer Query Transformation Rules: geor:ehCoveredBy",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehCoveredBy ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-7.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehInside.",
    "label": "Requirement 29-7: Egenhofer Query Transformation Rules: geor:ehInside",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:ehInside ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r29-8.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#APointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BPointGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GPointGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:ehContains.",
    "label": "Requirement 29-8: Egenhofer Query Transformation Rules: geor:ehContains",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:ehContains ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/eh-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-1.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8eq.",
    "label": "Requirement 30-1: RCC8 Query Transformation Rules: geor:rcc8eq",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:G geo:rcc8eq ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-2.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#C\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#CExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#D\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#DExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#J\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#JExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#K\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#KExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8dc.",
    "label": "Requirement 30-2: RCC8 Query Transformation Rules: geor:rcc8dc",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:B geo:rcc8dc ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-3.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8ec.",
    "label": "Requirement 30-3: RCC8 Query Transformation Rules: geor:rcc8ec",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:C geo:rcc8ec ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-4.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8po.",
    "label": "Requirement 30-4: RCC8 Query Transformation Rules: geor:rcc8po",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:D geo:rcc8po ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-5.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8tppi.",
    "label": "Requirement 30-5: RCC8 Query Transformation Rules: geor:rcc8tppi",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8tppi ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-6.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#B\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#BExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#F\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#FExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8tpp.",
    "label": "Requirement 30-6: RCC8 Query Transformation Rules: geor:rcc8tpp",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:rcc8tpp my:A\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-7.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8ntpp.",
    "label": "Requirement 30-7: RCC8 Query Transformation Rules: geor:rcc8ntpp",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  ?f geo:rcc8ntpp my:A\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  },
  "query-r30-8.rq": {
    "answers": [
      "{\"head\": {\"vars\": [\"f\"]}, \"results\": {\"bindings\": [{\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#A\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#AExactGeom\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#G\"}}, {\"f\": {\"type\": \"uri\", \"value\": \"http://example.org/ApplicationSchema#GExactGeom\"}}]}}"
    ],
    "definition": "Basic graph pattern matching shall use the semantics defined by the RIF Core Entailment Regime [W3C SPARQL Entailment] for the RIF rule [W3C RIF Core] geor:rcc8ntppi.",
    "label": "Requirement 30-8: RCC8 Query Transformation Rules: geor:rcc8ntppi",
    "query": "PREFIX my: <http://example.org/ApplicationSchema#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nSELECT ?f\nWHERE {\n  my:A geo:rcc8ntppi ?f\n}\nORDER BY ?f\n",
    "uri": "http://www.opengis.net/spec/geosparql/1.0/req/query-rewrite-extension/rcc8-query-rewrite",
    "weight": 0.004166666666666667
  }
}