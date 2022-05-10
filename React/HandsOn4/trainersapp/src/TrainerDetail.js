import React, {Component} from 'react';
import trainerMock from './TrainerMock';

import { 
  useParams
} from "react-router";

// const TrainerDetail = () => {
//     const { trainerId } = useParams();
   
//     return (
//         <div>
//             <h2>{trainerId}</h2>
//         </div>
//     );
// }
// export default TrainerDetail;

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class TrainerDetail extends Component {
  render() {
    const { trainerId } = this.props.params;
    const trainer = trainerMock.filter((id) => id.trainerId === trainerId)[0];
    // console.log(trainer);
    return (
      <article>
        <div>
          <h2>Trainers Details</h2>
        </div>
        <div>
          <b><h3>{trainer.name} ({trainer.technology})</h3></b>
          <p>{trainer.email}</p>
          <p>{trainer.phone}</p>
          <ul>
            {trainer.skills.map((skill) => {
              return <li key={skill}>{skill}</li>
            })}
          </ul>
        </div>
      </article>
    )
  }
}
export default withParams(TrainerDetail);
