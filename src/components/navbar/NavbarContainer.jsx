import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import NavbarComponent from "./NavbarComponent";

const mapStateToProps = (state) => ({
  user: state.user,
  isLoggedIn: () => state.main.user?.id !== undefined,
});

const mapDispatchToProps = {
  setUser: setUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
