import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './app.js'

render(
  <Application />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./app.js', () => {
    // eslint-disable-next-line global-require
    render(
      <Application />,
      document.getElementById('root')
    );
  });
}
