import AboutSection from "../Components/Home_Page/AboutSection/AboutSection";
import ContactSection from "../Components/Home_Page/Contect-Us/ContactSection";
import CustomerSection from "../Components/Home_Page/CustomersSection/CustomersSection";
import ProjectSection from "../Components/Home_Page/ProjectSection/ProjectSection";
import CounterSection from "../Components/Home_Page/SolarCounter/CounterSection";
import TestimonialSection from "../Components/Home_Page/Testimonial/TestimonialSection";
import BannerSection from "../Components/Home_Page/banner/Banner";

const Home = () => {
    return (
        <>
            <BannerSection />
            <CounterSection />
            <AboutSection />
            <CustomerSection />
            <ProjectSection />
            <TestimonialSection />
            <ContactSection />
        </>
    )
}
export default Home;