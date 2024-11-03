import React, { useContext, useEffect,useState } from 'react'
import menuItems from './config.json'
import Link from 'next/link'
import styles from './Menu.module.css'
import Image from 'next/image'
import { AppCookies } from '@/services/cookies'
import { appCtx } from '@/context/appCtx'

export const Menu = () => {
  
  const [isMobileView,setIsMobileView]=useState(document.body.offsetWidth<700)
  const [left,setLeft]=useState('-80vw')
  const {state,dispatch}=useContext(appCtx)
  const handleResize=()=>{
    window.addEventListener('resize',()=>{
      setIsMobileView(document.body.offsetWidth<700)
    })
  }
  
  useEffect(()=>{

    handleResize()

  },[])

  const handleMobileMenuBtnClick=()=>{
    setLeft(left==='0'?'-80vw' : '0')
  }

  const handleMenuItemClick=(id:string)=>{

    if(id==='logout'){
      dispatch({
          type: "MODAL",
          payload: {
            isShowModal: true,
            modalAction:fnLogout
          }
        })
    }

    if(isMobileView){
      setLeft('-80vw')
    }
  }
  
  const fnLogout = ()=>{
    AppCookies.deleteAllCookies();
    dispatch({
      type:"LOGIN",
      payload: false
    })
  }

  return (<>
    {isMobileView && <Image onClick={handleMobileMenuBtnClick} className={styles.mobileMenuIcon} src="/mobileMenu.jpg" width={40} height={30} alt="menu"/> }
    <ul style={{left}} className={isMobileView ? styles.mobileMenu: styles.menu}>
    
      {
        menuItems?.map?.(({id,name,path}:any)=>{
              return <li onClick={()=>{
                
                handleMenuItemClick(id)


               } }><Link id={id} href={path}>{name}</Link></li>
        })
      }
    </ul>
    </>
  )
}
