import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PressReleaseComponent } from './press-release/press-release.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'brands',
    component:BrandsComponent
  },
  {
    path:'our-team',
    component:OurTeamComponent
  },
  {
    path:'press-release',
    component:PressReleaseComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'careers',
    component:CareersComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
