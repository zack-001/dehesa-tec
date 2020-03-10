
import { ModuleWithProviders } from '@angular/core';
//importar una serie de modulos, componentes y funcionalidades que tiene el router
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

//Componentes
import { TechnologicalListComponent } from './components/technological-list/technological-list.component';
import { TechnologicalEditComponent } from './components/technological-edit/technological-edit.component';

//creación de las rutas
const appRoutes: Routes = [
    {path: 'getTechnologicals', component: TechnologicalListComponent},
    {path: 'updateTechnological/:id', component: TechnologicalEditComponent} 
];
export const appRoutingProviders: any[] = [];
 //exportar  la configuraciónde  la  ruta  como  servicio,configuraciónnecesaria  para  el router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);