import { Component, type ReactNode } from 'react';
import { SITE } from '@/data/site';

export default class PageErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <section className="container-12 section-pad" role="alert"><h1 className="display-l">The page couldn’t load.</h1><p className="body-copy text-muted">Please reload and try again. You can also call the Whitton shop for help with your repair.</p><div className="action-row" style={{marginTop:24}}><button className="btn btn-signal" onClick={()=>window.location.reload()}>Reload page</button><a className="btn btn-ghost" href={SITE.landlineHref}>{SITE.landlineDisplay}</a><a className="btn btn-ghost" href="/contact/">Contact the shop</a></div></section>;
  }
}
