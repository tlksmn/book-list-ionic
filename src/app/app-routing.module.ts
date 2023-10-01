import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./books/new-book/new-book.module').then(m => m.NewBookModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./books/view-book/view-book.module').then(m => m.ViewBookModule)
      }
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
