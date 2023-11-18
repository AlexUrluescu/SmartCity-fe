import "./App.css";
import io from "socket.io-client";
import Papa from "papaparse";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Chart, {
  ArgumentAxis,
  Legend,
  Series,
  ValueAxis,
  Label,
  Export,
  Tick,
} from "devextreme-react/chart";

const socket = io.connect("http://localhost:3002");

socket.on("hello", (arg) => {
  console.log(arg);
});

// eslint-disable-next-line
const test = [
  {
    _id: "6557dd705789f80b652c568b",
    temperature: 37,
    humidity: 78,
    date: "2023-11-01T00:00:00.000Z",
    emission: 25,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd705789f80b652c568d",
    temperature: 30,
    humidity: 63,
    date: "2023-11-02T00:00:00.000Z",
    emission: 28,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd705789f80b652c568f",
    temperature: 28,
    humidity: 82,
    date: "2023-11-03T00:00:00.000Z",
    emission: 15,
    zone: 5,
    __v: 0,
  },
  {
    _id: "6557dd705789f80b652c5691",
    temperature: 8,
    humidity: 88,
    date: "2023-11-04T00:00:00.000Z",
    emission: 26,
    zone: 6,
    __v: 0,
  },
  {
    _id: "6557dd705789f80b652c5693",
    temperature: 1,
    humidity: 78,
    date: "2023-11-05T00:00:00.000Z",
    emission: 20,
    zone: 1,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c5695",
    temperature: 33,
    humidity: 75,
    date: "2023-11-06T00:00:00.000Z",
    emission: 2,
    zone: 6,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c5697",
    temperature: 31,
    humidity: 76,
    date: "2023-11-07T00:00:00.000Z",
    emission: 43,
    zone: 1,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c5699",
    temperature: 33,
    humidity: 74,
    date: "2023-11-08T00:00:00.000Z",
    emission: 8,
    zone: 3,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c569b",
    temperature: 28,
    humidity: 49,
    date: "2023-11-09T00:00:00.000Z",
    emission: 40,
    zone: 1,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c569d",
    temperature: 46,
    humidity: 32,
    date: "2023-11-10T00:00:00.000Z",
    emission: 38,
    zone: 6,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c569f",
    temperature: 21,
    humidity: 65,
    date: "2023-11-11T00:00:00.000Z",
    emission: 10,
    zone: 1,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c56a1",
    temperature: 32,
    humidity: 82,
    date: "2023-11-12T00:00:00.000Z",
    emission: 2,
    zone: 6,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c56a3",
    temperature: 26,
    humidity: 39,
    date: "2023-11-13T00:00:00.000Z",
    emission: 37,
    zone: 5,
    __v: 0,
  },
  {
    _id: "6557dd715789f80b652c56a5",
    temperature: 14,
    humidity: 46,
    date: "2023-11-14T00:00:00.000Z",
    emission: 46,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56a7",
    temperature: 16,
    humidity: 84,
    date: "2023-11-15T00:00:00.000Z",
    emission: 14,
    zone: 2,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56a9",
    temperature: 5,
    humidity: 72,
    date: "2023-11-16T00:00:00.000Z",
    emission: 41,
    zone: 8,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56ab",
    temperature: 17,
    humidity: 97,
    date: "2023-11-17T00:00:00.000Z",
    emission: 22,
    zone: 9,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56ad",
    temperature: 33,
    humidity: 73,
    date: "2023-11-18T00:00:00.000Z",
    emission: 29,
    zone: 4,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56af",
    temperature: 33,
    humidity: 80,
    date: "2023-11-19T00:00:00.000Z",
    emission: 7,
    zone: 3,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56b1",
    temperature: 15,
    humidity: 85,
    date: "2023-11-20T00:00:00.000Z",
    emission: 12,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56b3",
    temperature: 9,
    humidity: 94,
    date: "2023-11-21T00:00:00.000Z",
    emission: 26,
    zone: 2,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56b5",
    temperature: 35,
    humidity: 51,
    date: "2023-11-22T00:00:00.000Z",
    emission: 43,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56b7",
    temperature: 13,
    humidity: 91,
    date: "2023-11-23T00:00:00.000Z",
    emission: 33,
    zone: 9,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56b9",
    temperature: 8,
    humidity: 99,
    date: "2023-11-24T00:00:00.000Z",
    emission: 1,
    zone: 5,
    __v: 0,
  },
  {
    _id: "6557dd725789f80b652c56bb",
    temperature: 43,
    humidity: 57,
    date: "2023-11-25T00:00:00.000Z",
    emission: 0,
    zone: 9,
    __v: 0,
  },
  {
    _id: "6557dd735789f80b652c56bd",
    temperature: 26,
    humidity: 53,
    date: "2023-11-26T00:00:00.000Z",
    emission: 1,
    zone: 5,
    __v: 0,
  },
  {
    _id: "6557dd735789f80b652c56bf",
    temperature: 24,
    humidity: 88,
    date: "2023-11-27T00:00:00.000Z",
    emission: 1,
    zone: 6,
    __v: 0,
  },
  {
    _id: "6557dd735789f80b652c56c1",
    temperature: 46,
    humidity: 53,
    date: "2023-11-28T00:00:00.000Z",
    emission: 39,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd735789f80b652c56c3",
    temperature: 13,
    humidity: 46,
    date: "2023-11-29T00:00:00.000Z",
    emission: 10,
    zone: 7,
    __v: 0,
  },
  {
    _id: "6557dd735789f80b652c56c5",
    temperature: 26,
    humidity: 65,
    date: "2023-11-30T00:00:00.000Z",
    emission: 27,
    zone: 4,
    __v: 0,
  },
];

function App() {
  const [myData, setMyData] = useState([]);
  const [chartTitle, setChartTitle] = useState("");
  const [myStatus, setMyStatus] = useState("");

  // socket.on("updateData", async (arg) => {
  //   setMyData([...myData, arg.data]);
  // });

  const handleMonth = async () => {
    const res = await fetch("http://localhost:3002/getdata");
    const data = await res.json();

    setMyData(data);
    setChartTitle("Monthly");
  };

  const handleWeek = async () => {
    const res = await fetch("http://localhost:3002/getweek");
    const data = await res.json();

    setMyData(data);
    setChartTitle("Weekly");
  };

  const handleDay = async () => {
    const res = await fetch("http://localhost:3002/getday");
    const data = await res.json();

    setMyData(data);
    setChartTitle("Daily");
  };

  const handleRadioChange = (e) => {
    setMyStatus(e.target.value);
  };

  const handleDownload = () => {
    const csvData = Papa.unparse(myData);

    const csvBlob = new Blob([csvData], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);

    const link = document.createElement("a");
    link.href = csvUrl;
    link.download = "data.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <div style={{ fontSize: "45px", textAlign: "center" }}>Smart Control</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "50px 0px",
        }}
      >
        <div>
          <button onClick={handleMonth} type="button" class="btn btn-primary">
            Month
          </button>{" "}
          <button onClick={handleWeek} type="button" class="btn btn-primary">
            Week
          </button>{" "}
          <button onClick={handleDay} type="button" class="btn btn-primary">
            Day
          </button>
        </div>

        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadio"
            id="flexRadio"
            value="temperature"
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="flexRadio">
            Temperature
          </label>

          <input
            className="form-check-input"
            type="radio"
            name="flexRadio"
            id="flexRadio"
            value="humidity"
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="flexRadio">
            Humidity
          </label>

          <input
            className="form-check-input"
            type="radio"
            name="flexRadio"
            id="flexRadio"
            value="emission"
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="flexRadio">
            Emission
          </label>
        </div>
      </div>

      <Chart title={chartTitle} dataSource={myData} rotated={false} id="chart">
        <ArgumentAxis>
          <Label customizeText="Hello" />
        </ArgumentAxis>

        <ValueAxis>
          <Tick visible={false} />
          <Label visible={true} />
        </ValueAxis>

        <Series
          valueField={myStatus}
          argumentField="date"
          type="line"
          color="#79cac4"
        ></Series>

        <Legend visible={false} />

        <Export enabled={false} />
      </Chart>
      <div style={{ textAlign: "center" }}>
        {myData.length <= 0 || myStatus === "" ? (
          <button
            onClick={handleDownload}
            disabled
            type="button"
            className="btn btn-warning"
          >
            Download CSV
          </button>
        ) : (
          <button
            onClick={handleDownload}
            type="button"
            className="btn btn-warning"
          >
            Download CSV
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
