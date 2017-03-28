import { Routes, RouterModule } from "@angular/router";
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path: 'problems',
    component: ProblemListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: ["authGuard"]
  },
  {
    path: 'problems/:id',
    component: ProblemDetailComponent
  },
  {
    path: '**',
    redirectTo: "problems",
  }
];

export const routing = RouterModule.forRoot(appRoutes);
