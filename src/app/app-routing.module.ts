// 这个页面是当前路由的配置




import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ye01Component } from './ye-01/ye-01.component';
import { Ye02Component } from './ye-02/ye-02.component';
import { Code404Component } from './code404/code404.component';


// Routes是路由配置的类型，里面是一组路由对象
const routes: Routes = [
  // 先配置空的时候展示一号页面
  {path:'', component:Ye01Component},
  {path:'02', component:Ye02Component},
  // 当页面访问不存在时用通配符表示并且跳转到指定页面
  {path:'**', component:Code404Component}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// 使用routing创建的项目，新生成的AppRoutingModule模块，导入到主模块的imports
export class AppRoutingModule { }


