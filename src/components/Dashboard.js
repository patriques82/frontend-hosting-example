import { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";

import EnvironmentContext from "./EnvironmentContext";

const cookies = new Cookies();

const Dashboard = () => {
  const [backendMessage, setBackendMessage] = useState("");
  const [token, setToken] = useState(null);

  const endpoint = useContext(EnvironmentContext);
  const url = `${endpoint}/secured`;

  useEffect(() => {
    const TOKEN = cookies.get("TOKEN");
    setToken(TOKEN);
  }, []);

  const clickHandler = async (event) => {
    event.preventDefault();
    const result = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { message } = await result.json();
    setBackendMessage(message);
  };

  return (
    <div>
      <Button onClick={clickHandler}>Usecured API call</Button>
      {backendMessage ? (
        <p className="text-success">{backendMessage}</p>
      ) : (
        <p className="text-danger">No message</p>
      )}
    </div>
  );
};

export default Dashboard;
