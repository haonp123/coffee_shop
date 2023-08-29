require("dotenv").config();
//Import packages
const express = require("express");
const mongoose = require("mongoose");

const UserRoutes = require("./routes/UserRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const CartRoutes = require("./routes/CartRoutes");
const NotifyRoutes = require("./routes/NotifyRoutes");

//Express App:
const app = express();

//Use middleware:
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Connect to db:
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT_NUMBER, () => {
            console.log(`#Connected to database & App listening on port ${process.env.PORT_NUMBER}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

//Routes:
app.use("/api/users", UserRoutes);
app.use("/api/carts", CartRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/notifications", NotifyRoutes);
