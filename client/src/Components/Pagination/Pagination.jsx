import React from "react";
import styles from "./Pagination.module.css"
import { numberfun} from "../../Actions";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

 const Pagination = ({totalRecipes,paginate})=>{
    const pageNumbers =[]

    const dispatch = useDispatch()
    const statestart = useSelector(store=>store)
    
    
    for (let i = 1; i <= Math.ceil(totalRecipes/statestart.recipePerPage); i++) {
        pageNumbers.push(i);
        
    }

    const handleOnclick=(number)=>{
        dispatch(numberfun(number));
          paginate(number)
         
    }
   
    return(
        
        <div className={styles.contnav}>
        
        <ul className={styles.ullista}>
        {statestart.number>1&&  <li className={styles.lilista}>
                <NavLink onClick={()=>handleOnclick(statestart.number-1)} to={`/recipes/!#${statestart.number-1}`}className="page-link">
                    Prev
                </NavLink>
        </li>}
          
            {pageNumbers.map(number2=>{
               return(
                <li key={number2} className={styles.lilista}>
                    <a onClick={()=>handleOnclick(number2)} href={`/recipes/!#${statestart.number}`}className="page-link">
                        {number2}
                    </a>
                </li>
               ) 
            })}

        {statestart.number<pageNumbers.length&&  <li className={styles.lilista}>
                <NavLink onClick={()=> handleOnclick(statestart.number+1)} to={`/recipes/!#${statestart.number+1}`}   className="page-link">
                    Next
                </NavLink>
        </li>}  
            
        </ul>
        </div>
      
    )
}





export default  Pagination;