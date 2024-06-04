import { Flex } from "@aws-amplify/ui-react";

/**
 * page content error 404
 * @returns content of error 404 page in JSX.Element
 * @todo create buttyful error 404
 */
export function Page404(): JSX.Element {
    return (
        <Flex
            textAlign={'center'}
            direction={'column'}
        >
            ERROR 404 : To make
        </Flex>
    );
}
