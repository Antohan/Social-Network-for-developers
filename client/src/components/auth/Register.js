import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuth) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const { name, email, password, password2 } = this.state;

    const newUser = {
      name, email, password, password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { name, email, password, password2, errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name} />
                <TextFieldGroup
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={this.onChange}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                  error={errors.email} />
                <TextFieldGroup
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password} />
                <TextFieldGroup
                  type="password"
                  name="password2"
                  placeholder="onfirm Password"
                  value={password2}
                  onChange={this.onChange}
                  error={errors.password2} />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { registerUser })(withRouter(Register));