import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Ye01Component } from './ye-01/ye-01.component';
import { Ye02Component } from './ye-02/ye-02.component';
import { Code404Component } from './code404/code404.component';


@NgModule({
  declarations: [
    AppComponent,
    Ye01Component,
    Ye02Component,
    Code404Component
  ],
  // 由导入AppRoutingModule，NG项目才知道以什么样的方式配置路由
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
