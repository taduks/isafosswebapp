import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import { Security} from '@okta/okta-react';
import { useHistory } from 'react-router';

const oktaAuth = new OktaAuth({
    issuer: 'https://dev-13815820.okta.com/oauth2/default',
    clientId: '0oa3rnbyg4gDEczor5d7',
    redirectUri: window.location.origin + '/login/callback',
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
