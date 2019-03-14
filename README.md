# NSA Mode

_Now you can be like the NSA!_

## Installation

### Firefox

On Firefox you can install this in three ways. The tradition add-on repo route is the easiest and least sketch. Just visit the add-on's page on Firefox [here](https://addons.mozilla.org/en-US/firefox/addon/nsa-mode/)

The slightly sketchier and way 1337er way is one of the two manual methods. Either use the `about:debugging` to use the src to
preview the extension or you can install the signed xpi file. To install
the xpi file:

1. Download the xpi file from Github 
2. In Firefox go to Add-Ons
3. Select the Gear icon and click "Install Add-on From File..."
4. Navigate to the previously nstalled xpi file and click it to install
5. Visit [Google Maps](https://google.com/maps)
6. Profit!

And to use the debugging method:

1. Navigate to `about:debugging`
2. If not already enabled, check the box to enable loading extensions
3. Navigate to the directory you downloaded `manifest.json` and
   `content-script.js` to
4. Select either file and the extension will be installed.
5. Visit [Google Maps](https://google.com/maps)
6. Profit!

### Chrome

1. [Download Firefox](https://mozilla.org/firefox)
2. Uninstall Chrome
3. Install Firefox
4. See instructions for using Firefox

## Why

This is a "Hello World" for the Firefox Add-on store. I have been playing
with WebExtensions lately and I wanted to see what publishing an extension
looks like, because honestly most of the WebExtensions I am working on
will probably never be published since they are for very specific work
usage and probably the property of my employer.
