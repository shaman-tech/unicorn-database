import React, {Component} from "react";
import logo from './download.png';
import './App.css';
import axios from 'axios'

class App extends Component {
      constructor(props) {
        super(props);
        this.state = { apiResponse: [],
        selected: "choose" };
    
      }


    callData() {
      fetch("http://localhost:5500/api/users")
          .then(res => res.json())
          .then(res => this.setState({apiResponse: res}))
          .then( res => console.log(this.state.apiResponse[0]))
    }

    updateUnicorn = (event) => {
      event.preventDefault();

      var data = {location: this.state.location}
      axios.put("http://localhost:5500/api/unicorn/"+event.target.id,data)
      .then(
        window.location.reload(false)
      )

    }

    myChangeHandler = (event) => {
      let nam = event.target.name
      let val = event.target.value
      
      this.setState({[nam]: val})
    }

    componentWillMount() {
       // this.callAPI();
        this.callData();
    }


    render(){

      return (
        <div className="App">
          <nav>
            <img src={logo} alt="unicorn logo" />
        </nav>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Unicorn</th>
                <th scope="col">Location</th>
                <th scope="col">Color</th>
                <th scope="col">Favourite Food</th>
                <th scope="col">Edit Location</th>
              </tr>
            </thead>
            <tbody>
            {this.state.apiResponse.map((item, index)=>{
                  return <tr key={item._id}> 
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.color}</td>
                            <td>{item.favourite_food}</td>
                            <td><div className="input-group mb-3">
                    <form onSubmit={this.updateUnicorn} id={item._id}>
                    <select name="location" onChange={this.myChangeHandler} className="custom-select" id="inputGroupSelect01">
                      <option value="choose">Choose...</option>
                      <option value="Barn">Barn</option>
                      <option value="Pasture">Pasture</option>
                      <option value="Trail">Trail</option>
                    </select>
                    <div className="form-group">
                      <button type="submit" className="btn text-dark update">Update</button>
                    </div>
                    </form>
                  </div> </td>
                          </tr>
                })}
              
            </tbody>
          </table>
          
        </div>
      );

    }
    
}


export default App;
