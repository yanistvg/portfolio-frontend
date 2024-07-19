import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component'

import { Navigator } from './app';

import '@aws-amplify/ui-react/styles.css';
import './app/themes/classic-theme.scss';
import 'react-notifications-component/dist/theme.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ReactNotifications />
		<Navigator />
	</React.StrictMode>
);
