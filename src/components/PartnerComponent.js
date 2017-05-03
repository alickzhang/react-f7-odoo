import React, { Component } from 'react'
import {
  ContentBlockTitle,
  List,
  ListItem,
  FormLabel,
  FormInput
} from 'framework7-react'

class PartnerComponent extends Component {
  render() {
    const {
      name, partnerFunction, supplier, customer, phone, mobile, email, website, country, city,
      zip, street, opportunities, sales
    } = this.props

    console.log(this.props)

    return (
      <div>
        <ContentBlockTitle>Information</ContentBlockTitle>
        <List>
          <ListItem>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" placeholder="Name" value={name}></FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Function</FormLabel>
            <FormInput type="text" placeholder="Function" value={partnerFunction}></FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Supplier</FormLabel>
            <FormInput type="switch" />
          </ListItem>
          <ListItem>
            <FormLabel>Customer</FormLabel>
            <FormInput type="switch" />
          </ListItem>
        </List>
        <ContentBlockTitle>Contact</ContentBlockTitle>
        <List>
          <ListItem>
            <FormLabel>Phone</FormLabel>
            <FormInput type="tel" placeholder="Phone">{phone}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Mobile</FormLabel>
            <FormInput type="tel" placeholder="Mobile">{mobile}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" placeholder="Email" className="text-overflow">{email}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Website</FormLabel>
            <FormInput type="url" placeholder="Website" className="text-overflow">{website}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Country</FormLabel>
            <FormInput type="text" placeholder="Country">{country}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>City</FormLabel>
            <FormInput type="text" placeholder="City">{city}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Zip</FormLabel>
            <FormInput type="number" placeholder="Zip">{zip}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Street</FormLabel>
            <FormInput type="text" placeholder="Street">{street}</FormInput>
          </ListItem>
        </List>
        <ContentBlockTitle>Details</ContentBlockTitle>
        <List>
          <ListItem>
            <FormLabel>Opportunities</FormLabel>
            <FormInput type="text">{opportunities}</FormInput>
          </ListItem>
          <ListItem>
            <FormLabel>Sales</FormLabel>
            <FormInput type="text">{sales}</FormInput>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default PartnerComponent
