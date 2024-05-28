import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/id/1394834484/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D1%8B-%D1%81-%D0%B2%D0%BE%D1%80%D0%BE%D0%B1%D1%8C%D0%B5%D0%B2%D1%8B%D1%85-%D0%B3%D0%BE%D1%80-%D0%B2-%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B5.jpg?s=1024x1024&w=is&k=20&c=8GXreHWeFMlirfD1yI8omoHgoggwEsaBpsn3JAHlfJA="
        alt=""
      />
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
