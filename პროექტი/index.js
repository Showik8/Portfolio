const cont = document.getElementById(`cont`)
const menu = document.getElementById(`menu`)
menu.addEventListener(`mouseenter`, mousein )
menu.addEventListener(`mouseleave`, mouseout)
let smallDiv = document.createElement(`div`)
const about = document.createElement(`a`)
const contact = document.createElement(`a`)
const signUp = document.createElement(`button`)
const logIn = document.createElement(`button`)
const main = document.getElementById(`main`)

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


async function allprod(){
   return  fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            
}

async function catalogy(category){
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.ok) {
            throw new Error('Error in fetching data');
        }
        const ret = await response.json();
        return ret;
    } catch (error) {
        console.error(error);
    }
    }

catalogy(`jewelery`)


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
document.body.appendChild(footer)

async function justMenu(){
    const data = await allprod()
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
       
    });
    }  

justMenu()


const women = document.getElementById(`women's clothing`)
const man = document.getElementById(`men's clothing`)
const jewelery = document.getElementById(`jewelery`)
const elect = document.getElementById(`electronics`)

women.addEventListener(`click`,search)
man.addEventListener(`click`,search)
jewelery.addEventListener(`click`,search)
elect.addEventListener(`click`,search)


async function search(e){ 

    cont.innerHTML= ``;
    let value = e.target.innerText;
    let lowervalue = value.toLowerCase()
    let categorydata = await catalogy(lowervalue)
    
    categorydata.forEach(item => {
       
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
        addbtn.innerText = "View"
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

main.addEventListener(`click` , justMenu)
