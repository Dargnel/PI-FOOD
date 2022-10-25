import React from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import styles from "./recipes.module.css"



const ListRecipes =(props)=>{

console.log(props.loading);

    return(
    <div>

         
    <div className={styles.lista}>
            {/* Cargando */}
        {props.loading&& 
        <div className={styles.contcenter}>
            <div className={styles.contloader} >
                <div className={styles.loader}>

                </div>

                <div className={styles.loader2}>

                </div> 

             </div>
        </div>
      }
            {/* No se encontro */}
        {props.recips<=0&&!props.loading&& 
        <div className={styles.contnoseencontro}>
            <img src="https://image.spreadshirtmedia.net/image-server/v1/designs/306710821,width=178,height=178.png" alt="Imagen triste" />
            <span className={styles.Noseencontro}>Recipe Not Found</span>

        </div>}


        {  !props.loading&&
            props.currentRecipe.map((receta)=>{
            return <NavLink className={styles.recip}  key={receta.id}  to={`/recip/${receta.id}`}>
                
            <div className={styles.tex}>
             <span className={styles.navtex}>{receta.title}</span> 
            </div>
            <div className={styles.imagecontent}>
             <img className={styles.imagereal} src={receta.image}alt="Imagen de receta"/>  
            
            
            </div>
            </NavLink>
        }) 
        }
    </div>
       
       
    </div>)
}


const mapStateToProps=(state)=>{
    return{
        recips:state.recips,
       
    }
}


export default connect(mapStateToProps)(ListRecipes)