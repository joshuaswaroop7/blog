import Header from "../Components2/Header";
import { connect } from "react-redux";
//header is receiving the data from redux store so no need to build connection with action

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
