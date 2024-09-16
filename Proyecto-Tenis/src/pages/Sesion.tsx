import Login from "../components/Login";
import Singup from "../components/Singup";
import React from "react";

const Home = () => {
  const [accionLog, setAccionLog] = React.useState(true);

  if (accionLog) {
    return <Login setAccionLog={setAccionLog} />;
  } else {
    return <Singup setAccionLog={setAccionLog} />;
  }
};

export default Home;
