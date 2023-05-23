<template>
    <WHeader/>
    <div class="content">
        <h1 class="page-title">Web screen record service</h1>
        <div class="content-wrapper">
            <div class="setup-block">
                <WBroadcastSetup ref="setup"/>
                <div class="btn-group">
                    <div class="btn-holder">
                        <a href="#" @click="startCapture()" class="btn">Capture screen</a>
                    </div>
                    <div class="btn-holder">
                        <a href="#" @click="isCapture?stopCapture():null" class="btn btn-red">Stop capture</a>
                    </div>
                </div>
                <div class="btn-group">
                    <div class="btn-holder">
                        <a href="#" class="btn" @click="isCapture?startRecord():null" :class="!isCapture?'disabled ':' ' + isRecording?'btn-red':''">{{ isRecording?'Stop recording':'Start recording' }}</a>
                    </div>
                    <a v-if="videoUrl != ''" :href="videoUrl" :download="$refs.setup.$refs.filename.value">Download video!</a>
                </div>
            </div>
            <div class="preview-wrapper">
                <h2>Preview</h2>
                <video id="vpreview" class="preview" autoplay></video>
            </div>
        </div>
    </div>
</template>

<script>
import WHeader from '@/components/blocks/header.vue';
import WBroadcastSetup from '@/components/blocks/broadcast_setup.vue';

export default {
  name: 'App',
  components: {
    WHeader,
    WBroadcastSetup
  },
  data() {
    return {
        displayMediaOptions: {
            video: {
                displaySurface: "window",
                cursor: "always"
            },
            audio: true,
        },
        isCapture: false,
        mediaRecorder: [],
        chunks: [],
        isRecording: false,
        videoUrl: ""
    }
  },
  methods: {
    updateOptions() {
        this.displayMediaOptions.audio = this.$refs.setup.$refs.audio.checked;
        this.displayMediaOptions.video.cursor = this.$refs.setup.$refs.cursor.checked?"always":"never";
    },
    async startCapture() {
        this.updateOptions();
        const videoElem = document.getElementById("vpreview");

        try {
            videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
                this.displayMediaOptions
            );
            this.isCapture = true;
        } catch (err) {
            console.error(err);
        }
    },
    stopCapture() {
        const videoElem = document.getElementById("vpreview");
        let tracks = videoElem.srcObject.getTracks();

        tracks.forEach((track) => track.stop());
        videoElem.srcObject = null;
        this.isCapture = false;
    },
    startRecord() {
        if (!this.isRecording) {
            const videoElem = document.getElementById("vpreview");
            this.mediaRecorder = new MediaRecorder(videoElem.srcObject);
            this.mediaRecorder.start();
            var t = this;
            this.mediaRecorder.ondataavailable = function(e) {
                t.chunks.push(e.data);
            }

            this.mediaRecorder.onstop = function() {  
              var blob = new Blob(t.chunks, { 'type' : 'video/mp4; codecs=mpeg4,vorbis' });
              t.chunks = [];
              t.videoUrl = window.URL.createObjectURL(blob);
            }
            this.isRecording = true;
        }
        else {
            this.mediaRecorder.stop();
            this.isRecording = false;
        }
        
    }
  }
}
</script>

<style scoped> 
.setup-block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.btn-group {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: 1rem;
    margin: 1rem 0 2rem;
}
.disabled {
    opacity: 0.2;
    cursor: default;
}
.disabled::before {
    opacity: 0;
}
.content-wrapper {
    display: grid;
    align-items: baseline;
    grid-template-columns: 1fr 2fr;
}
.preview {
    margin: 1rem 0;
    width: 100%;
    height: 100%;
    background-color: black;
}
.preview-wrapper {
    margin: 0 3rem 0 0;
}

.btn-red {
    color: #91261f;
    border-color: #91261f;
}
.btn-red::before {
    background-color: #91261f;
}
</style>