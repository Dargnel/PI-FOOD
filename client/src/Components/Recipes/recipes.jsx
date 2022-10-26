import React from "react";
import { useSelector} from "react-redux";
import {NavLink} from "react-router-dom"
import styles from "./recipes.module.css"




const ListRecipes =(props)=>{

const statestart = useSelector(store=>store)


let idkey =1;

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

            {/* Diets api */}
            {receta.hasOwnProperty("aggregateLikes")&&
            <div className={styles.connect2}> 
            <div className={styles.centertitle}>
                <span> Diets</span>
            </div>
                <ul  >      
                    {receta.diets.map((receta)=>{
                        idkey=idkey+1
                    return(<li key={idkey} >{receta}</li>)
            }) 
                }</ul>
            
            </div>
            }
            {/* Diets data base */}
            {!receta.hasOwnProperty("aggregateLikes")&&
            <div className={styles.connect2}> 
            <div className={styles.centertitle}>
                        <span> Diets</span>
            </div>
                <ul > {receta.diets.map((recetadb)=>{
                    idkey=idkey+105
                return<li key={idkey}>{recetadb.Name}</li>
                }) 
                }</ul>
            
            </div>
            }
            </NavLink>
        }) 
        }
    </div>
       
       
    )
}





export default ListRecipes;