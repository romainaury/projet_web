import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import SignInComponent from "./SignInComponent";

const mapStateToProps = (state) => ({
  user: state.main.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
