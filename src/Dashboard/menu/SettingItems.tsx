import * as React from "react";
import {Collapse, ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemText from "@mui/material/ListItemText";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import List from "@mui/material/List";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useHistory } from "react-router-dom";

export default function Settings({selectedIndex, setSelectedIndex} : {selectedIndex : number, setSelectedIndex : React.Dispatch<React.SetStateAction<number>>}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    let history = useHistory();
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        navPath: string,
    ) => {
        setSelectedIndex(index);
        history.push(navPath);
    };

    return (
        <React.Fragment>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Settings" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 501}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 501, "/settings")}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="System" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 502}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 502, "/roles")}>
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Roles" />
                    </ListItemButton>
                </List>
            </Collapse>
        </React.Fragment>
    );
}