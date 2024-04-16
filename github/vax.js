const input= document.getElementById(`searchInput`);
const inputvalue= input.value
console.log(inputvalue)

const maincont = document.createElement(`div`)
maincont.classList.add("cont")
maincont.setAttribute("id","mainCont")
document.body.append(maincont)

const img=document.createElement(`img`)
img.src= smalldata.avatar_url
maincont.appendChild(img)