import "../Footer/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/loic-clerc-608585347"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../src/assets/images/Linkedin_logo.webp"
            alt="Logo de linkedin"
            className="footer-linkedin"
          />
        </a>
        <a
          href="https://github.com/corsarto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../src/assets/images/github_logo.png"
            alt="Logo de github"
            className="footer-github"
          />
        </a>
      </div>
      <p className="footer-text">© 2025 Loïc Clerc. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
