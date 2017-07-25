import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { redirect } from '../../actions/routeActions';

// import NavbarLogo from '../../assets/png/navbar_logo.png';

export const StyledHeaderLogo = styled.img`
  width: 30%;
  max-width: 50px;
  max-width: 320px;
  margin-top: 17px;
  margin-left: 40%;
  display: block;
  float: left;
  cursor: pointer;
  @media screen and (max-width: 420px) {
    width: 30%;
    max-width: 50px;
    max-width: 320px;
    margin-top: 17px;
    margin-left: 30%;
    display: block;
    float: left;
    cursor: pointer;
}
`;



export class HeaderLogo extends Component {
  onClickHome = () => (
      () => {
        this.props.domainIndexNull();
        this.props.highlightFalse();
        this.props.redirect(`/`);
      }
    )

  render() {
    return (
      <StyledHeaderLogo onClick={this.onClickHome()} src={NavbarLogo} />
    )
  }
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  redirect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderLogo);
