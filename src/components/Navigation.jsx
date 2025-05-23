import React from "react";

function Navigation ({handleHome}){

    function handleHome(){
        
    }
    function handleAbout(){

    }
    function handleServices()
    {

    }
    function handleContact(){

    }
    function handleHelp(){

    }
    return(
        <div>
        <nav>
            <ul className='nev-list'>
                <a onClick={handleHome} id='home' href="." >Home</a>
                <a onClick={handleAbout} id='about' >About</a>
                <a onClick={handleServices} id='services' >Services</a>
                <a onClick={handleContact} id='contacts' >Contact</a>
                <a onClick={handleHelp} id='help' >Help</a>
            </ul>
        </nav>
        </div>
    )
}
export default Navigation ;