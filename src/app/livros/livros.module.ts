import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';

import { LivroCadastroComponent } from './livro-cadastro/livro-cadastro.component';
import { LivroListagemComponent } from './livro-listagem/livro-listagem.component';

@NgModule({
  declarations: [LivroCadastroComponent, LivroListagemComponent],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
