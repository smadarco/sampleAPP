import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';


const modules = [  MatToolbarModule,
  MatIconModule
  ,MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   ...modules
  ],
  exports:modules
})
export class MaterialModule {
  
 }
