import * as React from "react";
import {Collapse, ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ListItemText from "@mui/material/ListItemText";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import List from "@mui/material/List";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { useHistory } from "react-router-dom";

export default function Reports({selectedIndex, setSelectedIndex} : {selectedIndex : number, setSelectedIndex : React.Dispatch<React.SetStateAction<number>>}) {
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

                <ListItemText primary="Reports" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}
                                    selected={selectedIndex === 301}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 301, "/report-summary")}
                    >
                        <ListItemIcon>
                            <SummarizeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Summary" />
                    </ListItemButton>
                </List>
            </Collapse>
        </React.Fragment>
    );
}