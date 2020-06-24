import React from 'react';
import { connect } from "react-redux";
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '696122541383-oo4hmifejcvrloogf6leddfbpe37704a.apps.googleusercontent.com',
                scope:'email'
            }).then( () => {
                //reference
                this.auth = window.gapi.auth2.getAuthInstance();
                //update the state
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    //to update the state without refreshing the app
    onAuthChange =(isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut();
        }
    }

    onSignIn = ()=> {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }
    
    renderAuthButton() {
        if (this.props.isSignedIn === null ){
            return null;
        }else if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOut} className = "ui red google button">
                    <i className = "google icon"/>
                    Sign Out
                </button>
            );
        }else {
            return (
                <button onClick={this.onSignIn} className = "ui red google button">
                    <i className = "google icon"/>
                    Sign In
                </button>
            );
        }
    }

    render () {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut })(GoogleAuth);