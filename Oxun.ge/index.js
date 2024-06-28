const setup = document.getElementById(`setup`);
const punch = document.getElementById(`punch`);
const mainC = document.getElementById(`mainC`);
const jokes = document.getElementById(`jokes`)
// jokes.style.display = `none`;
const nextBtn = document.getElementById(`nextJk`);
nextBtn.addEventListener(`click`,nextJoke)

const removeJk = document.getElementById(`removeJk`)
removeJk.addEventListener(`click`, clear)


function getJoke(){
  return fetch(`https://official-joke-api.appspot.com/random_joke`)
  .then(res => res.json())
}

async function nextJoke(){
    // console.log(jokes.childNodes.length)
    let shutkebi = await getJoke()
    const ul = document.createElement(`ul`);
    const li = document.createElement(`li`);
    ul.innerText = shutkebi.setup;
    li.innerText = shutkebi.punchline;
    ul.appendChild(li)
    jokes.appendChild(ul)

    if (jokes.childNodes.length ==5){
        jokes.style.overflowY=`scroll`
    }

}

function clear(){
    jokes.innerHTML = ``
    jokes.style.overflowY= `unset`
}

