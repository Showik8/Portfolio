import './footer.css'

function Footer(){
    return(
        <>
        <footer>
            <div className="right">
                <h1>Huddle</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
                <p className="phone">Phone: +1-543-123-4567</p>
                <p className="email">Email: support@company.com</p>
                <img src="src/assets/im.png" alt="icons"/>
            </div>
            <div className="left">
                <h1>NEWSLETTER</h1>
                <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
                <div  className="inputs">
                    <input type="email" placeholder="john#mail.com"/>
                    <button className="sub">Subscribe</button>
                </div>
            </div>
        </footer></>
    )

}

export default Footer