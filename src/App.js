import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="calc" element={<CalculatPage />} />
          <Route path="quotes" element={<QuotesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
