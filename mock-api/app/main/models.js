const faker = require("faker");
faker.seed(new Date().getMilliseconds());

module.exports = {
  data: {
    title: "App",
    id: faker.random.uuid(),
    user: `${faker.name.lastName()}`
  }
};
