import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import Modalpr from './Modalpr';

import MenuItem from "@material-ui/core/MenuItem";



function Prindex() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let cats = await fetch("http://127.0.0.1:8000/api/categories/list");
            cats = await cats.json();
            setData(cats)
        } fetchMyAPI()
    }, [])
    const options = data.map(d => ({
        "value": d.id,
        "label": d.nom
    }))
    console.warn(options)






    const [Reference, setReference] = useState("")
    const [Libelle, setLibelle] = useState("")
    const [prix_v, setPrix_v] = useState("")
    const [prix_a, setprix_a] = useState("")
    const [file, setFile] = useState("")
    const [Qnt, setQnt] = useState("")
    const [cat, setCat] = useState("")
    async function addProd(e) {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('reference', Reference);
        formData.append('libelle', Libelle);
        formData.append('prix_a', prix_a);
        formData.append('prix_v', prix_v);
        formData.append('quantite', Qnt);
        formData.append('categorie', cat);
        formData.append('file', file);

        formData.append('file', file);
        let result = await fetch("http://127.0.0.1:8000/api/produits", {
            method: 'POST',

            body: formData

        });



    }




    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-4">
                    <div className="border bg-white p-3">
                        <h4>Add Products</h4>
                        <hr />
                        <form action="" onSubmit={addProd}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Reference</label>
                                <input type="text" className="form-control" onChange={(e) => setReference(e.target.value)} id="exampleInputEmail1" placeholder="reference"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Libelle</label>
                                <input type="text" className="form-control" onChange={(e) => setLibelle(e.target.value)} id="exampleInputPassword1" placeholder="libelle" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">prix vente</label>
                                <input type="number" className="form-control" onChange={(e) => setPrix_v(e.target.value)} id="exampleInputPassword1" placeholder="prix_v" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">prix achat</label>
                                <input type="number" className="form-control" onChange={(e) => setprix_a(e.target.value)} id="exampleInputPassword1" placeholder="prix_a" />
                            </div>
                            <div className="form-group">
                                <label htmlFor=" exampleInputEmail1">Quantite</label>
                                <br></br>
                                <input type="number" className="form-control" onChange={(e) => setQnt(e.target.value)} id="exampleInputPassword1" placeholder="quantite" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Image</label>
                                <br></br>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control-file" id="exampleFormControlFile1" placeholder="file" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputState">Category</label>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={cat}
                                    onChange={(ev) => setCat(ev.target.value)}
                                >
                                    {data.map((d) => (
                                        <MenuItem value={d.id}>{d.nom}</MenuItem>
                                    ))}
                                </Select>
                            </div>

                            <input className="btn btn-success btn-block" type="submit" value="Add Product" />

                        </form>
                    </div>
                </div>


                <div className="col-md-8">
                    <Modalpr />

                </div>
            </div>

        </div>)


}


export default Prindex
