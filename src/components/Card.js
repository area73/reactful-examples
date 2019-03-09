import React from 'react';


class Card extends React.Component {

  removeEl = el => ev => {
    ev.preventDefault();
    return this.props.update(el);
  };

  render() {
    const data = this.props;
    return (
      <div className="card">
        <img className="card_thumb" src={data.avatar_url}/>
        <div className="card__info">
          <div className="card__substract"><a href="" onClick={this.removeEl(data.id)}>X</a></div>
          <div className="card__name">{data.name}</div>
          <div className="card__company">{data.company}</div>
        </div>

      </div>
    );
  }
}

export default Card;
