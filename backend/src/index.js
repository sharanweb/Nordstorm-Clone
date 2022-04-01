const express = require("express");
const app = express();
const cors = require("cors");

const usersController = require("./controllers/user.controller");
const mensController = require("./controllers/men.controller");
const womensController = require("./controllers/women.controller");
const cartController = require("./controllers/cart.controller");
const combiController = require("./controllers/combi.controler");
const singleController = require("./controllers/single.controller");
const checkoutController = require("./controllers/checkout.controller");
const { register, login } = require("./controllers/auth.controller");




app.use(cors());
app.use(express.json());

app.use("/users", usersController);
app.use("/mens", mensController);
app.use("/womens", womensController);
app.use("/cart", cartController);
app.use("/combi",combiController);
app.use("/single",singleController);
app.use("/checkout",checkoutController);
app.post("/register", register);
app.post("/login", login);



module.exports = app;