import React from 'react'
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  const path = '/dialogs/' // + props.id не могу понять как определить path в NavLink
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

const Message = (props) => {
  return <div className={styles.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Natasha' },
    { id: 2, name: 'Varvara' },
    { id: 3, name: 'Mama' },
    { id: 4, name: 'Nobody' },
  ]
  let messages = [
    { id: 1, message: 'Have a nice day' },
    { id: 2, message: 'hello, how are you?' },
    { id: 3, message: 'Can I help you?' },
    { id: 4, message: 'Go go go!' },
  ]

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messagesElements = messages.map((m) => <Message message={m.message} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}

        {/* <div className={styles.dialog}>
          <NavLink
            to={'/dialogs/1'}
            className={(navData) =>
              navData.isActive ? styles.active : styles.dialog
            }
          >
            Natasha
          </NavLink>
        </div>

        <div className={styles.dialog}>
          <NavLink
            to={'/dialogs/2'}
            className={(navData) =>
              navData.isActive ? styles.active : styles.dialog
            }
          >
            Varvara
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink
            to={'/dialogs/3'}
            className={(navData) =>
              navData.isActive ? styles.active : styles.dialog
            }
          >
            Mama
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink
            to={'/dialogs/4'}
            className={(navData) =>
              navData.isActive ? styles.active : styles.dialog
            }
          >
            Misha
          </NavLink>
        </div> */}
      </div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
