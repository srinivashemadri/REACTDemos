import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state ={
        post : null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res=>{

            this.setState({
                 post:res.data
            })
            console.log(res.data);
            
        })
    }
    render(){
        const post = this.state.post ? ( 
            <div className="container">
            <h4>{this.state.post.body}</h4>
            <h5>{this.state.post.title}</h5>
            </div>
        ) : (
            <div className="center">Post is loading..</div>
       
        )
        return(
            <div className="container">
                {post}

            </div>
        )
        
    }

}

export default Post