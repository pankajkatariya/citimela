import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {LocationDataResolver} from './common/resolver/location-data.resolver';
import {LocationDataService} from './common/data-services/location-data.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HomeEventsComponent} from './home-events/home-events.component';
import {HomeNestedEventsComponent} from './home-nested-events/home-nested-events.component';
import {LogInComponent} from './log-in/log-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserService} from './common/services/user.service';
import {SplashComponent} from './splash/splash.component';
import {UserGuard} from './common/guard/user.guard';
import {ContentComponent} from './content/content.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UserProtectGuard} from './common/guard/user-protect.guard';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        HomeEventsComponent,
        HomeNestedEventsComponent,
        LogInComponent,
        SignUpComponent,
        SplashComponent,
        ContentComponent,
        NotFoundComponent
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        BrowserModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'splash', pathMatch: 'full'},
            {path: 'splash', component: SplashComponent, canActivate: [UserProtectGuard]},
            {
                path: 'home', component: HomeComponent, canActivate: [UserGuard], resolve: {
                    location: LocationDataResolver
                }
            },
            {path: '**', component: NotFoundComponent}
        ])

    ],
    providers: [LocationDataService, LocationDataResolver, UserService, UserGuard, UserProtectGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
