var express = require("express");
var router = express.Router();
var models = require("./models");
const faker = require("faker");

router.post("/", function(req, res) {
  var postData = req.body;
  //Throw back error when post body is empty.
  if (!postData || Object.keys(postData).length === 0) {
    res.status(400).send({
      error: {
        code: 400,
        message: "Please provide credentials."
      }
    });
  } else {
    //when post body is presented then construct the object.
    const newModel = {
      auth: {
        username: postData.auth.username,
        password: postData.auth.password
      }
    };
    models.data.push(newModel);
    const responseModel = {
      auth: {
        id: faker.random.uuid(),
        issuedAt: faker.date.past(1),
        expiresAt: faker.date.past(1),
        defaultPasswordUsed: faker.random.number(2) > 0 ? true : false
      }
    };
    res.send(responseModel);
  }
});

module.exports = router;
