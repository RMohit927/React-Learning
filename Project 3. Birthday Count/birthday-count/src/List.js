import React from "react";

const List = ({ person }) => {
  return (
    <>
      {person.map((people) => {
        const { id, name, age, image } = people;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
