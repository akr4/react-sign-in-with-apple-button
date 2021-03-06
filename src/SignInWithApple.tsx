import React, { CSSProperties, useEffect } from 'react';

export const SignInWithApple: React.FC<{
  clientId: string;
  redirectUri: string;
  responseType: ('code' | 'id_token')[];
  scope?: ('email' | 'name')[];
  responseMode?: 'query' | 'fragment' | 'form_post';
  state?: string;
  nonce?: string;
  usePopup?: boolean;
  type?: 'sign in' | 'continue';
  color?: 'black' | 'white';
  border?: boolean;
  style?: CSSProperties;
}> = (props) => {
  useEffect(() => {
    const init = () => {
      AppleID.auth.init({
        clientId: props.clientId,
        scope: props.scope?.join(' '),
        redirectURI: props.redirectUri,
        state: props.state,
        usePopup: props.usePopup != null,
      });
    };

    if (
      Array.from(document.getElementsByTagName('script')).some((e) => {
        return e.src === APPLEID_AUTH_JS;
      })
    ) {
      init();
    } else {
      const script = document.createElement('script');
      script.onload = () => {
        init();
      };
      script.src = APPLEID_AUTH_JS;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }, []);

  return (
    <div
      id="appleid-signin"
      style={{
        width: 210,
        height: 40,
        ...props.style,
      }}
      data-color={props.color}
      data-border={props.border?.toString()}
      data-type={props.type}
    />
  );
};

const APPLEID_AUTH_JS = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
