import React from 'react';
import './GestionA.css';

const GestionA = () => {
  return (
    <section id="gestion" className="gestiona">
      <div className="card">
        <div className="contenido">
          <h2>Gestión de los Archivos</h2>
          
          <table className="table">
            <thead>
              <tr>
                <th>Activo</th>
                <th>Status</th>
                <th>Sector</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Activo 1</td>
                <td className='cir uno'></td>
                <td>Sector 1</td>
                
              </tr>
              <tr>
                <td>Activo 2</td>
                <td className='cir dos'></td>
                <td>Sector 2</td>
                
              </tr>
              <tr>
                <td>Activo 3</td>
                <td className='cir tres'></td>
                <td>Sector 3</td>
                
              </tr>
              <tr>
                <td>Activo 4</td>
                <td className='cir cuatro'></td>
                <td>Sector 4</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default GestionA;
