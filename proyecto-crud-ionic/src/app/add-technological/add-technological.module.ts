import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddTechnologicalPage } from './add-technological.page';

const routes: Routes = [
  {
    path: '',
    component: AddTechnologicalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddTechnologicalPage]
})
export class AddTechnologicalPageModule {}
