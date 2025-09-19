import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

export default function bootstrap() {
    return bootstrapApplication(AppComponent, {
        providers: [
            provideRouter(routes),
            provideServerRendering(),
        ],
    });
}