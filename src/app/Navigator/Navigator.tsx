import { Flex, Text, View } from "@aws-amplify/ui-react";
import { navigationBtn, NAV_MAX_WIDTH } from "./navigatiorDatas";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

import "./Navigator.scss";

export function Navigator(): JSX.Element {
    const [ navOpened, setNavOpened ] = useState<boolean>(false);

    useEffect(() => {
        let navInfo: string | null = localStorage.getItem('navigationState');

        if (!navInfo) {
            localStorage.setItem('navigationState', 'false');
            navInfo = 'false';
        }

        return navInfo === 'true'
            ? setNavOpened(true)
            : setNavOpened(false)
        ;
    }, []);

    return (
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
                                        window.history.replaceState(null, nav.name, nav.link);
                                        document.title = nav.name;
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
    );
}
