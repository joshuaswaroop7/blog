// import React,{useEffect, useRef} from 'react'

// const User =(props)=>{

//     console.warn(props.data.name)
//     const {data} = props

//     return(
//         <div>
//             <h1>User Component</h1>
//             <h2>Name: {data.name}</h2>
//             <h2>Age: {data.age}</h2>
//         </div>
//     )
// }
// export default User;







// function User(props){
//     const lastVal = useRef();
//     useEffect(()=>{
//     lastVal.current = props.counter
//     })
//     const prevCounter = lastVal.current
//     return(
//         <div>
//             <h1>Current Value : {props.counter}</h1>
//             <h2>Previous value : {prevCounter}</h2>
//         </div>
//     )
// }

// export default User;


















//import React, {useEffect, useState , forwardRef} from 'react';
// import './App.css';


// import React,{forwardRef} from "react";

// function User(props, ref){

//     return(
//         <div>
//             <input type= 'text' ref = {ref}/>
//         </div>
//     )
// }

// export default forwardRef(User);











// import React,{Fragment} from "react";

// function User(props){

//     return(
//         <div>
//             <h1>{props.data}</h1>
//         </div>
//     )
// }

// export default User;













// function User(props){
     
    
//     const role = {designation :'Software Developer', Company: 'Algodomain'}

//     return(
//         <div>
//             <h1>User {props.names}</h1>
//             <button onClick={()=>props.data(role)}>Click</button>
//         </div>
//     )
// }

// export default User;












// function User(){

//     return(
//         <>
//             <td>Hello</td>
//             <td>Hello</td>
//         </>
//     )
// }

// export default User;












// function User(props){

//     function update(){
//         alert('Hello User')  1
//     }

//     return(
//         <div>
//         <span>{props.data.name }  </span>
//         <span>{props.data.email} </span>
//         <span>{props.data.mobile}</span>
//         <button onClick={update}>Hello</button>  1
//         {/* <button onClick={()=>{alert('Hello')}}>HII</button> */}  
//         <button onClick={props.fun}>Hello</button>  2
//         </div>
//     )
// }
// export default User;


















// function App(props){

//   useEffect(()=>{
//     console.warn("useEffect on count");
//   },[props.count]
//   )
//   useEffect(()=>{
//     console.warn("useEffect on data");
//   },[props.data]
//   )


//   return(
//     <div className="App">
//       <h1> Count Props :  {props.count}</h1>
//       <h1> Data Props : {props.data}</h1>
    
//     </div>
//   )
// }

// export default App;


































// function User(){
//     return(
//         <>
//         <h1>User Component</h1>
//         <h1>Hello</h1>
//         </>
//     )
// }

// export default User;
//if dont want to use export default then write the export infront of function User()
//and in App.js write import {User} from './User';