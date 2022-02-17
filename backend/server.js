const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport"); // this is needed to setup the strategies...
const authRoute = require("./routes/auth");
const app = express();
const PORT = process.env.PORT || 5000
const connectDB = require("./config/db")
require('dotenv').config()




app.use(
  cookieSession({ name: "session", keys: ["wutang"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


connectDB()
app.use("/auth", authRoute);


app.listen(PORT, () => {
  console.log(`Server is running! on port: ${PORT}`);
});
