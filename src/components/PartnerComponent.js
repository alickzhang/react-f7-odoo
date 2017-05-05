import React, { Component } from 'react'
import {
  ContentBlockTitle,
  List,
  ListItem,
  FormLabel,
} from 'framework7-react'

import request from '../common/request'
import config from '../common/config'
import { FormInput } from './FormInput'

class PartnerComponent extends Component {
  constructor(props) {
    super(props)

    const {
      name, partnerFunction, supplier, customer, phone, mobile, email, website, country, city,
      zip, street, opportunities, sales
    } = this.props

    this.state = {
      name: name,
      partnerFunction: partnerFunction,
      supplier: supplier,
      customer: customer,
      phone: phone,
      mobile: mobile,
      email: email,
      website: website,
      country: country,
      city: city,
      zip: zip,
      street: street,
      opportunities: opportunities,
      sales: sales,
      session_id: '280d3edacce85fe83d4d86830a334550986c9914',
    }
  }

  add() {
    const url = config.api.base + config.api.addContact
    const body = this.state

    console.log(body)

    request.post(url, body).then(data => {
      console.log(data)
    }).catch(err => {
      console.error(err)
    })
  }

  handleChange(type, event) {
    let state = {}
    state[type] = event.target.value
    this.setState(state)
  }

  handleSwitch(type, event) {
    let state = {}
    state[type] = event.target.checked
    this.setState(state)
  }

  render() {
    const { editing } = this.props

    return (
      <div>
        <ContentBlockTitle>Information</ContentBlockTitle>
        <List>
          <ListItem>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              placeholder={editing ? "Name" : null}
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Function</FormLabel>
            <FormInput
              type="text"
              placeholder={editing ? "Function" : null}
              value={this.state.partnerFunction}
              onChange={this.handleChange.bind(this, 'partnerFunction')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Supplier</FormLabel>
            <FormInput
              type="switch"
              checked={this.state.supplier}
              disabled={!editing}
              onChange={this.handleSwitch.bind(this, 'supplier')}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Customer</FormLabel>
            <FormInput
              type="switch"
              checked={this.state.customer}
              disabled={!editing}
              onChange={this.handleSwitch.bind(this, 'customer')}
            />
          </ListItem>
        </List>
        <ContentBlockTitle>Contact</ContentBlockTitle>
        <List>
          <ListItem>
            <FormLabel>Phone</FormLabel>
            <FormInput
              type="tel"
              placeholder={editing ? "Phone" : null}
              value={this.state.phone ? this.state.phone : ''}
              onChange={this.handleChange.bind(this, 'phone')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Mobile</FormLabel>
            <FormInput
              type="tel"
              placeholder={editing ? "Mobile" : null}
              value={this.state.mobile ? this.state.mobile : ''}
              onChange={this.handleChange.bind(this, 'mobile')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              placeholder={editing ? "Email" : null}
              className="text-overflow"
              value={this.state.email ? this.state.email : ''}
              onChange={this.handleChange.bind(this, 'email')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Website</FormLabel>
            <FormInput
              type="url"
              placeholder={editing ? "Website" : null}
              className="text-overflow"
              value={this.state.website ? this.state.email : ''}
              onChange={this.handleChange.bind(this, 'website')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Country</FormLabel>
            <FormInput
              type="text"
              placeholder={editing ? "Country" : null}
              value={this.state.country}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>City</FormLabel>
            <FormInput
              type="text"
              placeholder={editing ? "City" : null}
              value={this.state.city ? this.state.city : ''}
              onChange={this.handleChange.bind(this, 'city')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Zip</FormLabel>
            <FormInput
              type="number"
              placeholder={editing ? "Zip" : null}
              value={this.state.zip ? this.state.zip : ''}
              onChange={this.handleChange.bind(this, 'zip')}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Street</FormLabel>
            <FormInput
              type="text"
              placeholder={editing ? "Street" : null}
              value={this.state.street ? this.state.street : ''}
              onChange={this.handleChange.bind(this, 'street')}
              readonly={!editing}
            />
          </ListItem>
        </List>
        <ContentBlockTitle>Details</ContentBlockTitle>
        <List>
          <ListItem>
            <FormLabel>Opportunities</FormLabel>
            <FormInput
              type="text"
              value={this.state.opportunities}
              readonly={!editing}
            />
          </ListItem>
          <ListItem>
            <FormLabel>Sales</FormLabel>
            <FormInput
              type="text"
              value={this.state.sales}
              readonly={!editing}
            />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default PartnerComponent
