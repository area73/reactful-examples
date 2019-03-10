import React from 'react';

class GitHubForm extends React.Component {

  state = {
    userName: '',
  };

  fetchAsync = async (user) => {
    // await response of fetch call
    const response = await fetch(`https://api.github.com/users/${user}`);
    // only proceed once promise is resolved
    return response.status === 200
      ? await response.json()
      : Promise.reject(response);
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.fetchAsync(this.state.userName)
      .then(data => this.props.onSubmit(data))
      .catch(err => this.props.onSubmitError(err));
  };

  render() {
    return (
      <div className="github-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.userName}
            onChange={ev => this.setState({userName: ev.target.value})}
            required placeholder="GitHub user name"/>
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

export default GitHubForm;
