import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoContainerComponent } from './component/todo-container/todo-container.component';

const routes: Routes = [
  {
    path: '', component: TodoContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
