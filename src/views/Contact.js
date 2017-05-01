import React, { Component } from 'react'
import {
  Page,
  Navbar,
  NavLeft,
  NavCenter,
  NavRight,
  Link,
  Searchbar,
  List,
  ListItem,
} from 'framework7-react'

import request from '../common/request'
import config from '../common/config'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentWillMount() {
    this.fetchContactList()
  }

  fetchContactList() {
    const url = config.api.base + config.api.contacts
    // const body = {
    //   login: 'alick.z@bmyg.com.au',
    //   password: '123'
    // }
    // request.post(url, body).then(data => {
    //   console.log(data)
    // })
    request.get(url, {
      session_id: '280d3edacce85fe83d4d86830a334550986c9914'
    }).then(data => {
      if (data) {
        console.log(data)
        this.setState({
          contacts: data
        })
      }
    }).catch(err => {
      console.error(err)
    })
  }

  render() {
    const { contacts } = this.state
    const listItems = contacts.map(contact =>
      <ListItem key={contact.id} link="/">
        <img className="avatar" src={"data:image/jpeg;base64," + contact.image} width="60" alt="" />
        <div className="details">
          <div className="item-title heading">{contact.name}</div>
          <div className="text text-overflow">{contact.email}</div>
          <div className="text">{contact.phone}</div>
        </div>
      </ListItem>
    )
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link icon="fa fa-bars" openPanel="left" />
          </NavLeft>
          <NavCenter>Contacts</NavCenter>
          <NavRight>
            <Link icon="fa fa-plus" />
          </NavRight>
        </Navbar>
        <Searchbar
          cancelLink="Cancel"
          searchList="#search-list"
          clearButton="true"
          placeHolder="Search in contacts"
        />
        <List className="searchbar-not-found">
          <ListItem title="Nothing found" />
        </List>
        <List className="searchbar-found" id="search-list">
        {
          listItems
        }
        </List>
      </Page>
    )
  }
}

export default Contact
