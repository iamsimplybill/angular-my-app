import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderNavmenuComponent } from './header-navmenu/header-navmenu.component';
import { HeaderSearchComponent } from './header-search/header-search.component';

@NgModule({
  declarations: [HeaderComponent, HeaderBrandComponent, HeaderNavmenuComponent, HeaderSearchComponent],
  imports: [
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
