import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeService } from './services/home.service';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    HomeRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [HomeService],
})
export class HomeModule {}
