import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { InboxComponent } from './inbox/inbox.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'inbox/:id', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}