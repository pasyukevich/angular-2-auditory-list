import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginatorModule,
  MatListModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { AppRoutingModule } from './/app-routing.module';
import { AuditoryComponent } from './auditory/auditory.component';
import { SearchPipe } from './search.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AuditoryComponent,
    SearchPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
