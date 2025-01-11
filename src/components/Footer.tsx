export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Tracy Lane</p>
        </div>
        <div className="footer-right">
          <a href="mailto:contact@tracylane.com">contact@tracylane.com</a>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 