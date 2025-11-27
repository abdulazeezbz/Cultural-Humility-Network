import React, { useState, useEffect } from "react";

import { db, ref, push } from "./firebase";
import TopNav from "./topnava";
// TrainingsLanding.jsx
// Drop this file in src/pages or src/components for a Vite + React project.
// CSS is provided at the bottom of this file — paste it into src/styles/trainings.css
// and import it with: import "../styles/trainings.css";

export default function TrainingsLanding() {
  // small enhancement: keep track of which detail is open for accessibility/animation
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    // smooth scrolling for hash links
    const handler = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);




   const [loading, setLoading] = useState(false);
  const [enquirerType, setEnquirerType] = useState(""); // track radio selection


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Convert trainings checkboxes to array
    data.trainings = formData.getAll("trainings");

    try {
      await push(ref(db, "enquiries"), data);
      alert("Enquiry submitted successfully!");
      e.target.reset();
      setEnquirerType("");
    } catch (error) {
      console.error(error);
      alert("Failed to submit enquiry.");
    }

    setLoading(false);
  };


















  const trainings = [
    {
      id: 'cultural-humility',
      title: 'Cultural Humility in Practice',
      tagline: 'Foundations of cultural humility centred on African and Black communities.',
      highlights: ['2-hour online or half-day in person', 'Ideal for all staff and students', 'Perfect starting point for this work'],
      details: `A practical introduction to cultural humility as a lifelong, relational practice, with a focus on African-descent and other racially minoritised communities.`,
      actions: [
        { text: 'Register as an individual', variant: 'primary' },
        { text: 'Register a team / group', variant: 'secondary' },
        { text: 'Book for an organisation', variant: 'outline' }
      ]
    },
    {
      id: 'african-communities',
      title: 'Working With People of African Descent',
      tagline: 'Strengths-based approaches informed by African and diaspora worldviews.',
      highlights: ['3-hour or full-day format', 'For frontline practitioners & community workers', 'Focus on trust, safety & partnership'],
      details: `Deepen your understanding of African and African-diaspora communities, and learn how to build trust, safety and partnership in your specific context.`,
      actions: [
        { text: 'Register as an individual', variant: 'primary' },
        { text: 'Register a team / group', variant: 'secondary' },
        { text: 'Book for an organisation', variant: 'outline' }
      ]
    },
    {
      id: 'anti-racist',
      title: 'Anti-Racist Practice / Challenging Anti-Blackness',
      tagline: 'Moving beyond awareness into everyday anti-racist action.',
      highlights: ['Full-day or two-part series', 'For teams & organisations ready for deeper work', 'Focus on structural and interpersonal racism'],
      details: `A deeper, more challenging training focused on anti-Blackness, structural racism and what it means to practise anti-racism in your role and organisation.`,
      actions: [
        { text: 'Register a team / group', variant: 'secondary' },
        { text: 'Book organisational programme', variant: 'outline' }
      ]
    },
    // You can append other trainings here or map from a CMS
  ];

  return (
    <div className="trainings-root">
      
      <header className="site-header">
        {/* <div className="container header-inner">
          <a className="brand" href="#">Cultural Humility Network</a>
          <nav className="nav">
            <a href="#training-catalogue">Trainings</a>
            <a href="#training-registration-options"  className="cta mini" style={{color:'white'}}>Register</a>
          </nav>
        </div> */}

        <TopNav/>
      </header>

      <main id="trainings-page">
        <section className="training-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <br /><br /><br /><br /><br />
              <h1>Trainings for Equity, Justice & cultural humility</h1>
              <p className="lead">
                Our trainings centre African, Black and other minoritised communities, grounded in
                cultural humility, anti-racism, trauma-informed practice and community-based research.
                We support individuals, teams and organisations to move from awareness to accountable action.
              </p>

              <div className="hero-buttons">
                <a className='cta mini' href="#training-catalogue">View all trainings</a>
                <a className='cta mini outlines' href="#training-enquiry">Make an enquiry</a>
              </div>

              <p className="micro">Need a bespoke programme? <a href="#training-enquiry">Tell us about your organisation</a>.</p>
            </div>

            <div className="hero-card">
              <br /><br /><br /><br /><br />
              <div className="mini-card">
                <h4>Quick facts</h4>
                <ul>
                  <li><strong>Formats:</strong> Online, in-person or hybrid</li>
                  <li><strong>Durations:</strong> 1.5h — multi-session programmes</li>
                  <li><strong>Audience:</strong> Practitioners, leaders, students & community groups</li>
                </ul>
                <a href="#training-registration-options" className="link-muted">How to register →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="training-audience">
          <div className="container">
            <h2>Who are these trainings for?</h2>
            <p className="muted">Designed for people and organisations working with African, Black and other racially minoritised communities.</p>
            <ul className="audience-list">
              <li>Health, social care, education and community practitioners</li>
              <li>Leaders and managers seeking to embed equity in services</li>
              <li>Students, researchers and academics</li>
              <li>Community organisations and faith groups</li>
              <li>Teams and services wanting to co-create change with communities</li>
            </ul>
          </div>
        </section>

        <section id="training-catalogue" className="training-catalogue">
          <div className="container">
            <h2>Our Trainings</h2>
            <p className="section-intro">Explore our core trainings. Click a card to open details and next steps.</p>

            <div className="training-grid">
              {trainings.map((t) => (
                <article className="training-card" key={t.id} id={`training-${t.id}`}>
                  <header className="training-card-header">
                    <h3>{t.title}</h3>
                    <p className="training-tagline">{t.tagline}</p>
                    <ul className="training-highlights">
                      {t.highlights.map((h, i) => (<li key={i}>{h}</li>))}
                    </ul>
                  </header>

                  <details className={`training-details ${openId === t.id ? 'open' : ''}`} onToggle={(ev) => setOpenId(ev.target.open ? t.id : null)}>
                    <summary>View full details</summary>
                    <div className="training-details-inner">
                      <h4>What this training covers</h4>
                      <p>{t.details}</p>

                      <h5>You will learn</h5>
                      <ul>
                        <li>Practical frameworks you can use immediately</li>
                        <li>Real-world examples and reflective exercises</li>
                        <li>Steps your team can take to embed change</li>
                      </ul>

                      <h5>Format</h5>
                      <p>Flexible: online, in-person or blended — adapted to context.</p>

                      <div className="training-actions">
                        {t.actions.map((a, i) => (
                          <a key={i} href="#training-enquiry" className={`btn ${a.variant === 'primary' ? 'btn-primary' : a.variant === 'secondary' ? 'btn-secondary' : 'btn-outline'}`}>{a.text}</a>
                        ))}
                      </div>
                    </div>
                  </details>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section id="training-registration-options" className="training-registration-options">
          <div className="container">
            <h2>How to register</h2>
            <p className="muted">Join as an individual, book a team session, or commission a tailored programme.</p>

            <div className="registration-grid">
              <div className="registration-card">
                <h3>Individuals</h3>
                <p>Open online sessions — ideal for practitioners, students, and leaders.</p>
                <a href="#training-enquiry" className="btn btn-primary">View individual options</a>
              </div>

              <div className="registration-card">
                <h3>Teams / Groups</h3>
                <p>Tailored sessions for your team, cohort or department.</p>
                <a href="#training-enquiry" className="btn btn-primary">Request team booking</a>
              </div>

              <div className="registration-card">
                <h3>Organisations</h3>
                <p>Multi-session programmes and consultancy for lasting change.</p>
                <a href="#training-enquiry" className="btn btn-primary">Speak to us about a programme</a>
              </div>
            </div>
          </div>
        </section>

        <section id="training-enquiry" className="training-enquiry">
          <div className="container">
            <h2>Training enquiry form</h2>
            <p className="muted">Share a few details and we’ll get back to you with options, dates and pricing.</p>

           <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email address *</label>
        <input type="email" id="email" name="email" required />
      </div>

      {/* <div className="form-row"> */}
        <label>I am enquiring as: *</label>
        {/* <div className="radio-group"> */}
            <br /><input
              type="radio"
              name="enquirer_type"
              value="individual"
              required
              checked={enquirerType === "individual"}
              onChange={() => setEnquirerType("individual")}
            />{" "}
            Individual <br />
            <input
              type="radio"
              name="enquirer_type"
              value="team"
              checked={enquirerType === "team"}
              onChange={() => setEnquirerType("team")}
            />{" "}
            Team / group <br />
            <input
              type="radio"
              name="enquirer_type"
              value="organisation"
              checked={enquirerType === "organisation"}
              onChange={() => setEnquirerType("organisation")}
            />{" "} 
            Organisation / service <br />
        {/* </div> */}
      {/* </div> */}

      {/* Conditional fields based on selection */}
      {enquirerType === "team" && (
        <div className="form-row">
          <label htmlFor="team_size">Team size</label>
          <input type="number" id="team_size" name="team_size" />
        </div>
      )}
 <br />
      {enquirerType === "organisation" && (
        <>
          <div className="form-row">
            <label htmlFor="organisation_name">Organisation Name</label>
            <input type="text" id="organisation_name" name="organisation_name" />
          </div>
          <div className="form-row">
            <label htmlFor="department">Department / Unit</label>
            <input type="text" id="department" name="department" />
          </div>
        </>
      )}

      {/* Trainings checkboxes */}
      {/* <div className="form-row"> */} 
        <label>Which training(s) are you interested in?</label> <br />
        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="trainings" value="cultural_humility" /> Cultural Humility in Practice
          </label>
          <label>
            <input type="checkbox" name="trainings" value="african_communities" /> Working With African-Descent Communities
          </label>
          <label>
            <input type="checkbox" name="trainings" value="anti_racist_practice" /> Anti-Racist Practice
          </label>
        {/* </div> */}
      </div>
<br />
      {/* Other form fields */}
      <div className="form-row">
        <label htmlFor="format">Preferred delivery format</label>
        <select id="format" name="format">
          <option value="">Please select</option>
          <option value="online">Online</option>
          <option value="in_person">In-person</option>
          <option value="hybrid">Hybrid / flexible</option>
        </select>
      </div>

      <div className="form-row">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
          disabled={loading}
        >
            {loading ? <div className="spinner" /> : "Submit enquiry"}
        </button>
      </div>
    </form>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Cultural Humility Network — Building more equitable services.</p>
          <nav className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
          </nav>
        </div>
      </footer>

      {/* Small accessible skip link */}
      <a className="skip-link" href="#trainings-page">Skip to content</a>

    </div>
  );
}



