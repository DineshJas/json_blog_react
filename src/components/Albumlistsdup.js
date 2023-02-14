// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

// import {getAlbum} from '../actions/postAction'
// import Header from './Header';

// class Albumlist extends Component {
//     state = { 
//         userId:this.props.match.params.id
//      }
    
//     componentDidMount(){
//         this.props.getAlbum(this.state.userId)
//     }

//     render() { 
//         return ( 
//             <React.Fragment>
//                 <Header/>
//                 {this.props.albumList.length >= 0 && this.props.albumList.map(element =>     
//                     <div className="album-card" key={element.id}>
//                         <h4 className="author-name">Title :- {element.title}</h4>
//                         <Link className="author-link1" 
//                          to={`/album/${element.userId}/${element.id}`}>
//                             View Photos
//                         </Link>
//                     </div>
//                 )}
//             </React.Fragment>
//          );
//     }
// }

// const mapStateToProps = state =>{
//     return{
//         albumList: state.postReducer.albumList
//     }
// }
 
// export default connect(mapStateToProps,{getAlbum})(Albumlist);


//*****************************************************


// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

// class Albumlist extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <React.Fragment>
//                 {this.props.list.length >= 0 && this.props.list.map(element =>     
//                     <div className="album-card" key={element.id}>
//                         <h4 className="author-name">Title :- {element.title}</h4>
//                         <Link className="author-link1" 
//                          to={`/album/${element.userId}/${element.id}`}>
//                             View Photos
//                         </Link>
//                     </div>
//                 )}
//             </React.Fragment>
//          );
//     }
// }
 
// export default Albumlist;


//*********************************************************** */


// import React, { Component } from 'react';
// import {connect} from 'react-redux';

// import {selectUser,getTodo} from '../actions/userAction';
// import {userPost,getAlbum} from '../actions/postAction';
// import Usercard from './Usercard';
// import Postcard from './Postcard';
// import Todocard from './Todocard';
// import Albumlist from './Albumlist';
// import Header from './Header';

// class Userdetails extends Component {
//     state = { 
//         userId:this.props.match.params.id
//      }

//     componentDidMount(){
//         this.props.selectUser(this.state.userId)
//         this.props.userPost(this.state.userId)
//         this.props.getTodo(this.state.userId)
//         this.props.getAlbum(this.state.userId)
//     }

//     render() { 
//         return ( 
//             <React.Fragment>
//                 <Header/>
//                 {this.props.selectedUser.length >= 0 && 
//                     this.props.selectedUser.map(element => 
//                         <Usercard user={element} key={element.id} />
//                 )}
//                 <h2 className="user-title">Author Post List : </h2>
//                 {this.props.selectedPost.length >= 0 && 
//                     this.props.selectedPost.map(post => 
//                         <Postcard post={post} key={post.id} removebtn={false} />)
//                 }

//                 <h2 className="user-title">Author ToDo List : </h2>
//                 <Todocard todo={this.props.todoData} />

//                 <h2 className="user-title">Author albums</h2>
//                 <Albumlist list={this.props.albumList} />

//             </React.Fragment>
//          );
//     }
// }

// const mapStateToProps = state => {
//     return{
//         selectedUser: state.userReducer.selectedUser,
//         selectedPost: state.postReducer.selectedPost,
//         todoData: state.userReducer.todoData,
//         albumList: state.postReducer.albumList
//     }
// }
 
// export default connect(mapStateToProps,{selectUser,userPost,getTodo,getAlbum})(Userdetails);