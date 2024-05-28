import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <textarea name="" id="" cols="20" rows="5"></textarea>
      <button>Add post</button>

      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="5" />
        <Post message="Great!" likesCount="21" />
      </div>
    </div>
  )
}

export default MyPosts
