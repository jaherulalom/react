import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { redirect } from '../actions/routeActions';
import { getSession } from '../actions/userActions';

import { ThemeProvider } from 'styled-components';
import FullScreen from './common/Content/FullScreen';
import Header from '../components/Header/Header';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

const ANDTheme = {
  red: "#fe2b34",
  black: 'black',
  heroFont: 'roboto',
  everydayFont: 'poppins',
};

export class App extends React.Component {
  componentWillMount(){
    this.props.getSession();
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.user || this.props.user) this.props.redirect('/login');
  }
  render() {
    return (
      <MuiThemeProvider>
        <ThemeProvider theme={ANDTheme} >
          <FullScreen>
            { !this.props.user
              && <Header /> }
            { this.props.user
              && <SideBar /> }
            { this.props.children }
          </FullScreen>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  redirect,
  getSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
