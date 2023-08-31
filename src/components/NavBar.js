// import {Link,NavLink} from "react-router-dom";


// function NavBar(){

//     return(
//         // <div>
//         //      <Link to="/">Home</Link>
//         //     <br></br>
//         //     <Link to="/about">About</Link>
//         // </div>

//         <div>
//             <ul className="Navbar">

//                 <li><NavLink style={({isActive})=>{return {color: isActive? 'skyblue' : ''}}}
//                 className='nav-bar-link'  to="/">Home</NavLink></li>
//                 <li><NavLink style={({isActive})=>{return {color: isActive? 'skyblue' : ''}}}
//                 className='nav-bar-link' to="/about">About</NavLink></li>
//                 <li><NavLink style={({isActive})=>{return {color: isActive? 'skyblue' : ''}}} 
//                 className='nav-bar-link' to='/contact'>Contact Us</NavLink></li>
//                  {/* when you give link without creating page */}
//                  {/* <li><a href="/">Home</a></li>
//                 <li><a href="/about">About</a></li> */}
//                 {/* when anchor tag is used the entire page will be refreshed */}
//                 <li><NavLink style={({isActive})=>{return {color: isActive? 'skyblue' : ''}}}
//                 className='nav-bar-link' to="/filter">Filter</NavLink></li>
//                 <li><NavLink style={({isActive})=>{return {color: isActive? 'skyblue' : ''}}}
//                 className='nav-bar-link' to='/login'>Login</NavLink></li>
                
                
//             </ul>
//         </div>
//     )
// }

// export default NavBar;