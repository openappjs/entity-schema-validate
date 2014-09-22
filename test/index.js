var expect = require('chai').expect;

var personSchema = {
  id: "Person",
  type: 'object',
  properties: {
    name: {
      type: "string",
    },
  },
};

var people = [{
  name: "Bob",
}, {
  name: "Fred",
}];

describe("#EntitySchemaValidator", function () {
  var EntitySchemaValidator;

  it("should require module", function () {
    EntitySchemaValidator = require('../');
    expect(EntitySchemaValidator).to.exist;
  });

  it("should validate people", function () {
    var validatePerson = EntitySchemaValidator(personSchema);
    expect(validatePerson).to.exist;
    people.forEach(function (person) {
      var errors = validatePerson(person);
      expect(errors).to.be.null;
    });
  });
});
