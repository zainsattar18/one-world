import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom"
import axios from "axios"

class Antarctica extends Component {
  constructor() {
    super();
    this.state = {
      country: []
    }
  }
  async componentDidMount() {
    const country = await axios("https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?pRegion=Polar")


    this.setState({
      country: country.data.Response

    })

  }


  render() {
    return (
      <div className="centerPolar">
        {this.state.country.map(country =>
          <Link to={`/country/${country.Name}`} key={country.Name}>
            <div className="boxName" >
              <h2 className="country">{country.Name}</h2>
              <div className="flag">
                <img src={country.FlagPng} alt="Country" width="200px" />
              </div>
            </div>
          </Link>
        )}

      </div>
    )
  }
}

export default withRouter(Antarctica)