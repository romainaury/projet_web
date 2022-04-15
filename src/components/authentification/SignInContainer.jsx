import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import SignInComponent from "./SignInComponent";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser: setUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
