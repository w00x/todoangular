import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { AuthGuard } from '../../guard/auth.guard';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { TodoItemComponent } from './todo-item/todo-item.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', component: TodoContainerComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [],
  providers: [AuthGuard],
  declarations: [
    TodoContainerComponent,
    TodoItemComponent,
    AppLayoutComponent
  ]
})
export class MainModule { }
