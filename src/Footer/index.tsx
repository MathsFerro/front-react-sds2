import { ReactComponent as YoutubeIcon } from './youtube.svg' 
import { ReactComponent as LinkedinIcon } from './linkedin.svg' 
import { ReactComponent as InstagramIcon } from './instagram.svg' 

import './styles.css'

export function Footer() {
  return(
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="/">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/matheusferro/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="/">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  )
}