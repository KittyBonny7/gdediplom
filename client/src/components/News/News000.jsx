import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import ToTop from '../ToTop/ToTop';
import './NewsComponent.css';
import banner from '../../img/blogs/000/banner.png';

const News000 = () => {

    useEffect(() => {
        document.title = 'Открытие сайта';
      }, []);

    return (
        <div>
            <Header />
            <Buttons />
            <main className='main-container'>
            {/* 1 секция баннер */}
            <section className='main-banner'>
                <div className='banner'>
                    <div className='banner-title'>
                        <strong>Открытие сайта</strong>
                    </div>
                    <div className='banner-subtitle'>
                        <p>С радостью сообщаем о запуске нового проекта - сайта социальных онлайн опросов, который 
              поможет получить ценные данные и мнения населения по различным социальным вопросам!</p>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={banner} alt='' className='banner-img-img'/>
                </div>
            </section>
            {/* 2 секция */}
            <section>
                <div>
                    <p>⠀⠀⠀Социальные опросы - это мощный инструмент сбора информации о мнениях и предпочтениях людей по различным вопросам. Они могут быть использованы для проведения маркетинговых исследований,
                    изучения общественного мнения по различным социальным проблемам, а также для сбора фидбека от пользователей веб-сайтов и приложений.
                    </p><br />
                    <p>⠀⠀⠀По мнению россиян, опросы общественного мнения представляют интерес, прежде всего, для политиков (46%) и самих социологов (41%). Каждый четвертый (26%) считает, что эти данные нужны СМИ.
                    Пятая доля опрошенных (22%) уверена, что результаты исследований любопытно было бы узнать всем гражданам. За четыре года существенно возросла доля тех, кто говорит о заинтересованности
                    в опросах представителей общественных организаций (с 12% в 2010 г. до 19% в 2014 г.), и, напротив, реже стали отмечать потребность бизнеса в подобных исследованиях (с 24% до 17%, соответственно). 
                    Только 8% называют проведение опросов вовсе ненужным делом. Социологические исследования помогают донести мнение простых людей до представителей властей - уверены 77% наших сограждан, 
                    однако эта цифра ниже значения десятилетней давности (84% в 2005 г.). Более половины россиян (58%) полагают, что политики и предприниматели используют эти данные для повышения эффективности 
                    своей деятельности. В то, что опросы проводятся в корыстных целях (узнать сведения о личной жизни и имуществе людей) не верят две трети россиян (66%). Большинство респондентов (60%) также
                    отмечают научные цели проведения исследований (с 67% в 2005 г.). 45% опрошенных считают компании, проводящие опросы, обычными коммерческими структурами, тогда как 37% придерживаются иной 
                    точки зрения. Наконец, 41% респондентов проведение социологических опросов представляется просто «модным делом», однако 42% это мнение не разделяют (Инициативный всероссийский опрос ВЦИОМ 
                    проведён 1-2 ноября 2014 г. Опрошено 1600 человек в 130 населенных пунктах в 42 областях, краях и республиках России. Статистическая погрешность не превышает 3,4%).
                    </p><br />
                    <p>⠀⠀⠀Вы можете воспользоваться навигационным меню для перемещения по сайту, на каждой странице есть описание, дающее понять какая здесь содержится информация. Всего есть несколько разделов: 
                    Главная, Опросы, Публикации, Контакты и Информация. В свою очереди "Опросы" делятся на 4 подраздела: Семья, Политика, Животные и Экология. Если у Вас возникнут проблемы или предложения 
                    по улучшению сайта - звоните на горячую линию! Мы очень ждём Вашей обратной связи.
                    </p><br />
                </div>
            </section>
            </main>
            <ToTop />
            <Footer />
        </div>
    );
};

export default News000;