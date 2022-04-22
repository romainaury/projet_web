import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import { setMatchInfoAction } from "../../actions/matchActions";
import HomeComponent from "./HomeComponent";

const mapStateToProps = (state) => ({
  user: state.main.user,
  match: state.match,
  isLoggedIn: () => state.main.user?.id !== "",
});

const mapDispatchToProps = {
  setUser: setUserAction,
  setMatch: setMatchInfoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
