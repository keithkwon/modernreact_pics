import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({ term: "" });
  }

  render() {
    return (
      <div>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor="search">Image Search </label>
              <input
                type="text"
                id="search"
                value={this.state.term}
                onChange={(e) => {
                  this.setState({ term: e.target.value });
                }}
                style={{ width: "100%" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
