import { FaGithub, FaEnvelope } from 'react-icons/fa'

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    display: 'chyan024@gmail.com',
    href: 'mailto:chyan024@gmail.com',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    display: 'github.com/chyan04',
    href: 'https://github.com/chyan04',
  },
]

function Contact() {
  return (
    <section id="contact" className="section fade-section">
      <h2>Contact</h2>
      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{item.icon}</span>
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.display}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
