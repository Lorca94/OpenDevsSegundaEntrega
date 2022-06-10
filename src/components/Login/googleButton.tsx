import React from "react";
import { Box, Flex, Text, Button, Img, Heading } from "@chakra-ui/react";

export default function GoogleButton(){
    return(
        <Flex marginTop="120" flexDirection="column">
            <Heading marginBottom="15px">Sign In</Heading>
                <Text color="gray.400">Enter your email and password to sign in!</Text>
                <Button marginTop="50" colorScheme="gray" variant='solid' color="black" fontWeight="500" fontSize="sm">
                    <Img src="https://img.icons8.com/color/344/google-logo.png" w="6"/>
                    <p style={{paddingLeft:"8px"}}>
                        Sign in with Google
                    </p>
                </Button>
        </Flex>
    );
}