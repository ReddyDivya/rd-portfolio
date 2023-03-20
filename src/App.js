import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Nav";
import Services from "./components/Services";

const App = (props) => {
    return (
        <>
            <Header />
            <About />
            <Banner />
            <Navbar />
            <Work />
            <Services />
            <Contact />
        </>
    )
}

export default App;