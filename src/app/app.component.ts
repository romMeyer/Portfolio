import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { RouterOutlet, Router, NavigationEnd, Event } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';


interface NavItem {
  label: string;
  route: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    PagesModule,
    SharedModule,
    MatDividerModule,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  drawerMode: 'side' | 'over' = 'side';
  drawerOpened = true;
  currentRoute = '';

  navItems: NavItem[] = [
    {
      label: 'Qui suis-je ?',
      route: '/profil',
      icon: 'person',
      description: 'Découvrez mon parcours et ma personnalité'
    },
    {
      label: 'Mes projets',
      route: '/projets',
      icon: 'work',
      description: 'Explorez mes réalisations et projets'
    },
    {
      label: 'Compétences',
      route: '/competences',
      icon: 'stars',
      description: 'Mes compétences techniques et soft skills'
    }
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    // Responsive behavior
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        if (result.matches) {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        } else {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        }
      });

    // Track current route
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects; // ← ou `.url`, selon ton besoin
      });
  }

  closeDrawerIfMobile() {
    if (this.drawerMode === 'over') {
      this.drawerOpened = false;
    }
  }
}
