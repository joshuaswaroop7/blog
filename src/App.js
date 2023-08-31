//import logo from './logo.svg';
//import { isCompositeComponent } from 'react-dom/test-utils';
import "./App.css";
import User from "./User";
//import CUser from './CUser'
import React, {
  PureComponent,
  useState,
  useMemo,
  Component,
  createRef,
  useRef,
} from "react";
//import { useState } from 'react';  used for function based component
//import Student  from "./Student"
//import React, {useEffect, useState} from 'react';
//import CStudent from "./CStudents";
//import Profile from "./Profile";
//import Login from "./Login";
//import Members from './Members';
//import NewMembers from './NewMembers';
//import "./style.css";
//import style from './custom.module.css'
//import Button from 'react-bootstrap/Button';
//import {Table, Button , Alert} from 'react-bootstrap';
//import ExamplePC from './ExamplePC';
//import React,{useRef} from 'react';
//import Counter from './Counter';
//import HOCBlue from './HOCBlue';
// import {CommonContext} from './components/CommonContext'
// import Main from './components/Main'
// import UpdateButton from './components/UpdateButton'
// import Header from './components/Header'
// import Footer from './components/Footer'
//-------redux--------------------------
//import Home from './Components2/Home'  usually we do directly but in redux we do it through containers
import HomeContainer from "./Containers/HomeContainer";
import HeaderContainer from "./Containers/HeaderContainer";
//

function App() {
  return (
    <div className="App">
      <h1>My Application</h1>
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;

// function App(){

//     return(
//         <div className='App'>
//             <h1>App Component</h1>
//             <User data={{name:'Joshua Swaroop', age:24}}/>
//         </div>
//     )
// }
// export default App;

// class App extends Component{
//     constructor(){
//         super()

//         this.updateColor = (color)=>{
//             this.setState({
//                 color: color
//             })
//         }

//         this.state = {
//             color : 'green',
//             updateColor: this.updateColor
//         }

//     }

//     // updateColor = (color) => {
//     //     this.setState({
//     //         color: color
//     //     })
//     // }

//     render(){
//         return(

//             <CommonContext.Provider value={this.state}>

//                 <Header />
//                 <CommonContext.Consumer >
//                 {
//                     ({color})=>(
//                         <h1 style={{backgroundColor: color}}><h1>Example for Context API</h1></h1>
//                     )
//                 }
//             </CommonContext.Consumer>

//                 <Main />
//                 <UpdateButton />

//                 <Footer />
//             </CommonContext.Provider>
//         )
//     }
// }

// export default App;

// function App(){

//   return(
//     <div className='App'>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default App;

// function App(){

//   return(
//     <div className='App'>
//       <h1>High Order Component</h1>
//       {/* <HOCRed cmp={Counter}/>
//       <HOCGreen cmp={Counter}/> */}
//       <HOCBlue cmp={Counter}/>
//     </div>
//   )
// }
// export default App;

// function HOCRed(props){

//   return(
//     <h2 style={{backgroundColor: 'red', width:180}}><props.cmp /></h2>
//   )
// }

// function HOCGreen(props){
//   return(
//     <h2 style={{backgroundColor: 'green', width: 180}}><props.cmp /></h2>
//   )
// }

// function HOCBlue(props){
//   return(
//     <h2 style={{backgroundColor: 'blue', width: 180}}><props.cmp /></h2>
//   )
// }

// function Counter(){

//   const [data, setData] = useState(0)

//   return(
//     <div>
//       <h1>Number: {data}</h1>
//     <button onClick={()=>setData(data+1)}>Update</button>
//     </div>
//   )
// }

// function App(){

//    let inputRef1 = useRef();
//    let inputRef2 = useRef();

//    function submit(e){
//     e.preventDefault();
//     console.log("Input field 1 value:" ,inputRef1.current.value)
//     console.log("Input field 2 value:" ,inputRef2.current.value)
//     let input3 = document.getElementById('input3').value
//     console.log("Input field 3 value:" , input3)

//    }

//   return(
//     <div className='App'>
//       <h1>Uncontrolled Component</h1>
//       <form onSubmit={submit}>
//       <input type="text" ref={inputRef1}/><br></br>
//       <input type="text" ref={inputRef2}/><br></br>
//       <input type="text" id='input3'/><br></br>
//       <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App;

// function App(){

//   const [val, setVal] = useState("000"); //this is also the  default value

//   // function change(e){
//   //   setVal(e.target.value)
//   //   console.log(e.target.value)
//   // }

//   return(
//     <div className='App'>
//       <h1>Controlled Compoenet</h1>
//       {/* <input type="text"  defaultValue = '100' onChange={(e)=>{setVal(e.target.value)}}/> */}
//       {/* case1 */}
//       <input type="text" value={val}  onChange={(e)=>{setVal(e.target.value)}}/>
//       {/* case2 */}
//       <h2>Value : {val}</h2>
//     </div>
//   )
// }

// export default  App;

// function App(){

//   let inputref = useRef();

//   function update(){
//     inputref.current.value = '1000'
//     inputref.current.style.color = 'red'
//     inputref.current.style.backgroundColor = 'black'
//     inputref.current.focus()
//   }

//   return (
//     <div className='App'>
//       <h1>Forward Ref in ReactJs</h1>
//       <User ref = {inputref}/>
//       <button onClick={update}>Update Input</button>
//     </div>
//   )
// }

// export default App;

// function App(){

//   let inputRef = useRef();

//   function update(){
//     //console.log('hello from function')
//     //console.log(inputRef.current.value)
//     //console.log(inputRef.current.value='100')
//     //inputRef.current.value = '100'
//     inputRef.current.style.color = 'red'
//     inputRef.current.focus();

//   }

//   return(
//     <div className='App'>
//       <h1>useRef in ReactJs</h1>
//       <input type = 'text' ref= {inputRef}/>
//       <button onClick={update}>Click update</button>
//     </div>
//   )
// }

// export default App;

// class App  extends Component{

//   constructor(){

//     super()
//     this.inputRef = createRef();
//     //this.update = this.update.bind(this)
//   }

//   componentDidMount(){
//     console.warn(this.inputRef.current.value='100')
//   }

//   update(){
//    console.warn(this.inputRef.current.value)
//   //  this.inputRef.current.value = '100'
//    this.inputRef.current.style.color  = 'red'
//    this.inputRef.current.style.backgroundColor = 'black'
//   }

//   render(){

//     return(
//       <div className='App'>
//         <h1>Hello World</h1>
//         <input type='text' ref={this.inputRef}/>
//         <button onClick={()=>this.update()}>Click me</button>
//       </div>
//     )
//   }

// }

// export default App;

// function App(){

//   const [count, setCount] =  useState(0);
//   const [item, setItem] = useState(10);

//   const callMultiCount = useMemo(function multiCount(){
//     console.warn("multiCount")
//     return count*5

//   },[count])

//   // function multiCount(){
//   //   console.warn("incorrect multiCount")
//   //   return count*5

//   // }

//   return(
//     <div className='App'>
//       <h1>UseMemo Hook</h1>
//       <h2>Update {count}</h2>
//       <h2>Update {item}</h2>
//       <h3>{callMultiCount}</h3>
//       <User data={callMultiCount}/>
//       {/* <User data={multiCount}/>
//       <h3>{multiCount()}</h3> */}
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setItem(item*10)}>Update item</button>

//     </div>
//   )
// }

// export default App;

// class App extends React.Component{

//   constructor(){
//     super()
//     this.state = {
//       count : 0
//     }
//   }

//   render(){
//     // console.warn("Parent rendering")
//     return(
//       <div className='App'>
//         <h1>Pure Components : Parent</h1>
//         <ExamplePC data ={this.state.count}/>
//         <button onClick={()=>this.setState({count : this.state.count+1})}>Update</button>
//       </div>
//     )
//   }
// }

// export default  App;

// function App(){

//   const name = 'Joshua Swaroop'

//   function update(role){
//     alert(role.designation)
//     alert(role.Company)
//     console.log (role)
//   }

//   return(
//     <div className='App'>
//       <h1>Lifting Up State</h1>
//       <User data={update} names={name}/>
//     </div>
//   )
// }

// export default App;

// function App(){

//   return(
//    <div className='App'>
//     <h1>HELLO EVERYONE</h1>
//     <Table>
//       <tbody>
//         <tr>

//             <User />

//         </tr>
//       </tbody>
//     </Table>
//    </div>
//   )
// }

// export default App;

// function App(){
//   const ids = [
//         {name: 'Joshua', email: 'joshua@gmail.com', mobile: 8147751959},
//         {name: 'Samm', email: 'samm@gmail.com', mobile: 8147751979},
//         {name: 'Josh', email: 'josh@gmail.com', mobile: 9449209152},
//         {name: 'John', email: 'john@gmail.com', mobile: 9448763482}
//       ]

//   function update(){
//     alert('Helloo App')
//   }
//   return(
//     <div className='App'>
//       <h1>Reuse Component</h1>
//       {
//         ids.map((id)=>
//         <User data={id} fun={update}/>  2
//         )
//       }
//     </div>
//   )
// }

// export default App;

// function App(){

//   const ids = [
//          {name: 'Joshua', email: 'joshua@gmail.com', address:[
//           {Hn: "10", city: 'Raichur', country: 'India'},
//           {Hn: "27", city: 'Hubli', country: 'India'},
//           {Hn: "12", city: 'Pune', country: 'India'},
//          ]},
//          {name: 'Samm', email: 'samm@gmail.com', address:[
//           {Hn: "10", city: 'Raichur', country: 'India'},
//           {Hn: "27", city: 'Hubli', country: 'India'},
//           {Hn: "12", city: 'Pune', country: 'India'},
//          ]},
//          {name: 'Josh', email: 'josh@gmail.com', address:[
//           {Hn: "13", city: 'Raichur', country: 'India'},
//           {Hn: "24", city: 'Bangalore', country: 'India'},
//           {Hn: "15", city: 'Chennai', country: 'India'},
//          ]},
//          {name: 'John', email: 'john@gmail.com', address:[
//           {Hn: "16", city: 'Raichur', country: 'India'},
//           {Hn: "28", city: 'Mysore', country: 'India'},
//           {Hn: "19", city: 'Mangalore', country: 'India'},
//          ]}
//        ]

//   return(
//     <div className='App'>
//      <h1>List with Nested Array</h1>
//      <Table striped variant='dark'>
//       <tbody>
//       <tr>
//         <th>Sl.no</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Address</th>
//       </tr>
//       {
//         ids.map((id, i)=>
//         <tr key={i}>
//           <td>{i+1}</td>
//           <td>{id.name}</td>
//           <td>{id.email}</td>
//           <td>
//             <Table striped variant='dark'>
//               <tbody>
//                 <tr>
//                   <th>Hn</th>
//                   <th>City</th>
//                   <th>Country</th>
//                 </tr>
//                 {id.address.map((add)=>
//                 <tr>
//                 <td>{add.Hn}</td>
//                 <td>{add.city}</td>
//                 <td>{add.country}</td>
//               </tr>
//                 )}
//               </tbody>
//             </Table>
//           </td>
//         </tr>
//         )
//       }
//       </tbody>
//      </Table>

//     </div>
//   )
// }
// export default App;

// function App(){

//   const ids = [
//     {name: 'Joshua', email: 'joshua@gmail.com', mobile: 8147751959},
//     {name: 'Samm', email: 'samm@gmail.com', mobile: 8147751979},
//     {name: 'Josh', email: 'josh@gmail.com', mobile: 9449209152},
//     {name: 'John', email: 'john@gmail.com', mobile: 9448763482}
//   ]

//   return(
//     <div className='App'>
//       <h1>List of Students  </h1>

//       <Table striped variant= "dark">
//         <tbody>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>mobile</th>
//         </tr>
//         {
//           ids.map((id, i)=>
//             id.mobile === 8147751959?
//             <tr key={i}>
//               <td>{id.name}</td>
//               <td>{id.email}</td>
//               <td>{id.mobile}</td>
//             </tr>: null
//           )
//         }
//         </tbody>
//       </Table>

//     </div>
//   )

// }

// export default App;

// function App(){

//   const students = ['Joshua', 'Sam', 'Josh'];

//   // students.map((stu)=>{
//   //   console.warn('from map function',stu)
//   // })

//   // for(let i=0; i<students.length; i++){
//   //   console.warn('from for loop',students[i])  //we can only use for loop here outside jsx
//   // }

//   return(
//     <div className="App">
//       <h1>Hello World!! Handle Array</h1>
//       {
//         students.map((student)=> <h2>Name is : {student}</h2>
//         )
//       }

//       {/* {
//         for(let i=0; i<students.length; i++){
//           <h2>Name : {students[i]}</h2>        //for loop,while can not be used in jsx, only maps,filter works here
//         }
//       } */}
//     </div>
//   )
// }

// export default App;

// function App(){

//   return(
//     <div className='App'>
//       <h1>Hello World!!</h1>

//        <Alert variant ={'primary'}>
//         this is a type of alert
//         </Alert>

//       {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}

//       <Button onClick={()=>alert("Clicked")}>Click</Button>{' '}
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </div>
//     )
// }
// export default App;

// function App(){
//   return (
//     <div className="App">
//     <h2 className='primary'>Style type 1 in react js</h2>
//     <h2 style={{backgroundColor: 'black', color: 'red'}}>Style type 2 in react js</h2>
//     <h2 className={style.success} >Style type  3 in react js</h2>
//     </div>
//   )
// }

// export default App;

// function App(){

//   const [count, setCount] = useState(1000);
//   const [data, setData] =useState(10)

//useEffect

//   return(
//     <div className="App">
//       <User count={count} data={data}/>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }

// export default App;

// function App(){

//   const [count, setCount] = useState(1000);
//   const [data, setData] =useState(10)

//   useEffect(()=>{
//     console.warn("useEffect work on count");
//   }, [count]
//   )
//   useEffect(()=>{
//     console.warn("useEffect work on data");
//   },[data]
//   )

//   return(
//     <div className="App">
//       <h1>Hello Welcome {count}</h1>
//       <h1>Hello Welcome {data}</h1>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }

// export default App;

// function App(){
//   const [name, setName] = useState("Joshua");

//   function update(){
//     setName("Swaroopp")
//   }
//useState

//   return(
//     <div className='App'>
//       <h1> Hello World {name}</h1>
//       <button onClick = {()=>setName("Swaroop")}>Click</button>
//       <button onClick = {update}>Click</button>
//     </div>
//   )
// }

// export default App;

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       show: true
//     }
//   }

//   render(){
//     return(
//       <div className='App'>
//         {
//           this.state.show?<CStudent />:<h1>Component Unmounted</h1>
//         }
//         <button onClick={()=>{this.setState({show : !this.state.show})}}>Click</button>
//       </div>
//     )
//   }
// }

// export default App;

// class App extends Component{

//   constructor(){
//     super();
//     this.state = {
//       data: 0
//     }
//   }

//   shouldComponentUpdate(){
//    console.warn("Should Component update", this.state.data)
//    if(this.state.data>5 && this.state.data<10){
//     return true
//    }
//   }

//   render(){
//     return(
//       <div className='App'>
//         <h1>Should Component Update {this.state.data} </h1>
//         <button onClick={()=>this.setState({data : this.state.data+1})}>Click</button>
//       </div>
//     )
//   }
// }

// export default App;

// class App extends Component{

//   constructor(){
//     super();
//     console.warn("Constructor");
//     this.state = {
//       data : 0
//     }
//   }

//   componentDidMount(){
//     console.warn("Mount")
//   }

//   componentDidUpdate(prevProps, prevState, snapshot){

//     console.warn('did update', prevState.data, this.state.data);
//     if(prevState.data ===this.state.data){
//       alert("Already updated")
//     }

//     // if(this.state.data<10){
//     //   this.setState({data: this.state.data+1});  //if this alone is used without conditional statement in CDU then it leads to infinite loop
//     // }
//   }
//   render(){

//     console.warn("Render")
//     return(
//       <div className='App'>
//         <h1>Hello {this.state.data}</h1>
//         <button onClick={()=>this.setState({data: 1})}>Click</button>
//       </div>
//     )
//     }
// }

// export default App;

// function App(){
//   //const [name, setName] = useState("Joshua");

//   return(
//     <div className='App'>
//         <h1>Render lifecycle method</h1>
//         <CUser />
//         {/* <CUser data={name}/>
//         <button onClick={()=>setName("Swaroop")}>Click</button> */}
//     </div>
//   )
// }

// export default App;

// class App extends Component{

//   constructor(){
//     super();
//     console.log("constructor");
//     this.state = {
//       data : "Helloo"
//     }
//   }

//   render(){
//     console.log("render");
//     return(
//       <h1>Hello World! {this.state.data}</h1>
//     )
//   }
// }
// export default App;

// function App(){

//   function getData(){
//     alert("Hello from App")
//   }

//   return(
//     <div className="App">
//     {/* <Login /> */}
//     <div style={{float: "left"}}>
//     <Members data={getData}/>
//     <Members data={getData}/>
//     </div>
//     <div style={{float: "right"}}>
//     <NewMembers data={getData}/>
//     </div>
//     </div>
//   )
// }
// // sending function getData as a prop
// export default App;

// function App(){

//   const [name, setName] = useState("");
//   const [option, setOption] = useState("");
//   const [tnc, setTnc] =useState(false);

//   function getFormData(e){
//     e.preventDefault();
//     console.log(name, option, tnc);
//   }

//   // function Update(e){
//   //   setName(e.target.value);
//   // }

//   return(
//     <div className="App">
//       <h1>Form Validation</h1>
//       <form onSubmit={getFormData}>
//       <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} /> <br></br>
//       <select onChange={(e)=>setOption(e.target.value)}>
//         <option>Select Company</option>
//         <option>Algo Domain</option>
//         <option>World box</option>
//       </select>  <br></br>
//       <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept terms And Condition</span> <br></br>
//       <button type="submit">Submit</button>

//       </form>
//     </div>
//   )
// }

// export default App;

// function App(){

//   const [status, setStatus] = useState(true)

//   return(
//     <div className= "App">
//      {
//       status?<h1>Hello World Tongle!</h1>: null

//      }

//      <button onClick={()=>{setStatus(!status)}}>Tongle</button>
//      {/* <button onClick={()=>{setStatus(false)}}>Hide</button>
//      <button onClick={()=>{setStatus(true)}}>Show</button> */}
//     </div>
//   )
// }

// export default App;

// function App(){

//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);

//   function change(val){
//     setData(val.target.value);
//     //setPrint(false);
//   }

//   // function click(){
//   //   setPrint(true);
//   // }
//   return(
//     <div className="App">

//         <h1>{print?data:null}</h1>

//       <input type = "text" onChange={change}/>
//       <button onClick={()=>{setPrint(true)}}>Print Data</button>
//     </div>
//   )
// }

// export default App;

// class App extends Component{

//   constructor(){
//     super();
//     this.state = {
//       name : "Joshua"
//     }
//    // this.update = this.update.bind(this);
//    }

//   // update=()=>{
//   //    this.setState({name: "Swaroop"})
//   // }

//   render(){
//     return(
//      <div className= "App">
//       <h1>Hello Students</h1>
//       <Student name = {this.state.name}/>
//       <button onClick= {()=>this.setState({name:"Swaroop"})}>Update Name</button>
//      </div>
//     )
//   }
// }

// export default App;

// function App(){

// const [name, setName] = useState("Joshua");

// function update(){
//   setName("Swaroopp");

// }

// // // function apple(){
// //   alert("hello");
// // }

// return(
//   <div className="App">
//   <h1>Hello Student</h1>
//   <Student name = {name}  tag= {<h5>heii</h5>} />
//   <button onClick= {update}>Update Name</button>
//   {/* <button onClick={()=>{setName("Swaroop")}}>Update</button> */}
//   {/* <Student name = {"John"} email = {"john.gmail.com"} other = {{address:"Hubli", mobile:9448763482}}/>
//   <Student name = {"Sam"} email = {"sam.gmail.com"} other = {{address:"Pune", mobile:8147751959}}/> */}
//   </div>
// )

// }
// export default App;

// class App extends Component{

//   constructor(){
//     super();
//     this.state = {
//       data : 0
//     }

//     //this.update = this.update.bind(this);
//   }

//   update=()=>{
//     this.setState({data : this.state.data +1})
//   }

// render(){

//   return(
//     <div className= "App">
//     <h1>{this.state.data}</h1>
//     <button onClick= {this.update}>Click</button>

//     </div>
//   );
// }

// }
// export default App;

// function App(){

// const [data, setData] = useState(0);

//   function update(){
//     setData(data + 1);
//   }

//   // console.warn("_______________")

//   return(
//     <div className = "App">
//       <h1>{data}</h1>
//       <button onClick= {update}>Click Ok</button>
//     </div>
//   )
// }
// export default App;

// function App(){

// let data = "Joshua";                           v12

//   function change(){
//     data = "Swaroop";
//     alert(data);
//   }

//    console.warn("--------------------");

//   // the data is not getting changed on the component because, the component is not getting re rendered again
//   //and using this common variable cannot do the re rendering and value of data cannot be changed
//   //v12

//   return(
//     <div className = "App">
//       <h1>{data}</h1>
//       <button onClick = {change} > Click Ok </button>
//     </div>
//   )
// }
// export default App;

// function App(){
//  let data = "Josh";                                                    v11, v12
//   function apple(){
//     data = "Joshua"
//     alert(data);
//   }

//   return (
//     <div className = "App">
//       {/* Why the variable has not changed in the component? .
//       State is a object, like variables is used to store the data, state is also used to do the same.
//       so when we use varaible the component is not updated but when we use state the component is going to know that
//       something has been changed, so component is going to be updated
//       */}
//     <h1 >{data}</h1>
//     <button onClick = {apple}>Click OKK</button>
//     <button onClick = {()=> apple()}> Click</button>
//     <button onClick={()=>alert("Hello")}>Click Ok</button>
//     </div >
//   );
// }
// export default App;

// function App() {

//   // function Apple(){
//   //   return (
//   //     <h3>Apple Component</h3>
//   //   )
//   // }

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       {/* <User />
//       <CUser />
//       <Apple />   {Apple()} */}
//     </div>
//   );
// }

// here Apple component is a function within a function App(), so we can do this and we can call this from App() which is the
// main function

// function User(){
//   return(
//       <>
//       <h1>User Component</h1>
//       <h1>Hello</h1>
//       </>                          basically function App() and function User() are different component, if we want we can
//   )                                create them in different file like App.js and User.js of keep them in same file like done here
//                                    creating function User() in App.js file along with function App(), but still here the component
//                                    are created separately in same App.js file
// }

//  you can also use function User() of User.js in the App.js and remove command import and export

// class CUser extends Component{

//   render(){
//       return(
//           <h1>Hello from CUser</h1>
//       )
//   }
// }              //we can also user the class based component  in the same file App.js and dont use import and export.
// but import React, {Component } from react; should be imported because its used  for extends.
//export default App;
