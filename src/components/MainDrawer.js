import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Login from "../pages/Login";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: drawerWidth,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function MainDrawer(props) {
    const classes = useStyles(props.drawerWidth);
    const theme = useTheme();

    const handleDrawerClose = () => {
        props.setOpen(false);
    };

    return (<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key='Login' component={Link} to="/login">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Login' />
            </ListItem>
            <ListItem button key='ListClasses' component={Link} to="/">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Lectures' />
            </ListItem>
            <ListItem button key='Presentation' component={Link} to="/present">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Presentation' />
            </ListItem>
            <ListItem button key='Media Collection' component={Link} to="/media">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Media Collection' />
            </ListItem>
            <ListItem button key='Script Editor' component={Link} to="/edit">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary='Script Editor' />
            </ListItem>
        </List>
    </Drawer>)
}