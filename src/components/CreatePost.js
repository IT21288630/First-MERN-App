import axios from 'axios'
import React, { Component } from 'react'

export default class CreatePost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      topic: "",
      description: "",
      category: ""
    }
  }

  handleInputChange = e => {
    const { id, value } = e.target

    this.setState({
      ...this.state,
      [id]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { topic, description, category } = this.state

    const newPost = {
      topic: topic,
      description: description,
      postCategory: category
    }

    axios.post('http://localhost:8000/post/save', newPost).then(res => {
      
      if (res.data.success) {
        document.getElementById('topic').value=""
        document.getElementById('description').value=""
        document.getElementById('category').value=""
      }

    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <form>
        <h1>Add a post</h1>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input type="text" className="form-control" id="topic" placeholder="Enter topic" defaultValue={this.state.topic} onChange={this.handleInputChange} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="category">Post Category</label>
          <input type="text" className="form-control" id="category" placeholder="Category" defaultValue={this.state.category} onChange={this.handleInputChange} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description" defaultValue={this.state.description} onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3" onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp;Submit</button>
      </form>
    )
  }
}
