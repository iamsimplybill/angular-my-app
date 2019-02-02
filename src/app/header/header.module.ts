import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderNavmenuComponent } from './header-navmenu/header-navmenu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HeaderBrandComponent, HeaderNavmenuComponent, HeaderSearchComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeaderBrandComponent,
    HeaderNavmenuComponent,
    HeaderSearchComponent
  ]
})
export class HeaderModule { }
