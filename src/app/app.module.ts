import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';


import { HomeComponent } from './componentes/home/home.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { PageWrapperComponent } from './componentes/page-wrapper/page-wrapper.component';
import { OrigenesComponent } from './componentes/origenes/origenes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    
   
    HomeComponent,
    SidebarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    OrigenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
