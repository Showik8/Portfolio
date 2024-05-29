import React from 'react'
import ReactDOM from 'react-dom/client'
import Headi from './components/header.jsx'
import App from './App.jsx'
import Greeting  from './components/card.jsx'
import FirstCont from './components/FirstContent.jsx'
import SecCont from './components/SecCont.jsx'
import WaveCont from './components/wavecont.jsx'
import Fourd from './components/Fourd.jsx'
import Footer from './components/footer.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headi/>
    <FirstCont/>
    <SecCont/>
    <WaveCont/>
    <Fourd/>
     {/* <Footer/>  */}
     {/* <Greeting/> */}
  
  </React.StrictMode>,
)

// document.body.appendChild(Footer)