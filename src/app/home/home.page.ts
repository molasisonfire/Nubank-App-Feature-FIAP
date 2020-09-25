//classe~pagina utilizada para testar integração da API com o FRONT
//adicionando navegação e condicao por retorno da API
import { Component } from '@angular/core';
import { PostService } from './../post.service';
import { ApiService } from './../api.service';
import { filter , map } from 'rxjs/operators';
import { Albums } from './../classes/albums';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    public _apiService: ApiService,
    private router: Router
  ) {}

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
