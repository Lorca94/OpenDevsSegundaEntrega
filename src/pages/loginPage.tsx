import { Container, Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Login from "../components/Login/login";
import LoginFooter from "../components/Login/loginFooter";
import GoogleButton from "../components/Login/googleButton";
import LoginHeader from "../components/Login/loginHeader";
import LoginForm from "../components/Login/loginForm";
import LoginSeparator from "../components/Login/loginSeparator";

export default function LoginPage() {
    return(
        <>
            <Flex w="100%" overflow="unset">
                <Box flex="1" w="50vw">
                    <Container padding="35">
                        <LoginHeader />
                        <GoogleButton />
                        <LoginSeparator />
                        <LoginForm />
                    </Container>
                </Box>
                <Box
                flex={[0,1,1]}
                bgImage="url('https://horizon-ui.com/chakra-pro/static/media/auth.20d5979b439e1531640d.png')"
                bgRepeat="no-repeat"
                bgPos="center"
                bgSize="cover"
                h='100vh'
                borderBottomLeftRadius={[200,null,120]}
                />
            </Flex>
            <LoginFooter/>
        </>
    );
}

