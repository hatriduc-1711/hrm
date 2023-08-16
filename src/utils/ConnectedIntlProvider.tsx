import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { languageSelector } from '~/redux/selectors';

import enMessages from '~/languages/en.json';
import viMessages from '~/languages/vi.json';
import { useAppSelector } from '~/redux/store';
import LANGUAGES from '~/variables/languages';

const ConnectedIntlProvider = ({ children }: { children: ReactNode }) => {
  const language = useAppSelector(languageSelector);
  const getMessages = (locale: string) => {
    if (locale.startsWith(LANGUAGES.VI)) {
      return viMessages;
    }
    return enMessages;
  };

  return (
    <IntlProvider locale={language} messages={getMessages(language)}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
