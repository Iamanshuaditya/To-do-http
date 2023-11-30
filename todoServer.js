import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.json(Todoitems);
});

app.get("/todos/:id", (req, res) => {
  res.send("Hello World!");
});

app.post("/todos", (req, res) => {
  res.send("Hello World!");
});

app.put("/todos/:id", (req, res) => {
  res.send("Hello World!");
});

app.delete("/todos/:id", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
