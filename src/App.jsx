import { useState } from "react";
import "./App.css";

const events = [
  {
    number: "01",
    date: "24 AUG",
    title: "The Founder’s Playbook",
    description:
      "A candid evening with builders who turned early ideas into enduring companies. Learn the decisions, pivots, and habits that shaped their journey.",
    type: "Founder talk",
    time: "5:30 PM",
    tone: "coral",
  },
  {
    number: "02",
    date: "31 AUG",
    title: "Designing for Impact",
    description:
      "An interactive workshop for curious minds who want to solve real problems through research, rapid prototyping, and thoughtful design.",
    type: "Workshop",
    time: "11:00 AM",
    tone: "violet",
  },
  {
    number: "03",
    date: "07 SEP",
    title: "Ideas After Hours",
    description:
      "Meet makers, artists, and technologists over good conversation. Bring the idea you cannot stop thinking about—and find people who get it.",
    type: "Community social",
    time: "6:00 PM",
    tone: "lime",
  },
  {
    number: "04",
    date: "14 SEP",
    title: "Build Your First Pitch",
    description:
      "Turn a rough concept into a compelling story. You will leave with a sharper narrative, a practical deck framework, and feedback from peers.",
    type: "Masterclass",
    time: "10:30 AM",
    tone: "blue",
  },
];

const highlights = [
  { label: "Expert-led sessions", shape: "shape-orbit" },
  { label: "Practical workshops", shape: "shape-grid" },
  { label: "New connections", shape: "shape-link" },
  { label: "Ideas that move", shape: "shape-arrow" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(events[0].title);
  const [registered, setRegistered] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const openRegistration = (eventTitle = events[0].title) => {
    setSelectedEvent(eventTitle);
    setRegistered(false);

    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  const openEvent = (event) => {
    setSelectedEvent(event.title);
    setRegistered(false);
    setActiveEvent(event);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const returnToEvents = () => {
    setActiveEvent(null);
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById("events")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 40);
  };

  if (activeEvent) {
    return (
      <div className="site-shell detail-page">
        <div className="announcement">
          <span className="announcement-dot" />
          Registrations for the autumn series are now open
        </div>

        <div className="nav-wrap">
          <div className="nav">
            <div
              className="brand"
              onClick={returnToEvents}
              role="button"
              tabIndex={0}
            >
              <div className="brand-mark">E</div>

              <div className="brand-copy">
                <div className="brand-name">EKLAVYA</div>
                <div className="brand-subtitle">Events collective</div>
              </div>
            </div>

            <div className="detail-nav-link" onClick={returnToEvents}>
              ← All events
            </div>

            <div className="nav-actions">
              <div className="nav-website">Main website ↗️</div>

              <div
                className="nav-register"
                onClick={() =>
                  document
                    .getElementById("detail-register")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Register
              </div>
            </div>
          </div>
        </div>

        <div className="detail-hero">
          <div className="detail-hero-inner">
            <div className="detail-breadcrumb" onClick={returnToEvents}>
              <span>←</span> Upcoming program / Event {activeEvent.number}
            </div>

            <div className="detail-layout">
              <div className="detail-copy">
                <div className="eyebrow">
                  <span />
                  {activeEvent.type} · {activeEvent.date}
                </div>

                <div className="detail-title">{activeEvent.title}</div>

                <div className="detail-description">
                  {activeEvent.description}
                </div>

                <div className="hero-buttons">
                  <div
                    className="primary-button"
                    onClick={() =>
                      document
                        .getElementById("detail-register")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Reserve your seat <span>↓</span>
                  </div>

                  <div className="text-button" onClick={returnToEvents}>
                    Browse other events <span>→</span>
                  </div>
                </div>
              </div>

              <div className="detail-ticket">
                <div className="detail-ticket-top">
                  <div>EVENT {activeEvent.number}</div>

                  <div className="live-pill">
                    <span />
                    OPEN
                  </div>
                </div>

                <div className="detail-ticket-date">
                  <div>{activeEvent.date.split(" ")[0]}</div>
                  <span>{activeEvent.date.split(" ")[1]} · 2025</span>
                </div>

                <div className="detail-ticket-rule" />

                <div className="detail-ticket-meta">
                  <div>
                    <span>TIME</span>
                    {activeEvent.time}
                  </div>

                  <div>
                    <span>VENUE</span>
                    Eklavya House, New Delhi
                  </div>

                  <div>
                    <span>FORMAT</span>
                    {activeEvent.type}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-register-section" id="detail-register">
          <div className="detail-register-copy">
            <div className="section-kicker">REGISTRATION</div>

            <div className="detail-register-title">
              Ready to join the room?
            </div>

            <div className="detail-register-note">
              Registration is free. We keep each session intentionally small
              so everyone can participate, ask questions, and make meaningful
              connections.
            </div>
          </div>

          <div className="register-card detail-register-card">
            {!registered ? (
              <>
                <div className="field-label">YOUR EVENT</div>

                <div className="detail-selected-event">
                  {activeEvent.title}
                </div>

                <div className="detail-selected-meta">
                  {activeEvent.date} · {activeEvent.time} · New Delhi
                </div>

                <div
                  className="registration-button"
                  onClick={() => setRegistered(true)}
                >
                  Continue registration <span>→</span>
                </div>

                <div className="small-print">
                  Free registration · Confirmation by email
                </div>
              </>
            ) : (
              <div className="success-state">
                <div className="success-mark">✓</div>

                <div className="success-title">
                  Your interest is noted.
                </div>

                <div className="success-copy">
                  Registration for “{activeEvent.title}” is ready to continue.
                </div>

                <div
                  className="reset-link"
                  onClick={() => setRegistered(false)}
                >
                  Return to event details
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer">
          <div className="footer-top">
            <div className="footer-brand">
              EKLAVYA<span>●</span>
            </div>

            <div className="footer-prompt">
              Have a question or an idea?
              <br />
              <span>hello@eklavya.events</span>
            </div>
          </div>

          <div className="footer-bottom">
            <div>©️ 2025 Eklavya Collective</div>

            <div className="footer-links">
              <div>Instagram ↗️</div>
              <div>LinkedIn ↗️</div>
              <div>Privacy</div>
            </div>

            <div
              onClick={returnToEvents}
              className="footer-back-link"
            >
              ← Back to all events
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        Registrations for the autumn series are now open
      </div>

      <div className="nav-wrap">
        <div className="nav">
          <div
            className="brand"
            onClick={() => scrollTo("home")}
            role="button"
            tabIndex={0}
          >
            <div className="brand-mark">E</div>

            <div className="brand-copy">
              <div className="brand-name">EKLAVYA</div>
              <div className="brand-subtitle">Events collective</div>
            </div>
          </div>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <div onClick={() => scrollTo("home")}>Home</div>
            <div onClick={() => scrollTo("about")}>About</div>
            <div onClick={() => scrollTo("events")}>Events</div>
            <div onClick={() => scrollTo("contact")}>Contact</div>
          </div>

          <div className="nav-actions">
            <div className="nav-website">Main website ↗️</div>

            <div
              className="nav-register"
              onClick={() => openRegistration()}
            >
              Register
            </div>

            <div
              className={`menu-toggle ${
                menuOpen ? "menu-toggle-open" : ""
              }`}
              onClick={() => setMenuOpen((open) => !open)}
              role="button"
              aria-label="Toggle menu"
              tabIndex={0}
            >
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>

      <div className="hero" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="eyebrow">
            <span />
            Eklavya event series · 2025
          </div>

          <div className="hero-title">
            Where curious minds
            <div className="hero-title-accent">
              meet bold ideas.
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-description">
              Inspiring talks, hands-on workshops, and meaningful
              conversations for the people building what comes next.
            </div>

            <div className="hero-buttons">
              <div
                className="primary-button"
                onClick={() => scrollTo("events")}
              >
                Explore events <span>↓</span>
              </div>

              <div
                className="text-button"
                onClick={() => openRegistration()}
              >
                Register now <span>↗️</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <div>UP NEXT</div>

            <div className="live-pill">
              <span />
              OPEN
            </div>
          </div>

          <div className="hero-card-date">
            <div className="date-day">24</div>

            <div className="date-meta">
              AUG
              <br />
              SATURDAY
            </div>
          </div>

          <div className="hero-card-line" />

          <div className="hero-card-title">
            The Founder’s Playbook
          </div>

          <div className="hero-card-footer">
            <div>New Delhi</div>
            <div>5:30 PM</div>
          </div>
        </div>

        <div className="hero-index">01 — 04</div>
      </div>

      <div className="about-section" id="about">
        <div className="section-kicker">WHY EKLAVYA</div>

        <div className="about-heading">
          More than an event.
          <br />
          <span>A room full of possibility.</span>
        </div>

        <div className="about-copy">
          We create spaces where practical knowledge meets honest
          conversation. Come to learn something useful, leave with a
          new perspective—and a few new people in your corner.
        </div>

        <div className="highlight-grid">
          {highlights.map((highlight, index) => (
            <div className="highlight-card" key={highlight.label}>
              <div className={`abstract-shape ${highlight.shape}`}>
                <div />
                <div />
                <div />
                <div />
              </div>

              <div className="highlight-number">
                0{index + 1}
              </div>

              <div className="highlight-label">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-section" id="events">
        <div className="events-heading-row">
          <div>
            <div className="section-kicker light">
              UPCOMING PROGRAM
            </div>

            <div className="events-heading">
              Find your next <span>spark.</span>
            </div>
          </div>

          <div className="events-intro">
            Four sessions. Four ways to think, make, and connect
            differently.
          </div>
        </div>

        <div className="events-list">
          {events.map((event) => (
            <div
              className={`event-card ${event.tone}`}
              key={event.number}
            >
              <div className="event-number">
                {event.number}
              </div>

              <div className="event-date">
                <div>{event.date.split(" ")[0]}</div>
                <span>{event.date.split(" ")[1]}</span>
              </div>

              <div className="event-main">
                <div className="event-tags">
                  <div>{event.type}</div>
                  <div>{event.time}</div>
                </div>

                <div className="event-title">
                  {event.title}
                </div>

                <div className="event-description">
                  {event.description}
                </div>
              </div>

              <div
                className="event-action"
                onClick={() => openEvent(event)}
              >
                <div>View event</div>
                <span>↗️</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="register-section" id="register">
        <div className="register-pattern">
          <div />
          <div />
          <div />
        </div>

        <div className="register-copy">
          <div className="section-kicker">
            RESERVE YOUR PLACE
          </div>

          <div className="register-heading">
            One click closer to your next big idea.
          </div>

          <div className="register-note">
            Seats are limited to keep every session personal,
            useful, and genuinely interactive.
          </div>
        </div>

        <div className="register-card">
          {!registered ? (
            <>
              <div className="field-label">
                SELECTED EVENT
              </div>

              <div className="event-select">
                <select
                  value={selectedEvent}
                  onChange={(e) =>
                    setSelectedEvent(e.target.value)
                  }
                >
                  {events.map((event) => (
                    <option key={event.number}>
                      {event.title}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="registration-button"
                onClick={() => setRegistered(true)}
              >
                Continue registration <span>→</span>
              </div>

              <div className="small-print">
                Free registration · Confirmation by email
              </div>
            </>
          ) : (
            <div className="success-state">
              <div className="success-mark">✓</div>

              <div className="success-title">
                Your interest is noted.
              </div>

              <div className="success-copy">
                Registration for “{selectedEvent}” is ready to
                continue.
              </div>

              <div
                className="reset-link"
                onClick={() => setRegistered(false)}
              >
                Choose another event
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            EKLAVYA<span>●</span>
          </div>

          <div className="footer-prompt">
            Have a question or an idea?
            <br />
            <span>hello@eklavya.events</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div>©️ 2025 Eklavya Collective</div>

          <div className="footer-links">
            <div>Instagram ↗️</div>
            <div>LinkedIn ↗️</div>
            <div>Privacy</div>
          </div>

          <div>Made for curious minds</div>
        </div>
      </div>
    </div>
  );
}