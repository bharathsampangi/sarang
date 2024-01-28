import Head from "next/head"
import Navbar from "../../components/navbar/Navbar"
import Holding from "../../components/holding/Holding"
import Footer from "../../components/footer/Footer"
import LocationMap from "../../components/location-map/LocationMap"
import Brochure from "../../components/brochure/Brochure"

export default function Location() {
    return (
        <div>
            <Head>
                <title>Sarang by Sumadhura - 3bhk & 4bhk Premium flats in Whitefield</title>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <meta name="description" content="Sumadhura Folium is a luxury high-rise apartment project in Whitefield, Bangalore. Get all details about Price/Locations/Status and apartments from here." />
                <meta name="keywords" content="Sumadhura Folium,Sumadhura folium Whitefield,Sumadhura folium price, Sumadhura folium location,Sumadhura Folium Reviews,Sumadhura Group,Sumadhura folium Borewell Road,sumadhura folium Brochures "/>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://foliumbysumadhura.co.in/"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <Navbar active="location"/>
                <Holding title='Location'/>
                <LocationMap />
                <Brochure link="/contactus#enquire"/>
                <Footer />
            </main>
        </div>
    )
}