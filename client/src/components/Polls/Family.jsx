import React, { useEffect, useContext, useState } from "react";
import { Context } from "../..";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Buttons from "../Buttons/Buttons";
import ToTop from "../ToTop/ToTop";
import "./Polls.css";
import banner from "../../img/pools/family/banner.png";
import { answer } from "../../queries/mainQuery";

const Family = () => {
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);

  const { user } = useContext(Context);
  const email = "titova.sofia.titova@gmail.com";

  useEffect(() => {
    document.title = "Опросы по теме семьи";
  }, []);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    await answer({
      answer1,
      answer2,
      answer3,
      id_poll: 2,
    });
  };

  return (
    <div>
      <Header />
      <Buttons />
      <main className="main-container">
        {/* 1 секция баннер */}
        <section className="main-banner">
          <div className="banner">
            <div className="banner-title">
              <strong>Опросы по теме семьи</strong>
            </div>
            <div className="banner-subtitle">
              <p>
                Опросы помогают лучше понять потребности и предпочтения людей в
                отношении семейных ценностей
              </p>
            </div>
          </div>
          <div className="banner-img">
            <img src={banner} alt="" className="banner-img-img" />
          </div>
        </section>
        {/* 2 секция */}
        <section className="Opros_1">
          <form className="opros" onSubmit={onSubmit}>
            <h3>Опрос №1</h3>
            <fieldset className="firstVopros">
              <legend>
                Есть ли у вас знакомые (родные), которые развелись?
              </legend>
              <div>
                <input
                  type="radio"
                  id="1"
                  name="q1"
                  value="1"
                  onChange={() => {
                    setAnswer1(1);
                  }}
                />
                <label htpFor="1">Да</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="2"
                  name="q1"
                  value="2"
                  onChange={() => {
                    setAnswer1(2);
                  }}
                />
                <label htpFor="2">Нет</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="3"
                  name="q1"
                  value="3"
                  onChange={() => {
                    setAnswer1(3);
                  }}
                />
                <label htpFor="3">Не знаю</label>
              </div>
            </fieldset>
            <fieldset className="secondVopros">
              <legend>
                По Вашему мнению, повлияет ли развод на отношение детей к
                родителям?
              </legend>
              <div>
                <input
                  type="radio"
                  id="1"
                  name="q2"
                  value="Да"
                  onChange={() => {
                    setAnswer2(1);
                  }}
                />
                <label htpFor="1">Да</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="2"
                  name="q2"
                  value="Нет"
                  onChange={() => {
                    setAnswer2(2);
                  }}
                />
                <label htpFor="2">Нет</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="3"
                  name="q2"
                  value="Затрудняюсь ответить"
                  onChange={() => {
                    setAnswer2(3);
                  }}
                />
                <label htpFor="3">Затрудняюсь ответить</label>
              </div>
            </fieldset>
            <fieldset className="thirdVopros">
              <legend>
                Как Вы считаете, влияет ли образование супругов на прочность
                отношений?
              </legend>
              <div>
                <input
                  type="radio"
                  id="1"
                  name="q3"
                  value="Да"
                  onChange={() => {
                    setAnswer3(1);
                  }}
                />
                <label htpFor="1">Да</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="2"
                  name="q3"
                  value="Нет"
                  onChange={() => {
                    setAnswer3(2);
                  }}
                />
                <label htpFor="2">Нет</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="3"
                  name="q3"
                  value="Затрудняюсь ответить"
                  onChange={() => {
                    setAnswer3(3);
                  }}
                />
                <label htpFor="3">Затрудняюсь ответить</label>
              </div>
            </fieldset>
            <button
              id="submitFirst"
              onClick={console.log(answer1, answer2, answer3)}
            >
              Отправить
            </button>
          </form>
        </section>
      </main>
      <ToTop />
      <Footer />
    </div>
  );
};

export default Family;
