import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from 'aos';
import ParticlesM from "./ParticlesM";

export default function Politique() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    useEffect(() => {
        const matches = document.querySelectorAll("p");
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
    return (

        <>
            <Container className="main">

                <div className="container " style={{ display: 'flex', justifyContent: 'center', marginTop: '90px', fontWeight: 'bolder' }}>
                    <ParticlesM />

                    <div className="row">
                        <div className="col-12">
                            <p style={{ fontSize: '40px', color: '#AF96B0' }}>Politique de Confidentialité et Mentions Légales </p>
                        </div>
                    </div>
                </div>


                <div className="container mt-5" >
                    <div className="row" >
                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Politique de Confidentialité</h2>
                            <Text>
                                <p data-aos="fade-right" >Chez Sales Media, nous accordons une importance primordiale à la confidentialité des données de nos </p>
                                <p data-aos="fade-right" >visiteurs et de nos clients. </p>

                                <p data-aos="fade-right" data-aos-duration="2000">Cette politique de confidentialité explique quelles informations sont collectées, comment elles sont</p>
                                <p data-aos="fade-right" data-aos-duration="2000"> utilisées et protégées.</p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Collecte d'Informations </h2>
                            <Text>
                                <p data-aos="fade-right" >Nous collectons des informations personnelles telles que votre nom , votre adresse e-mail, </p>
                                <p data-aos="fade-right" data-aos-duration="2000">vos coordonnées et d'autres détails nécessaires pour fournir nos services ou répondre à vos demandes. </p>
                                <p data-aos="fade-right" data-aos-duration="2000"> Nous ne collectons aucune information sans votre consentement.</p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Utilisation des Informations </h2>
                            <Text>
                                <p data-aos="fade-right" >Les informations collectées sont utilisées pour personnaliser votre expérience sur notre site web,</p>
                                <p data-aos="fade-right" > pour répondre à vos requêtes, pour vous informer sur nos services,pour vous informer sur nos services, </p>
                                <p data-aos="fade-right" data-aos-duration="2000"> et pour améliorer notre offre en fonction de vos retours.

                                </p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Protection des Données </h2>
                            <Text>
                                <p data-aos="fade-right" >Nous mettons en place des mesures de sécurité robustes pour protéger vos données personnelles contre </p>
                                <p data-aos="fade-right" data-aos-duration="2000">tout accès non autorisé toute divulgation, toute utilisation abusive ou altération.</p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Partage d'Informations </h2>
                            <Text>
                                <p data-aos="fade-right" >Nous ne partageons pas vos informations personnelles avec des tiers sans votre consentement explicite,</p>
                                <p data-aos="fade-right" data-aos-duration="2000"> sauf si requis par la loi ou pour protéger nos droits, nos biens ou notre sécurité.</p>

                            </Text>
                        </div>


                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Cookies</h2>
                            <Text>
                                <p data-aos="fade-right" >Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Vous avez le contrôle sur</p>
                                <p data-aos="fade-right" data-aos-duration="2000">l'acceptation des cookies via les paramètres de votre navigateur.</p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Modifications de la Politique de Confidentialité </h2>
                            <Text>
                                <p data-aos="fade-right" >Nous nous réservons le droit de mettre à jour ou de modifier notre politique de confidentialité.</p>
                                <p data-aos="fade-right" data-aos-duration="2000"> Les changements seront affichés sur cette page.</p>

                            </Text>
                        </div>


                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Droits d'Auteur </h2>
                            <Text>
                                <p data-aos="fade-right" >Tout le contenu de ce site web est protégé par des droits d'auteur et ne peut être utilisé sans autorisation.</p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Responsabilité </h2>
                            <Text>
                                <p data-aos="fade-right" >Nous nous efforçons de fournir des informations précises et actuelles, cependant, nous déclinons toute </p>
                                <p data-aos="fade-right" data-aos-duration="2000">responsabilité en cas d'erreurs ou d'omissions dans le contenu.</p>

                            </Text>
                        </div>


                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Loi Applicable </h2>
                            <Text>
                                <p data-aos="fade-right" >Cette politique de confidentialité et ces mentions légales sont régies par les lois en vigueur dans le Maroc. </p>
                            </Text>
                        </div>

                        <div className="col-lg-12" >
                            <h2 data-aos="fade-right">Contact </h2>
                            <Text>
                                <p data-aos="fade-right" >Si vous avez des questions concernant notre politique de confidentialité ou nos mentions légales,</p>
                                <p data-aos="fade-right" data-aos-duration="2000"> veuillez nous contacter à l'adresse m.benmoussa@vopa.ma </p>
                            </Text>
                        </div>



                    </div>
                </div>

                {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
            </Container >
        </>
    )
}



const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Hide the scrollbars */
                    `;




const Text = styled.div`
  font-size: 23px;
                font-weight: 600;
                padding: 30px 0;
                z-index: 9;


                p {
                    background: linear-gradient(to right, #ffffff 50%, #252525 50%);
                background-size: 200% 100%;
                background-position-x: 100%;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                margin-left: 100px;
                // margin-top: 20px;
                // margin-bottom: 20px;
                user-select: none;

  }
                `;