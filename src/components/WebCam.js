import React, {useEffect} from "react";

const constraints = { audio: false, video: { width: 313, height: 234 } };

const processor = {
    timerCallback: function() {
        if (this.video.paused || this.video.ended) {
            return;
        }
        this.computeFrame();
        var self = this;
        setTimeout(function () {
            self.timerCallback();
        }, 16); // roughly 60 frames per second
    },

    doLoad: function(video) {
        this.video = document.getElementById("videoElement");
        this.c1 = document.getElementById("my-canvas");
        this.ctx1 = this.c1.getContext("2d");
        var self = this;

        this.video.addEventListener("play", function() {
            console.log("my-canvas");

            self.width = constraints.video.width;
            self.height = constraints.video.height;
            self.timerCallback();
        });
    },

    computeFrame: function() {
        this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
        var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
        var l = frame.data.length / 4;

        for (var i = 0; i < l; i++) {
            var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

            frame.data[i * 4 + 0] = grey;
            frame.data[i * 4 + 1] = grey;
            frame.data[i * 4 + 2] = grey;
        }
        this.ctx1.putImageData(frame, 0, 0);

        return;
    },

    filterDot: function() {
        this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
        var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
        var l = frame.data.length / 4;

        for (var i = 0; i < l; i++) {
            var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

            frame.data[i * 4 + 0] = grey;
            frame.data[i * 4 + 1] = grey;
            frame.data[i * 4 + 2] = grey;
        }
        this.ctx1.putImageData(frame, 0, 0);

        return;
    }
};

export function WebCam(props) {
    useEffect(() => {
        processor.doLoad()
        var video = document.querySelector("#videoElement");

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                    processor.doLoad(video)
                })
                .catch(function (err0r) {
                    console.log("Something went wrong!");
                });
        }
    });
    return (
        <React.Fragment>
            <video
                controls="true"
                id="videoElement"
                className="videoElement"
                width={constraints.video.width} height={constraints.video.height} >
            </video>
        </React.Fragment>
    );
}

export function CamCanvas(props) {
    return (
        <React.Fragment>
            <canvas id="my-canvas" width={constraints.video.width}
                    height={constraints.video.height}
                    className="videoElement"></canvas>
        </React.Fragment>
    );
}