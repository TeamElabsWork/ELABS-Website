import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const Aiml = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🔥', name: 'TensorFlow', desc: "Google's end-to-end open-source platform for building and deploying machine learning models at any scale.", link: 'https://www.tensorflow.org' },
    { icon: '🤗', name: 'PyTorch', desc: "Meta's flexible deep learning framework — the preferred choice for research and production AI systems.", link: 'https://pytorch.org' },
    { icon: '🧠', name: 'Scikit-learn', desc: 'Versatile Python ML library for classical algorithms — regression, classification, clustering, and preprocessing.', link: 'https://scikit-learn.org' },
    { icon: '💬', name: 'Hugging Face', desc: 'The hub for state-of-the-art NLP models — transformers, LLMs, and pre-trained model fine-tuning.', link: 'https://huggingface.co' },
    { icon: '👁️', name: 'OpenCV', desc: 'Open-source computer vision library — real-time image processing, object detection, and face recognition.', link: 'https://opencv.org' },
    { icon: '🐍', name: 'Python + NumPy', desc: 'The essential stack — Python for rapid experimentation, NumPy for high-performance matrix operations.', link: 'https://numpy.org' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      {/* Hero */}
      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Build intelligent systems with</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['TensorFlow', 'PyTorch', 'OpenCV', 'Transformers', 'Deep Learning']}
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
            Step into the frontier of artificial intelligence and machine learning. Build systems that see, hear, speak, and reason — from neural networks to large language models.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('aiml-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join AI/ML @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      {/* What is AIML */}
      <div className="dp-section-bg">
        <section id="aiml-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">AI & Machine Learning — The Age of Intelligence</h2>
          <p className="dp-section-subtitle scroll-anim">Teaching machines to learn, reason, and create</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Engineering the Mind of Tomorrow</h3>
              <p><strong>Artificial Intelligence</strong> is the science of creating machines that can perform tasks that normally require human intelligence — reasoning, understanding language, recognizing images, and making decisions.</p>
              <p><strong>Machine Learning</strong> is the engine of modern AI — algorithms that improve automatically through experience, learning patterns from data without being explicitly programmed for each scenario.</p>
              <p>At Elabs, our AI/ML members build real models — from image classifiers and chatbots to recommendation systems and generative AI experiments.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Deep Learning & CNNs</strong>Build and train convolutional neural networks for image recognition and computer vision tasks.</div>
              <div className="dp-feature-card"><strong>Natural Language Processing</strong>Work with transformers, LLMs, and text models — sentiment analysis, summarization, and chatbots.</div>
              <div className="dp-feature-card"><strong>Computer Vision</strong>Detect objects, classify images, and process video in real-time using OpenCV and deep learning.</div>
              <div className="dp-feature-card"><strong>Generative AI</strong>Experiment with GANs, diffusion models, and fine-tuned language models for creative AI applications.</div>
            </div>
          </div>
        </section>
      </div>

      {/* Tools */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern AI and deep learning stack</p>
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

      {/* Stats */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">AI/ML at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why AI is the most transformative technology of our generation</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">$15T</div><h4>AI Economy</h4><p>AI projected to contribute $15.7 trillion to the global economy by 2030</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">GPT</div><h4>LLM Projects</h4><p>Members building applications on top of large language model APIs</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">10+</div><h4>Models Trained</h4><p>Custom ML models trained and deployed by Elabs AI/ML members</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">#1</div><h4>Growth Field</h4><p>AI/ML is the fastest growing engineering domain in the world right now</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>AI is no longer a futuristic concept — it's reshaping every industry right now, from healthcare diagnostics to autonomous vehicles to creative tools. At Elabs, our AI/ML members aren't just learning theory. They build models that solve real problems, compete in ML competitions on Kaggle, and contribute to projects that push the boundaries of what's possible on campus.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aiml;
