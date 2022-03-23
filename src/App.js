import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import QuotesPage from './components/Quotes';
import CalculatPage from './components/CalculatPage';
import HomePage from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Header />
        <CalculatPage />
        <HomePage />
        <QuotesPage />
        <Footer />
      </div>
    );
  }
}

export default App;
