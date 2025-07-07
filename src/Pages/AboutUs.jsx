import About_card from "../Components/About_Page/About_card/About_card";
import About from "../Components/About_Page/About_us/AboutSection";
import Title from "../Components/Common_Comp/Title/Title";

const AboutUs = () => {
     return  (

         <>
      <Title title="About Us" page="Home" pageContent="About Us" />
      <About/>
      <About_card/>
     
     </>
         )
}
export default AboutUs;