declare namespace AppleID {
  const auth: {
    init: (options: {
      clientId: string;
      redirectURI: string;
      scope?: string;
      state?: string;
      usePopup?: boolean;
    }) => void;
  };
}
