const resultinput = document.getElementById(`input`)

function handleNumPress(num){
    resultinput.value =` ${resultinput.value}${num}`
}

function handleEqual(){
    let expresion = resultinput.value;

    const result=eval(expresion); 
    resultinput.value = result;
    console.log(result)
}

function clearInp(){   
    resultinput.value=""
   
}

function togglesign(){
    const firstsign = resultinput.value[0];
    if  (firstsign == "-") {
        resultinput.value = resultinput.value.substring[1,resultinput.length]
    } else (firstsign  != "-")
    { resultinput.value="-" + resultinput.value}

}