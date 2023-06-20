import React, { Component } from 'react'
import axios from 'axios'
import withRouter from './withRouter'

class PostDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    this.viewPost()
  }

  viewPost() {
    const id = this.props.params.id
    axios.get(`http://localhost:8000/post/${id}`).then(res => {
      if (res.data.success) {
        this.setState({
          post: res.data.currentPost
        })
      }
    })
  }

  render() {

    const {_id, topic, description, postCategory} = this.state.post

    return (
      <div className="card mt-3" style={{ width: '100%' }}>
        <div className="card-body" style={{textAlign: 'center'}}>
          <h5 className="card-title">{topic}</h5>
          <p className="card-text">{postCategory}</p>
          <p className="card-text">{description}</p>
          <a href={`/edit/${_id}`} className="btn btn-primary">Edit</a>
        </div>
      </div>
    )
  }
}

export default withRouter(PostDetails)