import React from 'react'
import styles from './AppForm.module.css'

export const AppForm = ({setShowForm,children}:any) => {
  return (<>
    <div className={styles.formMask}></div>

    <div>
    <div onClick={()=>setShowForm(false)} className={styles.close}>X</div>

    {children}
    </div>
 </> )
}
