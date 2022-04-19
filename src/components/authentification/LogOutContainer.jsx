import { connect } from "react-redux";
import { logOut } from "../../actions/mainActions";
import LogOutContainer from "./LogOutContainer";


const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logOut: logOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutContainer);