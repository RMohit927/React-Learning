import React from 'react'

const ListOfIndianPlayers = (props) => {
  console.log(props.indianPlayers);
  return (
    <ul>
        {props.indianPlayers.map((player) => {
            return (
                <li key={Math.random().toString()}>Mr. {player}</li>
            )
        })}
    </ul> 
  )
}

export default ListOfIndianPlayers