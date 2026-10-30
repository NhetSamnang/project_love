
import { useState } from "react";
import {
  Heart,
  Gift,
  Sparkles,
  Mail,
  Music,
  Camera
} from "lucide-react";
import "./App.css";

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const reasons = [
    "Your smile makes my day beautiful.",
    "You always make me happy.",
    "You are my favorite person.",
    "I love spending time with you.",
    "You make my world better.",
    "I want to create memories with you."
  ];

  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <h2>💕 Our Love</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#reasons">Reasons</a>
          <a href="#gallery">Gallery</a>
          <a href="#letter">Love Letter</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">

          <Heart
            size={75}
            fill="#ff4d88"
            color="#ff4d88"
          />

          <h1>
            Welcome to My
            <span> Little Love World ❤️</span>
          </h1>

          <p>
            Every moment with you is a beautiful memory.
            You are my happiness and my favorite person.
          </p>

          <a href="#reasons" className="main-btn">
            Explore Our Love 💗
          </a>

        </div>
      </section>

      {/* Reasons */}
      <section className="reasons" id="reasons">

        <h2>Why I Love You 💕</h2>

        <p className="subtitle">
          Here are some reasons why you are special to me.
        </p>

        <div className="reason-grid">

          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <Heart
                size={35}
                color="#ff4d88"
                fill="#ffb6cc"
              />

              <h3>Reason {index + 1}</h3>

              <p>{reason}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Surprise */}
      <section className="surprise">

        <Gift size={55} color="#ff4d88" />

        <h2>A Special Surprise For You 🎁</h2>

        <p>
          I prepared something special just for you.
        </p>

        <button
          className="main-btn"
          onClick={() => setShowSurprise(!showSurprise)}
        >
          {showSurprise ? "Close Surprise" : "Open Surprise ❤️"}
        </button>

        {showSurprise && (
          <div className="surprise-box">
            <Sparkles size={35} />

            <h2>I Love You So Much! 💗</h2>

            <p>
              You are the best part of my life.
              I hope we stay together and make
              beautiful memories forever.
            </p>

            <Heart fill="red" color="red" />
          </div>
        )}

      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">

        <Camera size={40} color="#ff4d88" />

        <h2>Our Beautiful Memories 📸</h2>

        <p>Add your favorite photos together here.</p>

        <div className="photo-grid">

          <div className="photo">
            <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600"
              alt="Romantic couple" />
          </div>

          <div className="photo">
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600"
              alt="Couple holding hands" />
          </div>

          <div className="photo">
            <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600"
              alt="Romantic roses" />
          </div>

        </div>

      </section>

      {/* Love Letter */}
      <section className="letter" id="letter">

        <Mail size={45} color="#ff4d88" />

        <h2>My Love Letter 💌</h2>

        <p>
          I have something from my heart to tell you.
        </p>

        <button
          className="main-btn"
          onClick={() => setShowLetter(!showLetter)}
        >
          {showLetter ? "Close Letter" : "Read My Letter"}
        </button>

        {showLetter && (
          <div className="letter-box">

            <h2>Dear My Love ❤️</h2>

            <p>
              Thank you for coming into my life.
              Every day with you is special.
              Your smile makes me happy,
              and your love gives me strength.

              I don't need a perfect world.
              I just want a beautiful world
              with you in it.

              I LOVE YOU FOREVER! 💗
            </p>

            <h3>Forever Yours ❤️</h3>

          </div>
        )}

      </section>

      {/* Footer */}
      <footer>
        <Heart fill="red" color="red" size={18} />

        <p>
          Made with love ❤️ | Forever Together
        </p>

      </footer>

    </div>
  );
}

export default App;
