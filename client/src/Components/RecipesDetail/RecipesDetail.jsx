import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getDetail } from "../../Actions"
import styles from "./RecipesDetail.module.css"
import Navbar from "../Navbar/Navbar"

const RecipDetail =(props)=>{
    let idkey=0;
    const stepscreates =[]
   useEffect(()=>{
    props.getDetail (props.match.params.id)
   },[])
    
   

   if(props.recipsDetail.stepBystep){
        for(let valuepror in props.recipsDetail.stepBystep){
            stepscreates.push(props.recipsDetail.stepBystep[valuepror])
        }
   }
/////////////////Retorna ficha de la api 
   if(props.recipsDetail.hasOwnProperty("aggregateLikes")){
    return (
        <div className={styles.contendad} >
            <div className={styles.home}>
                <Navbar/>
            </div>

            <div className={styles.connetextitle}>
                <span className={styles.textitle}>{props.recipsDetail.title}</span>
            </div>

            <div className={styles.content}>
            <div className={styles.contentimg}>
                <img className={styles.image} src={props.recipsDetail.image} alt="Generic recip" />
            </div>
            </div>

            <div className={styles.connect2}>
            <div className={styles.connecthealt}>
                <p className={styles.healttex}>Healt Score:{props.recipsDetail.healthScore}</p>
            </div>
            </div>
          

            <div className={styles.connect2}>
            <div className={styles.centertitle}>
                <span> Diets</span>
            </div>
                <ul  >      
                    {
                props.recipsDetail.diets.map((receta)=>{
                 idkey=idkey+1
                return(<li key={props.recipsDetail.id+idkey}>{receta}</li>)
            }) 
            }</ul>
            </div>

            <div className={styles.connect2}>
            <div>
            <div className={styles.centertitle}>
                <span> Step By Step</span>
            </div>
            <ul >
                { props.recipsDetail.analyzedInstructions.length>0&&
                props.recipsDetail.analyzedInstructions[0].steps.map((receta)=>{
                 idkey=idkey+3
                return<li key={receta.number+idkey}>{receta.step}</li>
            }) 
            }
           
            </ul>
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
        <span className={styles.textitle}>{props.recipsDetail.title}</span>
    </div>


    <div className={styles.content}>
            <div className={styles.contentimg}>
                <img className={styles.image} src={props.recipsDetail.image} alt="Generic recip" />
            </div>
            </div>

    <div className={styles.connect2}>
    <div className={styles.connecthealt}>
        <span>Healt Score: {props.recipsDetail.healthScore}</span>
    </div>
    </div>


    <div className={styles.connect2}>
            <div className={styles.centertitle}>
                        <span> Diets</span>
            </div>
        <ul >     {  
        
        props.recipsDetail.diets.map((receta)=>{
         idkey=idkey+1
        return<li key={props.recipsDetail.id+idkey}>{receta.Name}</li>
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

const mapStateToProps=(states)=>{
    return{
        recipsDetail:states.recipsDetail
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        getDetail:(id)=>dispatch(getDetail(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (RecipDetail);