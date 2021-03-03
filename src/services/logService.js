import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://9f76e6b6c5d7440f89d62e8d55e12dbc@o531050.ingest.sentry.io/5651268",
    Integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
