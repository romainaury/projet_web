import { connect } from "react-redux";
import { setDeckAction } from "../../actions/mainActions";
import PrepareDeckComponent from "./PrepareDeckComponent";


const mapStateToProps = (state) => ({
  user: state.main.user,
  isLoggedIn: () => state.main.user?.id !== "",
});

const mapDispatchToProps = {
  setDeck: setDeckAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrepareDeckComponent);