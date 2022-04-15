import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import LogInComponent from "./LogInComponent";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser: setUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInComponent);
