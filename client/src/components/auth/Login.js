import * as React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuth) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuth) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const user = {
      email, password
    };

    this.props.loginUser(user);
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your DevConnector account</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={this.onChange}
                  error={errors.email} />
                <TextFieldGroup
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password} />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { loginUser })(Login);