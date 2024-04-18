const list = document.getElementById('list');
const searchInput = document.getElementById('searchInput');


searchInput.addEventListener('keyup', handleChange)

function searchOld(keyword) {
  const data = [
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = data.filter(function(text){
        if (text.includes(keyword)) {
          return true
        }
        return false
      })
      resolve(result);
    }, 150)
  })
  
}



async function search(keyword) {
  return fetch(
    `https://api.github.com/search/users?q=${keyword}`, 
    {
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": "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",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    }
  )
  .then(res => res.json())
}

async function handleChange(e) {
  if (e.target.value.length <= 5) return
  const data = await search(e.target.value)
  console.log(data)
  const oldResult = list.querySelectorAll('li');
  oldResult.forEach(e => e.remove());
  if (data.items.length === 0) {
    const notFound = document.createElement('li');
    notFound.innerText = "Items with matching text not found!!!";
    notFound.classList.add('notFound');
    list.appendChild(notFound);
  }
  data.items.forEach(function(value){
    debugger
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const open= document.createElement('button');
    open.addEventListener(`click` ,ramefuncqia)
    open.classList.add("smallBtn")
    img.src = value.avatar_url;
    p.innerText = value.login;
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(open)
    list.appendChild(li);
  })

}



new Promise((resolve, reject) => {
  resolve('hello')
}).then(res => {
  setTimeout(() => {
    console.log(res)
  }, 0)
})

setTimeout(() => {
  console.log(3)
}, 0)

function ramefuncqia() {
  console.log("wpw")
}