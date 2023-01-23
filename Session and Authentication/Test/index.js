const express = require("express");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const { register, login, users } = require("./userService.js");

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

const homeTemp = (user, users) => `<h1>Welcome, ${user || "guest"} </h1>
${
  user == undefined
    ? ` 
 <a href="/login" >Login </a> </li>
 <a href="/register" >Register</a> </li>`
    : ""
}
<ul>
${users.map((u) => `<li>${u.username}</li>`).join("\n")}
</ul>
`;
app.get("/", (req, res) => {
  console.log(`>>> User: ${req.session.user || "guest"}`);
  res.send(homeTemp(req.session.user, users));
});

app.get("/login", (req, res) => {
  res.send(`<h1>Login</h1>
  <form method="post">
  <input type="text" name="username" placeholder="username" />
  <input type="password"name="password" placeholder="password" />
  <input type="submit" value="Sign in" />
  </form>`);
});

const registerTemp = (error) => {
  return `
  ${error ? `<p>${error}</p>` : ""}
  <h1>Register</h1>
  <form method="post">
  <input type="text" name="username" placeholder="username" />
  <input type="password"name="password" placeholder="password" />
  <input type="password"name="repass" placeholder="repass" />
  <input type="submit" value="Login" />
  </form>
  `;
};

app.get("/register", (req, res) => {
  res.send(registerTemp());
});
app.post("/register", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields are required");
    } else if (req.body.password != req.body.repass) {
      throw new Error(`Passwords dont match`);
    }
    await register(req.body.username, req.body.password);
    res.redirect("/");
  } catch (err) {
    res.send(registerTemp(err.message));
  }
});

app.post("/login", async (req, res) => {
  console.log(`Login attempt`);
  if (await login(req.body.username, req.body.password)) {
    req.session.user = req.body.username;
    res.redirect("/");
  } else {
    res.status(401).send("Incorrenct username or password");
  }
});

app.listen(5000);
