<template>
    <div class="broadcast-setup-wrapper">
        <h2>Settings</h2>
        <!--
        <div class="field">
            <label for="i-width">Width: </label>
            <div class="px">
                <input class="input-number" id="i-width" type="number" value="640">
            </div>
        </div>
        <div class="field">
            <label for="i-height">Height: </label>
            <div class="px">
                <input class="input-number" id="i-height" type="number" value="380">
            </div>
        </div>
    -->
        <div class="field">
            <label for="i-audio">Record audio: </label>
            <input ref="audio" class="input-checkbox" id="i-audio" type="checkbox" checked>
        </div>
        <div class="field">
            <label for="i-cursor">Show cursor: </label>
            <input ref="cursor" class="input-checkbox" id="i-cursor" type="checkbox" checked>
        </div>
        <div class="field">
            <label for="i-filename">Save to: </label>
            <input ref="filename" class="input-text" id="i-filename" type="text" value="record.mp4">
        </div>
    </div>
</template>

<script>

export default {
  name: 'WBroadcastSetup',
}
</script>

<style scoped> 
.field {
    margin: 1rem 0;
}
.input-number {
    width: 3rem;
}

.input-text {
    width: 7rem;
}
.input-text, .input-number {
    background-color: var(--color-bg);
    color: var(--color-text);
    border: 0;
    border-bottom: 0.1rem solid;
    outline: 0;
    transition: .25s;
    padding: 0.1rem;
    font-size: 1rem;
}
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.px {
    display: inline;
}
.px::after {
    content: 'px';
    border-bottom: 0.1rem solid;
    padding: 0.1rem;
    transition: .25s;
}
.input-checkbox {
    width: 0.75rem;
    height: 0.75rem;
}
</style>