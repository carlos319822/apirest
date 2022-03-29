import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";





const APP_ROUTES: Routes = [
  
  { path: 'Header', component: HeaderComponent },
  
  
  
  { path: '**', pathMatch: 'full', redirectTo: 'Header'}
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);