import * as React from 'react';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profileActions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div>Profile</div>
    );
  }
}

const mapStateToProps = state => { };

export default connect(null, { getCurrentProfile })(Dashboard);