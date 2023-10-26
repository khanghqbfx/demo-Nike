import { services } from "../constants/index";

import ServicesCard from "../component/ServicesCard";
const Services = () => {
  


  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((services) => (
        <ServicesCard key={services.label} {...Services } />
      ))}
    </section>
  );
};

export default Services;
