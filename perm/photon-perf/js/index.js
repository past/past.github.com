var plots = [
  {
    "channel": "nightly",
    "version": "",
    "metric": "FX_NEW_WINDOW_MS",
    "useSubmissionDate": false,
    "sanitize": true,
    "trim": true,
    "compare": "",
    "sensibleCompare": true,
    "evoVersions": "3",
    "filters": {
      "application": "Firefox"
    }
  },
  {
    "channel": "nightly",
    "version": "",
    "metric": "FX_TAB_SWITCH_TOTAL_E10S_MS",
    "useSubmissionDate": false,
    "sanitize": true,
    "trim": true,
    "compare": "",
    "sensibleCompare": true,
    "evoVersions": "3",
    "filters": {
      "application": "Firefox"
    }
  },
  {
    "channel": "nightly",
    "version": "",
    "metric": "FX_TAB_CLOSE_TIME_ANIM_MS",
    "useSubmissionDate": false,
    "sanitize": true,
    "trim": true,
    "compare": "",
    "sensibleCompare": true,
    "evoVersions": "3",
    "filters": {
      "application": "Firefox"
    }
  },
  {
    "channel": "nightly",
    "version": "",
    "metric": "SIMPLE_MEASURES_FIRSTPAINT",
    "useSubmissionDate": false,
    "sanitize": true,
    "trim": true,
    "compare": "",
    "sensibleCompare": true,
    "evoVersions": "3",
    "filters": {
      "application": "Firefox"
    }
  }
];

var nodes = ["winOpen", "tabSwitch", "tabClose", "startup"];

window.addEventListener('load', () => {
  let i = 0;
  for (plot of plots) {
    TelemetryWrapper.go(plot, document.getElementById(nodes[i++]));
  }
});
