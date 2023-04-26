import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import EnvironmentContext from "./EnvironmentContext";

const FreeComponent = () => {
  const [backendMessage, setBackendMessage] = useState("");

  const endpoint = useContext(EnvironmentContext);
  const url = `${endpoint}/unsecured`;

  const clickHandler = async (event) => {
    event.preventDefault();
    const result = await fetch(url);
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

export default FreeComponent;
