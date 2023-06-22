import React, { Profiler } from "react";
import Modal from "./modal";
// import { Route, Routes, NavLink } from "react-router-dom";
// import Counter from "./counter";
// const Hover = React.lazy(() => import("./hover"));

const Root = () => {
  const onRender = (
    id,
    phase,
    acutalDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {

  console.table({
    id,
    phase,
    acutalDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  })

  };
  return (
    <Profiler id="modal" onRender={onRender}>
      <h1>React 17V</h1>
      <Modal />
    </Profiler>
  );
};

export default Root;

{
  /* <div>
<NavLink to={"/counter"}> Counter </NavLink>
<NavLink to={"/hover"}> Hover </NavLink>
</div>
<div>
<Routes>
  <Route path="/counter" element={<Counter />} />
  <Route
    path="/hover"
    element={
      <React.Suspense fallback={<h1>Loading....</h1>}>
        <Hover />
      </React.Suspense>
    }
  />
</Routes>
</div> */
}
