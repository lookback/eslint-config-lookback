# ESLint config for Lookback

This is basically our `.eslintrc` as a shareable config between JS apps.

## Usage

```
npm install --save-dev eslint lookback/eslint-config-lookback
```

Add this to your project's `.eslintrc`:

```json
{
  "extends": "lookback"
}
```

If it's a Meteor app, use this:

```json
{
  "extends": "lookback/meteor"
}
```
