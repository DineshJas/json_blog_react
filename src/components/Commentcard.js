import React, { Component } from 'react';

class Commentcard extends Component {
    state = {  }
    render() { 
        // console.log(this.props.comments)
        return ( 
            <React.Fragment>
                <div className="card comment-card">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.comments.name}</h3>
                        <p className="card-text user-detail">{this.props.comments.body}</p>
                        <p className="card-text user-detail">Commented by-
                            <span className="user-name">{this.props.comments.email}</span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Commentcard;