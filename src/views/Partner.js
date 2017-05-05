import React, { Component } from 'react'
import {
  Page,
  Navbar,
  NavLeft,
  NavRight,
  Link,
} from 'framework7-react'

import request from '../common/request'
import config from '../common/config'
import PartnerComponent from '../components/PartnerComponent'

class Partner extends Component {
  constructor(props) {
    super(props)
    const { partnerId } = this.props
    this.state = {
      partnerId: partnerId,
      partner: {},
      partnerDataFetched: false,
      editing: false,
    }
  }

  componentWillMount() {
    this.fetchPartner()
  }

  fetchPartner() {
    const url = config.api.base + config.api.contacts + '/' + this.state.partnerId
    request.get(url, {
      session_id: '280d3edacce85fe83d4d86830a334550986c9914'
    }).then(data => {
      if (data && data.success) {
        this.setState({
          partner: data.partner,
          partnerDataFetched: true
        })
      }
    }).catch(err => {
      console.error(err)
    })
  }

  onClickEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    const {
      name, partnerFunction, supplier, customer, phone, mobile, email, website, country, city,
      zip, street, opportunities, sales
    } = this.state.partner

    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link back icon="fa fa-chevron-left">Contacts</Link>
          </NavLeft>
          <NavRight className="nav-right-text">
            <Link onClick={this.onClickEdit.bind(this)}>{!this.state.editing ? "Edit" : "Save"}</Link>
          </NavRight>
        </Navbar>
        {
          this.state.partnerDataFetched &&
          <PartnerComponent
            name={name}
            function={partnerFunction}
            supplier={supplier}
            customer={customer}
            phone={phone}
            mobile={mobile}
            email={email}
            website={website}
            country={country}
            city={city}
            zip={zip}
            street={street}
            opportunities={opportunities}
            sales={sales}
            editing={this.state.editing}
          />
        }
      </Page>
    )
  }
}

export default Partner
