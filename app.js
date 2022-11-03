require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/recipes", recipeRoutes);

const server = app.listen(PORT, () => {
    console.log(`server corriendo en ${PORT}`);
    //sequelize.sync({ alter: true });
});
  
module.exports = { app, server };