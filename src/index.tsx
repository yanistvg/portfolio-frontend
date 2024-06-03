import React from 'react';
import ReactDOM from 'react-dom/client';

import { Navigator } from './app';

import '@aws-amplify/ui-react/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Navigator />
	</React.StrictMode>
);
