import React from 'react';

import CardList from './CardList.js';
import GitHubForm from './GitHubForm.js';
import Toaster from './Toaster.js';

class ClassApp extends React.Component {

  state = {
    profiles: [],
    error: [],
  };

  addProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
      error:[],
    }));
  };

  addError = err => {
    this.setState(() => (
      {
        error: err,
      }
    ));
  }

  render() {
    return (
      <div>
        <h1>{this.props.initialData.appName}</h1>
        <GitHubForm onSubmit={this.addProfile} onSubmitError={this.addError}/>
        <Toaster type="error" data={this.state.error} />
        <CardList profiles={this.state.profiles}/>
      </div>
    );

  }
}

export default ClassApp;
