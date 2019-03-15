# Prerequisites
attachFingerprintsToLinks.js is fingerprint2.js and ua-parser.js  

https://github.com/Valve/fingerprintjs2  
https://github.com/faisalman/ua-parser-js  

# What happens
return browser-fingerprint params to a href

# Usage
Add aaa to A's attribute
```
<html>
  <head>
    <script src="fingerprint2.js"></script>
    <script src="ua-parser.js"></script>
    <script src="sendfingerprintfromlink.js"></script>
  </head>
  <body>
    <a href='https://www.google.com/' data-fingerprint=Apply>Add Link Parameter</a>
    # example:https://www.google.com/?browser-fingerprint=e0aa8c756346a5395fe933d6690e6cc6
  </body>
</html>
```
