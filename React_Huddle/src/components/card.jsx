import './card.css'





export default  function Greeting (){
    return <>
        
        <h1>Hello World!!</h1>
        <button onClick={Wow}>See First Projcet</button>        
    </>
}

function Wow(){
    let cvladi = ReactDOM.version
    console.log(cvladi)
}