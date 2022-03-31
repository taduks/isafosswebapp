import Divider from "@mui/material/Divider";
import MainMenu from "./MainItems";
import List from "@mui/material/List";
import * as React from "react";
import Integrations from "./IntegrationItems";
import Reports from "./ReportItems";
import Entities from "./EntityItems";
import Settings from "./SettingItems";

export default function SideMenu () {

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    return (
        <List component="nav">
            <MainMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Divider sx={{ my: 1 }} />
            <Integrations selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Reports selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Entities selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Settings selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        </List>
    )
}