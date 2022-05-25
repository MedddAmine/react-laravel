import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import ChildModal from './ChildCat';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';



function Catcards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMyAPI();
  }, [])
  const avatarFormatter = ({ value }) => {
    return <img src={'http://127.0.0.1:8000/' + value} width="50px" height="50px" />;
  };
  async function delet(id) {
    let result = await fetch("http://localhost:8000/api/categories/delete/" + id, {
      method: 'DELETE'
    });
    fetchMyAPI();

  }


  async function fetchMyAPI() {
    let cats = await fetch("http://127.0.0.1:8000/api/categories/list");
    cats = await cats.json();
    setData(cats)
  }


  const buttoncreator = ({ value }) => {
    return <ChildModal id={value} />;
  };

  return (
    <div className="App">
      <h2>
        Categorie
      </h2>
      <div className="ag-theme-alpine ag-style">
        <AgGridReact
          defaultColDef={{ flex: 1 }}
          rowHeight={60}
          rowData={data}
        >

          <AgGridColumn
            field="nom"
            headerName="Nom du categorie"
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
          <AgGridColumn
            headerName="id"
            field="id"
            cellRendererFramework={buttoncreator}
            cellClass="vertical-middle"
          />
        </AgGridReact>
      </div>
    </div>
  );
}
export default Catcards