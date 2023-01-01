var SpeechRegogniztion = window.webkitSpeechRecognition
var Recognition = new SpeechRegogniztion()

function start(){
    document.getElementById('textbox').innerHTML = ''
    Recognition.start() 

}
Recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById('textbox').innerHTML = content
    speeeeeech()
}
function speeeeeech(){
    var LOL = window.speechSynthesis
    speech_data = document.getElementById('textbox').value
    var NOOB = new SpeechSynthesisUtterance(speech_data)
    LOL.speak(NOOB) 
    Webcam.attach(camera)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format:'png' , 
    png_quality: 90
})
var camera = document.getElementById('camera')
