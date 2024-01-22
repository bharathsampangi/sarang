import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Sarang-Logo1-1-650x650-2.png"
import styles from "./styles/Navbar.module.css"
import Link from "next/link";

export default function Navbar({ active='' }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={Logo} alt="Logo" className="logo" height={100}/>
                </Link>
            </div>
            <ul className={styles.list}>
                <li className={`${active == "home" && styles.active}`}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={`${active == "project" && styles.active}`}>
                    <Link href="/project">
                        Project
                    </Link>
                </li>
                <li className={`${active == "clubhouse" && styles.active}`}>
                    <Link href="/clubhouse">
                        Clubhouse
                    </Link>
                </li>
                <li>
                    <Link href="/location">
                        Location
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contactus">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}