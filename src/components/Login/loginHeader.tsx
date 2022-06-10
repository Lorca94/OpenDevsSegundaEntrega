import { Box, Link, Icon, Heading } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import React from "react";

export default function LoginHeader() {
    return(
        <Heading fontSize="15">
            <Link color="gray.400" href="#"> <ChevronLeftIcon />Back to Simmmple</Link>
        </Heading>
    )
}