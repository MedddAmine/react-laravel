import { Button, Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';



function Procards() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let cats = await fetch("http://127.0.0.1:8000/api/produits/list");
            cats = await cats.json();
            setData(cats)
        } fetchMyAPI()
    }, [])
    const avatarFormatter = ({ value }) => {
        return <img src={'http://127.0.0.1:8000/'+value} width="50px" height="50px" />;
      };
    
      return (
        <div className="App">
          <h2>
            Produit
          </h2>
          <div className="ag-theme-alpine ag-style">
            <AgGridReact
              defaultColDef={{ flex: 1 }}
              rowHeight={60}
              rowData={data}
            >
              <AgGridColumn
                field="reference"
                headerName="reference"
                sortable={true}
                filter={true}
                cellClass="vertical-middle"
              />
              <AgGridColumn
                field="libelle"
                headerName="libelle"
                sortable={true}
                filter={true}
                cellClass="vertical-middle"
              />
              <AgGridColumn
                field="prix_achat"
                headerName="prix achat"
                sortable={true}
                filter={true}
                cellClass="vertical-middle"
              />
                            <AgGridColumn
                field="prix_vente"
                headerName="prix vente"
                sortable={true}
                filter={true}
                cellClass="vertical-middle"
              />
                            <AgGridColumn
                field="qte_stock"
                headerName="Quantite du stock"
                sortable={true}
                filter={true}
                cellClass="vertical-middle"
              />
                                          <AgGridColumn
                field="cat_id"
                headerName="Categorie"
                sortable={true}
                filter={true}
                cellClass="vertical-middle"
              />
              
              <AgGridColumn
                field="image"
                headerName="Image"
                sortable={true}
                filter={true}
                cellRendererFramework={avatarFormatter}
                cellClass="vertical-middle"
              />
            </AgGridReact>
          </div>
        </div>
      );
}
export default Procards