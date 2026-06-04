function VoiceAssistant() {

    function startVoice() {

        const recognition =
            new webkitSpeechRecognition()

        recognition.start()

        recognition.onresult = function(event) {

            alert(
                event.results[0][0].transcript
            )
        }
    }

    return (

        <div>

            <h1>Voice Assistant</h1>

            <button onClick={startVoice}>
                Speak
            </button>

        </div>
    )
}

export default VoiceAssistant