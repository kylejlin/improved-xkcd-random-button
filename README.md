# Improved xkcd Random Button

Fixes xkcd's unreliable "Random" button.

## [Install it here!](TODO)

## Description

The default Random button on [xkcd.com](https://xkcd.com/) links to `https://c.xkcd.com/random/comic/`. Sometimes this page is unresponsive or slow. This extension blocks the request to `c.xkcd.com` and instead navigates to a random page using client-side Javascript, resulting in a faster and more reliable "Random" button.

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
