import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PostService } from './post.service'
import { ApiService } from './api.service';

import {Albums} from './classes/albums';

//servico da API deve ser importado aqui e enviado ao construtor do AppComponent
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  data:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private postData: PostService,
    private _apiService: ApiService
  ) {
    this.initializeApp();
  }

  listAlbums:Albums[];

  ngOnInit(){
    /*this.postData.getDataUser().subscribe((result)=>{
      this.data = result
    })*/
    this._apiService.getAlbums().subscribe(
      data=>
      {
        this.listAlbums = data;
      }
    )
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
