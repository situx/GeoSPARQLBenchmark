(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.d3 = {}));
  }(this, function (exports) { 'use strict';
  
    var fetch;
    if (typeof window !== 'undefined') {
      fetch = window.fetch;
    } else {
      fetch = require('isomorphic-fetch');
    }
  
    function sparql (endpoint, query, options) {
      if((typeof options !== 'undefined') && "method" in options && options["method"]=="POST"){
      var url = endpoint
          var defaultOptions = {
              method: 'POST',
              headers: {
                  'Accept': 'application/sparql-results+json',
                  "Content-Type": "application/x-www-form-urlencoded"
              },
              body: "query="+encodeURIComponent(query)
          };
      }else{
      var url = endpoint + '?query=' + encodeURIComponent(query)
          var defaultOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/sparql-results+json'
        }
      };
  
      //Object.assign(defaultOptions, options);
      }
      
  
  
  
      return fetch(url, defaultOptions)
        .then(function (response) {
          return response.json()
        })
        .then(parseResponse)
    }
    var xmlSchema = 'http://www.w3.org/2001/XMLSchema#';
  
    function parseResponse (body) {
      return body/*result.bindings.map(function (row) {
        var rowObject = {};
        Object.keys(row).forEach(function (column) {
          rowObject[column] = row[column]//dataTypeToJS(row[column]);
        });
        return rowObject
      })*/
    }
  
    function dataTypeToJS (value) {
      var v = value.value;
      if (typeof value.datatype === 'string') {
        var dt = value.datatype.replace(xmlSchema, '');
        switch (dt) {
          case 'string':
            v = String(v); break
          case 'boolean':
            v = Boolean(v === 'false' ? false : v); break
          case 'float':
          case 'integer':
          case 'long':
          case 'double':
          case 'decimal':
          case 'nonPositiveInteger':
          case 'nonNegativeInteger':
          case 'negativeInteger':
          case 'int':
          case 'unsignedLong':
          case 'positiveInteger':
          case 'short':
          case 'unsignedInt':
          case 'byte':
          case 'unsignedShort':
          case 'unsignedByte':
            v = Number(v); break
          case 'date':
          case 'time':
          case 'dateTime':
            v = new Date(v); break
        }
      }
      return v
    }
  
    exports.sparql = sparql;
  
    Object.defineProperty(exports, '__esModule', { value: true });
  
  }));