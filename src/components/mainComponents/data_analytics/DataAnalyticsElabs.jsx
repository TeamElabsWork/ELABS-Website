import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const DataAnalytics = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🐍', name: 'Python', desc: 'The lingua franca of data science — versatile, readable, and backed by a massive ecosystem of libraries.', link: 'https://www.python.org' },
    { icon: '🐼', name: 'Pandas', desc: 'Powerful data manipulation and analysis library for Python — the go-to for cleaning and exploring datasets.', link: 'https://pandas.pydata.org' },
    { icon: '📊', name: 'Matplotlib / Seaborn', desc: 'Core Python visualization libraries for creating static, animated, and interactive charts and graphs.', link: 'https://matplotlib.org' },
    { icon: '🤖', name: 'Scikit-learn', desc: 'Simple and efficient tools for machine learning in Python — classification, regression, clustering, and more.', link: 'https://scikit-learn.org' },
    { icon: '📓', name: 'Jupyter Notebook', desc: 'Interactive computing environment for combining code, visualizations, and narrative text in one document.', link: 'https://jupyter.org' },
    { icon: '📈', name: 'Power BI / Tableau', desc: 'Industry-leading BI tools for creating powerful, interactive dashboards and business intelligence reports.', link: 'https://powerbi.microsoft.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Turn raw data into decisions using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Power BI']}
                mainClassName="px-3 py-1 bg-orange-500 text-white overflow-hidden rounded-xl"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </span>
            {' '}at Elabs
          </h1>
          <p className="dp-hero-desc">
            Unlock the power hidden inside data. Learn to collect, clean, analyze, and visualize information that drives better decisions and builds smarter systems.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('data-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Data @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="data-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Data Analytics — The Science of Insight</h2>
          <p className="dp-section-subtitle scroll-anim">Finding meaning in the world's most valuable resource</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Every Decision Backed by Data</h3>
              <p><strong>Data Analytics</strong> is the process of examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.</p>
              <p><strong>Machine Learning</strong> takes it further — building systems that learn from data patterns to make predictions and automate intelligent decisions without explicit programming.</p>
              <p>At Elabs, we analyze real datasets, build predictive models, and create dashboards that communicate findings clearly and beautifully to stakeholders.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Data Wrangling & EDA</strong>Clean messy real-world data and explore it to find hidden patterns and trends.</div>
              <div className="dp-feature-card"><strong>Statistical Analysis</strong>Apply statistical methods to validate hypotheses and draw reliable conclusions.</div>
              <div className="dp-feature-card"><strong>Machine Learning Models</strong>Train and evaluate models for classification, regression, and clustering tasks.</div>
              <div className="dp-feature-card"><strong>Data Visualization</strong>Build interactive dashboards and charts that make complex data instantly understandable.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern data science stack</p>
          <div className="dp-tools-grid">
            {tools.map((tool, i) => (
              <div className="dp-tool-card scroll-anim flip-in" key={i}>
                <span className="dp-tool-icon">{tool.icon}</span>
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
                <a href={tool.link} target="_blank" rel="noreferrer" className="dp-tool-link">Learn More</a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Data Analytics at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why data literacy is the most critical skill of the century</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">2.5EB</div><h4>Daily Data</h4><p>2.5 exabytes of new data are created every single day</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">#1</div><h4>Hottest Job</h4><p>Data Scientist ranked as the #1 job in the US for multiple years running</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">15+</div><h4>Datasets</h4><p>Real-world datasets analyzed and modeled by Elabs members</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">92%</div><h4>Accuracy</h4><p>Average model accuracy achieved by Elabs data projects</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Data is the new oil — and knowing how to refine it is an invaluable superpower. At Elabs, our data analytics members don't just learn Python. They tackle real problems, from predicting student performance to analyzing sensor data from engineering systems, making their work directly relevant to the world around them.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataAnalytics;