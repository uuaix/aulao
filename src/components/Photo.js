import React from "react";
import Button from "@material-ui/core/Button";

export default function Photo() {
    const takePicture = () => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        const video = document.querySelector('video');
        const photo = document.getElementById('photo');
        const { width, height } = constraints.video;

        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    const clearPhoto = () => {
        const canvas = document.querySelector('canvas');
        const photo = document.getElementById('photo');
        const context = canvas.getContext('2d');
        const { width, height } = constraints.video;
        context.fillStyle = '#FFF';
        context.fillRect(0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    return (
        <React.Fragment>
            <img id="photo" alt="Your photo" />
            <Button variant="contained" color="primary"
                    id="startButton"
                    onClick={ takePicture }>
                Take photo
            </Button>
            <Button variant="contained" color="primary"
                    id="saveButton"
                    onClick={ clearPhoto }
            >Clear Photo</Button>
        </React.Fragment>
    );
}