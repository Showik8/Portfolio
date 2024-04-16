const searchInput = document.getElementById(`searchInput`);
searchInput.addEventListener(`keyup`, handleChange)

const img = document.getElementById(`img`)
const username =document.getElementById(`username`)
const notFound = document.getElementById(`notFound`);
const repos = document.getElementById(`repos`)
const follower = document.getElementById(`follower`)
const following = document.getElementById(`following`)
const html = document.getElementById(`html`)
const clearcont = document.getElementById(`backcont`)
const maincont = document.getElementById(`mainCont`)

async function search(valueInput) {
  return fetch(
      `https://api.github.com/users?q=${valueInput}`, 
      {
        headers: {
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    )
    .then(res => res.json())
  }
  
// async function getdata(valueInput){
//     return fetch(
//       `https://api.github.com/users?q=${valueInput}`, 
//       {
//         headers: {
//           "Accept": "application/vnd.github+json",
//           "X-GitHub-Api-Version": "2022-11-28"
//         }
//       }
//     )
//     .then(res => res.json())
//   }


  async function handleChange(e) {
    // if (e.target.value.length >= 4) return
    // const data = await search(e.target.value)
    // // console.log(data)

    while(e.target.length == 1 )return
    const result = await search(e.target.value)
    console.log(result)
    // const user = await getdata(e.target.value)
    // console.log(user)
    // const smalldata =result.items[0]
    // img.src = smalldata.avatar_url
    // username.innerText = smalldata.login
    // repos.innerText = smalldata.repos_url.length
    // follower.innerText= smalldata.followers_url.length
    // following.innerText = smalldata.following_url.length
    // html.innerText= smalldata.html_url

    // if (data.items.length === 0) {
    //   notFound.innerText = "No result" 
    // }
    
  }
  
 
