import { Flex, Loader, Text } from "@aws-amplify/ui-react";
import { ProfileSectionMainContent, ProfileTitlesContent } from "./utils";

import "./profile.scss";

const profileMainData: ProfileTitlesContent = {
    profile: {
        title: "Bonjour et bienvenue sur mon portfolio !",
        content: "Je m'appelle Yanis GÉNY, et je suis actuellement étudiant en sécurité informatique, spécialisé dans les systèmes embarqués et le cloud. Passionné par les nouvelles technologies et la cybersécurité, je suis en quête constante de nouvelles connaissances et compétences pour renforcer ma compréhension et ma maîtrise de ce domaine en perpétuelle évolution.",
    },
    academy: {
        title: "Parcours Académique :",
        content: "En tant qu'étudiant en sécurité informatique, j'ai acquis une solide formation théorique et pratique à travers divers projets et cours spécialisés. Mon programme d'études met l'accent sur :",
    },
    technic: {
        title: "Compétences Techniques :",
        content: "Au cours de mon parcours, j'ai développé un ensemble de compétences techniques essentielles, notamment :",
    },
};
const mainDataLoaded: boolean = true;

/**
 * Profile permet de charger et afficher la page complete
 * pour la page profile qui permet de faire une presentation
 * rapide en recuperant les donnes du backend
 * 
 * @returns Contenue de la page profile
 * @author Yanis GENY
 */
export function Profile(): JSX.Element {

    if (!mainDataLoaded) {
        return (
            <Flex id={"page-profile"} direction={'column'} alignItems={'center'}>
                <Loader id={'profile-loader'} />
                <Text id={"profile-loader-text"}>Loading Profile Data ...</Text>
            </Flex>
        );
    }

    return (
        <Flex id={"page-profile"} direction={'column'}>
            <ProfileHeader profile={profileMainData.profile}/>
            <ProfileAcademy academy={profileMainData.academy}/>
            <ProfileTechnic technic={profileMainData.technic}/>
        </Flex>
    );
}

/**
 * permet d'afficher le premier paragraphe de la page profile qui
 * contient les information comme sont titre mais aussi une petite
 * phrase de presentation
 * 
 * @param profile in props: information du backend contenant le titre et le contenue
 * @returns Contenue du premier paragraphe de la page profile
 * @author Yanis GENY
 */
function ProfileHeader(props: {
    profile: ProfileSectionMainContent | undefined,
}): JSX.Element {
    const {profile} = props;

    if (!profile) {
        return (<></>);
    }

    return (
        <Flex id={'profile-header'} direction={'column'}>
            <Text variation={"primary"} id={"profile-header-title"}>{profile.title}</Text>
            <Text variation={"tertiary"} id={"profile-header-content"}>{profile.content}</Text>
        </Flex>
    );
}

/**
 * permet d'afficher le second paragraphe de la page profile qui
 * contient les information comme sont titre mais aussi une petite
 * phrase de presentation, et une liste pour presenter le cursus
 * 
 * @param academy in props: information du backend contenant le titre et le contenue
 * @returns Contenue du second paragraphe de la page profile
 * @author Yanis GENY
 */
function ProfileAcademy(props: {
    academy: ProfileSectionMainContent | undefined,
}): JSX.Element {
    const { academy } = props;

    if (!academy) {
        return (<></>);
    }

    return (
        <Flex direction={"column"} id={"profile-academy"}>
            <Text variation={"secondary"} id={"profile-academy-title"}>{academy.title}</Text>
            <Text variation={"tertiary"} id={'profile-academy-context'}>{academy.content}</Text>

            ... TODO: add stucture to show academy parcours can construct with backend
            <Loader variation={"linear"}/>
        </Flex>
    );
}

/**
 * permet d'afficher le troisieme paragraphe de la page profile qui
 * contient les information comme sont titre mais aussi une petite
 * phrase de presentation, et une liste de poind techenique
 * 
 * @param technic in props: information du backend contenant le titre et le contenue
 * @returns Contenue du troisieme paragraphe de la page profile
 * @author Yanis GENY
 */
function ProfileTechnic(props: {
    technic: ProfileSectionMainContent | undefined,
}): JSX.Element {
    const { technic } = props;

    if (!technic) {
        return (<></>);
    }

    return (
        <Flex direction={'column'} id={"profile-technic"}>
            <Text variation={"secondary"} id={'profile-technic-title'}>{technic.title}</Text>
            <Text variation={"tertiary"} id={'profile-technic-content'}>{technic.content}</Text>

            ... TODO: add stucture to show technic parcours can construct with backend
            <Loader variation={"linear"}/>
        </Flex>
    );
}
