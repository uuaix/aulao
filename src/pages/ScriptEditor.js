import React, {useEffect, useState} from 'react'
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from 'remark-gfm'
import {ButtonGroup, Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {yellow} from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    textEditor: {
        width: '98%',
        height: '90%',
        marginTop: theme.spacing(4),
    },
    unspace: {
        height: 0,
        marginTop: - theme.spacing(2),
    }
}));

const selectedSectionStyle = {
    backgroundColor: "#ffeeee",
}


export default function ScriptEditor(props) {
    const classes = useStyles();
    const [content, setContent] = useState('# Default');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetch(props.contentPath)
            .then(response => {
                return response.text();
            })
            .then(text => setContent(text));
            window.MathJax.typeset();
            setSections();
    });

    const setSections = () => {
        if(editing) return;

        console.log('AQUIIIII');
        const rootEl = document.getElementById('rootScript');
        console.log(rootEl);

        const sections = rootEl.childNodes;

        console.log(sections);

        for (const idx in sections) {
            console.log(escape(sections[idx]));
        }
    }

    const onEditionClick = () => {
        setEditing(true)
    }
    const onSaveClick = () => {
        const newtext = document.getElementById('text').value;
        setContent(newtext)
        setEditing(false)
    }
    const onChange = () => {
        const newtext = document.getElementById('text').value;
        setContent(newtext)
    }

    return (
        <div id="rootScript"
             className={classes.root}
             onChange={setSections}
        >
            <CssBaseline />
            {props.editmode ?
                <ButtonGroup>
                    {editing ?
                        <Button onClick={onSaveClick}>
                            Save/View
                        </Button>
                        :
                        <Button onClick={onEditionClick}>
                            Edit
                        </Button>
                    }
                </ButtonGroup>
            : <div className={classes.unspace}/> }
            {editing ?
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Roteiro de Aula"
                        multiline
                        rows={30}
                        defaultValue="Default Value"
                        variant="outlined"

                        id="text"
                        className={classes.textEditor}
                        value={content}
                        onChange={onChange}
                    />
                </div>
                : <ReactMarkdownWithHtml plugins={[gfm]} children={content} allowDangerousHtml />

            }
        </div>
    )
}