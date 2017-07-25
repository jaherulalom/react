import React from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { HeaderDiv, HeaderUserDetails } from './HeaderDiv';
import LetterAvatar from '../common/letterAvatar';
import Username from '../common/Username';
import HeaderLogo from '../common/Logos';

export class Header extends React.Component {
  logout = () => (
      () => {
        localStorage.clear();
        location.reload();
      }
    );

  render() {
    return(
  <HeaderDiv>
    <HeaderLogo />
    <HeaderUserDetails>
      <LetterAvatar username={this.props.user.username} backgroundColor={'grey'}/>
      <Username  name={this.props.user.firstName || this.props.user.username} />
      <div style={{ position: 'relative', flexBasis: 'auto' }}>
        <IconMenu
          iconButtonElement={<IconButton iconStyle={{ color: 'white' }}><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          {/* <MenuItem>My squad</MenuItem>
          <MenuItem>Search</MenuItem>
          <MenuItem>My profile</MenuItem> */}
          <MenuItem onClick={this.logout()}>Log out</MenuItem>
        </IconMenu>
      </div>
    </HeaderUserDetails>
  </HeaderDiv>
)
}
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
