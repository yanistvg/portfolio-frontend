import {
    FaUserTie,
    FaNetworkWired,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { SiRootme, SiTryhackme, SiHackthebox } from "react-icons/si";

export interface NavigationInfo {
    name: string,
    link: string,
    icon: JSX.Element,
    isExternalLink?: boolean,
};

export interface NavigationGroup {
    name: string,
    nav: Array<NavigationInfo>,
};

export const NAV_MAX_WIDTH = 250;

export const navigationBtn: Array<NavigationGroup> = [
    {
        name: 'Navigation',
        nav: [
            {
                name: 'Profile',
                link: '/',
                icon: <FaUserTie />,
            },
            {
                name: 'Cursus',
                link: '/cursus',
                icon: <GiDiploma />,
            },
            {
                name: 'Projets',
                link: '/projects',
                icon: <FaNetworkWired />,
            },
        ],
    },
    {
        name: 'Réseaux Sociaux',
        nav: [
            {
                name: 'Linkedin',
                link: '',
                icon: <FaLinkedin />,
                isExternalLink: true,
            },
            {
                name: 'GitHub',
                link: '',
                icon: <FaGithub />,
                isExternalLink: true,
            },
            {
                name: 'Root Me',
                link: '',
                icon: <SiRootme />,
                isExternalLink: true,
            },
            {
                name: 'Try Hack Me',
                link: '',
                icon: <SiTryhackme />,
                isExternalLink: true,
            },
            {
                name: 'Hack The Box',
                link: '',
                icon: <SiHackthebox />,
                isExternalLink: true,
            },
        ],
    },
];
