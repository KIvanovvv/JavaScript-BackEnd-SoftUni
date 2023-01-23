const express = require("express");
// const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my secret word",
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  console.log(`>>> User: ${req.session.user || "guest"}`);
  if (req.session.user) {
    res.send(`<p>Hello, ${req.session.user}</p>`);
  } else {
    res.send(
      `<p>Hello, guest</p> 
    <ul>
    <li> <a href="/login" >Login </a> </li>
   <li> <a href="/register" >Register</a> </li>
    </ul>
    `
    );
  }
});

app.get("/login", (req, res) => {
  res.send(`<form method="post">
  <input type="text" name="username" placeholder="username" />
  <input type="password"name="password" placeholder="password" />
  <input type="submit" value="Sign in" />
  </form>`);
});

app.get("/register", (req, res) => {
  res.send(`<form method="post">
  <input type="text" name="username" placeholder="username" />
  <input type="password"name="password" placeholder="password" />
  <input type="password"name="repass" placeholder="repass" />
  <input type="submit" value="Login" />
  </form>`);
});

const users = {
  peter: "123",
  john: "12345",
};

app.post("/login", (req, res) => {
  console.log(`Login attempt`);
  if (
    users[req.body.username] != undefined &&
    users[req.body.username] === req.body.password
  ) {
    req.session.user = req.body.username;
    res.redirect("/");
  } else {
    res.status(401).send("Incorrenct username or password");
  }
});

app.listen(5000);
