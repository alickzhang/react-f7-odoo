import React, { Component } from 'react'
import {Page} from 'framework7-react'

class About extends Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }

  handleChange(event) {
    console.log('switch')
    this.setState({
      checked: event.target.checked
    })
  }

  render() {
    return (
      <Page>
        <div className="item-input">
          <label className="label-switch no-fastclick">
            <input
              type="checkbox"
              checked={this.state.checked}
              // disabled={props.disabled}
              onChange={this.handleChange.bind(this)}
            />
            <div className="checkbox"></div>
          </label>
        </div>
      </Page>
    )
  }
}

export default About
