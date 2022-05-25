import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Ordform from "./Ordform";
import ReactDOM from "react-dom/client";
import moment from "moment";

function Ordindex() {
  const [value, setValue] = React.useState(null);
  const [reference, setReference] = useState("");
  const [data, setData] = useState([]);
  const [fournisseur, setFour] = useState("");
  const formattedDate = moment(value).format("DD/MM/YYYY");

  async function addProd(e) {
    console.warn(reference);
    let item = { reference, formattedDate, fournisseur };
    e.preventDefault();
    const formData = new FormData();
    formData.append("reference", reference);
    formData.append("Date", value);
    formData.append("fournisseur", fournisseur);
    console.log(item);

    let result = await fetch("http://127.0.0.1:8000/api/appro", {
            method: 'POST',

            body: formData

        });
  }

  function test(e) {
    e.preventDefault();
    fetchMyAPI();
    console.warn(data);

    const root = ReactDOM.createRoot(document.getElementById("showhere2"));
    root.render(<Ordform id={data} />);
  }

  async function fetchMyAPI() {
    console.warn(reference);
    let cats = await fetch("http://127.0.0.1:8000/api/appros/get/" + reference);
    cats = await cats.json();
    setData(cats);
  }

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-4">historique</div>
        <div className="col-md-8">
          <form onSubmit={addProd}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Reference</label>
                <input
                  type="text"
                  onChange={(e) => setReference(e.target.value)}
                  className="form-control"
                  id="inputEmail4"
                  placeholder="reference"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Date</label>
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Fournisseur</label>
              <input
                type="text"
                onChange={(e) => setFour(e.target.value)}
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <br></br>

            <button onClick={(e) => test(e)}>Recherche si disponible</button>
            <div id="showhere2"></div>
            <input className="btn btn-success btn-block" type="submit" value="Add Product" />
            
          </form>
        </div>
      </div>
    </div>
  );
}
export default Ordindex;
