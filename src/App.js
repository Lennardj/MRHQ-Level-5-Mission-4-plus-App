import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    name: "",
    risk: "",
  });
  const [riskrating, setRiskrating] = useState({});
  const [display, setDisplay] = useState(false);
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
  async function handleSubmit() {
    setDisplay(!display);
    try {
      await axios({
        method: "post",
        url: "https://riskrating.azurewebsites.net/api/riskRatingApi?",
        data: {
          name: state.name,
          risk: state.risk,
        },
      }).then((data) => setRiskrating(data.data));
    } catch (err) {
      console.log(err);
    }
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
        <p>
          {!display && "Answer will be displayed here"}
          {riskrating &&
            display &&
            `Your risk rating is ${riskrating.riskrating}`}
        </p>
      </div>
    </div>
  );
}

export default App;
