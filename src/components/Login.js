import React, { Component } from 'react';
import store from 'store';

class Login extends Component {
    state = { 
        email:'',
        password:'',
        isError:false,
     }

    handleSubmit = () => {
        if(this.state.email===''||this.state.password===''){
            this.setState({isError:true})
        }
        else{
            // console.log("clicked");
            store.set('userSession', this.state)
            this.props.history.push('/')
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"/>
                        <div className="col-sm-4">
                            <h3 className="title">Log IN</h3>
                            <form className="login-form">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email :</label>
                                    <input
                                     type="email" 
                                     className="form-control" 
                                     id="exampleInputEmail1" 
                                     value={this.state.email}
                                     placeholder="Enter email"
                                     onChange={(e) => {this.setState({email:e.target.value})}}
                                    />
                                    {this.state.isError && this.state.email === '' ? 
                                        <p className="text-danger">Please enter name</p> : '' }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                     type="password" 
                                     className="form-control" 
                                     id="exampleInputPassword1" 
                                     value={this.state.password}
                                     placeholder="Password"
                                     onChange={(event) => {this.setState({password:event.target.value})}}
                                    />    
                                    {this.state.isError && this.state.password === '' ?
                                        <p className="text-danger">Please enter password</p> : '' }
                                    <button
                                     type="button" 
                                     className="btn btn-primary login-btn" 
                                     onClick={()=>this.handleSubmit()}
                                    >
                                         Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4"/>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Login;