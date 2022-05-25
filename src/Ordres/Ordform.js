import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modalpr from "./Modalpr";

function Ordform(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMyAPI();
  }, []);
  async function fetchMyAPI() {
    let cats = await fetch("http://127.0.0.1:8000/api/approstemp/list");
    cats = await cats.json();
    setData(cats);
    console.warn("fetched");
  }

  async function delet(id) {
    console.warn(id);
    let cats = await fetch(
      "http://127.0.0.1:8000/api/approstemp/delete/" + id,
      {
        method: "DELETE",
      }
    );

    fetchMyAPI();
  }
  async function deleteall() {
    let cats = await fetch("http://127.0.0.1:8000/api/approstemp/deleteall/", {
      method: "DELETE",
    });

    fetchMyAPI();
  }



  const isgood = props.id;
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  async function handleChange(id, qnt){
    console.warn(id);
    console.warn(qnt);

    let cats = await fetch(
      "http://127.0.0.1:8000/api/approstemp/setqnt/id/" + id+ "/qnt/"+qnt,
      
    );


    
  };

  

  const handleClose = () => {
    setOpen(false);
    fetchMyAPI();
  };

  switch (isgood) {
    case 0:
      return (
        <div>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Reference deja utilisee "}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Vous devez changer le reference du cette commandes
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      );
      break;
    case 1:
      return (
        <div>
          <br />
          <Button onClick={() => deleteall()} variant="secondary">
            Supprimer Tout
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={() => fetchMyAPI()} variant="secondary">
            Refreshir
          </Button>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"># Reference</th>
                  <th scope="col">Produit</th>
                  <th scope="col">Quantite</th>
                  <th scope="col">operations</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>

                    <td>
                      {item.Reference}
                    </td>
                    <td>{item.Produit}</td>
                    <td>
                      <input
                        type="text"
                        name="password"
                        onChange={(e) => handleChange(item.id, e.target.value)}
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() => delet(item.id)}
                        variant="danger"
                      >
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          <Modalpr />
        </div>
      );
      break;
    default:
      return;
  }
}

export default Ordform;
