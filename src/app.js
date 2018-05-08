import React from 'react';
import './base.css';
const styles = require('./app.css');

export default class App extends React.Component {
  state = {

  }

  render(){
    return(
      <div className={styles.wrapper}>
        <span className={styles.text}>
          No
        </span>
      </div>
    )
  }
}
