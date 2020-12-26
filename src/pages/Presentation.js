import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScriptEditor from "./ScriptEditor";
import MediaCollection from "./MediaCollection";
import Grid from '@material-ui/core/Grid';
import WebCamCard from "../components/WebCamCard";

const api = 'http://localhost:5000/';
const classname = 'firstclass';

const teacher = {
    avatar: 'R',
    name: 'Rodrigo Werneck Franco',
    description: 'Cientista da Computação',
    subtext: 'Aulas de Machine Learnine, WebDesenvolvimento, etc...',
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: 0,
        },
    },
    scriptPaper: {
        padding: theme.spacing(3),
        margin: 0,
    },
    webcam: {

    },
    medias: {

    }
}));

export default function Presentation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ScriptEditor contentPath={api+'/static/'+classname+'.md'} editmode={false}/>
                </Grid>
                <Grid item xs={4}>
                    <WebCamCard className={classes.webcam} teacher={teacher}/>
                    <MediaCollection className={classes.medias}/>
                </Grid>
            </Grid>
        </div>
    );
}