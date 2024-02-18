const keyCode = "hilda";
const keyInput = [];

function keyDetection(e) {
    console.log(e.key);
    keyInput.push(e.key);
    console.log(keyInput);
    keyInput.splice(
        -keyCode.length - 1,
        keyInput.length - keyCode.length
    );
    console.log(keyInput);
    if (keyInput.join('').includes(keyCode)){
        console.log("Ding Dong!");
        cornify_add();
    }
}

window.addEventListener('keyup', keyDetection);