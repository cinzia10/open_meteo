import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastMainComponent } from './components/forecast-main/forecast-main.component';
import { ForecastMeteoComponent } from './components/forecast-meteo/forecast-meteo.component';
import { UnitPipe } from './pipes/unit/unit.pipe';
import { CodeIconPipe } from './pipes/code-icon/code-icon.pipe';
import { FlagPipe } from './pipes/flag/flag.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ForecastMainComponent,
        ForecastMeteoComponent,
        UnitPipe,
        CodeIconPipe,
        FlagPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
