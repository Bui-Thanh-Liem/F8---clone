import {
    Html,
    Head,
    Body,
    Container,
    Text,
    Img,
    Heading,
    Link,
} from "@react-email/components";
import React from "react";

interface IPropsTemplateConfimEmail {
    name: string;
    urlApp: string;
    textConfirm: string;
}

export const TemplateConfimEmail: React.FC<Readonly<IPropsTemplateConfimEmail>> = ({name, textConfirm, urlApp}) => {
    return (
        <Html lang="en">
            <Head />
            <Body>
                <Container>
                    <Container>
                        <Link>
                            {/* <Img alt="" /> */}
                            BTL
                        </Link>
                    </Container>
                    {/* <Img src="" alt="" /> */}
                    <Text>Hi {name}, </Text>
                    <Text>
                        Please enter the code below in the code field to
                        authenticate this email as yours
                    </Text>
                    <Heading as="h3">{textConfirm}</Heading>
                </Container>
            </Body>
        </Html>
    );
};
