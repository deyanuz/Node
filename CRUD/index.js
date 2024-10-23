const express = require("express");
const app = express();
//middleware for json
app.use(express.json());
//middleware for form
app.use(express.urlencoded({ extended: false }));

const productRoute = require("./routes/product.route.js");
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("HI");
});

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://zunayedkhanofficial:Nc43gRyljpErXnKz@backenddb.ddip3.mongodb.net/backenddb?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("success");
    app.listen(3000, () => {
      console.log("hello");
    });
  })
  .catch((e) => {
    console.log(e);
  });

// mongodb+srv://zunayedkhanofficial:<db_password>@backenddb.ddip3.mongodb.net/?retryWrites=true&w=majority&appName=backendDB
