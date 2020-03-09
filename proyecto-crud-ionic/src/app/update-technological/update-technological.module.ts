import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateTechnologicalPage } from './update-technological.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTechnologicalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateTechnologicalPage]
})
export class UpdateTechnologicalPageModule {}
