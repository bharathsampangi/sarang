import React from "react"
import About from "../About/About"
import Display from "../display/Display"
import FloorPlans from "../floor-plans/FloorPlans"
import Brochure from "../brochure/Brochure"

const Landing = () => {
    return (
        <>
            <About />
            <Display />
            <FloorPlans />
            <Brochure />
        </>
    )
}

export default Landing