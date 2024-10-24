const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`<h1>Welcome ${name}!</h1>`);
  }
  res.status(401).send("please enter credentials");
});
module.exports = router;
