import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TrainerList extends Component {
    constructor(props){
        super(props);
        this.trainerData = props.trainerData;
    }
    // navigate = (id) => {
    //     history.push(`/trainers/${id}`)
    //     return (
    //         <TrainerDetail id={id} />
    //     )
    // }

  render() {
    return (
        <>
            <div>
                <h2>Trainers List</h2>
                <ul>
                    {this.trainerData.map((trainer) => (
                        <li key={trainer.trainerId}>
                            <Link to={`/trainers/${trainer.trainerId}`}>{trainer.name}</Link>
                            {/* <li key={trainer.trainerId} onClick={() => this.navigate(trainer.trainerId)}>{trainer.name}</li> */}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <BrowserRouter>
                <Routes>
                    <Route exact path='/trainers:{trainerId}' element={<TrainerDetail  />}/>
                </Routes>
            </BrowserRouter> */}
        </>
    );
  }
}
