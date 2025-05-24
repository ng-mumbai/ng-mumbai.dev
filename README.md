# NgMumbai

This project is an Angular application with **Server-Side Rendering (SSR)** support, generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12. The application features SSR capabilities with prerendering and Express.js server integration.

## Tech Stack

- **Angular 19.2** with SSR support
- **Express.js** server for SSR
- **Tailwind CSS 4.1.7** for styling
- **TypeScript** for development
- **Angular SSR** package for server-side rendering

## Development server

To start the development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## SSR Development

This project includes full Server-Side Rendering support. The main SSR files include:

- `src/main.server.ts` - Server-side entry point
- `src/server.ts` - Express server configuration
- `src/app/app.config.server.ts` - Server-specific configuration
- `src/app/app.routes.server.ts` - Server routing with prerender mode

## Building the Project

To build the project for production with SSR:

```bash
ng build
```

This command builds both the client-side application and the server-side rendering bundle. The build artifacts will be stored in the `dist/` directory with:
- `dist/ng-mumbai/browser/` - Client-side assets
- `dist/ng-mumbai/server/` - Server-side rendering files

## Running the SSR Server

After building the project, you can run the SSR server:

```bash
npm run serve:ssr:ng-mumbai
```

The server will start on `http://localhost:4000` (or the port specified in the PORT environment variable).

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build the application for production
- `npm run watch` - Build in watch mode for development
- `npm test` - Run unit tests
- `npm run serve:ssr:ng-mumbai` - Serve the built SSR application

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── header/         # Header component
│   │   ├── hero/           # Hero section component
│   │   └── info-card/      # Info card component
│   ├── app.component.*     # Root component
│   ├── app.config.ts       # Client configuration
│   ├── app.config.server.ts # Server configuration
│   ├── app.routes.ts       # Client routes
│   └── app.routes.server.ts # Server routes with prerender mode
├── assets/                 # Static assets
├── main.ts                 # Client entry point
├── main.server.ts          # Server entry point
├── server.ts               # Express server setup
├── index.html              # Main HTML template
└── styles.css              # Global styles with Tailwind CSS
```

## SSR Features

- **Prerendering**: Routes are configured with `RenderMode.Prerender` for optimal performance
- **Express Integration**: Custom Express server for handling SSR requests
- **Angular Universal**: Full server-side rendering support
- **SEO Optimized**: Server-side rendering improves SEO and initial page load times

## Styling

This project uses **Tailwind CSS v4.1.7** for styling with:
- PostCSS integration
- Modern Tailwind configuration
- Responsive design utilities

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Production Deployment

1. Build the application:
   ```bash
   ng build
   ```

2. Deploy the `dist/ng-mumbai` folder to your server

3. Ensure your server can run Node.js and start the application with:
   ```bash
   node dist/ng-mumbai/server/server.mjs
   ```

4. Set the `PORT` environment variable if you need to run on a different port than 4000

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For Angular SSR documentation, visit the [Angular SSR Guide](https://angular.dev/guide/ssr).
