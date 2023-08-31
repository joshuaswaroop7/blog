// import { useState } from 'react';
// import './App.css';
// import {useEffect} from 'react';

// function App1(){
//     const [data, setData] = useState([]);
//     const [name,  setName] = useState('')
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [id, setId] = useState(null)
//    useEffect(()=>{
//    getApi();
//    }, [])


//    function getApi(){
//     fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
//         result.json().then((resp)=>{
//             //console.log('result', resp)
//             setData(resp)
//             // setName(resp[0].name)
//             // setUsername(resp[0].username)
//             // setEmail(resp[0].email)
//         })
//     })
//    }

//    function deletePost(id){
//     //alert(id)
//     //fetch('https://jsonplaceholder.typicode.com/users/${id}')

//     fetch('https://jsonplaceholder.typicode.com/users/'+id,{
//     method : 'DELETE' 
//    }).then((result1)=>{
//     result1.json().then((resp1)=>{
//         console.log(resp1)
//         getApi()
//     })
//    })
//    }

//    function selectUser(id){
//     console.warn(data[id-1])
//     let itemx = data[id-1]
//             setName(itemx.name)
//             setUsername(itemx.username)
//             setEmail(itemx.email)
//             setId(itemx.id)
//    }

//    function updateUser(){
//     let datas= {name, username, email,  id}

//     fetch('https://jsonplaceholder.typicode.com/users/'+id,{
//         method: 'PUT',
//         header: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(datas)
        
//     }).then((res)=>{
//         res.json().then((resps)=>{
//             console.log(resps)
//             getApi()
//         })
        
//     })
    
//    }
//     return(
//         <div className='App'>
//             <h1>Get Api method</h1>
//             <table border= '1'>
//                <tbody>
//                <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Email</th>
//                     <th>Operations</th>
                    
//                 </tr>

//                 {
//                     data.map((item, i)=>
//                         <tr key={i}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.username}</td>
//                             <td>{item.email}</td>
                              
//                               <td><button onClick={()=>deletePost(item.id)}>Delete</button></td>
//                               <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
//                         </tr>
//                     )
//                 }
//                </tbody>
//             </table>

//             <div>
//                Name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
//                Username: <input type='text'value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br>
//                Email: <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
//                <button onClick={updateUser}>Update User</button>
//             </div>
//         </div>
//     )
// } 

// export default App1;



















// function App1(){

//     const [name, setName] = useState("");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");

//     function saveUpdate(){
//     console.warn({name, username, email})

//     let data = {name, username, email}

//     fetch('https://jsonplaceholder.typicode.com/users',{
//         method: 'POST',
//         headers:{
//             'Accept' : 'application/json',
//             'Content-type' : 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then((result)=>{
//         //console.warn('result', result)
//        result.json().then((resp)=>{
//         console.log('resp', resp)
//        })
//     })
//     }

//     return(
//         <div>
//             <h1>Post Api Example</h1>
//             Name:    <input type='text' value ={name} onChange={(e)=>{setName(e.target.value)}} name='name' /><br></br>
//         Username:    <input type='text' value= {username} onChange={(e)=>{setUsername(e.target.value)}}  name='username' /><br></br>
//            Email:    <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}  name='email' /><br></br>
//            <button onClick={saveUpdate}>Save Update</button>
//         </div>
//     )
// }

// export default App1;












// function App1(){
//     const [data, setData] = useState([])
//    useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
//         result.json().then((resp)=>{
//             console.log('result', resp)
//             setData(resp)
//         })
//     })
//    }, [])
//    console.warn(data)
//     return(
//         <div className='App'>
//             <h1>Get Api method</h1>
//             <table border= '1'>
//                <tbody>
//                <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Email</th>
//                 </tr>

//                 {
//                     data.map((items, i)=>
//                         <tr key=id>
//                             <td>{items.id}</td>
//                             <td>{items.name}</td>
//                             <td>{items.username}</td>
//                             <td>{items.email}</td>
//                               <td>{items.email}</td>
//                         </tr>
//                     )
//                 }
//                </tbody>
//             </table>
//         </div>
//     )
// } 

//export default App1;