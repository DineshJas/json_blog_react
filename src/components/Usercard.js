import React, { Component } from 'react';

class Usercard extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container author-card">
                <h2>Author Details</h2>
                <br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>Name :</h3>
                            <h3 className="user-name">{this.props.user.name}</h3>
                        </div>
                        <div className="col-sm-3">
                            <h3>Username :</h3>
                            <p className="user-detail">{this.props.user.username}</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Email :</h3>
                            <p className="user-detail">{this.props.user.email}</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Website :</h3>
                            <p className="user-detail">{this.props.user.website}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>Company Details :</h3>
                            <h3 className="user-name">{this.props.user.company.name}</h3>
                            <p className="user-account">{this.props.user.company.catchPhrase}</p>
                            <p className="user-account">{this.props.user.company.bs}</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Phone :</h3>
                            <p className="user-detail">{this.props.user.phone}</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Address:</h3>
                            <p className="user-account">
                             {this.props.user.address.suite}, {this.props.user.address.street}
                            </p>
                            <p className="user-account">
                             {this.props.user.address.city}-({this.props.user.address.zipcode})
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h3>User Id: </h3>
                            <p className="user-detail">{this.props.user.id}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

 
export default Usercard;