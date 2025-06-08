import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCloudinaryLoader } from '@angular/common';
import { environment } from '../environments/environment';

// Fallback for build environment
const cloudinaryCloudName = typeof process !== 'undefined' && process.env ?
  (process.env['CLOUDINARY_CLOUD_NAME'] || environment.cloudinaryCloudName) :
  environment.cloudinaryCloudName;

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCloudinaryLoader(`https://res.cloudinary.com/${cloudinaryCloudName}`),
  ],
};
