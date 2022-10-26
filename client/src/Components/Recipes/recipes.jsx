import React from "react";
import { useSelector} from "react-redux";
import {NavLink} from "react-router-dom"
import styles from "./recipes.module.css"




const ListRecipes =(props)=>{

const statestart = useSelector(store=>store)


  

    return(
        
    <div className={styles.lista}>
            {/* Cargando */}
        {statestart.loading&& 
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
        {statestart.recips<=0&&!statestart.loading&& 
        <div className={styles.contnoseencontro}>
            <img src="https://image.spreadshirtmedia.net/image-server/v1/designs/306710821,width=178,height=178.png" alt="Imagen triste" />
            <span className={styles.Noseencontro}>Recipe Not Found</span>

        </div>}


        {  !statestart.loading&&
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
       
       
    )
}





export default ListRecipes;