import React, { useEffect, useContext, useState } from "react";
import { Context } from "../..";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Buttons from "../Buttons/Buttons";
import ToTop from "../ToTop/ToTop";
import "./Polls.css";
import banner from "../../img/pools/animals/banner.png";
import { answer } from "../../queries/mainQuery";

const Animals = () => {
  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);

  const { user } = useContext(Context);
  const email = "titova.sofia.titova@gmail.com";

  useEffect(() => {
    document.title = "Опросы про животных";
  }, []);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    await answer({
      answer1,
      answer2,
      answer3,
      id_poll: 4,
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
              <strong>Опросы про животных</strong>
            </div>
            <div className="banner-subtitle">
              <p>
                Опросы помогают лучше понять потребности и предпочтения людей в
                отношении животного мира. Результаты могут помочь улучшить
                условия содержания животных и разработать более эффективные
                стратегии их защиты
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
              <legend>Как Вы относитесь к бродячим животным?</legend>
              <div>
                <input
                  type="radio"
                  id="q1a1"
                  name="q1"
                  value="1"
                  onChange={() => {
                    setAnswer1(1);
                  }}
                />
                <label htpFor="q1a1">Хорошо</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1a2"
                  name="q1"
                  value="2"
                  onChange={() => {
                    setAnswer1(2);
                  }}
                />
                <label htpFor="q1a2">Нейтрально</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1a3"
                  name="q1"
                  value="3"
                  onChange={() => {
                    setAnswer1(3);
                  }}
                />
                <label htpFor="q1a3">Отрицательно</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1a4"
                  name="q1"
                  value="4"
                  onChange={() => {
                    setAnswer1(4);
                  }}
                />
                <label htpFor="q1a4">Не знаю</label>
              </div>
            </fieldset>
            <fieldset className="secondVopros">
              <legend>Вы довольны работой службы отлова?</legend>
              <div>
                <input
                  type="radio"
                  id="q2a1"
                  name="q2"
                  value="1"
                  onChange={() => {
                    setAnswer2(1);
                  }}
                />
                <label htpFor="q2a1">Да</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q2a2"
                  name="q2"
                  value="2"
                  onChange={() => {
                    setAnswer2(2);
                  }}
                />
                <label htpFor="q2a2">Нет</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q2a2"
                  name="q2"
                  value="3"
                  onChange={() => {
                    setAnswer2(3);
                  }}
                />
                <label htpFor="q2a2">Не знаю</label>
              </div>
            </fieldset>
            <fieldset className="thirdVopros">
              <legend>
                Были ли у Вас, или знакомых, случаи нападения бездомных
                животных?
              </legend>
              <div>
                <input
                  type="radio"
                  id="q3a1"
                  name="q3"
                  value="1"
                  onChange={() => {
                    setAnswer3(1);
                  }}
                />
                <label htpFor="q3a1">Да</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q3a2"
                  name="q3"
                  value="2"
                  onChange={() => {
                    setAnswer3(2);
                  }}
                />
                <label htpFor="q3a2">Нет</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q3a3"
                  name="q3"
                  value="3"
                  onChange={() => {
                    setAnswer3(3);
                  }}
                />
                <label htpFor="q3a3">Не знаю</label>
              </div>
            </fieldset>
            <button id="submitFirst">Отправить</button>
          </form>
        </section>
      </main>
      <ToTop />
      <Footer />
    </div>
  );
};

export default Animals;
