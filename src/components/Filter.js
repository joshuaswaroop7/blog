// import { useParams, useSearchParams } from "react-router-dom";

// function Filter(){
 
//     const [searchParams, setSearchParams] = useSearchParams();
//     console.warn(searchParams.get('age' ));
//     console.warn(searchParams.get('city' ));
//     const age = searchParams.get('age');
//     const city = searchParams.get('city');

//     return(
//         <div>
//             <h1>Filter Page</h1>
//             <h2>Age : {age}</h2>
//             <h2>City : {city}</h2>
//             <input type='text' placeholder="Enter city" onChange={(e)=>setSearchParams({city: e.target.value, age:25})} />
//             <br></br>
//             <input type='text' placeholder="Enter age" onChange={(e)=>setSearchParams({age: e.target.value})} />
//             <button  onClick={()=>setSearchParams({age: 40})}>Update City</button>
//         </div>
//     )
// }

// export default Filter;