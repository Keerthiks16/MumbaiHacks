import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-tag">TRANSACTION MANAGEMENT</h3>

            <h1 className="about-title">
              Unlimited Transactions
              <br />
              tracking with zero fees
            </h1>

            <p className="about-description">
              Get access to our exclusive app that allows you to keep a track of
              all your transactions, subscriptions. Also allows you to set goals
              and get personalised feeds on your spendings.
            </p>

            <button className="about-button">Get started</button>
          </div>

          <div className="about-illustration">
            <svg
              viewBox="0 0 400 400"
              className="piggy-bank"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base/Ground Line */}
              <line
                x1="50"
                y1="380"
                x2="350"
                y2="380"
                stroke="#333"
                strokeWidth="2"
              />

              {/* Piggy Bank Body */}
              <path
                d="M150 200 C150 150, 250 150, 250 200 C250 250, 150 250, 150 200"
                fill="#2F3542"
                className="piggy-body"
              />

              {/* Leg */}
              <path
                d="M180 240 L180 380"
                stroke="#2F3542"
                strokeWidth="20"
                className="piggy-leg"
              />

              {/* Head */}
              <circle
                cx="150"
                cy="180"
                r="30"
                fill="#2F3542"
                className="piggy-head"
              />

              {/* Eye */}
              <circle
                cx="140"
                cy="170"
                r="5"
                fill="#00ff9d"
                className="piggy-eye"
              />

              {/* Dollar Coin */}
              <circle
                cx="200"
                cy="120"
                r="40"
                fill="#00ff9d"
                className="dollar-coin"
              />
              <text
                x="190"
                y="135"
                fontSize="40"
                fill="#000"
                className="dollar-sign"
              >
                $
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
