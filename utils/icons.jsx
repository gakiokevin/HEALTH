import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBarsStaggered, faCalendarCheck, faPaperPlane, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = {
   menu:<FontAwesomeIcon icon={faBarsStaggered}/>,
   pen:<FontAwesomeIcon icon={faPen}/>,
   calendar:<FontAwesomeIcon icon={faCalendarCheck}/>,
   message:<FontAwesomeIcon icon={faPaperPlane}/>,
   github:<FontAwesomeIcon icon={faGithub}/>,
   facebook:<FontAwesomeIcon icon={faFacebook}/>,
   insta:<FontAwesomeIcon icon={faInstagram}/>,
   x:<FontAwesomeIcon icon={faTwitter}/>,
   youtube:<FontAwesomeIcon icon={faYoutube}/>,
}
export default icons