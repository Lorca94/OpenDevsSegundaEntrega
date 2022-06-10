import React from "react";
import { Flex, BreadcrumbSeparator, Breadcrumb, Text } from "@chakra-ui/react";

export default function LoginSeparator () {
    return(
        <Flex w="100%" marginTop="35px" alignItems="center" justify="center">
            <Flex flex="3" h="1px" w="100%" background="rgba(135, 140, 189, 0.3) none repeat scroll 0% 0%;" />
            <Flex flex="1" w="100%" alignItems="center" justify="center">
                <Text color="gray.400">
                    or
                </Text>
            </Flex>
            <Flex flex="3" h="1px" w="100%" background="rgba(135, 140, 189, 0.3) none repeat scroll 0% 0%;" />
        
            
        </Flex>
    )
}