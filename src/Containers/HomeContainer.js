import Home from "../Components2/Home"; //react componennt
import { connect } from "react-redux"; // connect react component with redux
import { addToCart, removeToCart } from "../Services/Actions/actions"; //redux

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  //this builds the connection
  addToCartHandler: (data) => dispatch(addToCart(data)), //addToCartHandler function is going to be called from react component
  removeToCartHandler: () => dispatch(removeToCart()),
});
//mapDispatchToProps the name itself defines that passing the actions functions as props
//mapStateToProps the name itself defines passing the enite data present in redux store/state to props
// Certainly! This code is using the Redux library in JavaScript to create a function called mapDispatchToProps.
//This function takes a parameter dispatch, which is a Redux store function used to dispatch actions.
//Inside the mapDispatchToProps function, an object is returned. This object contains a property called addToCartHandler,
//which is a function. When this function is called with data as an argument, it dispatches the addToCart(data) action
//using the dispatch function.In summary, mapDispatchToProps is creating a function that helps connect a component to Redux
//by providing a way to dispatch the addToCart action with specific data. This allows the component to trigger changes in
//the Redux store.

//------------------------------------------------------------------------------
//function can also be written as variables using arrow functions

//   function mapDispatchToProps(dispatch) {
//     return {
//       addToCartHandler: function(data) {
//         const action = addToCart(data); // Prepare an action
//         dispatch(action); // Send the action to Redux
//       }
//     };
//   }
//function can also be written as an object
//-------------------------------------------------------------------------------
//   function mapDispatchToProps(dispatch) {
//     function addToCartHandler(data) {
//       const action = addToCart(data); // Prepare an action
//       dispatch(action); // Send the action to Redux
//     }

//     return {
//       addToCartHandler // Return the function
//     };
//   }
//function can be written in this way which is easy to understand but takes more steps

export default connect(mapStateToProps, mapDispatchToProps)(Home);
