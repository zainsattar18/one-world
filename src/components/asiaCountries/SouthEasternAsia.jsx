import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom"
import axios from "axios"
import "../css/Country.css"

class SouthEastAsia extends Component {
  constructor() {
    super();
    this.state = {
      country: []
    }
  }
  async componentDidMount() {
    const country = await axios("https://cors-anywhere.herokuapp.com/http://countryapi.gear.host/v1/Country/getCountries?pRegion=Asia&pSubRegion=South-Eastern%20Asia")


    this.setState({
      country: country.data.Response

    })

  }


  render() {
    return (
      <div className="center">
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

export default withRouter(SouthEastAsia)