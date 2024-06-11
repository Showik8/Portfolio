import './Content.css'
import { Btn } from '../BTN'
import { MainButton } from '../MainButton'
import { PrimaryBtn } from '../Constants/Bt.constants/bt.Constans'

export const Content = () =>{
    return(
        <div id='cont' className='cont' >
            <Btn img="src/assets/Path.png"/>
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div id='btnDiv'>
            <Btn active arg="1"/>
            <Btn active arg="2"/>
            <Btn active arg="3"/>
            <Btn active arg="4"/>
            <Btn active arg="5"/>
            </div>
            <MainButton className={PrimaryBtn.PRIMARY} text="SUBMIT"/>
        </div>

    )

}