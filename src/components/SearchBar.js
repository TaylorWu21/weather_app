import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = (e, { value }) => this.setState({ search: value });

  render() {
    return(
      <Form>
        <Input fluid icon='search' placeholder='Enter in zipcode or City' onChange={this.handleChange} />
      </Form>
    );
  }
}

export default SearchBar