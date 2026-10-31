// Side channel for the build-time prerender. Safe to call in the browser:
// nothing reads it there.

export interface PrerenderHead {
  title: string;
  description: string;
  canonical: string;
  jsonLd: string;
  robots?: string;
}

let status = 200;
let head: PrerenderHead | null = null;

export function resetPrerenderState() {
  status = 200;
  head = null;
}

export function setPrerenderStatus(code: number) {
  status = code;
}

export function getPrerenderStatus() {
  return status;
}

export function registerPrerenderHead(next: PrerenderHead) {
  head = next;
}

export function getPrerenderHead() {
  return head;
}
