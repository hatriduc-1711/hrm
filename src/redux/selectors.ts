import type { RootState } from '~/redux/store';
export const languageSelector = (state: RootState) => state.languages.lang;
export const userDetailsSelector = (state: RootState) => state.user.userDetail;
