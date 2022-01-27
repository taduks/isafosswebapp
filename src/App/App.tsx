import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import './App.css';
import AppRoutes from '../routes';
import { createContext } from 'react';

const oktaAuth = new OktaAuth({
    issuer: 'https://{yourOktaDomain}.com/oauth2/default',
    clientId: '{clientId}',
    redirectUri: window.location.origin + '/login/callback'
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
