import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Link, Spacer, Text } from "@chakra-ui/react";
import data from "../../fakeDb/users.json";

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const handleCLick = () => setShow(!show);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.includes("@") && email.length > 0 && password.length > 0;
    }
    function handleChange(e: any) {
        e.preventDefault();
        for(let i = 0; i < data.length; i++) {
            if( data[i].email === email && data[i].password === password ){
                console.log("email coincide");
                console.log("contraseña coincide")
            } else {
                console.log("no coincide");
            }
        }
    }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <Flex marginBlock="10">
                <CheckboxGroup>
                    <Checkbox />
                    <Text fontSize="sm" marginLeft="5px"> Keep me logged in</Text>
                </ CheckboxGroup>
                <Spacer />
                <Link color="blue" fontWeight="550" fontSize="sm" href="#">Forgot password?</ Link>
            </Flex>
            <Button onClick={handleChange} type="submit" disabled={!validateForm()} alignContent="center" colorScheme="blue" size="lg" variant="solid">
                Sign in
            </Button>
            <Flex marginBlock="10">
                <Text fontSize="sm">
                    Not registered yet?
                </Text>
                <Link color="blue" marginLeft="2" fontSize="sm" href="#"> Create an Account</Link>
            </Flex>
        </Flex>
        </FormControl>
        
    );
}