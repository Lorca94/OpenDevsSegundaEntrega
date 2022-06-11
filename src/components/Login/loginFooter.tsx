import { Flex, Link, Spacer } from "@chakra-ui/react";
import React from "react";

export default function LoginFooter() {
    return(
        <Flex marginTop="-50px" flexDirection={["column","row","row"]} alignItems={["center",null,null]} justifyContent="center">
                <Link href="#" color="gray.400" paddingInline="18" textAlign="center">
                    © 2022Horizon UI. All Rights Reserved. Made with love <span style={{color:"#A0AEC0", fontWeight:"600"}}>bySimmmple!</span>
                </Link>
                <Spacer />
                <Flex justifyContent="space-around">
                    <Link href="#" marginInlineEnd="20px" color="gray.400" fontWeight="600">
                        Support
                    </Link>
                    <Link href="#" marginInlineEnd="20px" color="gray.400" fontWeight="600">
                        License
                    </Link>
                    <Link href="#" marginInlineEnd="20px" color="gray.400" fontWeight="600">
                        Terms of Use
                    </Link>
                    <Link href="#" marginInlineEnd="20px" color="gray.400" fontWeight="600">
                        Blog
                    </Link> 
                </Flex>
                
        </Flex>
    )
}