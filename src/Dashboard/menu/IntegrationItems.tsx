import * as React from "react";
import {Collapse, ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import ListItemText from "@mui/material/ListItemText";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import List from "@mui/material/List";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useHistory } from "react-router-dom";

export default function Integrations({selectedIndex, setSelectedIndex} : {selectedIndex : number, setSelectedIndex : React.Dispatch<React.SetStateAction<number>>}) {
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

                <ListItemText primary="VAT integration" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 201}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 201, "/isaf")}>
                        <ListItemIcon>
                            <IntegrationInstructionsIcon />
                        </ListItemIcon>
                        <ListItemText primary="iSAF" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 202}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 202, "/eds")}>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="EDS" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 203}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 203, "/oss")}>
                        <ListItemIcon>
                            <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="OSS" />
                    </ListItemButton>
                </List>
            </Collapse>
        </React.Fragment>
    );
}