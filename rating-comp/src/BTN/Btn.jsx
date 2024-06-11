import { Children } from 'react'
import { Content } from '../Content/Content'
import './Btn.css'





export const Btn=(Props)=>{
let {
    img,
    arg,
    active= false,
}=Props

function handleBtn(e){
    let itemsLength=e.target.parentElement.childNodes.length
    let curBtn= e.target
    console.log(e)
    curBtn.classList.add('activeBtn')
    curBtn.classList.remove('btn')
    active = true
    console.log(curBtn)


    let btnDiv= document.getElementById('btnDiv')
    let disabledBtn = document.getElementsByClassName('btn')
    for(let i= 0; disabledBtn.length> i; i++ ){
        console.log()
        disabledBtn[i].removeEventListener('click', handleBtn)

    }
}
    
  
  
    if(Props.img){
        return(
            <button className='btn'>
                <img src={img}></img>
            </button>
        )
    }
    if(Props.arg ){
        return(
        <button  onClick = {handleBtn} className='btn'>
            {arg}
        </button>
        )
    }
    
}