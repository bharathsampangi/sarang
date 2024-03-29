import React from "react"
import Navbar from "../navbar/Navbar"
import Hero from "../hero/Hero"
import Landing from "../landing/Landing"

const Main = () => {
    return (
        <main>
            <Navbar active="home" />
            <Hero />
            <Landing />
        </main>
    )
}

export default Main