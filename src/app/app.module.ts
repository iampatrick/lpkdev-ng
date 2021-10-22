import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorksItemComponent } from './works-item/works-item.component';
import { WorksComponent } from './works/works.component';
import { WorksService } from './services/works.service';
import { UtilService } from './services/util.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorksItemComponent,
    WorksComponent,
    ContactFormComponent,
    SortByPipe,
    FilterByPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [WorksService, UtilService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
