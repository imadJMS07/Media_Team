import React, { useEffect } from 'react';
import { BiTrophy } from 'react-icons/bi';
import { FaNewspaper, FaComment, FaBullhorn, FaTrophy, FaQuoteLeft } from 'react-icons/fa';
import ParticlesM from "./ParticlesM";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { gsap } from "gsap";
import Img_1 from './Group 12.png'
import Img_2 from './Group 13.png'
import Img_3 from './Group 14.png'

const Actualites = () => {

    useEffect(() => {
        const matches = document.querySelectorAll("h2");
        matches.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: "0%",
                stagger: 1,
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: "top center",
                    end: "bottom 40%",
                },
            });
        });
        return () => { };
    }, []);

    const smoothScroll = (targetPosition, duration) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;
            const easeInOutCubic = progress => {
                return progress < 0.5
                    ? 4 * progress ** 3
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };
            const run = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * run);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    };

    const handleScroll = () => {
        smoothScroll(655, 1000);
    };
    return (
        <>
            <Container className="main">
                <div className="container step-one h-100">
                    <ParticlesM />
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-md-12 titre_one"
                            a style={{ display: 'flex', justifyContent: 'center', fontSize: '75px' }}>
                            QUOI DE NEUF
                        </div>
                        <div className="col-md-12 titre_one mt-3" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                            SALES MEDIA ?
                        </div>


                        <div className="col-md-12 titre_one mt-5" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '45px' }}>
                            <i className="pi pi-arrow-down" onClick={handleScroll}></i>
                        </div>
                    </div>
                </div>


                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Dernières Actualités</h1>
                            <Text>
                                <h2 data-aos="fade-right" >Restez informé(e) sur les dernières tendances et innovations en</h2>
                                <h2 data-aos="fade-left">marketing digital.</h2>
                                <h2 data-aos="fade-right"> Notre équipe passionnée partage régulièrement des articles, </h2>
                                <h2 data-aos="fade-left"> des études de cas et des conseils pratiques pour vous aider </h2>
                                <h2 data-aos="fade-right">à optimiser votre présence en ligne.</h2>
                                <h2 data-aos="fade-left">Explorez nos dernières publications ci-dessous :</h2>

                            </Text>
                        </div>
                    </div>
                </div>



                <div className="container" style={{ marginTop: '90px' }} data-aos="fade-right">
                    <div className="row">
                        <div className="col-12">
                            <div style={{ display: "flex", justifyContent: 'center' }} >
                                <img src={Img_1} alt="" />
                            </div>
                            <h2 className='mt-5' style={{ fontSize: '25px' }}>
                                Stratégie Gagnante : Comment Nous Avons Propulsé la Visibilité en Ligne <br /> de Nos Clients
                            </h2>
                            <div className="row" style={{ display: "flex", justifyContent: 'center' }}>
                                <div className="col-11" >

                                    <p className='mt-2 actualites' style={{ display: "flex", justifyContent: 'center', fontSize: '23px' }}>
                                        Plongez dans les coulisses de nos projets les plus réussis, où notre équipe a mis en œuvre des stratégies novatrices pour maximiser la visibilité en ligne. Des témoignages de clients, des analyses approfondies et des exemples concrets vous dévoileront les secrets d'une stratégie digitale efficace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '90px' }} data-aos="fade-left">
                    <div className="row">
                        <div className="col-12">
                            <div style={{ display: "flex", justifyContent: 'center' }} >
                                <img src={Img_2} alt="" />
                            </div>
                            <h2 className='mt-5' style={{ fontSize: '25px' }}>
                                Les Nouvelles Fonctionnalités des Médias Sociaux à Ne Pas Manquer                            </h2>
                            <div className="row" style={{ display: "flex", justifyContent: 'center' }}>
                                <div className="col-11" >

                                    <p className='mt-2 actualites' style={{ display: "flex", justifyContent: 'center', fontSize: '23px' }}>
                                        Restez à la pointe de la révolution des médias sociaux. Cet article explore les dernières fonctionnalités des principales plateformes, vous donnant un aperçu des opportunités qu'elles offrent pour augmenter l'engagement de votre audience. Soyez prêt à tirer parti de ces nouvelles possibilités pour renforcer votre présence en ligne.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container" style={{ marginTop: '90px' }} data-aos="fade-right">
                    <div className="row">
                        <div className="col-12">
                            <div style={{ display: "flex", justifyContent: 'center' }} >
                                <img src={Img_3} alt="" />
                            </div>
                            <h2 className='mt-5' style={{ fontSize: '25px' }}>
                                Les Coulisses d'une Campagne Publicitaire Réussie : Entretien Exclusif avec <br /> un  Expert  du Secteur
                            </h2>
                            <div className="row" style={{ display: "flex", justifyContent: 'center' }}>
                                <div className="col-11" >

                                    <p className='mt-2 actualites' style={{ display: "flex", justifyContent: 'center', fontSize: '23px' }}>
                                        Plongez dans les détails d'une campagne publicitaire réussie grâce à notre entretien exclusif avec un expert renommé du secteur. Découvrez les stratégies testées et approuvées, les erreurs à éviter, et les astuces pour maximiser le retour sur investissement. Préparez-vous à optimiser vos prochaines campagnes avec ces conseils d'initiés.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">

                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Continuez à suivre notre rubrique Actualités pour rester au fait des </h2>
                                <h2 data-aos="fade-left" >évolutions du marketing digital et bénéficier de conseils</h2>
                                <h2 data-aos="fade-right" >précieux pour propulser votre entreprise vers le succès en ligne</h2>
                            </Text>

                        </div>
                    </div>
                </div>


                <div className="container" style={{ display: '', marginTop: '147px', position: 'relative', top: '-50px' }}>
                    <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
                        <div className="col-12 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link className='px-btn-accueil btn' data-aos="fade-up" to="/contact">Contactez-nous</Link>
                        </div>
                    </div>
                </div>


            </Container>
        </>
    );
};

export default Actualites;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Hide the scrollbars */
                    `;

const Text = styled.div`
font-size: 130px;
                font-weight: 600;
                padding: 70px 0;
                z-index: 9;


                h2 {
                    background: linear-gradient(to right, #ffffff 50%, #252525 50%);
                background-size: 200% 100%;
                background-position-x: 100%;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                margin-left: 50px;
                // margin-top: 20px;
                // margin-bottom: 20px;
                user-select: none;
                

  }
                `;
