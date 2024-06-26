import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

interface Contato {
  id: number,
  nome: string,
  telefone: string
}

import agenda from './agenda.json'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule,
      RouterOutlet,
      ContainerComponent,
      CabecalhoComponent,
      SeparadorComponent,
      ContatoComponent,
      FormsModule
    ]
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrdstuvwxyz'
  contatos: Contato[] = agenda

  filtroPorTexto: string = ''

  filtrarContatosPorTexto() : Contato[] {
    if(!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra:string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    } )
  }
}
