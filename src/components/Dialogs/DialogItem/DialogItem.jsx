import React from 'react'
import styles from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  const path = '/dialogs/'
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink
        to={path + props.id}
        className={(navData) =>
          navData.isActive ? styles.active : styles.dialog
        }
      >
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem
