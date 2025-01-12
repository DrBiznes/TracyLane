export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Tracy Lane</p>
          <p className="footer-credit">
            Website by <a href="https://jamino.me" target="_blank" rel="noopener noreferrer">Jamino</a>
          </p>
        </div>
        <div className="footer-right">
          <a href="mailto:contact@tracylane.work">contact@tracylane.work</a>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 