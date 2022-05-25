import React, {useState,useEffect} from 'react';
import Modalcat from './Modalcat';

function Catindex() {
    const [nom, setName]= useState("")
    const [file, setFile]= useState("")
    async function addCat(e){
        e.preventDefault();
        const formData =new FormData();
        formData.append('nom',nom);
        formData.append('file',file);
        let result = await fetch("http://127.0.0.1:8000/api/categories",{
            method:'POST',

            body:formData

        });

    }
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-4">
                    <div className="border bg-white p-3">
                        <h4>Ajouter une categorie</h4>
                        <hr />
                        <form action="" onSubmit={addCat}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nom</label>
                                <input type="text" onChange={(e)=>setName(e.target.value)} value={nom} placeholder="nom" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Image</label>
                            <br></br>
                            <input type="file"  onChange={(e)=>setFile(e.target.files[0])} placeholder="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div>


                            <input className="mt-4 btn btn-success btn-block" onClick={() =>  setFile(() => "")} type="submit" value="Add Product" />

                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                <Modalcat />

                </div>
            </div>

        </div>


    )
}

export default Catindex