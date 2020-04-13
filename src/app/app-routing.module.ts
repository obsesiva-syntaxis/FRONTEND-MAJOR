import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MaqListComponent} from './components/maq-list/maq-list.component';
import {MaqFormComponent} from './components/maq-form/maq-form.component';
import {MaqPreviewComponent} from './components/maq-preview/maq-preview.component';
import {MenuProdComponent} from './components/menu-prod/menu-prod.component';
import {MaqListGenComponent} from './components/maq-list-gen/maq-list-gen.component';
import {MaqListHidraComponent} from './components/maq-list-hidra/maq-list-hidra.component';
import {MaqListSolarComponent} from './components/maq-list-solar/maq-list-solar.component';
import {MaqPreviewHidraComponent} from './components/maq-preview-hidra/maq-preview-hidra.component';
import {MaqPreviewSolarComponent} from './components/maq-preview-solar/maq-preview-solar.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuProdComponent
  },
  {
    path: 'solar',
    component: MaqListSolarComponent
  },
  {
    path: 'gen',
    component: MaqListGenComponent
  },
  {
    path: 'hidra',
    component: MaqListHidraComponent
  },
  {
    path: 'maquina',
    component: MaqListComponent
  },
  {
    path: 'maquina/new',
    component: MaqFormComponent
  },
  {
    path: 'maquina/:id',
    component: MaqPreviewComponent
  },
  {
    path: 'hidra/:id',
    component: MaqPreviewHidraComponent
  },
  {
    path: 'solar/:id',
    component: MaqPreviewSolarComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
