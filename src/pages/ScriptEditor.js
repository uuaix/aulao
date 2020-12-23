import React, {useEffect} from 'react'
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from 'remark-gfm'
import {ButtonGroup, Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";

import contentPath from '../data/firstclass.md'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    textEditor: {
        width: '98%',
        height: '90%',
        marginTop: theme.spacing(4),
    }
}));

export default function ScriptEditor() {
    const classes = useStyles();
    const [content, setContent] = React.useState('# Default');
    const [editing, setEditing] = React.useState(false);

    useEffect(()=>{
        fetch(contentPath)
            .then(response => {
                console.log(response);
                return response.text();
            })
            .then(text => setContent(text));
            window.MathJax.typeset();
        });

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
        <React.Fragment>
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
                :
                <ReactMarkdownWithHtml plugins={[gfm]} children={content} allowDangerousHtml />
            }
            {/*{mathContent}*/}
        </React.Fragment>
    )
}