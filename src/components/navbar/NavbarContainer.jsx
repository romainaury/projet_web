import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import NavbarComponent from "./NavbarComponent";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser: setUserAction,
  isLoggedIn: () => state.main.user?.id != null
//   isLoggedIn2: () => {
    
//     state.user?.id != null
//   }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);

