import React from 'react';
import axios from 'axios';
import GuestLayout from './guest-layout';


const API = 'https://hn.algolia.com/api/v1/search?query=';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      query: '',
      prevSearchs: [],
    };
  }


  getInfo = () => {
    this.setState({ isLoading: true });
    axios.get(`${API}${this.state.query}`)
      .then((result) => {
        this.setState({
          hits: result.data.hits,
          isLoading: false,
        });
      });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    }, () => {
      if (this.state.query && this.state.query.length > 3) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
    });
  }


  render() {
    const { hits } = this.state;
    return (


      <GuestLayout>
        <div className="container">
          <form style={{ marginTop: '20px' }}>
            <input
              placeholder="Search for Something Cool on HackerNews..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </form>
          {hits.length > 0 ? (
            <div className="collection">
              {hits.map(item => <a href={item.url} className="collection-item">{item.title}</a>)}
            </div>
          ) : null}
        </div>
      </GuestLayout>
    );
  }
}

export default App;
