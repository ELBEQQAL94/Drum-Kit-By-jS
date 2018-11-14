window.addEventListener('keydown', function(e) {
 // Get audio element from HTML file.
 const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
 // stop function from runing all together if key not exist.
 if(!audio) {
    return false; 
 }
 // call play() functio to play my audio over and over it's so fun try it hahah..
 audio.play();
 // add class in key division
 key.classList.add('playing');
});
// get all key elemnts from HTML file
const keys = document.querySelectorAll('.key');
function removetransition(e) {
    // skip it if it's not a transform
    if( e.propertyName !== 'transform') {
        return false;
    }
    // this == key
    this.classList.remove('playing');
}
keys.forEach(
    key => key.addEventListener('transitionend', removetransition)
    );