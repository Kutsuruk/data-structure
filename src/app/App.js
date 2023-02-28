import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import Box from "@mui/material/Box";
import SideBar from "./components/common/sideBar";
import routes from "./routes";
import Toolbar from "@mui/material/Toolbar";
const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.path) {
            return (
                <Route path={prop.path} component={prop.component} key={key} />
            );
        }
        return null;
    });
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <SideBar routes={routes} title={"Data Structures"} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Container
                        maxWidth="md"
                        style={{ margin: "auto auto 60px" }}
                    >
                        <Switch>
                            {getRoutes(routes)}
                            <Redirect to="/index" />
                        </Switch>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
