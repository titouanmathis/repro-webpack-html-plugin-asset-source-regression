# webpack@5.96.0 × html-webpack-plugin

This repository is a reproduction of a regression noticed with webpack@5.96.0 and html-webpack-plugin. 

The following scripts can be used to reproduce the error:

- `npm run build-working`: build with webpack@5.95.0, working
- `npm run build-non-working`: build with webpack@5.96.0, not working,
- `npm run build-patched`: build with a patched version of webpack@5.96.0, working

The [proposed patch](./patches/webpack+5.96.0.patch) seems to work, but might not be the correct way to fix this bug.
