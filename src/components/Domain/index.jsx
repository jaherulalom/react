import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redirect } from '../../actions/routeActions';
import { Content } from '../../components/common/Content/Content';
import { getServices } from '../../actions/userActions';


export class Domain extends React.Component {

  componentWillMount() {
    this.props.getServices();
  }
  componentWillReceiveProps(nextProps){
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <Content>
          <h1>hello</h1>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  getServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Domain);
