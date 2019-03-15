document.addEventListener("DOMContentLoaded", function () {
  // Fingerprint2.get(options, function (components) {}
  if (window.requestIdleCallback) {
    requestIdleCallback(function () {
      optimalFingerprintSettings();
    })
  } else {
    setTimeout(function () {
      optimalFingerprintSettings();
    }, 500)
  }
});

function optimalFingerprintSettings() {
  Fingerprint2.get({
    preprocessor: function (key, value) {
      if (key == "userAgent") {
        let parser = new UAParser(value); // https://github.com/faisalman/ua-parser-js
        let userAgentMinusVersion = parser.getOS().name + ' ' + parser.getBrowser().name
        return userAgentMinusVersion
      }
      return value
    }
  }, function (components) {
    // userAgent component will contain string processed with our function. For example: Windows Chrome
    fingerprintId = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31)
    setFingerPrintId(fingerprintId);
  })
};

function setFingerPrintId(fingerPrintId) {
  const sendParameterFromLink = document.getElementsByTagName('a');
  for (let i = 0; i < sendParameterFromLink.length; i++) {
    // data-fingerprintがtrueの時、hrefのパラメーターにfingerprintを付与する。
    if (sendParameterFromLink[i].dataset.fingerprint === 'Apply') {
      const url = new URL(sendParameterFromLink[i].href);
      url.searchParams.set("browser-fingerprint", fingerprintId);
      sendParameterFromLink[i].href = url.href;
    }
  }
};
