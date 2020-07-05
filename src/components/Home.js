import React, { Component } from 'react';
import Hoc from './higherordercomponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.jpg';

class Home extends Component{
    state ={
        publications : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            
            this.setState({
                publications:res.data.slice(0,19)
            })
            console.log(this.state)
        })
        
    }

    render(){
        const {publications} = this.state;
        const publicationslist = publications.length? (
            publications.map( publication =>{
                return(
                    <div className="card" key={publication.id}>
                        <div className="card-content">
                            <img src={Pokeball}></img>
                            <Link to={'/' + publication.id}>
                                <span className="card-title" >{publication.title}</span>
                                
                            </Link>
                            <p>{publication.body}</p>
                        </div>

                    </div>
                )
            })
        ):(
            <div>No Posts Yet</div>
        )
    return(
        <div className="container">
            {publicationslist}            

        </div>
    )
    }

}

export default Hoc( Home);