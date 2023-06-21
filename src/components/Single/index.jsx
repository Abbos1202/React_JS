import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Firdavs", description: "Firdavs IT guy" },
  { id: 2, name: "Abbos", description: "Abbos IT guy" },
  { id: 3, name: "Sirojiddin", description: "Sirojiddin IT guy" },
  { id: 4, name: "Murodjon", description: "Murodjon IT guy" },
  { id: 5, name: "Sardorbek", description: "Sardorbek Support" },
  { id: 6, name: "Shaxboz", description: "Shaxboz Mentor" },
]

const Home = () => {
  const [selected, setSelected] = useState({});
  const navigate = useNavigate();
  const params = useParams()

  useEffect(() => {
    let res = data.filter(value => value.id == (params.id).replace(':', ''))
    console.log(res);
    setSelected(...res)
  }, [params.id])
  console.log(params?.id);
  return (
    <div style={{ display: "flex" }}>
     <h1>Name: {selected?.name}</h1>
    </div>
  );
};

export default Home;
