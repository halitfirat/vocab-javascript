import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { getUser } from './store/auth/authAction';
import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import VocabNew from './components/vocab/VocabNew';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Container>
            <Route exact path="/" component={Landing} />
            <Route exact path="/vocabs" component={Dashboard} />
            <Route path="/vocabs/new" component={VocabNew} />
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
