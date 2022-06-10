import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Spacer, Text } from "@chakra-ui/react";

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const handleCLick = () => setShow(!show);
    return(
        <FormControl>
            <Flex flexDirection="column">
                <FormLabel htmlFor="email" marginBlock="8px"
                color="black"
                fontWeight="500"
                fontSize="sm">
                    Email*
                </FormLabel>
                <Input
                id="email"
                type="email"
                placeholder="mail@mail.com"
                size="lg"
                marginBottom="6px"
                borderRadius="16px"
                />
                <FormLabel
                htmlFor="password"
                marginBlock="8px"
                color="black"
                fontWeight="500"
                fontSize="sm" >
                    Password*
                </FormLabel>
                <InputGroup size="lg">
                <Input
                id="password"
                type={show ? "text" : "password"}
                borderRadius="16px"
                fontSize="sm"
                placeholder="Min. 8 characters"
                size="lg" />
                    <InputRightElement >
                        <Button backgroundColor="transparent" onClick={handleCLick}>
                            {show ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>  </InputRightElement>
                </InputGroup>
            <Flex>
                <CheckboxGroup>
                    <Checkbox />
                    <Text marginLeft="5px"> Keep me logged in</Text>
                </ CheckboxGroup>
                <Spacer />
                <Link href="#">Forgot password?</ Link>
            </Flex>
            <Button type="submit" alignContent="center" colorScheme="blue" variant="solid">
                Sign in
            </Button>
            <Flex>
                <Text>
                    Not registered yet?
                </Text>
                <Link href="#"> Create an Account</Link>
            </Flex>
        </Flex>
        </FormControl>
        
    );
}