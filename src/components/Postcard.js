import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {deletePost} from '../actions/postAction'
import User from './User';

class Postcard extends Component {
    state = {  }

    removePost = (postId) => {
        if(window.confirm("Do you want delete this post ?")){
            this.props.deletePost(postId)
        }
    }

    render() { 
        // console.log(this.props)
        return ( 
            <React.Fragment>
                <div className="card post-card">
                    <div className="card-body">
                        <div className="d-flex justify-content-end">
                            <div style={{display: this.props.removebtn ? 'block' : 'none'}}>
                                <button className="btn btn-primary" onClick={()=>this.removePost(this.props.post.id)}>
                                    <i className="fas fa-trash-alt"/>  delete
                                </button>
                            </div>
                        </div>
                        <Link to={`/postdetail/${this.props.post.id}`}>
                            <h3 className="card-title">{this.props.post.title}</h3>
                        </Link>
                        <p className="card-text">{this.props.post.body}</p>
                        <User uid={this.props.post.userId} />
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default connect(null,{deletePost})(Postcard);