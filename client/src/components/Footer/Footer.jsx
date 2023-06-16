import React from 'react';
import './Footer.css';
import '../../App.css';

const Footer = () => {
    return (
        <div>
             <footer>
                <div className='footer-container'>
                    <div>
                        <p>Горячая линия: <a href="tel:+7 473 234-56-92">+7 473 234-56-92</a></p>
                    </div>
                    <div>
                        <p>г. Калуга, ул. Маршала Жукова, д. 35</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;