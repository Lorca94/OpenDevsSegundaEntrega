import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { AuthContextProvider } from "./store/authContext"
import { App } from "./App"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ColorModeScript />
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
