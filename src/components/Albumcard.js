import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getPhotos} from '../actions/postAction'
import Photocard from './Photocard';
import Header from './Header';

class Albumcard extends Component {
    state = { 
        albumId:this.props.match.params.id,
        userId:this.props.match.params.userid
     };

    componentDidMount(){
        this.props.getPhotos(this.state.albumId)
    };

    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <Photocard photo={this.props.photoList} userId={this.state.userId} />
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    return{
        photoList: state.postReducer.photoList
    }
}
 
export default connect(mapStateToProps,{getPhotos})(Albumcard);