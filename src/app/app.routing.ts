import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddNuevoLibroComponent } from './components/add-nuevo-libro/add-nuevo-libro.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'addNuevoLibro',
        component: AddNuevoLibroComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);