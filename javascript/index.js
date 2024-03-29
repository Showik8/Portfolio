
const conainer = document.getElementById('container')
const myDiv = document.createElement(`div`)
const myH2 = document.createElement(`h2`)
const myButton = document.createElement(`button`)
const myP = document.createElement(`p`)
const myInput = document.createElement(`input`)
myInput.setAttribute("id",`myId`)

function makingContainer(){
    myH2.innerText ="Es sheiqmna JsShi"
    myButton.innerText="Okay"
    myButton.addEventListener("click", Testing)
    myP.innerText ="Daakliket"
    myDiv.classList.add(`test`)
    myDiv.appendChild(myH2)
    myDiv.appendChild(myP)
    myDiv.appendChild(myButton)
    conainer.appendChild(myDiv)

}

 

function makingSecondCont(){
    let secCon = document.createElement(`div`)
    secCon.classList.add(`secCon`)
   
    const myButton2=document.createElement(`button`) 
    myH2.innerText = "woow It's Working"
    secCon.appendChild(myH2)
    setTimeout(()=>{
        myH2.innerText = "Okay Next Step"
        myButton2.innerText= "Click Me"
        myButton2.addEventListener("click", () => {
            myH2.classList.add('hidden')
            myButton2.classList.add('hidden')
            myInput.classList.remove('hidden')
            
            })
        secCon.appendChild(myButton2) 
    },5000)  
    myInput.classList.add('hidden')
    myInput.inputMode= `text`
    myInput.placeholder=`Enter Your Name Here`
    secCon.appendChild(myInput)    
    document.body.appendChild(secCon)
}


function Testing(){
    conainer.classList.add( `hidden`);
 
   setTimeout(() => {
        makingSecondCont();
    }, 1000);
    
}

function inputChange(){
    let inputi = document.getElementById(`myId`);
    let inputValue = inputi.value;
    console.log(inputValue)
}

inputChange()