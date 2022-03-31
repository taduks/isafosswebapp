import * as React from "react";
import {Collapse, ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ListItemText from "@mui/material/ListItemText";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import List from "@mui/material/List";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useHistory } from "react-router-dom";

export default function Entities({selectedIndex, setSelectedIndex} : {selectedIndex : number, setSelectedIndex : React.Dispatch<React.SetStateAction<number>>}) {
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

                <ListItemText primary="Master entities" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 401}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 401, "/customers")}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 402}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 402, "/vendors")}>
                        <ListItemIcon>
                            <PeopleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Vendors" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 403}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 403, "/taxes")}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Taxes" />
                    </ListItemButton>
                </List>
            </Collapse>
        </React.Fragment>
    );
}