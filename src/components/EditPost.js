import axios from 'axios'
import React, { Component } from 'react'
import withRouter from './withRouter'

class EditPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost() {
    axios.get(`http://localhost:8000/post/${this.props.params.id}`).then(res => {
      if (res.data.success) {
        this.setState({
          post: res.data.currentPost
        })
      }
    })
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

    const newPost = this.state

    axios.put(`http://localhost:8000/post/update/${this.props.params.id}`, newPost).then(res=>{
      if(res.data.success){
        console.log('Updated succesfully')
      }
    })
  }

  render() {
    return (
      <form>
        <h1>Edit your post</h1>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input type="text" className="form-control" id="topic" placeholder="Enter topic" defaultValue={this.state.post.topic} onChange={this.handleInputChange} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="category">Post Category</label>
          <input type="text" className="form-control" id="category" placeholder="Category" defaultValue={this.state.post.postCategory} onChange={this.handleInputChange} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description" defaultValue={this.state.post.description} onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3" onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp;Edit</button>
      </form>
    )
  }
}

export default withRouter(EditPost)