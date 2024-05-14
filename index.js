const express = require("express");
const app = express();

// tell the app to recognize the data as JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  //res.send("Got a POST request");
  res.json({ message: "Received data successfully", data: body });
});

app.listen(3000, () => {
  console.log(`Server is up and running`);
});
