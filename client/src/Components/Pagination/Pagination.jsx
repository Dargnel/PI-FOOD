import React, { useState } from "react";
import styles from "./Pagination.module.css"
import { NavLink } from "react-router-dom";

 const Pagination = ({recipePerPage,totalRecipes,paginate})=>{
    const pageNumbers =[]
    const [number,setNumber]= useState(1);
    for (let i = 1; i <= Math.ceil(totalRecipes/recipePerPage); i++) {
        pageNumbers.push(i);
        
    }

    const handleOnclick=(number)=>{
        setNumber(number)
          paginate(number)
         
    }
    console.log(number);
   
    return(
        
        <div className={styles.contnav}>
        
        <ul className={styles.ullista}>
        {number>1&&  <li className={styles.lilista}>
                <NavLink onClick={()=>handleOnclick(number-1)} to={`/recipes/!#${number-1}`}className="page-link">
                    Prev
                </NavLink>
        </li>}
          
            {pageNumbers.map(number2=>{
               return(
                <li key={number2} className={styles.lilista}>
                    <a onClick={()=>handleOnclick(number2)} href={`/recipes/!#${number}`}className="page-link">
                        {number2}
                    </a>
                </li>
               ) 
            })}

        {number<pageNumbers.length&&  <li className={styles.lilista}>
                <NavLink onClick={()=> handleOnclick(number+1)} to={`/recipes/!#${number+1}`}   className="page-link">
                    Next
                </NavLink>
        </li>}  
            
        </ul>
        </div>
      
    )
}

export default Pagination;