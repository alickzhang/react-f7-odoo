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
  Popup,
} from 'framework7-react'

import request from '../common/request'
import config from '../common/config'
import { avatar } from '../common/util'
import PartnerComponent from '../components/PartnerComponent'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      partnerPopupOpened: false
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

  openPopup() {
    this.setState({
      partnerPopupOpened: true
    })
  }

  closePopup() {
    this.setState({
      partnerPopupOpened: false
    })
  }

  onClickSave() {
    this.partnerPopup.add()
    this.closePopup()
  }

  render() {
    const { contacts } = this.state
    const listItems = contacts.map(contact =>
      <ListItem key={contact.id} link={"/contact/" + contact.id}>
        <img className="avatar" src={avatar(contact.image)} width="60" alt="" />
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
            <Link icon="fa fa-plus" onClick={this.openPopup.bind(this)} />
          </NavRight>
        </Navbar>
        <div>
          <Searchbar
            cancelLink="Cancel"
            searchList="#search-list"
            clearButton="true"
            placeholder="Search in contacts"
          />
          <List className="searchbar-not-found">
            <ListItem className="text" title="Nothing found" />
          </List>
          <List className="searchbar-found" id="search-list">
          {
            listItems
          }
          </List>
        </div>

        <Popup opened={this.state.partnerPopupOpened}>
          <Navbar>
            <NavLeft className="nav-left-text">
              <Link onClick={this.closePopup.bind(this)}>Cancel</Link>
            </NavLeft>
            <NavRight className="nav-right-text">
              <Link onClick={this.onClickSave.bind(this)}>Save</Link>
            </NavRight>
          </Navbar>
          <PartnerComponent ref={input => { this.partnerPopup = input }} editing={true} />
        </Popup>

      </Page>
    )
  }
}

export default Contact
