import React, { useEffect, useRef } from "react";
import "./DataAnalyticsElabs.css";

import analyticsLogo from "./Images/data-analytics.png";
import colabImg from "./Images/colab.png";
import pythonImg from "./Images/python.png";
import mlImg from "./Images/ml.png";
import appImg from "./Images/analytics-app.png";
import sclearn from "./Images/sclearn.png";
import sql from "./Images/sql.png";
import tableau from "./Images/tableau.png";
import powerbi from "./Images/powerbi.png";
import newbody from "./Images/newbody.jpg";


const DataAnalyticsELabs = () => {
  const canvasRef = useRef(null);
  const logoRef = useRef(null);

  const openInfo = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    document.body.classList.add("java-page-loading");
    const timer = setTimeout(() => {
      document.body.classList.add("java-page-loaded");
    }, 100);

    const logo = logoRef.current;
    const handleLogoMove = (e) => {
      if (!logo) return;
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      logo.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
    };
    const handleLogoLeave = () => {
      if (!logo) return;
      logo.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    };

    logo?.addEventListener("mousemove", handleLogoMove);
    logo?.addEventListener("mouseleave", handleLogoLeave);

    const animatedSections = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .fade-down, .zoom-in, .slide-left, .slide-up, .tools-grid"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.classList.contains("tools-grid")) {
              entry.target.querySelectorAll(".tool-card").forEach((card, i) => {
                setTimeout(() => card.classList.add("visible"), i * 120);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedSections.forEach((section) => observer.observe(section));

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("java-page-loading", "java-page-loaded");
      logo?.removeEventListener("mousemove", handleLogoMove);
      logo?.removeEventListener("mouseleave", handleLogoLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas id="particleCanvas" ref={canvasRef}></canvas>

      {/* Hero Section */}
      <section className="front">
        <div className="javalogo">
          <img src={analyticsLogo} ref={logoRef} alt="Data Analytics Logo" />
        </div>
        <div className="front-box">
          <h1 className="hero-title">Data Analytics at E Labs</h1>
          <p>
            Welcome to the <span>Data Analytics</span> domain of <span>E Labs</span>.
            This domain focuses on extracting <span>meaningful insights</span> from
            raw data using <span>statistical analysis</span>, <span>machine learning</span>,
            and <span>real-world datasets</span>.
          </p>
          <p>
            At <span>E Labs</span>, members learn how data is
            <span> collected</span>, <span>cleaned</span>, <span>trained</span>, and
            transformed into <span>actionable intelligence</span> using industry tools.
          </p>
        </div>
      </section>


      {/* Data Analytics Overview Section */}
      <section className="java-info-section">
        <div className="info-box fade-left">
          {/* Text Content */}
          <div className="info-content">
            <h2>What is Data Analytics?</h2>
            <p>
              <strong>Data Analytics</strong> is the process of analyzing raw data to
              discover patterns, trends, and insights that support decision-making.
              It involves collecting, cleaning, analyzing, and visualizing data to
              answer questions, understand performance, and drive strategy.
            </p>

            <h3 className="rr">
              <span>Core Areas of Data Analytics</span>
            </h3>

            <p className="section-intro">
              Data Analytics is a multidisciplinary field combining statistics,
              programming, and domain knowledge. Each area plays a crucial role in
              converting raw data into actionable insights.
            </p>

            <div className="core-grid">
              <div className="core-card">
                <h4>Data Cleaning</h4>
                <p>Handling missing values, outliers, and inconsistencies in raw data.</p>
              </div>

            <div className="core-card">
              <h4>Exploratory Analysis</h4>
              <p>Understanding data distributions, trends, and relationships.</p>
            </div>

            <div className="core-card">
              <h4>Statistical Modeling</h4>
              <p>Applying probability and statistical techniques to derive insights.</p>
            </div>

            <div className="core-card">
              <h4>Machine Learning</h4>
              <p>Training models to predict outcomes and discover hidden patterns.</p>
            </div>

            <div className="core-card">
              <h4>Visualization</h4>
              <p>Communicating insights through charts, dashboards, and reports.</p>
            </div>
          </div>
        </div>
          {/* Image */}
          <div className="info-image1">
            <img src={newbody} alt="Data Analytics Overview" />
          </div>
      </div>
      </section>  

      {/* Tools Section */}
      <section className="tools-section slide-up">
        <h2>Tools Used in Data Analytics</h2>
        <p className="tools-subtext mb-10">
          Industry-standard tools that help analysts experiment, train, visualize, and deploy data-driven solutions efficiently.
          These tools bridge the gap between raw data and real-world decision-making at scale.
        </p>

        <div className="tools-grid">
          <div className="tool-card">
            <img src={colabImg} alt="Google Colab" />
            <h3>Google Colab</h3>
            <p>
              A cloud-based notebook environment that enables rapid experimentation,
              collaboration, and scalable model training without local setup.
            </p>
          </div>

          <div className="tool-card">
            <img src={pythonImg} alt="Python" />
            <h3>Python</h3>
            <p>
              The backbone of data analytics, powering data manipulation,
              visualization, and machine learning through rich libraries.
            </p>
          </div>

          <div className="tool-card">
            <img src={sclearn} alt="Scikit-learn" className="tool-icon" />
            <h3>Scikit-learn</h3>
            <p>
              A powerful machine learning library used for building, training,
              evaluating, and optimizing predictive models.
            </p>
          </div>

          <div className="tool-card">
            <img src={sql} alt="SQL" className="tool-icon"/>
            <h3>SQL</h3>
            <p>
              Essential for querying, filtering, and managing large structured
              datasets efficiently.
            </p>
          </div>

          <div className="tool-card">
            <img src={tableau} alt="Tableau" className="tool-icon"/>
            <h3>Tableau</h3>
            <p>
              A powerful data visualization tool used to create interactive dashboards
              and reports for business intelligence.
            </p>
          </div>

           <div className="tool-card">
            <img src={powerbi} alt="Power BI" className="tool-icon"/>
            <h3>Power BI</h3>
            <p>
              A business analytics tool by Microsoft that helps you turn data into actionable insights.
            </p>
          </div>

        </div>
      </section>


      {/* Training Section */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>How Data is Trained</h2>
          <p>
            Data training involves feeding cleaned data into algorithms so they can
            learn patterns and make predictions.
          </p>
          <h3 className="rr"><span>Training Workflow:</span></h3>
          <p>
            • Data Collection<br />
            • Data Cleaning<br />
            • Feature Selection<br />
            • Model Training<br />
            • Evaluation & Optimization
          </p>
        </div>
        <div className="info-image1">
          <img src={mlImg} alt="Model Training" />
        </div>
      </div>

      {/* Applications Section */}
      <section className="applications-section fade-up zoom-in mb-16">
        <h2>Applications of Data Analytics</h2>
        <div className="applications-header">
          <div className="app-image">
            <img src={appImg} alt="Applications" />
          </div>
          <div className="app-content">
            <p>
              Data analytics is applied across industries for decision-making, from optimizing logistics and detecting fraud in finance to personalizing customer experiences in retail and improving patient care in healthcare, by finding patterns in data to predict outcomes, streamline operations, manage risks, and enhance services.
            </p>
          </div>
        </div>

        <div className="applications-grid">
          <div className="app-card">
            <h3>Business Intelligence</h3>
            <p>Analyzing sales, revenue, and customer behavior.</p>
          </div>
          <div className="app-card">
            <h3>Healthcare Analytics</h3>
            <p>Predicting diseases and improving patient outcomes.</p>
          </div>
          <div className="app-card">
            <h3>Financial Analytics</h3>
            <p>Fraud detection and market trend prediction.</p>
          </div>
          <div className="app-card">
            <h3>AI & ML Systems</h3>
            <p>Building intelligent, data-driven applications.</p>
          </div>
          <div className="app-card">
            <h3>Customer Analytics</h3>
            <p>Understanding customer preferences and user engagement.</p>
          </div>
          <div className="app-card">
            <h3>Supply Chain Analytics</h3>
            <p>Optimizing logistics and operational efficiency using data.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataAnalyticsELabs;