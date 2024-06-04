import { FaUserTie, FaNetworkWired, FaLinkedin, FaGithub } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { SiRootme, SiTryhackme, SiHackthebox } from "react-icons/si";

/* import of pages used by navigation */
import { Page404 } from "../pages";
import { Profile } from "../pages";

export interface NavigationInfo {
    name: string,
    link: string,
    icon: JSX.Element,
    isExternalLink?: boolean,
    content?: JSX.Element,
};

export interface NavigationGroup {
    name: string,
    nav: Array<NavigationInfo>,
};

export const NAV_MAX_WIDTH = 250;
export const error404: JSX.Element = <Page404 />;

/**
 * Content all information of navigation in the page.
 * All data are segment by groups.
 */
export const navigationBtn: Array<NavigationGroup> = [
    {
        name: 'Navigation',
        nav: [
            {
                name: 'Profile',
                link: '/',
                icon: <FaUserTie />,
                content: <Profile />,
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

/**
 * extract element to include in DOM, this elemente do present
 * in NavigationGroup[] structure define by navigationBtn var
 * 
 * @param link link to found in structure NavigationGroup[]
 * @returns JSX.Element in element found if present. If have
 * error in content, it's error 404 returned
 */
export function extractElementFromNavigationBtn(link: string): NavigationInfo {
    for (const group of navigationBtn) {
        const nav: NavigationInfo | undefined = group.nav.find((n) => n.link === link);
        if (!nav || !nav.content) continue;
        if (!nav.isExternalLink) return nav ?? {
            icon: <></>,
            link: "",
            name: "",
            content: <></>,
        };
    }
    return {
        icon: <></>,
        link: "",
        name: "404 ERROR",
        content: error404,
    };
}
