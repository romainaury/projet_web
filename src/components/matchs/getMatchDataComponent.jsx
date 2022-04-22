import { getMatchInfo } from '../../utils/queries'

export const getMatchDataComponent = ({ status, player1, player2, user, setStatus, setPlayer1, setPlayer2 }) => {
  if (user.token)
    getMatchInfo(user)
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log("Unable to get match data", error);
        }
      )
};

export default getMatchDataComponent;

