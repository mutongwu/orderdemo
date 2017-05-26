import { Component } from 'react';
import { connect } from 'react-redux';
// import { setRedirectUrl } from 'components/AuthContainer/auth.action';

class AuthContainer extends Component {
  componentDidMount() {
    const { dispatch, currentURL, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      console.log('currentURL', currentURL);
      // dispatch(setRedirectUrl(currentURL))
    }
  }
  render() {
    const {
      isLoggedIn
    } = this.props;
    if (isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}
export default connect((state) => {
  isLoggedIn: state.auth.isLoggedIn
})(AuthContainer)