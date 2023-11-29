import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";



export default function ParticlesM() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={
                    {

                        fpsLimit: 19080,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 900,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.9,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1200,
                                },
                                value: 140,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }
                }
            />
        </>
    )
}
