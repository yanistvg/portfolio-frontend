import { Flex, Text, View } from "@aws-amplify/ui-react";
import { navigationBtn, NAV_MAX_WIDTH, extractElementFromNavigationBtn, NavigationInfo } from "./navigatiorDatas";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

import "./Navigator.scss";

export function Navigator(): JSX.Element {
    const [ navOpened, setNavOpened ] = useState<boolean>(false);
    const [ routeDir, setRouteDir ] = useState<string>("/");
    const [ contentPage, setContentPage ] = useState<JSX.Element>(<></>);

    useEffect(() => {
        let routeDir: string | null = localStorage.getItem('routeDir');
        if (!routeDir) {
            routeDir = "/";
            localStorage.setItem('routeDir', routeDir);
        }
        setRouteDir(routeDir);

        let navInfo: string | null = localStorage.getItem('navigationState');
        if (!navInfo) {
            navInfo = 'false';
            localStorage.setItem('navigationState', navInfo);
        }

        return navInfo === 'true'
            ? setNavOpened(true)
            : setNavOpened(false)
        ;
    }, []);

    useEffect(() => {
        const nav: NavigationInfo = extractElementFromNavigationBtn(routeDir);
        localStorage.setItem('routeDir', nav.link);
        document.title = nav.name;
        setContentPage(nav.content ?? <></>);
    }, [ routeDir ]);

    return (
        <View>

            <View id={"page-content"}>
                { contentPage }
            </View>

            <View
                width={NAV_MAX_WIDTH}
                id={'navigator-racine'}
                className={!navOpened ? "navigation-closed" : ""}
            >

                <View className={"navigation-close-navBar"}>
                    <FaAngleDoubleLeft
                        height={2}
                        onClick={() => {
                            localStorage.setItem('navigationState', (!navOpened).toString());
                            setNavOpened(!navOpened);
                        }}
                    />
                </View>

                {navigationBtn.map((navGroup, i) => {
                    return (
                        <Flex
                            direction={'column'}
                            key={i}
                            className={"navigator-group"}
                        >
                            <Text className={"navigation-title"}>{navGroup.name}</Text>
                            {navGroup.nav.map((nav, y) => {
                                return (
                                    <Flex
                                        key={y}
                                        className={"navigation-button"}
                                        onClick={() => {
                                            if (nav.isExternalLink) {
                                                window.open(nav.link);
                                                return;
                                            }
                                            setRouteDir(nav.link);
                                        }}
                                    >
                                        <Flex>
                                            { nav.icon }
                                            <Text>{nav.name}</Text>
                                        </Flex>
                                    </Flex>
                                );
                            })}
                        </Flex>
                    );
                })}

            </View>

        </View>
    );
}
