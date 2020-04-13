//? Angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//? Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { MaqListComponent } from './components/maq-list/maq-list.component';
import { MaqFormComponent } from './components/maq-form/maq-form.component';
import { MaqPreviewComponent } from './components/maq-preview/maq-preview.component';
import { MenuProdComponent } from './components/menu-prod/menu-prod.component';
import { MaqListSolarComponent } from './components/maq-list-solar/maq-list-solar.component';
import { MaqListGenComponent } from './components/maq-list-gen/maq-list-gen.component';
import { MaqListHidraComponent } from './components/maq-list-hidra/maq-list-hidra.component';
import { MaqPreviewHidraComponent } from './components/maq-preview-hidra/maq-preview-hidra.component';
import { SearchComponent } from './components/search/search.component';

//? Utility
import { NgxPaginationModule } from 'ngx-pagination';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterSolarPipe } from './pipes/filter-solar.pipe';
import { FilterGenPipe } from './pipes/filter-gen.pipe';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';

//?NGX-Materialize
import { MzSidenavModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzButtonModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize';
import { MaqPreviewSolarComponent } from './components/maq-preview-solar/maq-preview-solar.component';
import { MzInputModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MaqFormComponent,
    MaqListComponent,
    MaqPreviewComponent,
    MenuProdComponent,
    MaqListSolarComponent,
    MaqListGenComponent,
    MaqListHidraComponent,
    MaqPreviewHidraComponent,
    FilterPipe,
    SearchComponent,
    FilterSolarPipe,
    FilterGenPipe,
    MaqPreviewSolarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    MzSidenavModule,
    MzNavbarModule,
    MzButtonModule,
    MzDropdownModule,
    MzInputModule,
    MzSelectModule,
    NgxSmartModalModule.forRoot(),
    NgxParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
