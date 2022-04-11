import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import { Security} from '@okta/okta-react';
import { useHistory } from 'react-router';

const oktaAuth = new OktaAuth({
    issuer: process.env.AUTH_OKTA_ISSUER,
    clientId: process.env.AUTH_OKTA_CLIENT_ID,
    redirectUri: window.location.origin + process.env.AUTH_OKTA_REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
});

function OktaSecurity({ children }: any) {
    const history = useHistory();
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
      history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} >
            {children}
        </Security>
    );
}

export default OktaSecurity;
