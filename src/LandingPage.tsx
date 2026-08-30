import { Hero } from "./components/landing/Hero"
import { Amenities } from "./components/landing/Amenities"
import { Rooms } from "./components/landing/Rooms"
import { Community } from "./components/landing/Community"
import { Testimonials } from "./components/landing/Testimonials"
import { FAQ } from "./components/landing/FAQ"
import { Footer } from "./components/landing/Footer"
import { Fragment } from "react/jsx-runtime"

const LandingPage = () => {
    return (
        <Fragment>
            <Hero />
            <Amenities />
            <Rooms />
            <Community />
            <Testimonials />
            <FAQ />
            <Footer />
        </Fragment>
    )
}

export default LandingPage