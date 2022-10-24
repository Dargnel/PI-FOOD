import axios from "axios";
import React, { useState } from "react";
import styles from "./PostRecipe.module.css"
import Navbar from "../Navbar/Navbar";

const NewRecipe = (props)=>{
    const [diets,setDiets] = useState([]);
    const [title,setTitle] = useState("");
    const [resumPlate,setResumPlate] = useState("");
    const [stepBystep,setStepByStep] = useState({});
    const [sliceValue,setSliceValue]= useState(50);
    const [datarequiretitle,setDatarequiretitle] = useState(false);
    const [datarequireresum,setDatarequireresum] = useState(false);
    const [suces,setsuces]= useState(false);
    const [repeat,setRepeat]= useState(false)


    const handleChangebox = (event)=>{
        if(event.target.checked){
            const value= [...diets, parseInt(event.target.value)] //creamos arreglo
            setDiets(value) //agregamos arreglo nueno
            return
        }
        var indice = diets.indexOf(event.target.value); // obtenemos el indice
        diets.splice(indice, 1); // sacamos item  
    }
/////Capturamos Datos Del Formulario
    const handleChangeTilte = (event)=>{ 
        setTitle (event.target.value)
        
    }
    const handleChangeResumPlate = (event)=>{ 
        setResumPlate (event.target.value) 
        
    }

    const handleChangeStepBystep = (event)=>{ 
        let prop= event.target.name;
        let newarray = {...stepBystep, [prop]:event.target.value}
        setStepByStep (newarray) 
       
    }

    const handleChangeSlice =(event)=>{
        setSliceValue(parseInt(event.target.value));
    }

    const sendata= async()=>{
        await axios.post('http://localhost:3001/recipes',{
            diets:diets,
            title:title,
            resumPlate:resumPlate,
            healthScore:sliceValue,
            stepBystep:stepBystep
        })
        .then((response)=>{
            console.log(response.data)
            setsuces(true)
            setRepeat(false)
        }
        )
        .catch(() => {
            setRepeat(true)
            setsuces(false)
            return
        })

        
    }

    const handleSubmit =async(event)=>{
        event.preventDefault();
        setsuces(false)
        if(!title || !resumPlate){
            if(!title){
            setDatarequiretitle(true)
            }
            if(!resumPlate){
                setDatarequireresum(true)
            }
            return
        }
        await sendata();
        setDiets([])
        setResumPlate("")
        setSliceValue(50)
        setTitle("")
        setDatarequiretitle(false)
        setDatarequireresum(false)
        setStepByStep({})
        event.target.reset()
        
        
    }

    

    return(
        <div className={styles.contenform} >
            <div className={styles.home}>
                <Navbar/>
            </div>

        <form className={styles.formcontent} onSubmit={(ev)=>handleSubmit(ev)} >

    
        

            <div className={styles.campo}>
            <label className={styles.title}>title:</label>
            <input onChange={handleChangeTilte} name="title" type="text" className=""/>
            {datarequiretitle&&<label className={styles.require}>Required field</label>}
            </div>

            <div className={styles.titles}>
            <label className={styles.title}>Resum Plate:</label>
            {datarequireresum&&<label className={styles.require}>Required field</label>}
            </div>

            <div className={styles.campogrande}>
            <textarea onChange={handleChangeResumPlate} name="resumPlate" type="text" className={styles.areas}/>
            
            </div>
            
            <div className={styles.titlestep}>
                 <label >healthScore:</label>
            </div>


           <div className={styles.campogrande}>
          
            <input className={styles.slider} type="range"  min="0" max="100" onChange={(ev)=>handleChangeSlice(ev)}/>
            <label className={styles.num} htmlFor="">{sliceValue}</label>
           </div>
            
            
    
          

            <div className={styles.titlestep}>
            <label>step1:</label>
           </div>

           <div className={styles.contentsteps}>
                <textarea className={styles.areas}  onChange={handleChangeStepBystep} name="step1"  >
                </textarea>
            </div>
           
           
            <div className={styles.titlestep}>
            <label>step2:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas}  onChange={handleChangeStepBystep} name="step2"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step3:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas}  onChange={handleChangeStepBystep} name="step3"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step4:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas}  onChange={handleChangeStepBystep} name="step4"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step5:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea  className={styles.areas} onChange={handleChangeStepBystep} name="step5"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step6:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas}  onChange={handleChangeStepBystep} name="step6"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step7:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas} onChange={handleChangeStepBystep} name="step7"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step8:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas} onChange={handleChangeStepBystep} name="step8"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step9:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas} onChange={handleChangeStepBystep} name="step9"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>step10:</label>
           </div>
           <div className={styles.contentsteps}>
                <textarea className={styles.areas} onChange={handleChangeStepBystep} name="step10"  >
                </textarea>
            </div>
           
        
            <div className={styles.titlestep}>
            <label>Diets:</label>
           </div>


        <div className={styles.contentsdiets}>
        <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="1"/>
            <label > Gluten Free</label>
            </div>

            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="2"/>
            <label > Ketogenic</label>
            </div>

            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="3"/>
            <label > Vegetarian</label>
            </div>
            
            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="4"/>
            <label > Lacto-Vegetarian</label>
            </div>
            
            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="5"/>
            <label > Ovo-Vegetarian</label>
            </div>
            
            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="6"/>
            <label > Vegan</label>
            
            </div>
            
            <div className={styles.chusdiets}>  
            <input onChange={handleChangebox} type="checkbox" className="" value="7"/>
            <label >Pescetarian</label>
            </div>
            
            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="8"/>
            <label >Paleo</label>
                
            </div>
            
            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="9"/>
            <label >Primal</label>
            </div>
            
            <div className={styles.chusdiets}>
            <input onChange={handleChangebox} type="checkbox" className="" value="10"/>
            <label >Low FODMAP</label>
            </div>

        </div>
          
            
            
            <div className={styles.boton}>
            <input className={styles.botonsumit} onChange={handleChangebox} type="submit" value="Submit"></input>
            {datarequiretitle&&<label className={styles.require}>Required data is missing</label>}
            {datarequireresum&&<label className={styles.require}>Required data is missing</label>}
           </div>
            
            
        </form>
        <div className={styles.boton}>
        {suces && <span className={styles.suces}>Recipe created successfully</span>}
        {repeat && <span className={styles.require}>repeated recipe</span>}
        </div>
        
        </div>
    )
}


export default NewRecipe;