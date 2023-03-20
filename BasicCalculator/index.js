let display = document.getElementById("display");
let allButtons = document.getElementsByClassName("button");

let buttons = Array.from(allButtons);
console.log(buttons);

buttons.map(button => {
    //Add Event Listeners to each buttons
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);

        //1.BackSpace --> remove the last text which we have entered
        //2.= --> evaluates the expression;
        //C --> diplsay is set to originnam empty
        //Whatever type which gets added to expression evaluation

        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "Backspace":
                if(display.innerText){
                    display.innerText = display.innerText.substring(0,display.innerText.length - 1);
                }
                break;
            case "=":
               if(display.innerText == ""){
                   alert("No Value Entered!!!");
               } else {
                   //Exception handling
                   try{
                    display.innerText = eval(display.innerText);
                   }catch{
                    display.innerText = "Error";
                   }
               }
               break;

            default: {
                display.innerText += e.target.innerText;
                break;
            }
        }
    })

});
