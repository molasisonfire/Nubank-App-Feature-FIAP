import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegatePageRoutingModule } from './negate-routing.module';

import { NegatePage } from './negate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegatePageRoutingModule
  ],
  declarations: [NegatePage]
})
export class NegatePageModule {}
