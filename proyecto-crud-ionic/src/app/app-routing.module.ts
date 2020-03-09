import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-technological', loadChildren: './add-technological/add-technological.module#AddTechnologicalPageModule' },
  { path: 'view-technological', loadChildren: './view-technological/view-technological.module#ViewTechnologicalPageModule' },
  { path: 'update-technological', loadChildren: './update-technological/update-technological.module#UpdateTechnologicalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
