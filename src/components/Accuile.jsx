import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'primeicons/primeicons.css';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ParticlesM from "./ParticlesM";


gsap.registerPlugin(ScrollTrigger);
function Accuile() {



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
    const navigate = useNavigate()


    return (
        <>

            <Container className="main">
                <div className='.container step-one h-100 ' >
                    <ParticlesM />
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-md-12 titre_one"
                            a style={{ display: 'flex', justifyContent: 'center' }}>
                            Générez des Leads Qualifiés.
                        </div>
                        <div className="col-md-12 titre_one" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                            Confirmez la Croissance.
                        </div>
                    </div>
                    <div className="col-md-12 titre_one mt-5" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '45px' }}>
                        <i className="pi pi-arrow-down" onClick={handleScroll}></i>
                    </div>
                </div>

                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Indroduction</h1>
                            <Text>
                                <h2 data-aos="fade-right" >Bienvenue chez Sales Media,</h2>
                                <h2 data-aos="fade-left" > votre partenaire de confiance pour propulser</h2>
                                <h2 data-aos="fade-right" > votre entreprise vers la réussite.</h2>
                                <h2 data-aos="fade-left" >  Nous sommes une agence de marketing </h2>
                                <h2 data-aos="fade-right" >   digital dédiée à la génération</h2>
                                <h2 data-aos="fade-left" >  de leads qualifiés, combinant expertise </h2>
                                <h2 data-aos="fade-right" >   technologique et humaine pour optimiser votre </h2>
                                <h2 data-aos="fade-left" >   potentiel commercial.</h2>
                            </Text>
                        </div>
                        <h1 data-aos="fade-left" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Commencez dès Aujourd'hui </h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Notre Engament Chez Sales Media, notre mission est de</h2>
                                <h2 data-aos="fade-left" >vous aider à atteindre vos objectifs en matière</h2>
                                <h2 data-aos="fade-right" >de leads qualifiés.</h2>
                                <h2 data-aos="fade-left" >de marketing digital pour attirer,</h2>
                                <h2 data-aos="fade-right" >convertir et confirmer les leads</h2>
                                <h2 data-aos="fade-left" >les plus pertinents pour votre activité.</h2>
                            </Text>

                        </div>
                    </div>
                </div>

                <div className="step-three">
                    <div className="container container1 w-100" >
                        <div className="row" >
                            <div className="col-lg-12 mt-5" >
                                <div className="">
                                    <h1 className="title mb-5" data-aos="zoom-in-right" >Ce que Nous Offrons</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container  container2">
                        <div className="relative">
                            <div className="row">
                                <div id="col1" className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-3 coool33" data-aos="fade-left" style={{ backgroundColor: 'black !important' }} >
                                    <div className="item ">
                                        <h1 className="mt-4 ms-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                            01
                                        </h1>
                                        <h5 className="mt-4" style={{ display: 'flex', justifyContent: 'center' }} >
                                            Génération de Leads Ciblés
                                        </h5>
                                        <h4 className="ms-4 mt-5" >
                                            Des stratégies personnalisées pour  <br /> attirer un flux constant de leads qualifiés. </h4>
                                    </div>
                                </div>


                                <div id="col-2" className="  col-sm-12    col-md-6   col-lg-4   col-xl-4    col-xxl-3 coool33" data-aos="fade-up" style={{ backgroundColor: 'black' }}>
                                    <div className="item">
                                        <h1 className="mt-4 ms-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                            02
                                        </h1>
                                        <h5 className="mt-4" style={{ display: 'flex', justifyContent: 'center' }} >
                                            Confirmation par un <br /> Centre d'Appel Intégré
                                        </h5>
                                        <h4 className="ms-4 " style={{ marginTop: '26px' }} >
                                            Une équipe dévouée pour  valider la qualité et l'authenticité de chaque lead généré.
                                        </h4>                                </div>
                                </div>

                                <div id="col-3" className="  col-sm-12    col-md-6   col-lg-4   col-xl-4    col-xxl-3 coool33" data-aos="fade-right" style={{ backgroundColor: 'black' }}>
                                    <div className="item">
                                        <h1 className="mt-4 ms-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                            03
                                        </h1>
                                        <h5 className="mt-4" style={{ display: 'flex', justifyContent: 'center' }} >
                                            Expertise Combinée
                                        </h5>
                                        <h4 className="ms-4 mt-5">
                                            L'union de la technologie et de l'approche humaine pour des résultats optimaux.</h4>
                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>

                <div className="step-four">
                    <div className="container " >
                        <div className="row" style={{ marginTop: '180px' }}>
                            <div className="col-lg-12" style={{ display: 'flex', justifyContent: "center" }} >
                                <h1>Pourquoi Choisir Sales Media ?</h1>
                            </div>
                        </div>
                    </div>

                    <div className="container paragha" >
                        <div className="row" style={{ marginTop: '180px' }}>
                            <div className="col-lg-12" style={{ display: 'flex', justifyContent: "flex-start" }} data-aos="fade-right">
                                <h1 style={{ color: '#AF96B0' }}>Approche Personnalisée <br />
                                    <p className="mt-2" style={{ fontSize: '20px', color: 'white' }}>
                                        Chaque entreprise est unique, nos solutions le sont aussi.
                                    </p>
                                </h1>
                            </div>
                            <div className="col-lg-12" style={{ display: 'flex', justifyContent: "flex-end" }} data-aos="fade-left">
                                <h1 style={{ color: '#AF96B0' }}>Transparence et Fiabilité <br />
                                    <p className="mt-2" style={{ fontSize: '20px', color: 'white' }}>
                                        Nous valorisons une relation de confiance avec nos clients.
                                    </p>
                                </h1>
                            </div>
                            <div className="col-lg-12 " style={{ display: 'flex', justifyContent: "center", marginTop: '50px' }} data-aos="fade-up">
                                <h1 style={{ color: '#AF96B0' }}>Résultats Mesurables <br />
                                    <p style={{ fontSize: '20px', color: 'white' }}>
                                        Des campagnes orientées résultats pour maximiser votre ROI.
                                    </p>
                                </h1>
                            </div>
                        </div>
                    </div>









                </div>

                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Notre Engagement envers Vous </h1>
                            <Text>
                                <h2 data-aos="fade-right" >Chez Sales Media, votre succès est notre priorité.</h2>
                                <h2 data-aos="fade-left" > est notre priorité.</h2>

                                <h2 data-aos="fade-left" >Nous nous engageons à vous offrir </h2>
                                <h2 data-aos="fade-left" >des services de qualité supérieure,</h2>

                                <h2 data-aos="fade-right" >des leads de grande valeur et</h2>
                                <h2 data-aos="fade-left" > une croissance continue </h2>
                                <h2 data-aos="fade-right" >pour votre entreprise.</h2>
                            </Text>
                        </div>
                        <h1 data-aos="fade-left" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Commencez dès Aujourd'hui </h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Êtes-vous prêt à propulser votre entreprise vers de nouveaux </h2>
                                <h2 data-aos="fade-left" >sommets ? Contactez-nous dès maintenant</h2>
                                <h2 data-aos="fade-right" >pour discuter de la manière dont nous</h2>
                                <h2 data-aos="fade-left" >pouvons booster vos leads et votre croissance.</h2>
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

            </Container >
        </>


    );
}

export default Accuile;


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


