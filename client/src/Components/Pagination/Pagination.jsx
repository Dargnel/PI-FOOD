import React, { useState } from "react";
import styles from "./Pagination.module.css"

 const Pagination = ({recipePerPage,totalRecipes,paginate})=>{
    const pageNumbers =[]
    const [number,setNumber]= useState(1);
    for (let i = 1; i <= Math.ceil(totalRecipes/recipePerPage); i++) {
        pageNumbers.push(i);
        
    }

    const handleOnclick=(number)=>{
        paginate(number)
        setNumber(number)
    }
   
    return(
        
        <div className={styles.contnav}>
        
        <ul className={styles.ullista}>
        {number>1&&  <li className={styles.lilista}>
                <a onClick={()=>handleOnclick(number-1)} href="/recipes/!#" className="page-link">
                    Prev
                </a>
        </li>}
          
            {pageNumbers.map(number=>{
               return(
                <li key={number} className={styles.lilista}>
                    <a onClick={()=>handleOnclick(number)} href="/recipes/!#" className="page-link">
                        {number}
                    </a>
                </li>
               ) 
            })}

        {number<pageNumbers.length&&  <li className={styles.lilista}>
                <a onClick={()=>handleOnclick(number+1)} href="/recipes/!#" className="page-link">
                    Next
                </a>
        </li>}  
            
        </ul>
        </div>
      
    )
}

export default Pagination;