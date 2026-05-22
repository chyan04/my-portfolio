import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">CHYAN</span>
        <span className="footer-copy">
          {`© ${new Date().getFullYear()} CHYAN. All rights reserved.`}
        </span>
        <a
          href="https://github.com/chyan04"
          target="_blank"
          rel="noreferrer"
          className="footer-github"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
