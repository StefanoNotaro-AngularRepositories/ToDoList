import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';

const routes: Routes = [
  { path: 'ToDo', component: ToDoComponent },
  { path: '*', pathMatch: 'full', redirectTo: 'ToDo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
