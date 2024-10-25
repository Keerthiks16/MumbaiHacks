import React, { useState } from "react";
import "./ServiceNav.css";

const ServiceNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    INVEST: ["Stocks", "Crypto", "ETFs", "Mutual Funds", "Commodities"],
    TRADE: ["Forex", "Options", "Futures", "Copy Trading", "Signals"],
    BANKING: ["Digital Banking", "Savings", "Cards", "International Transfer"],
    LENDING: [
      "Personal Loans",
      "Business Loans",
      "P2P Lending",
      "Credit Lines",
    ],
    PAYMENTS: [
      "Digital Wallet",
      "QR Payments",
      "Payment Gateway",
      "Remittance",
    ],
    RESEARCH: ["Market Analysis", "Technical Tools", "Screeners", "API Access"],
    LEARN: ["Trading Academy", "Certification", "Webinars", "Community"],
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <span>FINTECH</span>
          </div>

          {/* Navigation items */}
          <div className="navbar-items">
            {Object.entries(menuItems).map(([category, items]) => (
              <div
                key={category}
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-button">{category}</button>

                <div
                  className={`dropdown ${
                    activeDropdown === category ? "active" : ""
                  }`}
                >
                  <div className="dropdown-content">
                    {items.map((item) => (
                      <a key={item} href="#" className="dropdown-item">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="navbar-actions">
            <button className="btn-signin">Sign In</button>

            <button className="btn-get-started">Get Started</button>

            <button className="btn-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mobile-menu-category">
              <button className="mobile-menu-button">{category}</button>
              <div className="mobile-menu-items">
                {items.map((item) => (
                  <a key={item} href="#" className="mobile-menu-item">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ServiceNav;
