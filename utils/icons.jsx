import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBarsStaggered, faCalendarAlt, faCalendarCheck, faChartBar, faDatabase, faPaperPlane, faPen, faSearch, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
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
   user:<FontAwesomeIcon icon={faUser}/>,
   tasks:<FontAwesomeIcon icon={faTasks}/>,
   calendarAlt:<FontAwesomeIcon icon={faCalendarAlt}/>,
   chart:<FontAwesomeIcon icon={faChartBar}/>,
   db:<FontAwesomeIcon icon={faDatabase}/>,
   search:<FontAwesomeIcon icon={faSearch}/>,
}
export default icons