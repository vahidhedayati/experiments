import React from 'react';
import {Table,Row, Col} from 'react-bootstrap';
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


  handleMakeChange(event)  {
    this.setState({make: {id: event.target.value}});
  };

  handleModelChange(event) {
    this.setState({model: {id: event.target.value}});
  };

  handleDriverChange(event) {
    this.setState({driver: {id: event.target.value}});
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
    var handleToUpdate  =   this.props.handleToUpdate;
    if(this.state.name) {

      fetch(SERVER_URL+'/api/vehicle/'+this.state.id, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({
          name: this.state.name,
          make: {id: this.state.make.id},
          model: {id: this.state.model.id},
          driver: {id: this.state.driver.id}
        })
      }).then(response =>  {
        return response.json()
      }).then(json => {
        //handleToUpdate is passed in by Garage.js - then passed back this value
        handleToUpdate('reloadVehicle');
        this.setState({vehicle:null});
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
    const handleMakeChange= this.handleMakeChange.bind(this);
    const handleModelChange= this.handleModelChange.bind(this);
    const handleDriverChange= this.handleDriverChange.bind(this);
    const makes = this.props.makes;
    const models = this.props.models;
    const drivers = this.props.drivers;


    const makeId=this.state.make.id;
    const modelId=this.state.model.id;
    const driverId=this.state.driver.id;


    function renderVehicleRow(vehicle) {
      return (<tr key={vehicle.id}>
        <td>{vehicle.id}</td>
        <td>{vehicle.name}</td>
        <td>{vehicle.make.name}</td>
        <td>{vehicle.model.name}</td>
        <td>{vehicle.driver.name}</td>
        <td>
          <button id={ vehicle.id } onClick={ selectList }>Select</button>
        </td>
      </tr>);
    }


    function editVehicleRow(vehicle) {

      function renderSelectList(item) {
        return <option key={item.id} value={item.id}>{item.name}</option>

      }
      return (
          <div>
          <form className="newVehicle" onSubmit={ updateVehicle }>
            <Row>
            <Col md={2}>

               <input type="text" defaultValue={vehicle.name} name="vehicle.name" onChange={ updateName }/>
              </Col>

                <Col md={2}>
                  <select className="form-control" name="make"  value={makeId}  onChange={handleMakeChange}>
                    {makes.map(renderSelectList)}
                  </select>
                </Col>


                <Col md={2}>
                  <select className="form-control" name="model" value={modelId}   onChange={handleModelChange}>
                    {models.map(renderSelectList)}
                  </select>
                </Col>


                <Col md={3}>
                  <select className="form-control" name="driver" value={driverId}
                          onChange={handleDriverChange}>
                    {drivers.map(renderSelectList)}
                  </select>
                </Col>
            <Col md={1}>
               <input type="submit" value="Save" />
            </Col>
</Row>
          </form>
            </div>
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