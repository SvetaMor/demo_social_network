import React from 'react';
import s from './ProfileInfo.module.css';
import facebook from '../../../assets/images/ico/facebook.png';
import vk from '../../../assets/images/ico/vk.png';
import instagram from '../../../assets/images/ico/instagram.png';
import twitter from '../../../assets/images/ico/twitter.png';
import youtube from '../../../assets/images/ico/youtube.png';
import github from '../../../assets/images/ico/github.png';
import mainLink from '../../../assets/images/ico/mainLink.png';
import website from '../../../assets/images/ico/website.png';
import defoultPng from '../../../assets/images/ico/defoultIco.png';
import { ExternalLink } from 'react-external-link';

const Contacts = ({contactTitle, contactValue}) => {
    let ico = vk;
    switch (contactTitle) {
        case "facebook": ico = facebook; break;
        case "instagram": ico =instagram; break;
        case "vk": ico =vk; break;
        case "twitter": ico =twitter; break;
        case "youtube": ico =youtube; break;
        case "github": ico =github; break;
        case "mainLink": ico =mainLink; break;
        case "website": ico =website; break;
        default: ico = defoultPng;
    }
    let hrefContact=`https://${contactValue}`;
    return (
        <div className={s.contact}>
            {!!contactValue && <div>
                <img src={ico} alt=''/><b>{contactTitle}: </b>
                <ExternalLink href={hrefContact}>
                  <span> {contactValue}</span>
                </ExternalLink>

            </div>}
        </div>
    );
}

export default Contacts;
