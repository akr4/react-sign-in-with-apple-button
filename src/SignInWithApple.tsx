import React, { CSSProperties, useEffect } from 'react';

type Locale =
  | 'ar_SA'
  | 'ca_ES'
  | 'cs_CZ'
  | 'da_DK'
  | 'de_DE'
  | 'el_GR'
  | 'en_GB'
  | 'en_US'
  | 'es_ES'
  | 'es_MX'
  | 'fi_FI'
  | 'fr_CA'
  | 'fr_FR'
  | 'hr_HR'
  | 'hu_HU'
  | 'id_ID'
  | 'it_IT'
  | 'iw_IL'
  | 'ja_JP'
  | 'ko_KR'
  | 'ms_MY'
  | 'nl_NL'
  | 'no_NO'
  | 'pl_PL'
  | 'pt_BR'
  | 'pt_PT'
  | 'ro_RO'
  | 'ru_RU'
  | 'sk_SK'
  | 'sv_SE'
  | 'th_TH'
  | 'tr_TR'
  | 'uk_UA'
  | 'vi_VI'
  | 'zh_CN'
  | 'zh_HK'
  | 'zh_TW';

export const SignInWithApple: React.FC<{
  clientId: string;
  redirectUri: string;
  scope?: ('email' | 'name')[];
  state?: string;
  usePopup?: boolean;
  type?: 'sign in' | 'continue';
  color?: 'black' | 'white';
  border?: boolean;
  style?: CSSProperties;
  locale?: Locale;
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

    const scriptUrl = makeScriptUrl(props.locale);

    if (
      Array.from(document.getElementsByTagName('script')).some((e) => {
        return e.src === scriptUrl;
      })
    ) {
      init();
    } else {
      const script = document.createElement('script');
      script.onload = () => {
        init();
      };
      script.src = scriptUrl;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }, [props.clientId, props.scope, props.redirectUri, props.state, props.usePopup, props.locale]);

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

const makeScriptUrl = (locale: Locale = 'en_US') =>
  `https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/${locale}/appleid.auth.js`;
