var jjv = require('jjv');


// create singleton jjv environment
var env = jjv();

module.exports = function EntitySchemaValidator (schema, options) {

  // check schema
  if (typeof schema !== 'object') {
    var err = new Error('schema given is not an object.')
    err.schema = schema;
    throw err;
  }

  // default options
  options = options || {};

  // get id
  var id = schema.id;
  
  // add schema to environment
  env.addSchema(id, schema);

  // TODO add types
  // TODO add type coercions
  // TODO add checks
  // TODO add formats

  return function _EntitySchema_validate (obj) {
    return env.validate(id, obj)
  };
};

