import "./App.css";
import { useState } from "react";
const axios = require("axios").default;

function App() {
  const [state, setState] = useState({
    name: "",
    risk: "",
  });
  function handleChange(e) {
    // console.log(e.target.value);
    // setState({ Name: e.target.value, risk: e.target.value });
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(state);
  }
  async function handleSubmit(e) {
    fetch(
      "https://riskrating.azurewebsites.net/api/riskRatingApi?code=Ur7ZxfXwicGfa3Gfhqv9RLCipQev2VyDMTUTxuGmFd6QAzFuPunD7g==",
      { Method: "POST" }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    // try {
    //   axios
    //     .post("https://riskrating.azurewebsites.net/api/riskRatingApi?", {
    //       name: state.name,
    //       risk: state.risk,
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <div className="container">
      <h1>Risk Rating</h1>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <label>Describe Your claim history for the last 3 years</label>
        <br />
        <br />
        <textarea
          rows="4"
          cols="50"
          type="text"
          id="risk"
          name="risk"
          placeholder="please discribe you history for the last 3 years"
          onChange={handleChange}
          value={state.risk}
        ></textarea>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div id="answer">
        <p>Answer will be displayed here</p>
      </div>
    </div>
  );
}

export default App;
