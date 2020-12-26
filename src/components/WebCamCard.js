import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {WebCam} from "../components/WebCam";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(0.5),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    canvas: {
        position:"fixed",
        width: "100%",
        height: "100%",
        display: "none",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'lightred',
    },
}));

export default function WebCamCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.teacher.avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.teacher.name}
                subheader={props.teacher.description}
            />
            <CardContent>
                <WebCam />
                {/*<Photo />*/}
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.teacher.subtext}
                </Typography>
            </CardContent>
        </Card>
    );
}