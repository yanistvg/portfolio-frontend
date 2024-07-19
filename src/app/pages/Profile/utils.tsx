/*******************************************************/
/***                                                 ***/
/*** Format des donnees recu par le backend pour les ***/
/*** differentes partie de la page de profile        ***/
/***                                                 ***/
/*******************************************************/
export interface ProfileSectionMainContent {
    title: string,
    content: string,
}

export interface ProfileTitlesContent {
    profile?: ProfileSectionMainContent,
    academy?: ProfileSectionMainContent,
    technic?: ProfileSectionMainContent,
}
