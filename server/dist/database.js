"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var _require2 = require('./keys'),
    database = _require2.database;

var pool = new Pool(database);
module.exports = pool;