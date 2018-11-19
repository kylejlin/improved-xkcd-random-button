# Improved xkcd Random Button

Fixes xkcd's unreliable "Random" button.

## [Install it here!](https://chrome.google.com/webstore/detail/improved-xkcd-random-butt/nmpkfceobojhjmjgnighmlggcflffmlk)

## Description

By default, when you click on xkcd's Random button, it will make a request to the server (c.xkcd.com/random/comic) to redirect you to a random comic. While this is usually fine, sometimes the server is slow or unresponsive. This extension eliminates the reliance on the server by instead randomly selecting a comic via a client-side script. This will ultimately result in a faster and more reliable experience.

Additionally, this extension will request Chrome to prerender the randomly selected comic, which will improve its load time, making your experience even faster.

## Contributing

```sh
git clone https://github.com/kylejlin/improved-xkcd-random-button.git
cd explain-xkcd-random-button
chmod +x build
```

### Development

1.  Open [chrome://extensions](chrome://extensions).
2.  Enable "Developer mode" (top right corner).
3.  Click "Load unpacked" (top left corner).
4.  Select `improved-xkcd-random-button/src` as the directory and confirm.

### Building

```sh
./build
```

to zip up the necessary files for distribution.
The resulting zip file can be found at `./artifacts/improved-xkcd-random-button.zip`.
