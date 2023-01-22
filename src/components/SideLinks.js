import React , {useContext} from 'react';

import styles from '../componentsstyle/sidelinks.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance as behance , faLinkedinIn as lnkin, faGithub as git } from '@fortawesome/free-brands-svg-icons';
import { faPhone as phone } from '@fortawesome/free-solid-svg-icons';

import { ProfileContext } from './../context/ProjectContext';
export default function SideLinks() {
  const data = useContext(ProfileContext)
  return (
    <div className={styles.contactlinks}>
        <ul>
            <li>
              <a href={`tel:${data.phonenumber}`}>
                <FontAwesomeIcon icon={phone}/>
              </a>
            </li>
            <li><a href={`mailto:${data.emailaddress}`}>@</a></li>
            
            <br/>
            
            <li>
              <a href={data.behanceurl}>
                <FontAwesomeIcon icon={behance}/>
              </a>
            </li>

            <li>
              <a href={data.lnkdinurl}>
              <FontAwesomeIcon icon={lnkin}/>
              </a>
            </li>

            <li>
              <a href={data.githuburl}>
               <FontAwesomeIcon icon={git}/>
              </a>
            </li>
        </ul>
    </div>
  )
}
