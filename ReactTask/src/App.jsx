
import NFT from "./assets/NFT.svg"
import Eth from './assets/Eth.svg'
import Clock from './assets/Clock.svg'
import Oval from './assets/Oval.svg'
import './App.css'
import { Children } from "react"


function App() {



  let img = 
   <div   className="logoDiv">
    <img onMouseEnter={add} onMouseLeave={remove} id="Nft" src={NFT} alt="Logo" />
    </div>

  function add(e){
    let parent = e.target.parentElement 
    let eye = document.createElement(`img`)
    eye.src = `..//src/assets/Eye.png`
    eye.classList.add(`eye`)
    parent.appendChild(eye)
  }

    function remove(e) {
       let parent = e.target.parentElement
       parent.children[1].remove()

    }
  
  let NftName =`Equilibrium #34/29`
  let description = `Our Equilibrium collection promotes balance and calm.`

  let price = `0.041 ETH`
  let deadline = `3 days left`
  let founder = `Jules Wyvern`

  return (
    <>
       <div className="appDiv">
       {img}
        <h2>{NftName}</h2>
        <span>{description}</span>
          <div className='priceInfo'>
              <div className="nftPrice">
              <img src={Eth}/>
                  <span>{price}</span>
                  </div>
              <div className='timeOut'>
                  <img src={Clock}/>
                  <p>{deadline}</p>
              </div>
          </div>
          <div className="creator">
                <img src={Oval}/>
                <div className="creatorName">
            <p>Creation of</p>
            <span>{founder}</span>
                </div>
              </div>
       </div>
    </>
  )
}

export default App
