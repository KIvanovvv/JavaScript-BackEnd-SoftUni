const app = require("express")();
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(
  session({
    secret: "my secret word",
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.cookie("userId", "asd123asd");
  res.cookie("cookieParser", 1);
  res.end("Cookie set");
});

app.listen(5000);
