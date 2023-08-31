
// import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home'
// import About from './components/About'
// import NavBar from './components/NavBar';
// import Page404 from './components/Page404';
// import User from './components/User'
// import Filter from './components/Filter';
// import Contact from './components/Contact';
// import Channel from './components/Channel';
// import Company from './components/Company';
// import Other from './components/Other';
// import Login from './components/Login';
// import Protected from './components/Protected';

// function Apr(){

//     return(
//         <div className='App'>
//              {/* <NavBar /> //this shouldn't be written here,router related any thing should on be used in browser router tag */}
//             <BrowserRouter>
//             <NavBar />
//             <Routes>
//                 {/* <Route path="/home" element={<h1>Home Pagees</h1>}/> */}
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/' element={<Protected Component={Home} />}/>
//                 <Route path='/about' element= {<Protected Component={About} />}/>
//                   {/* <Route path='/*' element={<h1>404 error</h1>} /> */}
//                 {/* <Route path='/*' element={<Page404 />}/> */}
//                 <Route path='/*' element={<Navigate to='/' />}/>
//                 <Route path='/user/:name/:job' element={<User />} />
//                 <Route path='/filter' element={<Protected Component={Filter} />} />
//                 <Route path='/contact/' element ={<Contact />} >
//                     <Route path='company' element={<Company />} />
//                     <Route path='channel' element={<Channel />} />
//                     <Route path='other' element={<Other />} />
//                     </ Route>
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default Apr;