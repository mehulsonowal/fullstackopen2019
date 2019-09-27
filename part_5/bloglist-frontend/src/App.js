import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Blog from './components/Blog';
import login from './services/blogs';
import { set } from 'mongoose';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [blogs, setBlogs] = useState([
    {
      title: 'test 1',
      author: "mehul"
    },
    {
      title: 'test 2',
      author: "lucy"
    },
  ])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleUsernameChange = (e) => { setUsername(e.target.value) }
  const handlePasswordChange = (e) => { setPassword(e.target.value) }

  // useEffect(() => {
  //   async function getBlogs() {
  //     const blogs = await login.getAll()
  //     setBlogs(blogs)
  //   }
  //   getBlogs()
  // }, [])

  // useEffect(() => {
  //   const loggedUser = window.localStorage.getItem('loggedUser')
  //   if(loggedUser) {
  //     const user = JSON.parse(loggedUser)
  //     setUser(user)
  //     login.createToken(user.token)
  //   }
  // }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setUser({
      username,
      password
    })

    // const credentials = {
    //   username,
    //   password
    // }

    // try {
    //   const loginUser = await login.loginUser(credentials)

    //   window.localStorage.setItem(
    //     'loggedUser', JSON.stringify(user)
    //   )
    //   login.createToken(loginUser.token)
    //   setUser(loginUser)
    //   setUsername('')
    //   setPassword('')
    // }
    // catch (e) {

    // }
  }

  const displayLoginForm = () => <LoginForm username={username} password={password} handleUserChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleLogin={handleLogin} />

  const displayBlogs = () => {
    return (
      <div>
        <h1>
          blogs
        </h1>
        <p>{user.username} logged in</p>
        <div>
          {blogs.map((blog) => (
            <Blog key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {!user && displayLoginForm()}
      {user && displayBlogs()}
    </div>
  );
}

export default App;
