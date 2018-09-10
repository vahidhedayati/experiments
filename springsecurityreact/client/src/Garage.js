import React from 'react';
import Vehicles from './Vehicles';
import AddVehicleForm from './AddVehicleForm';
import { Row, Jumbotron, Button } from 'react-bootstrap';
import { SERVER_URL } from './config';
import headers from './security/headers';
import 'whatwg-fetch';

import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


class Garage extends React.Component {

  constructor(props) {
    super(props);
    var handleToUpdate  = this.handleToUpdate.bind(this);
    this.state = {
      vehicles: [],
      makes: [],
      models: [],
      drivers: [],
      exportToFile:false,
    }
  }

  handleToUpdate(someArg){
    if (someArg==='reloadVehicle') {
      this.loadVehicle();
    }
  }

  loadVehicle() {
    fetch(`${SERVER_URL}/api/vehicle`, {
      method: 'GET',
      headers: headers(), //<1>
    })
        .then(r => r.json())
        .then(json => this.setState({vehicles: json}))
        .catch(error => console.error('Error retrieving vehicles: ' + error));
  }

  componentDidMount() {
    this.loadVehicle();

    fetch(`${SERVER_URL}/api/make`, {
        method: 'GET',
        headers: headers() //<1>
      })
      .then(r => r.json())
      .then(json => this.setState({makes: json}))
      .catch(error => console.error('Error retrieving makes: ' + error));

      fetch(`${SERVER_URL}/api/model`, {
        method: 'GET',
        headers: headers() //<1>
    })
      .then(r => r.json())
      .then(json => this.setState({models: json}))
      .catch(error => console.error('Error retrieving models ' + error));

    fetch(`${SERVER_URL}/api/driver`, {
        method: 'GET',
        headers: headers() //<1>
    })
      .then(r => r.json())
      .then(json => this.setState({drivers: json}))
      .catch(error => console.error('Error retrieving drivers: ' + error));
  }



  submitNewVehicle = (vehicle) => {
    fetch(`${SERVER_URL}/api/vehicle`, {
      method: 'POST',
      headers: headers(), //<1>
      body: JSON.stringify(vehicle)
    }).then(r => r.json())
      .then(json => {
        let vehicles = this.state.vehicles;
        vehicles.push({id: json.id, name: json.name, make: json.make, model: json.model, driver: json.driver});
        this.setState({vehicles});
      })
      .catch(ex => console.error('Unable to save vehicle', ex));
  };


  excelSheet(vehicles) {
    return   <ExcelFile>
      <ExcelSheet data={vehicles} name="vehicles">
        <ExcelColumn label="name" value="name"/>
        <ExcelColumn label="make" value="make.name"/>
        <ExcelColumn label="model" value="model.name"/>
        <ExcelColumn label="driver" value="driver.name"/>
      </ExcelSheet>
    </ExcelFile>

  }

  defaultContent(excelContent,logoutButton,makes,models,drivers,vehicles,handleToUpdate) {
    return  <Row>
      <Jumbotron>
        <h1>Welcome to the My garage</h1>
        <button onClick={ excelContent }>Render Excel</button>
        {logoutButton}
      </Jumbotron>
      <Row>
        <AddVehicleForm onSubmit={this.submitNewVehicle} makes={makes} models={models} drivers={drivers}/>
      </Row>
      <Row>
        <Vehicles vehicles={vehicles}  handleToUpdate = {handleToUpdate.bind(this)} />
      </Row>
    </Row>
  }

  excelContent() {
    this.setState({exportToFile:true});
  }

  actualContent () {
    const {vehicles, makes, models, drivers,exportToFile} = this.state;

    const logoutButton = <Button bsStyle="warning" className="pull-right" onClick={this.props.logoutHandler}>Log Out</Button>;
    var handleToUpdate = this.handleToUpdate;

    const excelContent = this.excelContent.bind(this);
    const excelSheet =   this.excelSheet(vehicles);
    const defaultContent = this.defaultContent(excelContent,logoutButton,makes,models,drivers,vehicles,handleToUpdate);
   return exportToFile ? excelSheet : defaultContent
}

  render() {
    return this.actualContent();
  }
}

export default Garage;
