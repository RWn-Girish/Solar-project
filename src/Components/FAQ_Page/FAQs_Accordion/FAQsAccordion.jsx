import { Accordion, Container } from "react-bootstrap";
import "./FAQsAccordion.css"

const SolarFAQ = () => {  
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Solar Power FAQs</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item  className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What is feed in tariff?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Feed-In tariff is the rate at which the DISCOM buys back solar power from it's customers after the self consumption of solar power by the customer. BESCOM in it's current policy is paying back Rs.3.56 per for each solar unit the customer gives to the grid. You can read more on the solar rooftop policy in Karnataka in the following link: BESCOM Solar Policy
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>How much Rooftop area is required for Solar Rooftop?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            For Solar Rooftop, approximately 100Sqft of shade free area is needed for 1kVA Solar modules
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>I already have a UPS based battery backup solution for my home. Can I use this along with solar?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, this back-up can run the household loads during a power-cut as usual. This system will work independently of the solar system.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What are the ideal cases when I should go for an on-grid system?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            On-grid systems without batteries can be considered for the following purposes: To neutralize the electricity bill and generate free, clean energy for oneself. To hedge against the increase in prices of electricity tariff · To generate some income over a long period of time. Yes, the solar plant is an asset that generates revenue throughout its lifetime. On-grid system without batteries shouldn't be considered at places where the power outages are quite high especially during day time. This system is not recommended for places where the reliability of power is the first choice.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>Is there a way that I can use the solar power during power-cuts?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Solar power generated during power outages can be stored in batteries. These systems are called hybrid systems as they have battery storage facility as well as grid connection.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>Why is that solar generation is stopped when there is a power cut, which is the time when solar is required more than ever?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            The reason behind this logic is that during a power cut, in case electricity personals are working on the grid lines, export of solar power can cause electric shock to the people working on it. So this is more of a safety issue that solar generation stops.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What is the disadvantage of the grid-connected system without batteries?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            The solar generation is stopped when there is a power-cut from the grid. The solar inverters have the inbuilt property called anti-islanding which makes sure that the moment there is a power outage at the grid, it will stop the solar generation.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>How do I know that I am eligible for grid connection?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Depending on the state level policy prevailing in your state for roof-top solar, the requirements for putting up a solar power plant can vary. In general, these are the few basic requirements for applying for a roof-top solar system: You should be the owner of the building where you intend to put solar. · You should be the consumer of the local ESCOM(Energy Supply COMpany), the energy meter should be in your name.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What are the advantages of grid connection compared to no-grid connection?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Grid connection can eliminate the requirement of batteries in a solar roof-top system which can give a longer life for the system without replacement of its parts. Apart from this the following benefits are also there compared to an off-grid battery based system: Lower system cost as lower accessories are required. · The inverter efficiencies are better in a battery-less system which reduces the energy losses.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What are the different options available for me to go on-grid or grid connected?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Depending on the state level policy, there are two different options for going grid connected/on-grid/hybrid: Net metering: The metering system where the power generated is first consumed by the loads in the building. Only excess is exported to the grid. In net metering, the bill is calculated as a difference of total export & total import Gross Metering: The metering system where the whole power is exported to the grid. Generally in gross metering output of a solar inverter is directly connected to the grid and not to the loads first. For example, in Karnataka, for residential buildings, the choice for grid connection is through net metering
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What are the functions of an On-Grid inverter?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            An On-Grid inverter performs the following major functions: Convert the DC Power from solar panels to AC Power. Synchronize this AC power with the voltage & frequency of the grid power. Maximize the output from the solar panels(via a feature called MPPT).
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What do you mean by 'load'?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Loads are nothing but the energy consuming electrical appliances. Light, fan, refrigerator, motor are some of the examples.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>How is that a Solar PV System is connected to grid or grid-tied?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            The Solar On-Grid PV System is connected to the grid via the Solar inverter. In terms of physical connection, the solar inverter (or grid-tied inverter/On-grid inverter) is connected to the distribution board of a building just like how a bad (equipment) point is connected.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What is On-Grid System?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            A Solar PV (Photo Voltaic) system which is connected to the grid where the system can potentially send power back to the grid as well. These systems are also called grid-tied systems
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="14" className="accordion-item">
          <Accordion.Header className="accordion-header"><h3>What is Grid?</h3></Accordion.Header>
          <Accordion.Body className="accordion-body">
            The grid is electricity connection that a building has. In general, grid refers to the ESCOM (Energy Supply Company)
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default SolarFAQ;