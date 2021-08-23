import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta) {
  }

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        var rt = this.getChild(this.activatedRoute);

        rt.data.subscribe((data: { title: string; description: string; ogTitle: string; ogUrl: string, robots: string, keywords: string, author: string, ogDescription: string, ogType: string }) => {
          console.log(data);
          this.titleService.setTitle(data.title)

          if (data.description) {
            this.metaService.updateTag({ name: 'description', content: data.description })
          } else {
            this.metaService.removeTag("name='description'")
          }
          if (data.ogUrl) {
            this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
          } else {
            this.metaService.updateTag({ property: 'og:url', content: this.router.url })
          }
          if (data.ogTitle) {
            this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
          } else {
            this.metaService.removeTag("property='og:title'")
          }
          if (data.robots) {
            this.metaService.updateTag({ name: 'robots', content: data.robots })
          } else {
            this.metaService.updateTag({ name: 'robots', content: "follow,index" })
          }
          if (data.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: data.keywords })
          }
          else {
            this.metaService.removeTag("name='keywords'")
          }
          if (data.author) {
            this.metaService.updateTag({ name: 'author', content: data.author })
          }
          else {
            this.metaService.removeTag("name= 'author'")
          }
          if (data.ogDescription) {
            this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
          }
          else {
            this.metaService.removeTag("property='og:description'")
          }
          if (data.ogType) {
            this.metaService.updateTag({ property: 'og:type', content: data.ogType })
          } else {
            this.metaService.removeTag("property='og:type'")
          }
        })
      })

  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
}



    //   this.router.events.pipe(
    //     filter(event => event instanceof NavigationEnd),
    //   )
    //     .subscribe(() => {
    //       var rt = this.activatedRoute;

    //       rt.data.subscribe(data => {
    //         console.log(data);
    //         this.titleService.setTitle(data.title)

    //         if (data.description) {
    //           this.metaService.updateTag({ name: 'description', content: data.description })
    //         } else {
    //           this.metaService.removeTag("name='description'")
    //         }

    //         if (data.robots) {
    //           this.metaService.updateTag({ name: 'robots', content: data.robots })
    //         } else {
    //           this.metaService.updateTag({ name: 'robots', content: "follow,index" })
    //         }

    //         if (data.ogUrl) {
    //           this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
    //         } else {
    //           this.metaService.updateTag({ property: 'og:url', content: this.router.url })
    //         }

    //         if (data.ogTitle) {
    //           this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
    //         } else {
    //           this.metaService.removeTag("property='og:title'")
    //         }

    //         if (data.ogDescription) {
    //           this.metaService.updateTag({ property: 'description', content: data.ogDescription })
    //         } else {
    //           this.metaService.removeTag("property='description'")
    //         }

    //         if (data.ogImage) {
    //           this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
    //         } else {
    //           this.metaService.removeTag("property='og:image'")
    //         }


    //       })

    //     })

    // }

