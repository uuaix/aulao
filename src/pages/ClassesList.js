import React, {useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const api = 'http://localhost:5000/';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
}));

export default function ClassesList(props) {
    const classes = useStyles();
    const [classesList, setClassesList] = React.useState([]);

    useEffect(()=>{
        fetch(api+"get_classes")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(list => {
                const classeslist = [];
                for (const ind in list) {
                    const file = list[ind].split('.');
                    if (!(file[0] in classeslist)) {
                        classeslist.push(file[0]);
                    }
                }
                setClassesList(classeslist);
            });
    }, []);

    const set_lecture = (list) => {
        const regexCamel = /(\w[A-Z])/g;
        const lectures = []
        for (const lect in list) {
            let array1;
            while ((array1 = regexCamel.exec(lect)) !== null) {
                console.log(`Found ${array1[0]}. Next starts at ${regexCamel.lastIndex}.`);
                // expected output: "Found foo. Next starts at 9."
                // expected output: "Found foo. Next starts at 19."
            }
            lectures.append({
                title: lect,
                avatar: lect[0],
                subheader: '05/12/2020',
            });
        }
        setClassesList(lectures);
    }

    return (
        <List className={classes.root}>
            {classesList.map(lecture => (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={lecture} secondary="Jan 9, 2014" />
                </ListItem>
            ))}
        </List>
    )
}