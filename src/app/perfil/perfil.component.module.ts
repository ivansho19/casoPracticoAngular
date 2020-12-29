import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TopBarComponent } from '../commons/components/top-bar/top-bar.component';
import { PerfilRoutingModule } from './perfil-routing.component';
import { PerfilComponent } from './perfil.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [PerfilRoutingModule,CommonModule
  ],
  declarations: [
    PerfilComponent
  ],
  exports:[],
  providers: []
})
export class PerfilModule { }

