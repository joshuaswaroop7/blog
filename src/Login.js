// import React, { useState } from 'react'

// function Login(){


//     const [user, setUser] = useState("");
//     const [password, setPassword] = useState("")
//     const [userErr, setUserErr] = useState(false)
//     const [passwordErr, setPasswordErr] =useState(false)


//     function loginHandle(e){
//         if(user.length<3 || password.length<3){
//             alert("Invalid Username or Passsword");
//         }else{
//             alert("LoggedIn Successfully")
//         }
//         e.preventDefault();
//     }

//     function userHandle(e){
//         let item = e.target.value;
//         if(item.length<3){
//             setUserErr(true);
//         }else{
//             setUserErr(false);
//         }
//         setUser(item);
//     }

//     function passwordHandle(e){
//         let item = e.target.value;
//         if(item.length<3){
//             setPasswordErr(true);
//         }else{
//             setPasswordErr(false);
//         }
//             setPassword(item);

//     }
//     return(
//         <div>
//         <h1>Student Login!!</h1>
//         <form onSubmit={loginHandle}>
//             <input type="text" placeholder="Enter name" onChange ={userHandle}/>
//             <br></br>
//             {userErr?<span>Invalid Username</span>:""}
//             <br></br>
//             <input type="text" placeholder="Enter password" onChange={passwordHandle}/>
//             <br></br>
//             {passwordErr?<span>Invalid Password</span>:""}
//             <br></br>
//             <button type ="submit">Login</button>
//         </form>
//         </div>
//     )
// }

// export default Login;