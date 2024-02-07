const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
console.log(checkboxes);

let lastCheck;
let inBetween = false;

function handleCheck(e) {
    
    // checks that the shift key is pressed and the checkbox is checked
    
    if (e.shiftKey && this.checked) {
        checkboxes.forEach((checkbox) => {
            if(checkbox === this || checkbox === lastCheck) {
                inBetween = !inBetween;
                console.log("Start to check in between");
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });

    }
    lastCheck = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));