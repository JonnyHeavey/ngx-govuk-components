# ngx-govuk-components

This package contains several Angular components based on the GOV.UK website(s) interface.

This project aims to make the development of GOV.UK style applications easier within Angular 2+.

The styles are mostly derived from the official [govuk_frontend_alpha](https://github.com/alphagov/govuk_frontend_alpha) project created by the Government Digital Service. Please note that this underlying project is currently in alpha, and as such the style / implementation of components will likely vary between versions.

PLEASE NOTE: This project is currently in alpha and is not ready for production usage.

## Installation

The package is available on NPM. To include the package in your project run:

```
npm install --save ngx-govuk-components

```

## Example

Include `GovUKComponentsModule` in your application module:

```
import { NgxGovUKComponentsModule } from 'ngx-govuk-components';

@NgModule({
  imports: [
    NgxGovUKComponentsModule
  ],
  ... // omitted for brevity
})
export class AppModule {}
```

Include `dist/assets/styles/ngx-govuk-components.css` in your application (either in HTML or app CSS):

In index.html:
```
<link href="node_modules/ngx-govuk-components/dist/assets/styles/ngx-govuk-components.css" rel="stylesheet">
```

In application.css:
```
@import '~ngx-govuk-components/dist/assets/styles/ngx-govuk-components.css';
```

## Components

- Back Link
- Button
- Detail / Summary
- Notice
- Phase Banner
- Prose (content)

## Build

Requires globally-installed Node 6+ & npm 3+.

```
npm install
gulp
```

## Roadmap

- Add/Improve documentation
- Demo app
- Add component unit tests
- Add more components

## Contributing

TBC

## License

MIT
