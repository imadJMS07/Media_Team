import React, { useEffect } from 'react'
import ParticlesM from "./ParticlesM";
import styled from "styled-components";
import { gsap } from "gsap";
import IconBg1 from '../components/Group 9.png'
import IconBg2 from '../components/Group 11.png'
import IconBg3 from '../components/Group 10.png'
import { Link } from 'react-router-dom';

export default function Propos() {
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
                            Qui Sommes-Nous ?
                        </div>

                        <div className="col-md-12 titre_one mt-5" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '45px' }}>
                            <i className="pi pi-arrow-down" onClick={handleScroll}></i>
                        </div>
                    </div>
                </div>

                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Notre Histoire </h1>
                            <Text>
                                <h2 data-aos="fade-right" >Chez Sales Media, nous sommes passionnés par l'impact positif </h2>
                                <h2 data-aos="fade-left" >du marketing digital sur la croissance des entreprises. </h2>
                                <h2 data-aos="fade-right" >Fondée par des experts partageant cette vision, notre agence s'est </h2>
                                <h2 data-aos="fade-left" >engagée à aider les entreprises à prospérer en générant des</h2>
                                <h2 data-aos="fade-right" >leads qualifiés via des stratégies innovantes.</h2>
                            </Text>
                        </div>
                        <h1 data-aos="fade-left" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Notre Mission </h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Notre mission est simple : propulser votre entreprise vers de nouveaux</h2>
                                <h2 data-aos="fade-left" >sommets. </h2>
                                <h2 data-aos="fade-right" >Nous croyons fermement que chaque entreprise mérite une visibilité</h2>
                                <h2 data-aos="fade-left" > maximale,  des leads de qualité et une croissance continue.</h2>
                                <h2 data-aos="fade-right" >C'est pourquoi nous nous investissons dans chaque projet avec </h2>
                                <h2 data-aos="fade-left" >dévouement et expertise.</h2>
                            </Text>

                        </div>


                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Notre Approche </h1>
                            <Text>
                                <h2 data-aos="fade-right" >À Sales Media, nous croyons en l'équilibre entre la technologie de </h2>
                                <h2 data-aos="fade-left" >pointe et l'approche humaine.</h2>

                                <h2 data-aos="fade-right" >Nos stratégies de génération de leads sont façonnées par</h2>
                                <h2 data-aos="fade-left" >une combinaison d'outils numériques avancés </h2>
                                <h2 data-aos="fade-right" >et par notre équipe de professionnels dévoués.</h2>

                            </Text>
                        </div>


                    </div>
                </div>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 " style={{ display: 'flex', justifyContent: 'center', marginTop: '160px' }}>
                            <h1 data-aos="fade-down" style={{ color: '#AF96B0' }}> Nos Valeurs </h1>
                        </div>
                    </div>
                </div>
                <div className="container mt-5" >
                    <div className="row" >
                        <div data-aos="fade-right" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4  Valeurs "   >
                            <img src={IconBg2} alt="" style={{ position: 'relative', left: '20%' }} />
                            <h1 style={{ position: 'relative', top: '-110px', left: '105px', zIndex: '99', color: '#AF96B0' }}>Qualité </h1>
                            <p style={{ marginTop: '-30px' }}>Nous nous engageons à offrir des leads de haute qualité, authentiques et pertinents pour votre entreprise</p>
                        </div>
                        <div data-aos="fade-up" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4 Valeurs" >
                            <img src={IconBg1} alt="" style={{ position: 'relative', left: '20%' }} />
                            <h1 style={{ position: 'relative', top: '-110px', left: '45px', zIndex: '99', color: '#AF96B0' }}>Transparence </h1>
                            <p style={{ marginTop: '-30px' }}>Une relation basée sur la confiance et la transparence avec nos clients est notre priorité.</p>
                        </div>
                        <div data-aos="fade-left" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4 Valeurs" >
                            <img src={IconBg3} alt="" style={{ position: 'relative', left: '20%' }} />
                            <h1 style={{ position: 'relative', top: '-110px', zIndex: '99', fontWeight: 'bolder', left: '65px', color: '#AF96B0' }}>Innovation </h1>
                            <p style={{ marginTop: '-30px' }} >Nous restons à la pointe des évolutions du marketing digital pour fournir des solutions novatrices.</p>
                        </div>
                    </div>
                </div>


                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Notre Équipe </h1>
                            <Text>
                                <h2 data-aos="fade-right" >Chez Sales Media, notre équipe est notre plus grand atout. </h2>
                                <h2 data-aos="fade-left" >Composée d'experts du marketing digital,de professionnels </h2>

                                <h2 data-aos="fade-right" > du service clientèle et de spécialistes en génération de leads,  </h2>
                                <h2 data-aos="fade-left" >chaque membre apporte un savoir-faire unique pour vous </h2>
                                <h2 data-aos="fade-right" >offrir des solutions sur mesure.</h2>

                            </Text>
                        </div>
                        <h1 data-aos="fade-left" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Notre Engagement envers Vous </h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Votre succès est au cœur de notre engagement. </h2>
                                <h2 data-aos="fade-left" >Nous nous efforçons de vous offrir des services exceptionnels,</h2>
                                <h2 data-aos="fade-right" >, des leads pertinents et une croissance continue pour votre entreprise. </h2>
                            </Text>

                        </div>


                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Prêt à Faire Progresser Votre Entreprise ?</h1>
                            <Text>
                                <h2 data-aos="fade-right" >Contactez-nous aujourd'hui pour discuter de la manière dont </h2>
                                <h2 data-aos="fade-left" >notre agence peut vous aider à atteindre vos objectifs de génération</h2>
                                <h2 data-aos="fade-right" >de leads et de croissance.</h2>
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
    )
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