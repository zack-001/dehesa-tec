import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewTechnologicalPage } from './view-technological.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTechnologicalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewTechnologicalPage]
})
export class ViewTechnologicalPageModule {}
