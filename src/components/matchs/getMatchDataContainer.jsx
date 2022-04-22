import { connect } from "react-redux";
import { setStatusAction } from "../../actions/matchActions";
import { setPlayer1Action } from "../../actions/matchActions";
import { setPlayer2Action } from "../../actions/matchActions";
import getMatchDataComponent from "./getMatchDataComponent";

const mapStateToProps = (state) => ({
    status: state.match.status,
    player1: state.match.player1,
    player2: state.match.player2,
    user: state.main.user,
});

const mapdispatchToProps = {
    setStatus: setStatusAction,
    setPlayer1: setPlayer1Action,
    setPLayer2: setPlayer2Action
};

export default connect(mapStateToProps, mapdispatchToProps)(getMatchDataComponent)