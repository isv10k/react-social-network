import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const withRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth ? (
                <Component {...this.props} />
            ) : (
                <Redirect to="/login" />
            );
        }
    }
    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        };
    };

    return connect(mapStateToProps)(RedirectComponent);
};

export default withRedirect;
