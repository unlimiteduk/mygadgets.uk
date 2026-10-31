/* eslint-disable react-refresh/only-export-components -- build-time renderer, not a UI module */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { getPrerenderHead, getPrerenderStatus, resetPrerenderState } from './prerender-status';

export { allIndexableRoutes } from './routes';
export { SITE } from './data/site';

export function render(url: string) {
  resetPrerenderState();
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
  const head = getPrerenderHead();
  if (!head) {
    throw new Error(`No document head was registered for ${url}`);
  }
  return { html, status: getPrerenderStatus(), head };
}
