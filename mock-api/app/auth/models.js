const faker = require("faker");
faker.seed(new Date().getMilliseconds());
const nItems = faker.random.number(5) + 5;

const models = new Array(nItems).fill(null).map(a => ({
  auth: {
    id: faker.random.uuid(),
    issuedAt: faker.date.past(1),
    expiresAt: faker.date.past(1),
    defaultPasswordUsed: faker.random.number(2) > 0 ? true : false
  }
}));

module.exports = {
  startRow: 0,
  endRow: nItems,
  totalRows: nItems,
  data: models
};
