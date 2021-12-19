import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get historial() {
    return this.gifsService.historial;
  }

  buscar(termino:string) {
    const valor = termino.toLocaleLowerCase();

    if(valor.trim().length == 0) {
      return;
    }
    this.gifsService.buscarGifs(valor);
  }

}
