import React from 'react';
import {Table} from 'react-bootstrap';
import {array} from 'prop-types';

import {SERVER_URL} from './config';
import headers from './security/headers';

class Vehicles extends React.Component {
  constructor(props) {
  super(props);

    this.state = {
      vehicle:null,
      id:null,
      name: '',
      make: {id: ''},
      model: {id: ''},
      driver: {id: ''}

    }
  }



  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  updateName(event) {
    this.setState({ name: event.target.value })
  }
  loadList(id) {
    fetch(SERVER_URL+'/api/vehicle/' + id, {
      method: 'GET',
      headers: headers(),
    }).then(response =>  {
      return response.json();
    }).then(json => {
      console.log(JSON.stringify(json));
      this.setState({vehicle: json});
    });
  }

  updateVehicle(event) {
    event.preventDefault();

    if(this.state.name) {

      fetch(SERVER_URL+'/api/vehicle/'+this.state.id, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({
          name: this.state.name
        })
      }).then(response =>  {
        return response.json()
      }).then(json => {


        //this.loadLists();

      });
    }
  }


  selectList(event) {
    //Set scope of page id to be current id in question being edited
    this.setState({id:event.target.id});
    this.loadList(event.target.id);

  }
  render() {

    const selectList = this.selectList.bind(this);
    const updateVehicle = this.updateVehicle.bind(this);
    const updateName = this.updateName.bind(this);
   // const handleNameChange= this.handleNameChange.bind(this);
    const vehc =  this.state.vehicle;

    function renderVehicleRow(vehicle) {
      return (<tr key={vehicle.id}>
        <td>{vehicle.id}</td>
        <td>{vehicle.name}</td>
        <td>{vehicle.make.name}</td>
        <td>{vehicle.model.name}</td>
        <td>{vehicle.driver.name}</td>
        <td><button id={ vehicle.id } onClick={ selectList }>Select</button></td>
      </tr>);
    }


    function editVehicleRow(vehicle) {

      return (
          <form className="newVehicle" onSubmit={ updateVehicle }>
          <Table striped bordered condensed hover>
            <tbody>
          <tr key={vehicle.id}>
            <td>{vehicle.id}</td>

            <td><input type="text" defaultValue={vehicle.name} name="vehicle.name" onChange={ updateName }/></td>
            <td>{vehicle.make.name}</td>
            <td>{vehicle.model.name}</td>
            <td>{vehicle.driver.name}</td>
            <td><input type="submit" value="Save" /></td>
            </tr>
            </tbody>
            </Table>

          </form>
      );
    }


    return <div>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Make</th>
          <th>Model</th>
          <th>Driver</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>

        {this.props.vehicles.map(renderVehicleRow)}

        </tbody>
      </Table>

      {vehc ? editVehicleRow(vehc)  : null}
    </div>;
  }
}

Vehicles.propTypes = {
  vehicles: array
};

export default Vehicles;