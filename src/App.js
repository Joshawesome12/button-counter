import React from 'react';
import Counter from './components/Counter'
import Button from './components/Button'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Button />
      </div>
    );
  }
}

export default App;
