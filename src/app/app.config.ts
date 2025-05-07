import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProjectsService } from './services/ProjectService';
import { CompetencesService as CompetencesService } from './services/CompetenceService';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    ProjectsService,
    CompetencesService, 
    provideHttpClient()
  ]
};
