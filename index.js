import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "FireHawkSecret";

app.use("/admin", (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Basic ")) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Admin Area"');
    return res.status(401).send("Unauthorized - please try logging in.");
  }

  const base64Credentials = auth.split(" ")[1];
  const [username, password] = Buffer.from(base64Credentials, "base64")
    .toString()
    .split(":");

  if (username === "admin" && password === ADMIN_PASSWORD) {
    return next();
  }

  res.setHeader("WWW-Authenticate", 'Basic realm="Admin Area"');
  return res.status(401).send("Forbidden — invalid credentials, please try again.");
});

// Protected admin route
app.get("/admin", (req, res) => {
  res.send("Welcome to the Admin Panel!");
});

// Public homepage route
app.get("/", (req, res) => {
  res.send("Public homepage!");
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

