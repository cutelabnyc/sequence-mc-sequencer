const React = require("react");
const Tone = require("tone");
const StartAudioContext = require("startaudiocontext");
const AudioEngine = () => {
    React.useEffect(() => {
        console.log('audio engine loaded');
        StartAudioContext(Tone.context);
    
    }, [])
    return null;
}
module.exports = AudioEngine;
