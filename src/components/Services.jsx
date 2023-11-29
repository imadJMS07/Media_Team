import React from 'react'
import { BiShield, BiNews, BiTrendingUp, BiCheckDouble, BiLineChart, BiUser, BiBullseye, BiTargetLock, BiFolder } from 'react-icons/bi';
import ParticlesM from "./ParticlesM";
import Icon from '../components/hexagon.png'
import { Link } from 'react-router-dom';
export default function Services() {
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

            <div className="container step-one h-100">
                <ParticlesM />
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-md-12 titre_one"
                        a style={{ display: 'flex', justifyContent: 'center', fontSize: '55px' }}>
                        Nos Services de Marketing Digital                     </div>
                    <div className="col-md-12 titre_one" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '55px' }}>
                        pour la Génération de Leads

                    </div>
                    <div className="col-md-12 titre_one mt-5" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '45px' }}>
                        <i className="pi pi-arrow-down" onClick={handleScroll}></i>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row" >
                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-1" data-aos="fade-right">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiNews fontSize={25} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Génération  de   Leads Ciblés </h4>
                        </div>
                        <p>
                            Notre équipe spécialisée dans le marketing digital déploie des stratégies pointues pour attirer des leads qualifiés spécifiquement pour votre entreprise. Que ce soit à travers des campagnes publicitaires, du contenu engageant ou des techniques de référencement avancées, nous optimisons votre présence en ligne pour capter l'intérêt de votre public cible.
                        </p>
                    </div>
                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-2" data-aos="fade-left">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiTrendingUp fontSize={29} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Optimisation du Taux de Conversion</h4>
                        </div>
                        <p>
                            Nous ne nous contentons pas seulement de générer du trafic, mais nous nous efforçons également de le convertir en leads de qualité. En utilisant des techniques éprouvées de conversion, nous maximisons le potentiel de chaque visiteur pour qu'il devienne un prospect potentiel.                                </p>
                    </div>


                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-3" data-aos="fade-right">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiCheckDouble fontSize={27} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Confirmation des Leads via notre Centre d'Appel Intégré </h4>
                        </div>
                        <p>
                            La validation des leads est cruciale. Notre équipe dédiée au centre d'appel s'assure de la qualité et de l'authenticité de chaque lead généré. En les contactant directement, nous confirmons les détails fournis, nous nous assurons de leur intérêt réel et nous optimisons leur pertinence pour votre entreprise.                        </p>
                    </div>
                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-4" data-aos="fade-left">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiLineChart fontSize={25} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Suivi et Analyse Continus </h4>
                        </div>
                        <p className='mt-4'>
                            Nous ne nous contentons pas de lancer des campagnes. Nous surveillons en permanence les performances, analysons les résultats et apportons des ajustements pour maximiser les opportunités de génération de leads.                        </p>
                    </div>


                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-5" data-aos="fade-right">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiUser fontSize={25} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Approche Personnalisée </h4>
                        </div>
                        <p>
                            Chaque entreprise est unique. Nous élaborons des stratégies sur mesure, en tenant compte de vos besoins spécifiques, pour obtenir des leads qui correspondent précisément à vos attentes et objectifs.                                  </p>
                    </div>
                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-6" data-aos="fade-left">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiShield fontSize={25} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Garantie de Qualité et Transparence</h4>
                        </div>
                        <p>
                            La qualité est notre priorité. Nous garantissons des leads de haute qualité, authentiques et pertinents pour votre entreprise. De plus, nous maintenons une transparence totale tout au long du processus.                                                     </p>
                    </div>
                    <div className="  col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-6 mt-5 service-7" data-aos="fade-left">
                        <div className='iconn' >
                            <img src={Icon} className='imgg'
                                width="55"
                                height="59" />
                            <BiTargetLock fontSize={25} className="icons" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className='me-2 mt-3'>
                            <h4>Besoin d'une Stratégie de Génération de Leads sur Mesure </h4>
                        </div>
                        <p>
                            Contactez-nous dès aujourd'hui pour discuter de la manière dont nos services de génération de leads peuvent propulser votre entreprise vers le succès.                        </p>
                    </div>
                </div>
            </div >


            <div className="container" style={{ display: '', marginTop: '147px', position: 'relative', top: '-50px' }}>
                <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
                    <div className="col-12 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link className='px-btn-accueil btn' data-aos="fade-up" to="/contact">Contactez-nous</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
