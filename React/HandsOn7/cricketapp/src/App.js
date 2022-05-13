import ListofPlayers from "./ListofPlayers";
import PlayerMock from './PlayerMock';
import Scorebelow70 from "./Scorebelow70";
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListOfIndianPlayers from './ListOfIndianPlayers';

function App() {
  const playerUnder70 = PlayerMock.filter(player => 
    player.score < 70
  );

  const T20Players = ['First Player', 'Seond Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvraj5", "Raina6"];

  var flag = true;
  if(flag === true){
    return (
      <div className="App">
        <ListofPlayers players = {PlayerMock} />
        <Scorebelow70 players = {playerUnder70} />
      </div>
    );
  }else{
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}
          <hr/>
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr/>
        <div>
          <h1>List of Indian Players Merged: </h1>
          <ListOfIndianPlayers indianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
