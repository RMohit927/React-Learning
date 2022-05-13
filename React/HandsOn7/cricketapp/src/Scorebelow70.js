import React from 'react';

const Scorebelow70 = (props) => {
  return (
    <div>
        <h1>List of Players having Scores Less than 70</h1>
        <ul>
            {props.players.map((player) => {
                return (
                <li key={Math.random().toString()}>Mr. {player.name} <span>{player.score}</span></li>
                )
            })}
        </ul>
    </div>
  )
}

export default Scorebelow70;