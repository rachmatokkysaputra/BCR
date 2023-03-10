import React from "react";
import Navigasi from "../components/Navigasi";
import Header from "../components/Header";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUS";
import Testimonials from "../components/Testimonials";
import CardSewa from "../components/CardSewa";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";


function Home() {
    return (
        <div>
            <Navigasi />
            <Header />
            <OurServices />
            <WhyUs />
            <Testimonials />
            <CardSewa />
            <Faq />
            <Footer />
        </ div>
    )
}

export default Home;
