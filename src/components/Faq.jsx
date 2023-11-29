import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'primeicons/primeicons.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ParticlesM from "./ParticlesM";




gsap.registerPlugin(ScrollTrigger);
function Faq() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

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




    return (
        // <AppContainer>
        <>

            <Container className="main">
                <div className='.container step-one h-100 ' >
                    <ParticlesM />
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col-md-12 titre_one"


                            a style={{ display: 'flex', justifyContent: 'center' }}>
                            FAQ - Réponses à Vos Questions <br />
                        </div>
                        <div className="col-md-12 titre_one" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                            Fréquentes.
                        </div>
                    </div>
                </div>

                <div className="container step-two " style={{ display: '', marginTop: '100px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Quels types de méthodes utilisez-vous pour la génération de leads ?  </h1>
                            <Text>
                                <h2 data-aos="fade-right" >Nous utilisons une gamme variée de</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">stratégies de marketing digital, notamment le </h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">référencement organique, </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000"> les campagnes publicitaires ciblées, </h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000"> le marketing de contenu, le marketing par e-mail, </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">et d'autres outils avancés pour  </h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">attirer des leads qualifiés.</h2>
                            </Text>
                        </div>
                        <h6 data-aos="fade-left" data-aos-duration="2000" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Comment garantissez-vous la qualité des leads générés ? </h6>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" >Chaque lead est soumis à un processus de confirmation </h2>
                                <h2 data-aos="fade-left" >rigoureux via notre centre d'appel intégré. </h2>

                                <h2 data-aos="fade-left" data-aos-duration="2000">Nous contactons directement les leads pour </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">valider leur authenticité, leurs besoins et </h2>

                                <h2 data-aos="fade-right" data-aos-duration="2000">leur intérêt pour garantir leur qualité.</h2>

                            </Text>

                        </div>
                    </div>
                </div>

                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Quelle est la différence entre un lead qualifié et un simple prospect ?</h1>
                            <Text>
                                <h2 data-aos="fade-right" >Un lead qualifié est un prospect dont l'intérêt  </h2>
                                <h2 data-aos="fade-left" >pour vos produits ou services a été confirmé. </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">Nous nous assurons que les leads </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">critères définis par votre entreprise </h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">pour maximiser les chances de conversion.</h2>

                            </Text>
                        </div>
                        <h1 data-aos="fade-left" data-aos-duration="2000" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Comment puis-je mesurer l'efficacité de votre service de génération de leads pour mon entreprise ?</h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" data-aos-duration="2000">Nous fournissons des rapports détaillés sur les performances de vos campagnes</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">Ces rapports incluent des métriques</h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">clés telles que le nombre de leads générés, </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">leur qualité, et les taux de conversion</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">pour évaluer l'efficacité de nos services.</h2>

                            </Text>


                        </div>
                    </div>
                </div>

                <div className="container step-two " style={{ display: '', marginTop: '100px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Quelle est la durée habituelle pour commencer à voir des résultats concrets après avoir engagé vos services ?</h1>
                            <Text>
                                <h2 data-aos="fade-right" >La rapidité des résultats dépend de plusieurs facteurs, </h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">y compris votre secteur d'activité, la portée de la campagne et la compétitivité du marché. </h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">Cependant, la plupart de nos clients constatent des améliorations</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000"> significatives dans les premiers mois de collaboration.</h2>
                            </Text>
                        </div>
                        <h1 data-aos="fade-left" data-aos-duration="2000" className="" style={{ display: 'flex', justifyContent: 'center', color: '#AF96B0', fontSize: '55px' }} >Quelles sont vos tarifications ?</h1>
                        <div className="col-md-12  indro" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Text>
                                <h2 data-aos="fade-right" data-aos-duration="2000">Notre Engament Chez Sales Media, notre mission est de</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">vous aider à atteindre vos objectifs en matière</h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">de leads qualifiés.</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">de marketing digital pour attirer,</h2>
                                <h2 data-aos="fade-right" data-aos-duration="2000">convertir et confirmer les leads</h2>
                                <h2 data-aos="fade-left" data-aos-duration="2000">les plus pertinents pour votre activité.</h2>
                            </Text>

                        </div>
                    </div>
                </div>




                <div className="container step-two " style={{ display: '', marginTop: '200px' }}>
                    <div className="row">
                        <div className="col-md-12 indro">
                            <h1 data-aos="fade-right" >Pouvez-vous travailler avec des entreprises de toutes tailles ?</h1>
                            <Text>
                                <h2 data-aos="fade-right" >Absolument, nos services sont adaptés à diverses entreprises, </h2>
                                <h2 data-aos="fade-left" >qu'elles soient de petite, moyenne ou grande taille.</h2>

                                <h2 data-aos="fade-left" data-aos-duration="2000">Notre approche est flexible pour répondre aux besoins spécifiques de chaque client.</h2>

                            </Text>
                        </div>

                    </div>
                </div>



                <div className="container" style={{ display: '', marginTop: '147px', position: 'relative', top: '-50px' }}>
                    <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
                        <div className="col-12 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className='px-btn-accueil btn ' data-aos="fade-up">Contactez-nous pour plus d'informations</button>
                        </div>
                    </div>
                </div>
            </Container >
        </>


    );
}

export default Faq;


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


