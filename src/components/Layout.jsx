import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
import Header from './HeaderM'
import HeaderM from './HeaderM'
import Footer from './Footer'
export default function Layout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <HeaderM />
            <br /><br /><br /><br />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
