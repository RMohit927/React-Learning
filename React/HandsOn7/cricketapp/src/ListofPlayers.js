import React from 'react';

const ListofPlayers = (props) => {
  return (
    <>
        <h1>List of Players</h1>
        <ul>
            {props.players.map((player) => {
                return (
                    <li key={Math.random().toString()}>Mr. {player.name} <span>{player.score}</span></li>
                )
            })}
        </ul> 
    </>
  )
}

export default ListofPlayers;