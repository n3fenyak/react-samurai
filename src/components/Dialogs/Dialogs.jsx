import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Natasha' },
    { id: 2, name: 'Barbara' },
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
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
