import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxjsDebounceComponent} from './rxjs-debounce/rxjs-debounce.component';


const routes: Routes = [
  { path: 'rxjs-debounce', component: RxjsDebounceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
