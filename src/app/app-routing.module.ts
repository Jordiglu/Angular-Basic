import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
    data: {
      title: "Jordi C Front End Developer | Freelancer",
      description: "Hire Professional Freelancer. Building animations and interactive experiences. ",
      ogDescription: "Hire Professional Freelancer. Building animations and interactive experiences.",
      robot: "index",
      ogTitle: "Front-end developer, passionet for UI effects, Css animations and more.",
      ogUrl: 'http://jordicalatayudcastro.com',
      author: 'Jordi Calatayud',
      keywords: "HTML, CSS, JavaScrip, Angular",
      ogType: 'website'
    }
  },
  {
    path: "home", component: HomeComponent, data: {
      title: "Jordi C Front End Developer | Freelancer",
      description: "Hire Professional Freelancer. Building animations and interactive experiences.",
      ogDescription: "Hire Professional Freelancer. Building animations and interactive experiences.",
      robot: "index",
      ogTitle: "Jordi C Front End Developer | Freelancer",
      ogUrl: 'http://jordicalatayudcastro.com',
      author: 'Jordi Calatayud',
      robots: "index",
      keywords: "HTML, CSS, JavaScrip, Angular",
      ogType: 'Website'
    }
  },
  {
    path: "about", component: AboutComponent, data: {
      title: "Jordi C Front End Developer | Freelancer",
      description: "You will find here some of my personl information and work experience",
      ogDescription: "Hire Professional Freelancer. Building animations and interactive experiences.",
      ogTitle: "Jordi C Front End Developer | Freelancer",
      ogUrl: 'http://jordicalatayudcastro.com'
    }
  },
  {
    path: "contact", component: ContactComponent,
    data: {
      title: "Jordi C Front End Developer | Freelancer",
      description: "Contact me at http//:jordicalatayudcastro@gmail.com or call at 722292333",
      ogTitle: "Jordi C Front End Developer | Freelancer",
      ogUrl: 'http://jordicalatayudcastro@gmail.com'
    }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
