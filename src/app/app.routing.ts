import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddNuevoLibroComponent } from './components/add-nuevo-libro/add-nuevo-libro.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { VistaLibroComponent } from './components/vista-libro/vista-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import { ListaFacturasComponent } from './components/lista-facturas/lista-facturas.component';

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
    },
    {
        path: 'listaLibros',
        component: ListaLibrosComponent
    },
    {
        path: 'vistaLibro/:id',
        component: VistaLibroComponent
    },
    {
        path: 'editarLibro/:id',
        component: EditarLibroComponent
    },
    {
        path: 'listaFacturas',
        component: ListaFacturasComponent
    }       
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);