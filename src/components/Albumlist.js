import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getAlbum} from '../actions/postAction';
import Header from './Header';

class Albumlist extends Component {
    state = { 
        userid:''
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({userid:nextProps.match?nextProps.match.params.id:this.props.id})
        this.props.getAlbum(this.state.userid)
    }
    
    componentDidMount(){
        this.setState({userid:this.props.match?this.props.match.params.id:this.props.id})
        this.props.getAlbum(this.state.userid)
    }

    render() { 
        // console.log(this.props.match.params)
        console.log(this.props.albumList)
        return ( 
            <React.Fragment>
                {this.props.showHeader ? '' : <Header />}
                {this.props.albumList.length >= 0 && this.props.albumList.map(element =>     
                    <div className="album-card" key={element.id}>
                        <h4 className="author-name">Title :- {element.title}</h4>
                        <Link className="author-link1" 
                         to={`/album/${element.userId}/${element.id}`}>
                            View Photos
                        </Link>
                    </div>
                )}
            </React.Fragment>
         );
    }
}

const mapStateToProps = state =>{
    return{
        albumList: state.postReducer.albumList
    }
}
 
export default connect(mapStateToProps,{getAlbum})(Albumlist);