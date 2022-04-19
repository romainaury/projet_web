import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import NavbarComponent from "./NavbarComponent";

const mapStateToProps = (state) => ({
  user: state.main.user,
  isLoggedIn: () => state.main.user?.id !== "",
});

const mapDispatchToProps = {
  setUser: setUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
