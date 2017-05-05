import React from 'react'
import PropTypes from 'prop-types'
import {
  Framework7App,
  Views,
  Navbar,
  NavLeft,
  NavCenter,
  NavRight,
  Link,
  Pages,
  Page,
  View,
  ContentBlock,
  List,
  ListItem,
  GridRow,
  GridCol,
  Button,
  Panel,
  Popup,
  LoginScreen,
  LoginScreenTitle,
  FormLabel,
  FormInput,
  ListButton,
  ListLabel,
  Statusbar,
} from 'framework7-react'

import { routes } from './routes'

let currentRoute

export const getCurrentRoute = () => currentRoute

const MainViews = (props, context) => {
  return (
    <Views>
      <View id="main-view">
        <Pages>
          <Page>
            <Navbar>
              <NavLeft>
                <Link icon="fa fa-bars" openPanel="left" />
              </NavLeft>
              <NavCenter sliding>Odoo</NavCenter>
            </Navbar>
            <List>
              <ListItem link="/contacts/" title="Contacts"></ListItem>
              <ListItem link="/form/" title="Form"></ListItem>
              <ListItem link="/about/" title="About"></ListItem>
            </List>
            <ContentBlock>
              <GridRow>
                <GridCol width={50}>
                  <Button openPopup="#popup">Popup</Button>
                </GridCol>
                <GridCol width={50}>
                  <Button openLoginScreen="#login-screen">Login Screen</Button>
                </GridCol>
              </GridRow>
            </ContentBlock>
          </Page>
        </Pages>
      </View>
    </Views>
  )
}

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object
}

const LeftPanel = (props, context) => (
  <Panel left reveal>
    <View id="left-panel-view" navbarThrough dynamicNavbar="true">
      {context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
      <Pages>
        <Page>
          {context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
          <List>
            <ListItem link="/contacts/" title="Contacts" linkView="#main-view" linkClosePanel></ListItem>
            <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
          </List>
        </Page>
      </Pages>
    </View>
  </Panel>
)

LeftPanel.contextTypes = {
  framework7AppContext: PropTypes.object
}

const AppPopup = () => (
  <Popup id="popup">
    <View navbarFixed>
      <Pages>
        <Page>
          <Navbar title="Popup">
            <NavRight>
              <Link closePopup>Close</Link>
            </NavRight>
          </Navbar>
          <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
        </Page>
      </Pages>
    </View>
  </Popup>
)

const AppLoginScreen = () => (
  <LoginScreen id="login-screen">
    <View>
      <Pages>
        <Page loginScreen>
          <LoginScreenTitle>Login</LoginScreenTitle>
          <List form>
            <ListItem>
              <FormLabel>Username</FormLabel>
              <FormInput name="username" placeholder="Username" type="text" />
            </ListItem>
            <ListItem>
              <FormLabel>Password</FormLabel>
              <FormInput name="password" type="password" placeholder="Password" />
            </ListItem>
          </List>
          <List>
            <ListButton title="Sign In" closeLoginScreen />
            <ListLabel>
              <p>Click Sign In to close Login Screen</p>
            </ListLabel>
          </List>
        </Page>
      </Pages>
    </View>
  </LoginScreen>
)

export const App = () => (
  <Framework7App themeType="ios" onRouteChange={route => currentRoute = route} routes={routes}>
    <Statusbar />
    <LeftPanel />
    <MainViews />
    <AppPopup />
    <AppLoginScreen />
  </Framework7App>
)
