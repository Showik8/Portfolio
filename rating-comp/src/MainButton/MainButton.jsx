import './MainButton.css'

function Sent(){
    let cont = document.getElementById('cont')
    cont.innerHTML=''
}


export const MainButton=(Props)=>{
   const {
    className,
    text,
}=Props 

    return(
        <button onClick={Sent} className={className}>{text}</button>
    )
}