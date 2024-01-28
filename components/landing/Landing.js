import React from "react"
import About from "../About/About"
import Display from "../display/Display"
import FloorPlans from "../floor-plans/FloorPlans"
import Brochure from "../brochure/Brochure"
import EnquireNow from "../enquire-now/EnquireNow"
import Footer from "../footer/Footer"

const Landing = () => {
    return (
        <>
            <About />
            <Display />
            <FloorPlans />
            <Brochure link="#enquire" />
            <EnquireNow />
            <Footer />
        </>
    )
}

export default Landing