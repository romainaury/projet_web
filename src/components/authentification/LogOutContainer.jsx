import { connect } from "react-redux";
import { logOutAction } from "../../actions/mainActions";
import LogoutOutComponent from "./LogOutComponent";


const mapStateToProps = (state) => ({
  user: state.main.user,
});

const mapDispatchToProps = {
  logOutAction: logOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutOutComponent);