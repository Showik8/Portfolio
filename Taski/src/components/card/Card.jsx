import './card.css'
import Foto from '../../assets/Foto.png'

// import a from '
export const Card = (Props)=>{
   const {icon, text, color, BgColor, res,}=Props
   console.log(icon)
   
    return(
        <>
        <div style={{backgroundColor:BgColor,  } } className="Card">
           <div >
           <img src={icon} alt={text} />
            <p style={{color:color}}>{text}</p>
           </div>

            <h3><b>{res}</b>  <a>/ 100</a></h3>

        </div>
        </>

    )
}