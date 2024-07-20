import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    /* component: CreateComponent, */ // mais eficaz, abaixo consta um jeito melhor, ele n carrega todos os componentes logo que o site for carregado, apenas carrega o  componente quando o mesmo for chamado
    loadComponent: () => import('./features/create/create.component').then((m)=> m.CreateComponent)
  },
  {
    path: 'edit-product',
    loadComponent: () => import('./features/edit/edit.component').then((m)=> m.EditComponent)
  },
];
