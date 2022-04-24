import { connect } from "react-redux";
import { setMatchInfoAction } from "../../actions/matchActions";
import MatchComponent from "./MatchComponent";

const mapStateToProps = (state) => ({
  status: state.match.status,
  players: { player1: state.match.player1, player2: state.match.player2 },
  user: state.main.user,
});

const mapdispatchToProps = {
  setMatch: setMatchInfoAction,
};

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(MatchComponent);
