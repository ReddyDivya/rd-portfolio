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
        <div className="bg-site bg-no-repeat bg-cover">
            <Header />
            <About />
            <Banner />
            <Navbar />
            <Work />
            <Services />
            <Contact />
            <div classname="h-[4000px]"></div>
        </div>
    )
}

export default App;