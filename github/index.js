const searchInput = document.getElementById('searchInput');
let inputcont = document.getElementById(`inputcont`)
let backcont =document.getElementById(`backcont`)

const userlogin = document.getElementById(`login`)
const img = document.getElementById(`img`)
const username =document.getElementById(`username`)
const notFound = document.getElementById(`notFound`);
const repos = document.getElementById(`repos`)
const follower = document.getElementById(`follower`)
const following = document.getElementById(`following`)
const html = document.getElementById(`html`)
const maincont = document.getElementById(`mainCont`)
const createTime = document.getElementById(`createTime`)
const userlocation = document.getElementById(`userlocation`)
const office = document.getElementById(`office`)
const twt = document.getElementById('twt')
const bio = document.getElementById(`bio`) 



searchInput.addEventListener('keyup', handleChange)

async function search(keyword) {
  return fetch(
    `https://api.github.com/users/${keyword}`,
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
  if(e.target.value >=4) return
  const data = await search(e.target.value)
  console.log(data)
  document.body.removeChild(backcont)
  maincont.style.display=`flex`
  username.innerText = data.name
  username.append()
  img.src = data.avatar_url
  img.append()
  userlogin.innerText=`@ ${data.login}`
  userlogin.append()
  follower.innerText= data.followers_url.length
  follower.append()
  following.innerText = data.following_url.length
  following.append()
  repos.innerText = data.repos_url.length
  repos.append()
  let year = data.created_at.slice(0,4)
  let month = data.created_at.slice(5,7)
  let day = data.created_at.slice(8,10)
  createTime.innerText =`joined ${day}/${month}/${year}`
  createTime.append()
  html.innerText= data.html_url
  userlocation.innerText=data.location
  userlocation.append()
  office.innerText=data.company
  office.append()
  twt.innerText=data.twitter_username
  twt.append()
  bio.innerText=data.bio
  bio.append()
}


let btn = document.getElementById(`btn`)
btn.addEventListener(`click`,  darkMode)



function  darkMode() {
  let mode =document.body.classList.toggle(`light`)
  let darcont = document.getElementById(`darkMode`) 
  let span = document.getElementById(`darkText`)
  let icon = document.getElementById(`icon`)
   
  if(mode==true){
      span.innerText="DARK"
      icon.src =`./assets/Path.png`
    }else{
      span.innerText="LIGTH"
      icon.src =`./assets/sun.png`
    }
    darcont.classList.toggle(`headContLight`)
    inputcont.classList.toggle(`inputcontLigth`)
    backcont.classList.toggle(`backcontLigth`)
   

}

