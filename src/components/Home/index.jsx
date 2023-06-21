import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [students] = useState([
    { id: 1, name: "Firdavs", description: "Firdavs IT guy" },
    { id: 2, name: "Abbos", description: "Abbos IT guy" },
    { id: 3, name: "Sirojiddin", description: "Sirojiddin IT guy" },
    { id: 4, name: "Murodjon", description: "Murodjon IT guy" },
    { id: 5, name: "Sardorbek", description: "Sardorbek Support" },
    { id: 6, name: "Shaxboz", description: "Shaxboz Mentor" },
  ]);
  const [selected, setSelected] = useState({});
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h1>Home</h1>
        {students.map((value) => {
          return (
            <div key={value.id}>
              <h2>
                {value.id} {value.name} {value.description}{" "}
                <button
                  onClick={() => {
                    navigate(`/students/:${value.id}`);
                     setSelected(value);
                  }}
                >
                  select
                </button>
              </h2>
            </div>
          );
        })}
      </div>
      <div style={{ flex: 1 }}>
        <h1>Selected</h1>
        <h2>
          {selected?.id} {selected?.name} {selected?.description}
        </h2>
      </div>
    </div>
  );
};

export default Home;