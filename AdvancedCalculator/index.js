let input = document.getElementById("display");

function clearDisplay(){
    input.innerText = "";
}

function deleteLastChar(){
    input.innerText = input.innerText.substring(0,input.innerText.length - 1);
}

function addChar(character){
    if(input.innerText == null || input.innerText == "0"){
        input.innerText = character;
    } else {
        input.innerText += character;
    }
}

function changeSign(){
    if(input.innerText.substring(0,1) == "-"){
        input.innerText = input.innerText.substring(1,input.innerText.length);
    } else{
        input.innerText = "-" + input.innerText ;
    }
}

function compute(){
    //check the base case
    if(input.innerText == ""){
        alert("No value Entered!!");
    } else{
        //Exception handling
        //When u suspect set of code what we write might get excetions and unknown behaviou we need to use
        //try catch to log the issues
        try{
         input.innerText = eval(input.innerText);
        }catch{
            input.innerText = "Error";
        }
    }
}

function sin(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = Math.sin(input.innerText);
    }
}

function square(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = eval(input.innerText) * eval(input.innerText);
    }
}

function sqrtNumber(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = Math.sqrt(input.innerText);
    }
}

function exp(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = Math.exp(input.innerText);
    }
}

function logarithmic(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = Math.log(input.innerText);
    }
}

function cos(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = Math.cos(input.innerText);
    }
}

function tan(){
    if(input.innerText == ""){
        alert("No Value entered!!!")
    } else {
        input.innerText = Math.tan(input.innerText);
    }
}

function checkNum(){
    let str = input.innerText;
    for( var i =0;i<str.length;i++){
        var ch = str.substring(i,i+1);
        if(ch < "0" || ch > "9"){
            if(ch == "/" && ch=="*" && ch == "-" && ch== "-" && ch == "(" && ch == ")" && ch=="."){
                alert("Invalid Entery!");
                return false;
            }
        }
    }
    return true;
}