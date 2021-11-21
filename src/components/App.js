import React from 'react';
import { Switch, Route } from 'react-router-dom';
import api from '../api/api';
import Main from './Main';
import Photo from './Photo';
import NotFound from './NotFound';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [isSubmitted, setisSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmitted(true);
  };

  React.useEffect(() => {
    if (isSubmitted) {
      api.search(searchQuery).then(data => {
        setCards(data.results.map((item) => ({
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.description,
          subtitle: item.user.name,
        })));

        setisSubmitted(false);
        setSearchQuery('');
      });
    }
  }, [searchQuery, isSubmitted]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main
            handleChange={setSearchQuery}
            handleSubmit={handleSubmit}
            searchQuery={searchQuery}
            cards={cards}
            isSubmitted={isSubmitted}
          />
        </Route>
        <Route exact path="/photos/:id">
          <Photo photos={cards} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
