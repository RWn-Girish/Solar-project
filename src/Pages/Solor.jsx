import { Container } from "react-bootstrap";
import ProjectSection from "../Components/Home_Page/ProjectSection/ProjectSection";
import TestimonialSection from "../Components/Home_Page/Testimonial/TestimonialSection";
import ContactForm from "../Components/SolarRange_Page/SolarForm/SolarForm";
import Commercial_Card from "../Components/Solor/Commer/Commercial_card";
import Counter from "../Components/Solor/Counter/counter";
import TechnologyTabs from "../Components/Solor/Technologies/Technology";
import TopBanner from "../Components/Solor/TopBanner/Commercail";

const Solar = () => {
    return (
        <>
        <div style={{background : ""}}>
        <TopBanner/>
        <Counter/>
        <Commercial_Card/>
        <TechnologyTabs/>
        <TestimonialSection/>

        <ProjectSection/>

        </div>
        
        </>
    )

}
export default Solar;