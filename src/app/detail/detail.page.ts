import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
/* Pagina de detalhe do Crédito oferecido após analise de crédito e solicitação de novo emprestimo*/
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buttonClick(){
    this.router.navigate(['accept']);
  }
}
