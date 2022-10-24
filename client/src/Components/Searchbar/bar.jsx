import React, {useEffect,useState } from "react";
import { connect } from "react-redux";
import ListRecipes from "../Recipes/recipes";
import Pagination from "../Pagination/Pagination";
import { getRecipes } from "../../Actions";
import Select from "react-select"
import { NavLink } from "react-router-dom";
import styles from "./bar.module.css"


function Buscador(props) {


  const [state,setState] = useState ({
    recipe: ""
  })
  const [ordenarAlfa,setOrdenarAlfa]= useState("ninguno") 
  const [filtradoRecipes,setFiltradoRecipes]=useState("ninguno")
  const [healtScore,setOrdenarHealtScore]=useState("ninguno")

  ////states pagination
const [loading,setLoading]= useState(true)
const [currentPage,setCurrentPage]=useState(1);
const [recipePerPage]=useState(10)  
 ////////////////////////////////////////////
  const defaultRecipes =async ()=>{ 
     props.getRecipes("")
     
  }

  useEffect(()=>{
    defaultRecipes()
    setTimeout(function(){
      setLoading(false);
  }, 3000);
    
  },[])

 const handleChange=(event)=> {
    setState({ recipe: event.target.value });
  }
 const handleSubmit=(event)=> {
    event.preventDefault();
    setLoading(true);
     props.getRecipes(state.recipe)
     setTimeout(function(){
      setLoading(false);
  }, 3000);
   
  }
    const { recipe } = state;



/////////////////////////////////////////Filtrado/////////////////////////////////////
  ////variables para el filtrado 
  let recipsFilter =[]
  let vars=false;
   /////filtrar por letra
   const handleChangeAZ=(event)=> {
    setOrdenarHealtScore("ninguno")
    setOrdenarAlfa(event.value);
    setCurrentPage(1)
  }



   const ordenarAZ =(a, b)=> {
    if (a.title.toLowerCase()> b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase()< b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  const ordenarZA =(a, b)=> {
    if (b.title.toLowerCase()> a.title.toLowerCase()) {
      return 1;
    }
    if (b.title.toLowerCase()< a.title.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  if(ordenarAlfa==="a-z"){
      props.recips.sort( ordenarAZ);
  }

  if(ordenarAlfa==="z-a"){
      props.recips.sort( ordenarZA);
  }


//
///////////////////////filtrado por healtScore/////////////
const handleChangehealt=(event)=> {
  setOrdenarAlfa("ninguno")
  setOrdenarHealtScore(event.value);
  setCurrentPage(1)
  
}

if(healtScore==="0-100"){
    props.recips.sort((a,b)=> a.healthScore-b.healthScore);
}

if(healtScore==="100-0"){
  props.recips.sort((a,b)=> b.healthScore-a.healthScore);
}
//
//////////////Filtrado por dietas///////////////
 const filtrar = (dieta,id)=>{
     return recipsFilter= props.recips.filter((i)=>{

      for (let value of i["diets"]){
        if(value.ID===id)return true      
    }

      if(i["diets"].includes(dieta)){
        return true;
      }
      return false
         })
      }
 const handleChangeDiet=(event)=>{
      setFiltradoRecipes(event.value)
      setCurrentPage(1)

    }

//

if(!vars){
  recipsFilter = props.recips
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////PAGINACION///////////////////////////////


//Change page
const paginate = (pageNumber)=> setCurrentPage(pageNumber);



const indexOfLastRecipe = currentPage * recipePerPage;
const indexOfFirsRecipe = indexOfLastRecipe - recipePerPage;

////////////////control de filtrado////////////////
let currentRecipe =()=>{
  if (filtradoRecipes==="ninguno"){
    try {
      return recipsFilter.slice(indexOfFirsRecipe,indexOfLastRecipe)
    } catch (error) {
      throw (error.message)
    }
    
  }else if(filtradoRecipes!=="ninguno"){
        switch (filtradoRecipes) {
        case "Gluten free":
         return filtrar("gluten free",1).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Ketogenic":
         return filtrar("ketogenic",2).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Vegetarian"://{/*lacto ovo vegetarian*/}
         return filtrar("lacto ovo vegetarian",3).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Lacto Vegetarian":
         return filtrar("lacto ovo vegetarian",4).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Ovo Vegetarian":
         return filtrar("lacto ovo vegetarian",5).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Vegan":
         return filtrar("vegan",6).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Pescatarian":
         return filtrar("pescatarian",7).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Paleolithic":
         return filtrar("paleolithic",8).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Primal":
         return filtrar("primal",9).slice(indexOfFirsRecipe,indexOfLastRecipe)
        case"Low FodMap"://{/*Fodmap friendl*/}
         return filtrar("fodmap friendly",10).slice(indexOfFirsRecipe,indexOfLastRecipe)
        default:
          break;
      }
  }
} 
console.log(currentRecipe());

//////////////////////////////////////////////////////////////////////////////////////////////
const options = [
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];
const options2 = [
  { value: "0-100", label: "0-100" },
  { value: "100-0", label: "100-0" },
];
const options3 = [
  { value: "ninguno", label: "None" },
  { value: "Gluten free", label: "Gluten free" },
  { value: "Ketogenic", label: "Ketogeni" },
  { value: "Vegetarian", label: "Vegetarian" },
  { value: "Lacto Vegetarian", label: "Lacto Vegetarian" },
  { value: "Ovo Vegetarian", label: "Ovo Vegetarian" },
  { value: "Vegan", label: "Vegan" },
  { value: "Pescatarian", label: "Pescatarian" },
  { value: "Paleolithic", label: "Paleolithic" },
  { value: "Primal", label: "Primal" },
  { value: "Low FodMap", label: "Low FodMap" },
];

      return (
     
        <div className={styles.content}>
          <div className={styles.titlecont}>
          <h2 className={styles.title} >The World Of Flavor</h2>
          </div>
          
          {/* Buscar receta */}
          <form className={styles.form2}onSubmit={(e) => handleSubmit(e)} >
            <div>
              <label className={styles.labelsearch} htmlFor="recipe">Search Recipe </label>
              <input
              className={styles.input1}
                type="text"
                id="recipe"
                autoComplete="off"
                value={recipe}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className={styles.botonsumit}  type="submit">submit</button>
          </form>


          {/* Form Filtrado */}
        <form className={styles.form1}>

        <Select className={styles.filter} onChange={(ev)=>handleChangeAZ(ev)} options={options} value={null} placeholder="Sort Alphabetically"/>

        <Select className={styles.filter} onChange={(ev)=>handleChangehealt(ev)} options={options2} value={null} placeholder="Sort By Health Score"/>
        
   
        <Select className={styles.filterbig} onChange={(ev)=>handleChangeDiet(ev)} options={options3} placeholder="Sort By diet"/>
        <div className={styles.createcontend}>
        <NavLink className={styles.create} to={`/newrecipe`}><label>Create Recipe</label></NavLink>
        </div>
        

         </form>
          {/* Form Filtrado end */}
        <div className={styles.contentrecips}>
          <div className={styles.recips}>
          <ListRecipes
            loading={loading}
            currentRecipe={currentRecipe()}
            />
          </div>
        </div>
       
       
        <div className={styles.contentpagination}>
          <div className={styles.pagination}>
        <Pagination
          recipePerPage={recipePerPage}
          totalRecipes={recipsFilter.length}
          paginate = {paginate}
          />
          </div>
        </div>
      
    

        </div>
      );
}


const mapStateToProps=(state)=>{
    return{
        recips:state.recips,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getRecipes:(recipe)=>dispatch(getRecipes(recipe)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Buscador)



