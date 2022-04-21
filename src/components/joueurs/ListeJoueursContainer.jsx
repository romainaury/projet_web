import { connect } from "react-redux";
import ListeJoueursComponent from "./ListeJoueursComponent";

const mapStateToProps = (state) => ({
  user: state.main.user,
  isLoggedIn: () => state.main.user?.id !== "",
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeJoueursComponent);
