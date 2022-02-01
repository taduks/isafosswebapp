import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import './App.css';
import AppRoutes from '../routes';
import { createContext } from 'react';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
// import { useNavigate } from 'react-router-dom';

function App() {
    return (
        <div className="wrapper">
            <AppRoutes />
        </div>
    );
}

export default App;
