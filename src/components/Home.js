// import { Link , useNavigate, useLocation} from "react-router-dom";

// function Home(){

//     const navigate = useNavigate();

//     // function navigateto(url){
//     //     //let x = false;
//     //     // if(x){
//     //     //     navigate('/about')
//     //     // }else{
//     //     //     navigate('/filter')
//     //     // }

//     //     navigate(url)
//     // }create a common function one way

//     const navigateto = (url) =>{
//       navigate(url)
//     }

//     const location = useLocation();
//     console.warn(location);

//     return(
//      <div>
//         <h1>Home Page</h1>
//         <p>This is our Home page</p>
//         <p>Every thing related to  React Router you'll be able to find here</p>
//         <Link to="/about">Go to About Page</Link>
//         {/* <br></br>
//         <button onClick={()=>navigate('/about')}>Go to About</button>
//         <br></br>
//         <button onClick={()=>navigate('/filter')}>Go to Filter</button> */}

//         <br></br>
//         <button onClick={()=>navigateto('/about')}>Go to About</button>
//         <br></br>
//         <button onClick={()=>navigateto('/filter')}>Go to Filter</button>
//      </div>
//     )
// }

// export default Home;