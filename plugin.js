var EntitySchemaValidator = require('./');

module.exports = function EntitySchemaValidatorPlugin (options) {
  return function (entitySchema) {
    entitySchema.validate = EntitySchemaValidator(
      entitySchema.schema,
      options
    );
  };
};
