import React, { useEffect, useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

import axios from "axios";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <div className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;

// my way of rendering data from data.js
/* {data.map((question) => {
  const { id, title, info } = question;
  return (
    <div key={id}>
      <h5>{title}</h5>
      <h6>@{info}</h6>
    </div>
  );
})} */
