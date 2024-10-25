import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Budget Tracker",
      description: "We help you track all your transactions at one place.",
      image: "/budget-tracker.svg",
      link: "/budget-tracker",
    },
    {
      id: 2,
      title: "Set Goals",
      description:
        "You can easily set your financial goals and we will remind you to complete them.",
      image: "/goals.svg",
      link: "/goals",
    },
    {
      id: 3,
      title: "Receipt Scanning",
      description: "Scan all your receipts, hence saving time.",
      image: "/receipt-scan.svg",
      link: "/receipt-scanning",
    },
  ];

  return (
    <div id="services" className="services-container">
      <h1 className="services-title">Our services</h1>

      <div className="services-grid">
        {services.map((service) => (
          <a key={service.id} href={service.link} className="service-card">
            <div className="card-image">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
            <h2 className="card-title">{service.title}</h2>
            <p className="card-description">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
