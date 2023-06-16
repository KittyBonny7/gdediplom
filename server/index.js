require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize, Users, Answers } = require("./db");
const path = require("path");
const port = process.env.PORT;
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");

const COOKIE = "cookie";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: (_, cb) => cb(null, true),
  })
);
app.use(cookie());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`сервер работает на ${port} порту`);
    });
  } catch (error) {}
};

const extractAuthUser = async (req, res, next) => {
  try {
    const token = req.cookies[COOKIE];
    if (!token) {
      return res.status(401).json([false]);
    }

    const user = jwt.verify(token, process.env.SECRET_WORD);
    if (!user) {
      return res.status(401).json([false]);
    }

    req.user = user;
    return next();
  } catch {}
};

const generatejwt = ({ id_user, email, login }) => {
  return jwt.sign(
    {
      id_user,
      email,
      login,
    },
    process.env.SECRET_WORD,
    {
      expiresIn: "24h",
    }
  );
};

app.post("/registration", async (req, res) => {
  try {
    const { name, surname, email, login, password } = req.body;
    console.log(req.body);
    const user = await Users.findOne({
      where: {
        login,
      },
    });

    if (user) {
      return res.json([false]);
    }

    const newUser = await Users.create({
      name,
      surname,
      email,
      login,
      password,
    });

    const token = generatejwt(newUser);
    res.cookie(COOKIE, token);

    const ret = [true, { token }];
    return res.json(ret);
  } catch (error) {
    console.log("ERROR", error);
    return res.send([false]);
  }
});

app.get("/auth", async (req, res) => {
  try {
    const refreshToken = req.cookies[COOKIE];
    if (!refreshToken) {
      return res.send([false]);
    }

    const authUser = jwt.verify(refreshToken, process.env.SECRET_WORD);
    if (!authUser) {
      return res.send([false]);
    }
    const token = generatejwt(authUser);
    return res.send([true, { token, user: authUser }]);
  } catch (error) {
    res.send(400);
  }
});

app.post("/login", async (req, res) => {
  try {
    debugger;
    const { login, password } = req.body;
    const user = await Users.findOne({
      where: {
        login,
        password,
      },
    });
    debugger;
    console.log(user);
    if (!user) {
      return res.status(404).json([false]);
    }
    const token = generatejwt(user);
    res.cookie(COOKIE, token);

    return res.json([true, { token, user }]);
  } catch (error) {
    res.send(400);
  }
});

app.delete("/logout", async (req, res) => {
  try {
    res.clearCookie(COOKIE);
    res.json([truе]);
  } catch (error) {
    res.send(400);
  }
});

app.post("/polls/:id/answer", extractAuthUser, async (req, res) => {
  const { id } = req.params;
  const { answer1, answer2, answer3 } = req.body;
  const user = req.user;
  const answer = await Answers.create({
    id_poll: +id,
    id_user: user.id_user,
    answer_1: answer1,
    answer_2: answer2,
    answer_3: answer3,
  });

  return res.json([true, answer]);
});
start();
