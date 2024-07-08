let inputcont = document.getElementById(`inputcont`);
let backcont = document.getElementById(`backcont`);
const userlogin = document.getElementById(`login`);
const img = document.getElementById(`img`);
const username = document.getElementById(`username`);
const notFound = document.getElementById(`notFound`);
const repos = document.getElementById(`repos`);
const follower = document.getElementById(`follower`);
const following = document.getElementById(`following`);
const html = document.getElementById(`html`);
const maincont = document.getElementById(`mainCont`);
const createTime = document.getElementById(`createTime`);
const userlocation = document.getElementById(`location`);
const office = document.getElementById(`office`);
const twt = document.getElementById("twt");
const bio = document.getElementById(`bio`);
const reposDiv = document.getElementById(`reposCont`);
const user = document.getElementById(`user`);
const adress = document.getElementById(`adress`);
let userid = 0;
let btnid = 0;
const searchInput = document.getElementById(`searchInput`);
searchInput.focus();

async function fetchdata(username) {
  return fetch(`https://api.github.com/search/users?q=${username}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "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",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then((res) => res.json());
}

async function search() {
  let searchInput = document.getElementById("searchInput").value;
  document.body.classList.remove(`start`);
  const result = await fetchdata(searchInput);

  const ulList = document.getElementById(`list`);

  if (result.total_count >= 5) {
    ulList.style.overflowY = `scroll`;
  }

  if (result.total_count == 0) {
    notFound.innerText = `not founded`;
    notFound.append();
  }

  result.items.forEach(function (element) {
    console.log(element);
    const li = document.createElement(`li`);
    const h1 = document.createElement(`h1`);
    const profilePhoto = document.createElement(`img`);
    const button = document.createElement(`button`);
    button.innerText = `click`;
    button.addEventListener(`click`, liButton);
    h1.innerText = element.login;
    h1.setAttribute(`id`, `usere${userid}`);
    button.setAttribute(`id`, `${btnid}`);
    userid++;
    btnid++;
    profilePhoto.src = element.avatar_url;
    li.appendChild(profilePhoto);
    li.appendChild(h1);
    li.appendChild(button);
    ulList.appendChild(li);
  });
}

async function searchForDiv(keyword) {
  return fetch(`https://api.github.com/users/${keyword}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "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",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    .then((res) => res.json())
    .catch(console.log(Error));
}

async function liButton() {
  let currentid = this.id;
  let gitname = document.getElementById(`usere${currentid}`).innerText;
  console.log(gitname);
  const data = await searchForDiv(gitname);
  console.log(data);
  document.body.removeChild(backcont);
  maincont.style.display = `flex`;
  maincont.classList.remove(`hidden`);
  maincont.classList.add(`cont`);
  username.innerText = data.name;
  username.append();
  img.src = data.avatar_url;
  img.append();
  userlogin.innerText = `@ ${data.login}`;
  userlogin.append();
  follower.innerText = data.followers;
  follower.append();
  following.innerText = data.following;
  following.append();
  repos.innerText = data.public_repos;
  repos.append();
  let year = data.created_at.slice(0, 4);
  let month = data.created_at.slice(5, 7);
  let day = data.created_at.slice(8, 10);
  createTime.innerText = `joined ${day}/${month}/${year}`;
  createTime.append();
  html.innerText = data.html_url;
  userlocation.innerText = data.location;
  userlocation.append();
  office.innerText = data.company;
  office.append();
  twt.innerText = data.twitter_username;
  twt.append();
  bio.innerText = data.bio;
  bio.append();
}

searchInput.addEventListener("keyup", handleChange);

function handleChange(e) {
  if (e.target.value >= 4) {
    maincont.classList.add("hide");
    document.body.appendChild(backcont);
  }
}

async function fetche(keyword) {
  return fetch(`https://api.github.com/users/${keyword}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "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",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    .then((res) => res.json())
    .catch(console.log(Error));
}

// async function handleChange(e) {
//   if(e.target.value >=4) return
//   const data = await fetche(e.target.value)
//   console.log(data)
//   document.body.removeChild(backcont)
//   maincont.style.display=`flex`
//   username.innerText = data.name
//   username.append()
//   img.src = data.avatar_url
//   img.append()
//   userlogin.innerText=`@ ${data.login}`
//   userlogin.append()
//   follower.innerText= data.followers_url.length
//   follower.append()
//   following.innerText = data.following_url.length
//   following.append()
//   repos.innerText = data.repos_url.length
//   repos.append()
//   let year = data.created_at.slice(0,4)
//   let month = data.created_at.slice(5,7)
//   let day = data.created_at.slice(8,10)
//   createTime.innerText =`joined ${day}/${month}/${year}`
//   createTime.append()
//   html.innerText= data.html_url
//   userlocation.innerText=data.location
//   userlocation.append()
//   office.innerText=data.company
//   office.append()
//   twt.innerText=data.twitter_username
//   twt.append()
//   bio.innerText=data.bio
//   bio.append()
// }

let btn = document.getElementById(`btn`);
btn.addEventListener(`click`, darkMode);

function darkMode() {
  let mode = document.body.classList.toggle(`light`);
  let darcont = document.getElementById(`darkMode`);
  let span = document.getElementById(`darkText`);
  let icon = document.getElementById(`icon`);
  maincont.classList.toggle(`ContLigth`);

  if (mode) {
    span.innerText = "DARK";
    icon.src = `./assets/Path.png`;
  } else {
    span.innerText = "LIGTH";
    icon.src = `./assets/sun.png`;
  }
  darcont.classList.toggle(`headContLight`);
  inputcont.classList.toggle(`inputcontLigth`);
  backcont.classList.toggle(`backcontLigth`);
  reposDiv.classList.toggle(`reposDivLigth`);
  let blackElements = document.querySelectorAll(`[style*="color: black"]`);

  user.classList.toggle(`userLigth`);
  bio.classList.toggle(`bioLigth`);
  adress.classList.toggle(`adressLigth`);
}
