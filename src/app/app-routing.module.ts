import { ListarComponent } from './feature/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './feature/container/container.component';
import { TablaComponent } from './feature/tabla/tabla.component';
import { ExpressComponent } from './feature/express/express.component';

const routes: Routes = [
  {path: 'container', component: ContainerComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'listar', component: ListarComponent},
  {path: '', component: ExpressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
