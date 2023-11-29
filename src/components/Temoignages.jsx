import React, { useEffect } from 'react';
import gsap from 'gsap';
import ParticlesM from "./ParticlesM";
import styled from "styled-components";
import IconBg1 from '../components/Group 17.png'
import IconBg2 from '../components/Group 21.png'
import IconBg3 from '../components/Group 22.png'
import { Link } from 'react-router-dom';
export default function Temoignages() {
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
                <div className='.container step-one h-100 ' >
                    <ParticlesM />
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-md-12 titre_one"
                            a style={{ display: 'flex', justifyContent: 'center' }}>
                            Témoignages et Études de Cas
                        </div>
                        <div className="col-md-12 titre_one" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                            -
                        </div>
                        <div className="col-md-12 titre_one" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                            Découvrez Notre Impact
                        </div>
                        <div className="col-md-12 titre_one mt-5" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '45px' }}>
                            <i className="pi pi-arrow-down" onClick={handleScroll}></i>
                        </div>
                    </div>
                </div>


                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Témoignages Clients :</h1>
                            <Text>
                                <h2 data-aos="fade-right" >Travailler avec Sales Media a été une expérience transformative pour </h2>
                                <h2 data-aos="fade-left" >notre entreprise.</h2>
                                <h2 data-aos="fade-right" >Leurs stratégies de génération de leads ont considérablement  </h2>
                                <h2 data-aos="fade-left" >augmenté notre pipeline de prospects.</h2>
                                <h2 data-aos="fade-right" >Merci pour votre expertise et votre engagement !" </h2>
                                <h2 data-aos="fade-left" >Entreprise XYZ </h2>

                            </Text>
                        </div>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Je recommande vivement Sales Media. </h2>
                                <h2 data-aos="fade-left" >Leurs services ont été essentiels pour notre croissance. </h2>
                                <h2 data-aos="fade-right" >Leurs études de cas personnalisées ont fait toute la différence.</h2>
                                <h2 data-aos="fade-left" >Entreprise DEF</h2>
                            </Text>

                        </div>
                        <div className="col-md-12  indro" style={{ display: 'flex', }}>
                            <Text>
                                <h2 data-aos="fade-right" >Nous sommes impressionnés par la qualité des leads fournis par Sales Media. </h2>
                                <h2 data-aos="fade-left" >Leur processus de confirmation via le centre d'appel </h2>
                                <h2 data-aos="fade-right" >a assuré des leads authentiques et pertinents pour notre activité</h2>
                                <h2 data-aos="fade-left" >Entreprise ABC</h2>
                            </Text>

                        </div>
                    </div>
                </div>





                <div className="container ">
                    <div className="row">
                        <div className="col-12 " style={{ display: 'flex', justifyContent: 'center', marginTop: '160px' }}>
                            <h1 data-aos="fade-down" style={{ color: '#AF96B0' }}>Études de Cas </h1>
                        </div>
                    </div>
                </div>
                <div className="container mt-5" >
                    <div className="row" >
                        <div data-aos="fade-right" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4  Valeurs "   >
                            <img src={IconBg1} alt="" style={{ position: 'relative', left: '20%' }} />
                            <h1 style={{ position: 'relative', top: '-110px', left: '35px', zIndex: '99', color: '#AF96B0' }}>Entreprise XYZ </h1>
                            <p style={{ marginTop: '-30px' }}>Découvrez comment notre approche stratégique a aidé l'Entreprise XYZ à augmenter ses leads qualifiés de 150% en seulement six mois. Les détails de notre collaboration, les défis rencontrés et les solutions mises en place sont détaillés pour montrer notre impact concret.

                            </p>
                        </div>
                        <div data-aos="fade-up" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4 Valeurs" >
                            <img src={IconBg2} alt="" style={{ position: 'relative', left: '20%' }} />
                            <h1 style={{ position: 'relative', top: '-110px', left: '45px', zIndex: '99', color: '#AF96B0' }}>Entreprise ABC </h1>
                            <p style={{ marginTop: '-30px' }}>Explorez comment l'Entreprise ABC a optimisé sa stratégie de génération de leads en travaillant avec Sales Media. Grâce à notre processus de confirmation de leads via le centre d'appel, ils ont doublé leur taux de conversion et amélioré leur retour sur investissement.</p>
                        </div>
                        <div data-aos="fade-left" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4 Valeurs" >
                            <img src={IconBg3} alt="" style={{ position: 'relative', left: '20%' }} />
                            <h1 style={{ position: 'relative', top: '-110px', zIndex: '99', fontWeight: 'bolder', left: '30px', color: '#AF96B0' }}>Entreprise DEF  </h1>
                            <p style={{ marginTop: '-30px' }} >Décryptez comment notre approche personnalisée a permis à l'Entreprise DEF d'atteindre des leads spécifiques pour son secteur d'activité. Les détails sur la personnalisation de nos stratégies et les résultats obtenus sont mis en avant pour démontrer notre capacité à répondre aux besoins uniques de nos clients.</p>
                        </div>
                    </div>
                </div>

                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >
                                Votre Succès est Notre Priorité
                            </h1>
                            <Text>
                                <h2 data-aos="fade-right" >Chez Sales Media, nous nous engageons à fournir des résultats tangibles.</h2>
                                <h2 data-aos="fade-left" >Nos témoignages et études de cas illustrent la manière </h2>
                                <h2 data-aos="fade-left" >dont nous collaborons avec nos clients pour atteindre leurs objectifs</h2>
                                <h2 data-aos="fade-left" >de génération de leads de manière efficace et mesurable.</h2>
                            </Text>
                        </div>
                        <h1 data-aos="fade-left" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Besoin de Preuves Tangibles ?</h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Contactez-nous pour en savoir plus sur nos succès passés et </h2>
                                <h2 data-aos="fade-left" >sur la manière dont nous pouvons aider votre entreprise à prospérer.</h2>
                            </Text>

                        </div>
                    </div>
                </div>

                <div className="container" style={{ display: '', marginTop: '147px', position: 'relative', top: '-50px' }}>
                    <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
                        <div className="col-12 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link className='px-btn-accueil btn' data-aos="fade-up" to="/contact">Contactez-nous pour en savoir plus</Link>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
}



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
