import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroCadastroComponent } from './livro-cadastro/livro-cadastro.component';
import { LivroListagemComponent } from './livro-listagem/livro-listagem.component';

const routes: Routes = [
  {path:'', component: LivroListagemComponent },
  {path:'', component: LivroCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
