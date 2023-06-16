const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

const Users = sequelize.define("users", {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

const Categories = sequelize.define("categories", {
  id_category: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

const Polls = sequelize.define("polls", {
  id_poll: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categories,
      key: "id_category",
    },
  },
  question_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Answers = sequelize.define("answers", {
  id_answer: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "id_user",
    },
  },
  id_poll: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Polls,
      key: "id_poll",
    },
  },
  answer_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer_3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports.sequelize = sequelize;
module.exports.Users = Users;
module.exports.Polls = Polls;
module.exports.Categories = Categories;
module.exports.Answers = Answers;
