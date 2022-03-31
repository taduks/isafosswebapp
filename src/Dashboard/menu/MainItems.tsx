import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import UploadIcon from '@mui/icons-material/Upload';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import {Collapse, ListItemButton} from "@mui/material";
import { useHistory } from "react-router-dom";


export default function MainMenu  ({selectedIndex, setSelectedIndex} : {selectedIndex : number, setSelectedIndex : React.Dispatch<React.SetStateAction<number>>}) {
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
            <ListItemButton
                selected={selectedIndex === 101}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 101, "/dashboard")}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListSubheader component="div">
                S3 platform data
            </ListSubheader>
            <ListItemButton
                selected={selectedIndex === 102}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 102, "/s3main")}>
                <ListItemIcon>
                    <CloudDownloadIcon />
                </ListItemIcon>
                <ListItemText primary="Primary" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 103}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 103, "/s3ns")}>
                <ListItemIcon>
                    <UploadIcon />
                </ListItemIcon>
                <ListItemText primary="Netsuite upload" />
            </ListItemButton>
            <ListSubheader component="div">
                Netsuite
            </ListSubheader>
            <ListItemButton
                selected={selectedIndex === 104}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 104, "/invoices")}>
                <ListItemIcon>
                    <CallMadeIcon />
                </ListItemIcon>
                <ListItemText primary="Invoices" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 105}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 105, "/vendor-bills")}>
                <ListItemIcon>
                    <CallReceivedIcon />
                </ListItemIcon>
                <ListItemText primary="Vendor bills" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 106}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 106, "/vendor-credits")}>
                <ListItemIcon>
                    <CallReceivedIcon />
                </ListItemIcon>
                <ListItemText primary="Vendor credits" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 107}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, 107, "/credit-memo")}>
                <ListItemIcon>
                    <CallReceivedIcon />
                </ListItemIcon>
                <ListItemText primary="Credit memo" />
            </ListItemButton>
        </React.Fragment>
    )
}









