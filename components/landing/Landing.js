import React from "react"
import About from "../About/About"
import Display from "../display/Display"
import FloorPlans from "../floor-plans/FloorPlans"
import Brochure from "../brochure/Brochure"
import EnquireNow from "../enquire-now/EnquireNow"

const Landing = () => {
    return (
        <>
            <About />
            <Display />
            <FloorPlans />
            <Brochure />
            <EnquireNow />
        </>
    )
}

export default Landing