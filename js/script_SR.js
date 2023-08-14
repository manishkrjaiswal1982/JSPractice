// Declare variables
let stream, recorder, recordedChunks = [];

// Select DOM elements
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const recordedVideo = document.getElementById('recorded-video');

// Add event listeners
startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);

function startRecording() {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
        .then((stream) => {
            recordedChunks = [];
            recorder = new RecordRTC(stream, { type: 'video' });
            recorder.startRecording();
            startBtn.disabled = true;
            stopBtn.disabled = false;
        })
        .catch((err) => console.error('Error accessing media devices: ', err));
}

function stopRecording() {
    recorder.stopRecording(() => {
        stream = recorder.getBlob();
        recordedVideo.src = URL.createObjectURL(stream);
        recordedVideo.controls = true;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });
}
