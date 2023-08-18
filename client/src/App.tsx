import { useState } from "react";
import axios from "axios";

function App() {
  const [hoomanList, setHoomanList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const getHooman = () => {
    axios
      .get("http://127.0.0.1:6969/hooman")
      .then((response) => setHoomanList(response.data));
  };
  const deleteHooman = (hoomanName: any) => {
    axios
      .delete("http://127.0.0.1:6969/gone/", { name: name })
      .then((hoomanName) => {
        // setHoomanList(hoomanList.filter((user) => (user.empName = hoomanName)));
      });
  };
  const addHooman = () => {
    console.log(name);
    axios
      .post("http://127.0.0.1:6969/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() =>
        setHoomanList([
          ...getHooman,
          {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
          },
        ])
      )
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="bg-gray-500 font-mono p-10 flex-col text-center m-5 rounded-lg  ">
        <h3>Name: {name}</h3>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <h3>Age: {age}</h3>
        <input onChange={(e) => setAge(e.target.value)} type="number" />
        <h3>Country: {country}</h3>
        <input onChange={(e) => setCountry(e.target.value)} type="text" />
        <h3>Position: {position}</h3>
        <input onChange={(e) => setPosition(e.target.value)} type="text" />
        <h3>Wage: {wage}</h3>
        <input onChange={(e) => setWage(e.target.value)} type="number" />
        <br />
        <button
          className="rounded-full bg-slate-600 p-2 center"
          onClick={addHooman}
        >
          Submit
        </button>
      </div>

      <hr />

      <div className="bg-red-400 font-mono p-10 flex-col text-center">
        <button
          className="rounded-full bg-slate-600 p-2 center"
          onClick={getHooman}
        >
          Show Hooman
        </button>
        {hoomanList.map((val: any, key: any) => {
          return (
            <div className="m-10 flex justify-center text-center flex-col bg-gray-300 rounded-lg">
              <h3 key={key.empName}>Name: {val.empName}</h3>
              <h3 key={key.empAge}>Age: {val.empAge}</h3>
              <h3 key={key.empWage}>Wage: {val.empWage}</h3>
              <h3 key={key.empPosition}>Position: {val.empPosition}</h3>
              <h3 key={key.empCountry}>Country: {val.empCountry}</h3>
              <button onClick={() => deleteHooman(val.empName)}>DELETE</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
