import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AUTH_ROUTE, MAIN_ROUTE } from "../../const";
import "./Registration.css";
import { registration } from "../../queries/mainQuery";
import { Context } from "../..";
// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, Button } from "react-native";

const Registration = () => {
  const [hideName, setHideName] = useState(false);
  const [hideSurname, setHideSurname] = useState(false);
  const [hideEmale, setHideEmale] = useState(false);
  const [hideLogIn, setHideLogIn] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [hidePassword2, setHidePassword2] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(Context);

  const regUser = async () => {
    if (name.trim() == "") {
      setHideName(true);
    } else {
      setHideName(false);
    }
    if (surname.trim() == "") {
      setHideSurname(true);
    } else {
      setHideSurname(false);
    }
    if (email.trim() == "") {
      setHideEmale(true);
    } else {
      setHideEmale(false);
    }
    if (login.trim() == "") {
      setHideLogIn(true);
    } else {
      setHideLogIn(false);
    }
    if (password.trim() == "") {
      setHidePassword(true);
    } else {
      setHidePassword(false);
    }
    if (password2.trim() == "") {
      setHidePassword2(true);
    } else {
      setHidePassword2(false);
    }
    try {
      if (
        email !== "" &&
        name !== "" &&
        surname !== "" &&
        email !== "" &&
        login !== "" &&
        password !== "" &&
        password2 !== ""
      ) {
        if (password === password2) {
          await registration(name, surname, email, login, password);
          if (localStorage.getItem("token") != null) {
            user.setIsAuth(true);
            navigate(MAIN_ROUTE);
          } else {
            // Ошибка: Пользователь с такой почтой или логином уже зарегистрирован
            alert(
              "Пользователь с такой почтой или логином уже зарегистрирован"
            );
          }
        } else {
          alert("Пароли не совпадают");
        }
      }
    } catch (error) {}
  };

  return (
    <div className="main__regis">
      <span className="zagolovok">Зарегистрироваться</span>
      <div className="pp">
        <span className="p2">Имя</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          {/* <div  /> */}
        </div>
        <span className={`err_name ${hideName ? "err_name_show" : ""}`}>
          *Ведите имя*
        </span>
      </div>
      <div className="pp">
        <span className="p2">Фамилия</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <span
          className={`err_surname ${hideSurname ? "err_surname_show" : ""}`}
        >
          *Ведите фамилию*
        </span>
        {/* <span className="err_surname"></span> */}
      </div>
      <div className="pp">
        <span className="p2">Почта</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span className={`err_email ${hideEmale ? "err_email_show" : ""}`}>
          *Ведите почту*
        </span>
        {/* <span className="err_email">*Ведите почту*</span> */}
      </div>
      <div className="pp">
        <span className="p2">Логин</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
          />
          <span className={`err_login ${hideLogIn ? "err_login_show" : ""}`}>
            *Введите логин*
          </span>
          {/* <span className="err_login"></span> */}
        </div>
      </div>
      <div className="pp">
        <span className="p2">Пароль</span>
        <div>
          <input
            className="inp"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span
          className={`err_Password ${hidePassword ? "err_Password_show" : ""}`}
        >
          *Введите пароль*
        </span>
        {/* <span className="err_Password"></span> */}
      </div>
      <div className="pp">
        <span className="p2">Подтвердите Пароль</span>
        <div>
          <input
            className="inp"
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <span
          className={`err_Password2 ${
            hidePassword2 ? "err_Password2_show" : ""
          }`}
        >
          *Повторите пароль*
        </span>
        {/* <span className="err_Password2">*Повторите пароль*</span> */}
      </div>
      <div>
        <button type="button" className="regis__btn" onClick={regUser}>
          Зарегистрироваться
        </button>
        <div className="gg11">
          <span>Есть аккаунт?</span>
          <NavLink to={AUTH_ROUTE} className="navlink">
            Войти
          </NavLink>
          {/* <button onClick={() => setHideName(false)}>Show Lightbox</button> */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
