import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Template-angular/interpolation/interpolation.component';
import { BindingComponent } from './Template-angular/binding/binding.component';
import { AttributeBindingComponent } from './Template-angular/binding/attribute-binding.component';
import { EventBindingComponent } from './Template-angular/binding/event-binding.component';
import { TwoWayBindingComponent } from './Template-angular/binding/two-way-binding.component';
import { PropBindingComponent } from './Template-angular/binding/prop-binding.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ClassStyleBindingComponent } from './Template-angular/binding/class-style-binding.component';
import { PipesComponent } from './Template-angular/pipes/pipes.component';
import { BuiltInPipsComponent } from './Template-angular/pipes/built-in-pips.component';
import { CustomPipsComponent } from './Template-angular/pipes/custom-pips.component';
import { ParamaterPipsComponent } from './Template-angular/pipes/paramater-pips.component';
import { ChainPipsComponent } from './Template-angular/pipes/chain-pips.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ShortenPipe } from './Template-angular/pipes/shorten.pipe';
import { ReferenceVarsComponent } from './Template-angular/reference-vars/reference-vars.component';
import { ParentComponent } from './Template-angular/input-output/parent.component';
import { ChildComponent } from './Template-angular/input-output/child.component';
import { TemplateAngularPageComponent } from './Page/template-angular-page/template-angular-page.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BuildInDirectivePageComponent } from './Page/build-in-directive-page/build-in-directive-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    PropBindingComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ClassStyleBindingComponent,
    PipesComponent,
    BuiltInPipsComponent,
    CustomPipsComponent,
    ParamaterPipsComponent,
    ChainPipsComponent,
    ReferenceVarsComponent,
    ShortenPipe,
    ParentComponent,
    ChildComponent,
    TemplateAngularPageComponent,
    BuildInDirectivePageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NzTableModule,
    NzGridModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
