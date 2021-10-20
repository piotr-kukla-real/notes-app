export const pushState = (options?: Options) => {
  const defOptions = { state: null, title: '', ...options };
  const { state, title, url } = defOptions;
  window.history.pushState(state, title, url);
};

interface Options {
  state?: any;
  title?: string;
  url?: string | URL | null | undefined;
}
