import React from 'react';

import CardList from './CardList.js';
import GitHubForm from './GitHubForm.js';
import Toaster from './Toaster.js';

class GithubUserSearch extends React.Component {

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

  removeProfile = profileId => {
    this.setState(prevState => ({
      profiles: prevState.profiles.filter(profile => profile.id !== profileId),
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
    const title = this.props.initialData && this.props.initialData.appName ||'Hello World';
    return (
      <div>
        <h1>{title}</h1>
        <GitHubForm onSubmit={this.addProfile} onSubmitError={this.addError}/>
        <Toaster type="error" data={this.state.error} />
        <CardList profiles={this.state.profiles} update={this.removeProfile}/>
      </div>
    );

  }
}

export default GithubUserSearch;
