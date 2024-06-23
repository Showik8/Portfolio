import { Card } from "../card/Card"

import "./Sumi.css"

export const Sumi =()=>{
    return(
        <>
        <div className="summaryDiv">
            <span> Summary</span>
            <div className="cards">
            <Card  icon="/src/assets/Foto.png" BgColor="rgba(255, 85, 85, 0.05)" color="rgba(255, 85, 85, 1)" res="80" text = "Reaction" />
            <Card icon="/src/assets/brain.png" color="rgba(255, 178, 30, 1)" BgColor="rgba(255, 178, 30, 0.05)" res="92" text ="Memory"/>
            <Card icon="/src/assets/Vector.png" BgColor="rgba(0, 187, 143, 0.05)" color="green" res="61" text ="Verbal"/>
            <Card  icon="/src/assets/ver.png" BgColor="rgba(17, 37, 214, 0.05)" color="blue" res="80" text ="Visual" />
            </div>
            <button className="btn">Continue</button>
        </div>
           
        </>
    )
}

