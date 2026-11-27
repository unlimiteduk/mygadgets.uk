/// <reference types="node" />
/* eslint-disable react-refresh/only-export-components -- build-time renderer, not a UI module */
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { StaticRouter } from "react-router";
import App from "./App";
import {
  getPrerenderHead,
  getPrerenderStatus,
  resetPrerenderState,
} from "./prerender-status";

export { allIndexableRoutes, allPrerenderRoutes } from "./routes";
export { SITE } from "./data/site";

export async function render(url: string) {
  resetPrerenderState();
  const html = await new Promise<string>((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    let failed = false;
    output.setEncoding("utf8");
    output.on("data", (chunk: string) => {
      html += chunk;
    });
    output.on("end", () => {
      if (!failed) resolve(html);
    });
    output.on("error", reject);
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        // Static HTML includes completed lazy routes, never a loading fallback.
        onAllReady() {
          if (!failed) pipe(output);
        },
        onShellError(error) {
          failed = true;
          reject(error);
        },
        onError(error) {
          failed = true;
          reject(error);
        },
      },
    );
  });
  const head = getPrerenderHead();
  if (!head) throw new Error(`No document head was registered for ${url}`);
  return { html, status: getPrerenderStatus(), head };
}
