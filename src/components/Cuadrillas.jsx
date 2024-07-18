import React from 'react';
import './Cuadrillas.css';

const Cuadrillas = () => {
  return (
    <section id="cuadrillas" className="cuadrillas">
      <div className="cardc">
        <div className="contenido">
          <h2>Cuadrillas</h2>
          
          <table className="table">
            <thead>
              <tr>
                <th>Cuadrilla</th>
                <th>Sector</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>32114</td>
                <td>Sector 1</td>
              </tr>
              <tr>
                <td>7684</td>
                <td>Sector 2</td>
              </tr>
              <tr>
                <td>0984</td>
                <td>Sector 3</td>
              </tr>
              <tr>
                <td>77548</td>
                <td>Sector 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cuadrillas;