import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Banner from "./components/Banner";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/Services";

const App = (props) => {
    return (
        <div className="bg-site bg-no-repeat bg-cover">
            <Header />
            <About />
            <Banner />
            <Nav />
            <Work />
            <Services />
            <Contact />
            <div className="h-[4000px]"></div>
        </div>
    )
}

export default App;