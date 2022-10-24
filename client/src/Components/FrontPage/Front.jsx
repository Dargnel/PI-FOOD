import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from './Front.module.css';



export default function FrontPage(props) {

  
  

  return (
    <div >
      <div className={styles.front}>
        
          <div className={styles.leftTex}>
              <p >The Art</p>
          </div>
          <div className={styles.rightTex}>
            <p >Of FOOD</p>
          </div>
          <div className={styles.buton}>
          
            <NavLink to={"/recipes/!#1"} className={styles.butonReal} >
            <p id={styles.line1}></p>
            <p id={styles.line3}></p>
              Let's Go To The Recipes</NavLink>
          </div>
       
      </div>
    </div>
    
  );
}
