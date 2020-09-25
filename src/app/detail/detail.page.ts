import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { filter , map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Albums } from './../classes/albums';
/* Pagina de detalhe do Crédito oferecido após analise de crédito e solicitação de novo emprestimo*/
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private router: Router,
              public _apiService: ApiService) { }
  listAlbums:Albums[];

  ngOnInit() {
	  this.getAlbums();
  }

  getAlbums() {
    this._apiService.getAlbums().subscribe(
      data=>
      {

        this.listAlbums = data;

      }
    )
  }
  buttonClick(){
   
    if(this.listAlbums[0].title == 'quidem molestiae enim'){
      this.router.navigate(['accept']);
    }else{
      this.router.navigate(['negate']);
    }
  }
}
