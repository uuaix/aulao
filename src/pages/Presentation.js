import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from "../components/MediaCard";

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

export default function Presentation() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <React.Fragment>
            <MediaCard/>
        </React.Fragment>
    );
}