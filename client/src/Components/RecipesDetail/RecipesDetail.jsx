import React, { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getDetail } from "../../Actions"
import styles from "./RecipesDetail.module.css"
import Navbar from "../Navbar/Navbar"

const RecipDetail =(props)=>{

    const dispatch = useDispatch()
    const statestart = useSelector(store=>store)

    let idkey=0;
    const stepscreates =[]

   useEffect(()=>{
     dispatch(getDetail (props.match.params.id));
   },[])
    
   

   if(statestart.recipsDetail.stepBystep){
        for(let valuepror in statestart.recipsDetail.stepBystep){
            stepscreates.push(statestart.recipsDetail.stepBystep[valuepror])
        }
   }
/////////////////Retorna ficha de la api 
   if(statestart.recipsDetail.hasOwnProperty("aggregateLikes")){
    return (
        <div>

 
        <div className={styles.contendad} >
            <div className={styles.home}>
                <Navbar/>
            </div>

            <div className={styles.connetextitle}>
                <span className={styles.textitle}>{statestart.recipsDetail.title}</span>
            </div>

            <div className={styles.content}>
            <div className={styles.contentimg}>
                <img className={styles.image} src={statestart.recipsDetail.image} alt="Generic recip" />
            </div>
            </div>

     

            <div className={styles.connect2}>
            <div className={styles.connecthealt}>
                <p className={styles.healttex}>Healt Score:{statestart.recipsDetail.healthScore}</p>
            </div>
            </div>
          

            <div className={styles.connect2}>
            <div className={styles.centertitle}>
                <span> Diets</span>
            </div>
                <ul  >      
                    {
                statestart.recipsDetail.diets.map((receta)=>{
                 idkey=idkey+1
                return(<li key={statestart.recipsDetail.id+idkey}>{receta}</li>)
            }) 
            }</ul>
            </div>

            <div className={styles.connect2}>
            <div>
            <div className={styles.centertitle}>
                <span> Step By Step</span>
            </div>
            <ul >
                { statestart.recipsDetail.analyzedInstructions.length>0&&
                statestart.recipsDetail.analyzedInstructions[0].steps.map((receta)=>{
                 idkey=idkey+3
                return<li key={receta.number+idkey}>{receta.step}</li>
            }) 
            }
           
            </ul>
            </div>

            </div>
           
        </div>
        </div>
    )
   }
///////////////////retorna la ficha de la base de datos
   return(
    <div className={styles.contendad}>

    <div className={styles.home}>
        <Navbar/>
    </div>

    <div className={styles.connetextitle}>
        <span className={styles.textitle}>{statestart.recipsDetail.title}</span>
    </div>


    <div className={styles.content}>
            <div className={styles.contentimg}>
                <img className={styles.image} src={statestart.recipsDetail.image} alt="Generic recip" />
            </div>
            </div>

    <div className={styles.connect2}>
    <div className={styles.centertitle}>
            <span> Resum Plate</span>
            </div>
    <div className={styles.resum}>
        <span> {statestart.recipsDetail.resumPlate}</span>
    </div>
    </div>

    <div className={styles.connect2}>
    <div className={styles.connecthealt}>
        <span>Healt Score: {statestart.recipsDetail.healthScore}</span>
    </div>
    </div>


    <div className={styles.connect2}>
            <div className={styles.centertitle}>
                        <span> Diets</span>
            </div>
        <ul >     {  
        
        statestart.recipsDetail.diets.map((receta)=>{
         idkey=idkey+1
        return<li key={statestart.recipsDetail.id+idkey}>{receta.Name}</li>
    }) 
    }</ul>
    </div>



    <div className={styles.connect2}>
        <div className={styles.centertitle}>
            <span> Step By Step</span>
        </div>
    <div>
    
    <ul >
        {
        stepscreates.map((step)=>{
         idkey=idkey+3
        return<li key={idkey}>{step}</li>
        }) 
        }
   
    </ul>
    </div>
    </div>
</div>
)



}



export default  RecipDetail;