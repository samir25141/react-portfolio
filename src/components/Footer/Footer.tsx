import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>www.samir</span>
        <span>.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/md-samir-592054250/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/samir25141"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/qr/2C3EXSFTHJHYI1 "
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/s_a_m_i_r___07/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
