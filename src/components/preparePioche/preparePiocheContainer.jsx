import { connect } from "react-redux";
import { setUserAction } from "../../actions/mainActions";
import preparePiocheComponents from "./preparePiocheComponents";

const mapStateToProps = (state) => ({
  user: state.main.user,
  isLoggedIn: () => state.main.user?.id !== "",
});

const mapDispatchToProps = {
  setUser: setUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(preparePiocheComponents);