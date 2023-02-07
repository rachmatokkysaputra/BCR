import React from "react";
import Navigasi from "../components/Navigasi";
import Header from "../components/Header1";
import Search from "../components/Search";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navigasi />
            <Header />
            <Search />
            <Footer />
        </ div>
    )
}

export default Home;