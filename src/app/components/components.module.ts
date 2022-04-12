import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OpenWeatherApiComponent } from './open-weather-api/open-weather-api.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ProjectComponent,
        AboutUsComponent,
        OpenWeatherApiComponent,
    ],
    exports: []
})
export class ComponentsModule { }
