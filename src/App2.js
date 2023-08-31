import './App.css';
import React,{useState} from 'react'
import User from './User';



// function App2(){

//     const [data, setData] = useState(['Joshua', 25,'joshua@gmail.com'])

//     function handleNameChange(e){
//     const newData = [...data]
//     newData[0] = e.target.value
//     setData(newData)
//     }

//     const handleAgeChange = (e)=>{
//         const newData = [...data]
//     newData[1] = parseInt(e.target.value)
//     setData(newData)
//     }

//     function handleEmailChange(e){
//         const newData = [...data]
//         newData[2] = e.target.value
//         setData(newData)
//     }

//     return(
//         <div className='App'>
//             <h1>Sate object in Hooks </h1>

//             <input type='text' placeholder='enter name' value={data[0]} onChange={handleNameChange}/>
//             <input type='text' placeholder='enter age' value={data[1]} onChange={handleAgeChange}/>
//             <input type='text' placeholder='enter email' value={data[2]} onChange={handleEmailChange}/>
//             <h2>Name : {data[0]}</h2>
//             <h2>Age : {data[1]}</h2>
//             <h2>Email : {data[2]}</h2>
//         </div>
//     )
// }
// export default App2;

















// function App2(){

//     const [data, setData] = useState({name:'Joshua', age: 25, email:'joshua@gmail.com'})
//     //const [data, setData] = useState([{name:'Joshua'}, {age: 25}, {email:'joshua@gmail.com'}])

//     return(
//         <div className='App'>
//             <h1>Sate object in Hooks </h1>
//             {/* <input type='text' placeholder='enter name' value={data.name} onChange={(e)=>setData({age: data.age,name: e.target.value})}/>
//             <input type='text' placeholder='enter age' value={data.age} onChange={(e)=>setData({name: data.name,age:e.target.value})}/> */}
//             {/* here if there are more properties in object, then we show mention age: data.age like this for every property
//             so better we can use the way which is mention below */}
//             <input type='text' placeholder='enter name' value={data.name} onChange={(e)=>setData({...data,name: e.target.value})}/>
//             <input type='text' placeholder='enter age' value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
//             <input type='text' placeholder='enter email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
//             <h2>Name : {data.name}</h2>
//             <h2>Age : {data.age}</h2>
//             <h2>Email : {data.email}</h2>
//         </div>
//     )
// }
// export default App2;












// function App2(){
//     const [counter, setCounter] = useState(1);

//     return(
//         <div className='App'>
//             <h1>Previous Props</h1>
//             <User counter = {counter}/>
//             {/* <button onClick={()=>setCounter(counter+1)}>Update Numder</button> */}
//             <button onClick={()=>setCounter(Math.floor(Math.random()*10))}>Update Number</button>
//         </div>
//     )
// }

// export default App2;














// function App2(){
//     const [counter, setCounter] = useState(1)

//     function updateCounter(){
//      //setCounter(counter+1)
//     //  let rand = (Math.floor(Math.random()*10))
//     //  //setCounter(rand)
//     //  setCounter((prev)=>{
//     //     console.log(prev)

//     //     // if(prev-rand<5){
//     //     //     alert('topup')
//     //     // }

//     //     if(prev<5){
//     //         alert('low value')
//     //     }else{
//     //         return rand
//     //     }
//     //  })

//     //setCounter(counter+5)

    // for(let i=0; i<5; i++){
    //     //setCounter(counter+1)
    //     setCounter((prev)=>{
    //         return prev+1
    //     })
    // }
//     }

//     return(
//         <div className='App'>
//             <h1>Previous state</h1>
//             <h2>number: {counter}</h2>
//             <button onClick={updateCounter}>Update Number</button>
//         </div>
//     )
// }

// export default App2;