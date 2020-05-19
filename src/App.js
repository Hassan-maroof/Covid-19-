import React from 'react';

import { Cards, CountryPicker, Chart , AllCountries } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import {Route} from "react-router-dom"
import image from './images/image.png';
import {Link} from 'react-router-dom' ;

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  

  render() {
    const { data, country } = this.state;
    console.log(data) ;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.image} src={image} alt="COVID-19" />
          
          <nav className={styles.countrysearchBar}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </nav>
        </div>
          <Cards data={data} />
          <Chart data={data} country={country} /> 
         
          
        </div>
    );
  }
}

export default App;
/*<Route path="/Summary" component={AllCountries}/>
            <button className= {styles.countryButton}>
            <Link to = "/Summary">Summary</Link>
          </button>*/ 