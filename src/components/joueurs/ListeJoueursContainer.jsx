import { connect } from "react-redux";
import ListeJoueursComponent from "./ListeJoueursComponent";

const mapStateToProps = (state) => ({
  user: state.main.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeJoueursComponent);
