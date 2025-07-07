import Title from '../Components/Common_Comp/Title/Title';
import AvailableProducts from '../Components/EV-Charging_Page3/Available-Products/AvailableProducts';
import BrandSlider from '../Components/EV-Charging_Page3/BrandSlider/BrandSlider';
import CalculatorCards from '../Components/EV-Charging_Page3/CalculatorCard/CalculatorCard';
import ChargingTabs from '../Components/EV-Charging_Page3/Charging_Solution/ChargingTabs';

import Brand_1 from "../assets/images/Brand-1.jpg";
import Brand_2 from "../assets/images/Brand-2.jpg";
import Brand_3 from "../assets/images/Brand-3.png";
import Brand_4 from "../assets/images/Brand-4.png";
import Brand_5 from "../assets/images/Brand-5.png";

const brandLogos = [
  Brand_1,
  Brand_2,
  Brand_3,
  Brand_4,
  Brand_5
];

const EV_Charging = () => {
  return (
    <>
      <Title title="EV Charging" page="Home" pageContent="EV Charging" />
      <AvailableProducts />
      <BrandSlider logos={brandLogos} />
      <ChargingTabs />
      <CalculatorCards/>
    </>
  );
};

export default EV_Charging;
