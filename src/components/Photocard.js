import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button,Modal, ModalHeader, ModalBody} from 'reactstrap';

import { getUsers } from '../actions/userAction';
import { addPhoto } from '../actions/postAction';

class Photocard extends Component {
    state = {
        modal: false,
        title:'',
        image:'',
        url:'',
        isError:false,
        statusCode:null
    }

    componentDidMount(){
        this.props.getUsers()
    }

    toggle = () =>{
        this.setState({modal: !this.state.modal,title:'',url:'',statusCode:null})
    }

    handleUpload = (event) =>{
        event.preventDefault()
        let files= event.target.files[0]
        let reader = new FileReader()
			console.log('file ', files)
		reader.readAsDataURL(files)
		reader.onload = () => {
			let strImage = reader.result
			this.setState({ image: strImage,url:files.name.split('.')[0] })
			// this.setState({ image: reader.result })
		}
		reader.onerror = function(error) {
			console.log('Error:in base64 ', error)
		}
    }

    addPhoto = () => {
        if(this.state.title===''||this.state.image===''||this.state.url===''){
            this.setState({isError:true})
        }
        else{
            let photo = {
                albumId:this.props.photo[0].albumId,
                title:this.state.title,
                url:this.state.url,
                thumbnailUrl:this.state.image
            }
            this.props.addPhoto(photo,(rescode)=>{this.setState({statusCode:rescode},()=>{
                if(this.state.statusCode===201){
                    this.setState({title:'',url:'',image:''})
                }
            })})
        }
    }


    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="user-title-album d-flex justify-content-between">
                        {this.props.users.length >= 0 &&
                            this.props.users.map(user => 
                            <h3 key={user.id} >
                                {`${user.id}` === this.props.userId ? `${user.name}'s Album` : ''}
                            </h3>
                        )}
                    <button className="btn btn-primary photo-btn" onClick={()=>this.toggle()}>Add Photo</button>
                    </div>
                    <div className="row">
                        {this.props.photo.length >= 0 && 
                            this.props.photo.map(element =>
                                <div className="col-sm-2 album_photos" key={element.id}>
                                    <a href={element.url} target="_blank" rel="noopener noreferrer">
                                        <img src={element.thumbnailUrl} alt="thumbnail" width={160} height={160} />
                                        <p>{element.title}</p>
                                    </a>
                                </div>
                            )}
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Add Todo</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label htmlFor="photo-title">Title</label>
                        <input
                         type="text" 
                         className="form-control" 
                         id="photo-title" 
                         placeholder="Enter title"
                         value={this.state.title}
                         onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        {this.state.isError && this.state.title===''?<p className='text-danger'>Please enter title</p>:''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Please select your photo</label>
                        <input
                         type="file" 
                         className="form-control-file" 
                         id="photo"
                        //  value={this.state.image}
                         onChange={(event)=>{this.handleUpload(event)}}
                        />
                        {this.state.isError && this.state.image===''?<p className='text-danger'>Please select some image</p>:''}
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Button color="primary" onClick={this.addPhoto}>Add</Button>
                        <div>
                            <p className="text-success positive" style={{display:this.state.statusCode===201?'block':'none'}}>
                                Success !!!
                            </p>
                        </div>
                        <Button color="danger" onClick={this.toggle}>Close</Button>
                    </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    return{
        users: state.userReducer.usersDetail
    }
}
 
export default connect(mapStateToProps,{getUsers,addPhoto})(Photocard);