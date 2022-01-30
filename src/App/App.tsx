import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import './App.css';
import AppRoutes from '../routes';
import { createContext } from 'react';

const oktaAuth = new OktaAuth({
    issuer: 'https://dev-13815820.okta.com/oauth2/default',
    clientId: '0oa2msj5qwHCL3oRl5d7',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
});

export const OKTAAuthContext = createContext(oktaAuth)

function App() {
    // const location = useNavigate();
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
        // location.(toRelativeUrl(originalUri || '/', window.location.origin));
    };



    return (
        <div className="wrapper">
            <OKTAAuthContext.Provider value={oktaAuth}>
                <AppRoutes />
            </OKTAAuthContext.Provider>
        </div>
    );
}

export default App;
