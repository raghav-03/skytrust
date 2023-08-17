import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card.js";
import "./App.css";
import HighlightedCard from "./components/HighlightedCard.js";
const App = () => {
  const [data, setdata] = useState([]);
  const [selected, setselected] = useState(false);
  const [selecteddata, setselecteddata] = useState([]);
  const fetchdata = async () => {
    const result = await axios.get(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
    );
    setdata(result.data.results);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="outer__container">
      {selected === true && (
        <div className="highlighted__card">
          <HighlightedCard data={selecteddata} />
        </div>
      )}
      <div className="card__container">
        {data &&
          data.map((item) => {
            return (
              <Card
                data={item}
                key={item.email}
                isselected={selected}
                handleclick={setselected}
                selecteddata={selecteddata}
                getdata={setselecteddata}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
