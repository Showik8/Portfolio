const cont = document.getElementById(`cont`)
const menu = document.getElementById(`menu`)
menu.addEventListener(`mouseenter`, mousein )
menu.addEventListener(`mouseleave`, mouseout)
let smallDiv = document.createElement(`div`)
const about = document.createElement(`a`)
const contact = document.createElement(`a`)
const signUp = document.createElement(`button`)
const logIn = document.createElement(`button`)


function mousein(){
    about.innerText = "About US"
    about.classList.add(`about`)
    about.target = "_blank"
    about.href = "./about.html"
    contact.innerText = "Contact US"
    contact.target = "_blank"
    contact.href = "./contact.html"
    contact.classList.add(`contact`)
    signUp.innerText = "Sign Up"
    signUp.classList.add(`signUp`)
    logIn.innerText = "Log In"
    logIn.classList.add(`logIn`)
    smallDiv.appendChild(logIn)
    smallDiv.appendChild(signUp)
    smallDiv.classList.add(`menuDiv`)
    smallDiv.appendChild(about)
    smallDiv.appendChild(contact)
    cont.appendChild(smallDiv) 
}


function mouseout(){
    setTimeout(() => {
        smallDiv.classList.remove(`menuDiv`)
        cont.removeChild(smallDiv) 
    }, 3000);
    
}


async function fetchapi(){
   return  fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            
}



const footer = document.createElement(`footer`)
footer.innerHTML=` 
    <h1 class="namee">Victora's Boutique</h1>
    <p class="FooterP">Choose The best Brand From Georgia</p>
        <div class="SocialMedia">
        <img class="fa" src="./assets/Path.png" alt="Fac">
        <img class="fa" src="./assets/Shape.png" alt="Inst">
        <img class="tw" src="./assets/twitter.png" alt="Tw">   
        </div>
`



async function datawe(){
    const data = await fetchapi()
    data.forEach(item => {
        console.log(item)
        const product = document.createElement(`div`)
        product.classList.add(`inde`)
        const photo = document.createElement(`img`)
        photo.src = item.image
        const infoDiv = document.createElement(`div`)
        infoDiv.classList.add("inf")
        const productTitle = document.createElement(`h3`)
        productTitle.innerText = item.title
        const description = document.createElement(`p`)
        description.innerText = item.description
        const pricedv = document.createElement(`div`)
        pricedv.classList.add("pricedv")
        const price = document.createElement(`span`)
        const count = document.createElement(`span`)
        count.innerText = `In stock ${item.rating.count}`
        price.innerText = ` ${item.price} USD $`
        pricedv.appendChild(price)
        pricedv.appendChild(count)
        const buttonDiv = document.createElement(`div`)
        buttonDiv.classList.add(`btndiv`)
        const buy = document.createElement(`button`)
        buy.classList.add(`buy`)
        buy.innerText = "Buy"
        const addbtn = document.createElement(`button`)
        addbtn.classList.add(`add`)
        addbtn.innerText = "Add to Cart"
        product.appendChild(photo)
        infoDiv.appendChild(productTitle)
        infoDiv.appendChild(pricedv)
        buttonDiv.appendChild(buy)
        buttonDiv.appendChild(addbtn)
        infoDiv.appendChild(buttonDiv)
        product.appendChild(infoDiv)
        cont.appendChild(product)
        cont.appendChild(footer)
    });

    }  

datawe()

const women = document.getElementById(`womens`)
women.addEventListener(`click`, womens)

function womens(e){ 
  console.log(e)
}

 async function womenes(aray){
   aray.forEach(items =>{
    console.log(items.category)
   })
    
}