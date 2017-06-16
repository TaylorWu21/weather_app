import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  state = { search: '' };

  render() {
    return(
      <Form 
        onSubmit={
          (e) => {
            e.preventDefault();
            this.props.handleSubmit(this.state.search);
            this.setState({ search: '' });
          }
        }
      >
        <Input 
          fluid 
          action={{ icon: 'search' }}
          placeholder='Enter in zipcode or City'
          value={this.state.search}
          onChange={ (e, { value }) => this.setState({ search: value }) } 
        />
      </Form>
    );
  }
}

export default SearchBar