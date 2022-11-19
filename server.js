const express = require("express");
const httpApp = express();
const PORT = process.env.PORT || 5005;

// Import Routes
const AuthRouter = require("./routes/Auth");

httpApp.get("/", (req, res) => {
  console.log("GET / ");
  console.table(req);
  res.send("🙂🙂🙂");
});

// Register routers
httpApp.use("/auth", AuthRouter);

httpApp.listen(PORT, () => {
  console.log("Server listening on port:" + PORT);
});

