import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Aos from 'aos';
import ParticlesM from "./ParticlesM";
import IconBg1 from '../components/Group 25.png'
import IconBg2 from '../components/Group 27.png'
import IconBg3 from '../components/Group 28.png'
export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [objective, setObjective] = useState('');
    const [message, setMessage] = useState('')







    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = 'service_4v2zxwh';
        const templateId = 'template_rdye9vf';
        const publicKey = 'meJ9wZhhL-5AFWhaA';


        const templateParams = {
            from_name: nom,
            from_prenom: prenom,
            from_email: email,
            from_objective: objective,
            from_message: message,
            to_name: 'Sales Media'

        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setNom('')
                setPrenom('')
                setEmail('')
                setObjective('')
                setMessage('')
            })
            .catch((error) => {
                console.log('Error sending email : ', error)
            })



    };

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
            <div className='container step-one h-100 ' >
                <ParticlesM />
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-md-12 titre_one"
                        a style={{ display: 'flex', justifyContent: 'center', fontSize: '100px' }} >
                        Contact
                    </div>
                    <div className="col-md-12 titre_one" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                    </div>
                </div>
                <div className="col-md-12 titre_one mt-5" style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', fontSize: '45px' }}>
                    <i className="pi pi-arrow-down" onClick={handleScroll}></i>
                </div>
            </div>



            <div className="container ">
                <div className="row">
                    <div className="col-12 " style={{ display: 'flex', justifyContent: 'center', marginTop: '160px' }}>
                        <h1 data-aos="fade-down" style={{ color: '#AF96B0' }}>CONTACT INFORMATION</h1>
                    </div>
                </div>
            </div>
            <div className="container mt-5" >
                <div className="row" >
                    <div data-aos="fade-right" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4  Valeurs "   >
                        <img src={IconBg1} alt="" style={{ position: 'relative', left: '20%' }} />
                        <h3 style={{ position: 'relative', top: '40px', left: '120px', zIndex: '99', color: '#AF96B0' }}>TÉLÉPHONE</h3>
                        <p style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }} >
                            +212 7 62 18 15 92
                        </p>
                    </div>
                    <div data-aos="fade-up" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4 Valeurs" >
                        <img src={IconBg2} alt="" style={{ position: 'relative', left: '20%' }} />
                        <h3 style={{ position: 'relative', top: '40px', left: '90px', zIndex: '99', color: '#AF96B0' }}>NOTRE ADRESSE</h3>
                        <p style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>Maroc</p>
                    </div>
                    <div data-aos="fade-left" className=" col-sm-12 col-md-6   col-lg-4   col-xl-4    col-xxl-4 Valeurs" >
                        <img src={IconBg3} alt="" style={{ position: 'relative', left: '20%' }} />
                        <h3 style={{ position: 'relative', top: '40px', zIndex: '99', fontWeight: 'bolder', left: '55px', color: '#AF96B0', display: 'inline-block' }}>HEURES DE TRAVAIL</h3>
                        <p style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }} >Du lundi au vendredi: de 9h00 à 18h00 <br />
                            Samedi et Dimanche: fermé</p>
                    </div>
                </div>
            </div>


            <div className="container" data-aos="fade-down" style={{ marginBottom: '100px' }}>
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="con-12 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '50px' }}>GET IN TOUCH</h1>
                    </div>
                    <div className="col-9 mt-5" >
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="nom" className="form-label">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        className="formIN p-3"
                                        id="nom"
                                        onChange={(e) => setNom(e.target.value)}
                                        value={nom}
                                        placeholder='Entre Nom'
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="prenom" className="form-label">
                                        Prenom
                                    </label>
                                    <input
                                        type="text"
                                        className="formIN p-3"
                                        id="prenom"
                                        onChange={(e) => setPrenom(e.target.value)}
                                        value={prenom}
                                        placeholder='Entre Prenom'

                                    />
                                </div>
                                <div className="col-12 mt-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="formIN p-3"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder='Entre Email'

                                    />
                                </div>
                                <div className="col-12 mt-3">
                                    <label htmlFor="objective" className="form-label">
                                        Objective
                                    </label>
                                    <input
                                        type="text"
                                        className="formIN p-3"
                                        id="objective"
                                        onChange={(e) => setObjective(e.target.value)}
                                        value={objective}
                                        placeholder='objective'

                                    />
                                </div>
                                <div className="col-12 mt-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="textarea   "
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        placeholder='message'
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" className="send_message" style={{ width: '200px' }}>
                                    Send
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
