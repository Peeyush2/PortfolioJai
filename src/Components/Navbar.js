import React,{useState,useEffect} from 'react'
import Logo2 from './Icons/list-white-18dp.js'
import Favicon from './../favicon'
import MenuPng from './Icons/menupng .png'
import PngLogo from './Icons/pnglogo .png'
import cancel from './Icons/close.js'
import './navbar.css'
export default function Navbar() {
    const [visible,setVisible] = useState(false);

    return (
        <div>
        <div className='navbar2'>            
            <div className='navbar-list'>
                <div className='navbar-logo'>
                    <Favicon/>
                </div>
            </div>
            <div className='navbar-list2'>
                <div className='navbar-menu'>
                    <div className="navbar-li"><a href="#frontPage">Home</a></div>
                    <div className="navbar-li"><a href="#work">Work</a></div>
                    <div className="navbar-li"><a href="#about">About</a></div>
                    <div className="navbar-li">Articles</div>
                    <div className="navbar-li">Message Me</div>
                </div>
                <div onClick={()=>setVisible(prev=>!prev)} className='compressed-navbar-menu'>
                        {!visible &&<Logo2/>}
                        { visible && <img style={{maxWidth:'100%',maxHeight:'100%'}} src={cancel}></img> }
                </div>
            </div>
        </div>
        {visible && <div className='navbar-extended'>
            <div> Home </div>
            <div> Work </div>
            <div> About </div>
            <div> Articles </div>
        </div>}

        </div>
    )
}
