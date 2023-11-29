import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            className={`header-top-fixed one-page-nav ${mobileToggle ? 'menu-open menu-open-desk' : ''
                } ${scrolled ? 'fixed-header' : ''}`}
        >
            <div className="container">
                <div className="logo">
                    <Link className="navbar-brand " href="#">
                        <img src="./logo.png" width='95' height="95" alt="" style={{ position: 'relative', top: '20px', left: '25px', marginTop: '-40px' }} />
                    </Link>
                </div>
                <ul className="main-menu mt-2">

                    <li>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setMobileToggle(false)}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setMobileToggle(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/propos"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setMobileToggle(false)}
                        >
                            Propos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/actualites "
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setMobileToggle(false)}
                        >
                            Actualités
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/temoignages "
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setMobileToggle(false)}
                        >
                            Témoignages
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="FAQ"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={() => setMobileToggle(false)}
                        >
                            FAQ
                        </Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <Link
                        to="/contact "
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setMobileToggle(false)}
                        className="px-btn-header d-none  d-sm-none d-ms-none d-lg-none d-xl-block"
                    >
                        Contact
                    </Link>
                    <button
                        className="toggler-menu d-xl-none "
                        onClick={() => setMobileToggle(!mobileToggle)}
                    >
                        <span />
                    </button>
                </div>
            </div>
        </div>
    );
}
