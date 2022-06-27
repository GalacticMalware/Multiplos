import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  /*Shell.childRoutes([{ path: 'about', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
