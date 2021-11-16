import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";
import content from "./content.js";

export const Contact = () => {
    const { localeMode } = useLocale();

    return (
        <Box as="section" bg="#7289DA" mt={10}>
            <Flex
                justify={["center", "center", "space-between"]}
                align="center"
                px={5}
                maxW="1240px"
                wrap="wrap"
                m="0 auto"
                py={12}
            >
                <Flex
                    color="white"
                    direction={["column", "column", "row"]}
                    justify="center"
                    align="center"
                >
                    <Icon
                        boxSize="3rem"
                        as={FaDiscord}
                        mb={["1rem", "1rem", "0"]}
                    />
                    <Box
                        h="100%"
                        ml={5}
                        textAlign={["center", 0, "left"]}
                        mb={["1rem", "1rem", "0"]}
                    >
                        <Heading size="lg">{content[localeMode].title}</Heading>
                        <Text>{content[localeMode].body}</Text>
                        <Text
                            as="i"
                            fontWeight="600"
                            color="blue.900"
                            fontSize="1.1em"
                        >
                            {content[localeMode].sm}
                        </Text>
                    </Box>
                </Flex>
                <Link isExternal href="https://discord.com/invite/gNu2W3Q">
                    <Button
                        size="lg"
                        as="span"
                        color="black"
                        bg="white"
                        px="2.5rem"
                        h="4rem"
                    >
                        {content[localeMode].btn}
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};
