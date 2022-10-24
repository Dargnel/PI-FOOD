import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar =(props)=>{


    
/////////////////Retorna ficha de la api 
    return (
        <div className={styles.content}>
            <div className={styles.navbarcontent}>
                <NavLink className={styles.texbar} to={`/recipes/!#1`}>The World Of Flavor</NavLink>
            </div>
        </div>
    )
   
///////////////////retorna la ficha de la base de datos



}



export default Navbar;