import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import PostDetails from './components/PostDetails'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/add' element={<CreatePost />}></Route>
            <Route path='/edit/:id' element={<EditPost />}></Route>
            <Route path='/post/:id' element={<PostDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
