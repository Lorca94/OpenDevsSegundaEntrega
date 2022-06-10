import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import PrincipalRoutes from './router/principalRoutes';

export const App = () => (
  <ChakraProvider theme={ theme }>
      <PrincipalRoutes />
  </ChakraProvider>
);
