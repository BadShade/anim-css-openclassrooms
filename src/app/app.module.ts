import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimScaleComponent } from './animations/anim-scale/anim-scale.component';
import { AnimFormComponent } from './animations/anim-form/anim-form.component';
import { CombinedAnimComponent } from './animations/combined-anim/combined-anim.component';
import { AnimCarreComponent } from './animations/anim-carre/anim-carre.component';
import { AnimTranslateComponent } from './animations/anim-translate/anim-translate.component';
import { AnimCarreTextComponent } from './animations/anim-carre-text/anim-carre-text.component';
import { AnimRotateComponent } from './animations/anim-rotate/anim-rotate.component';
import { AnimSkewComponent } from './animations/anim-skew/anim-skew.component';
import { ProgressBarComponent } from './animations/progress-bar/progress-bar.component';
import { BtnTroisDComponent } from './animations/btn-trois-d/btn-trois-d.component';
import { SabreJediComponent } from './animations/sabre-jedi/sabre-jedi.component';
import { MaskButtonComponent } from './animations/mask-button/mask-button.component';
import { HoverBtnComponent } from './animations/hover-btn/hover-btn.component';
import { AfterBeforeComponent } from './animations/after-before/after-before.component';
import { ProgessBarKeyframeComponent } from './animations/progess-bar-keyframe/progess-bar-keyframe.component';
import { ProgressBarKeyframe2Component } from './animations/progress-bar-keyframe2/progress-bar-keyframe2.component';
import { AnimFormKeyframComponent } from './animations/anim-form-keyfram/anim-form-keyfram.component';
import { AnimLoaderComponent } from './animations/anim-loader/anim-loader.component';
import { AnimSpinComponent } from './animations/anim-spin/anim-spin.component';
import { AnimMenuComponent } from './animations/anim-menu/anim-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimScaleComponent,
    AnimFormComponent,
    CombinedAnimComponent,
    AnimCarreComponent,
    AnimTranslateComponent,
    AnimCarreTextComponent,
    AnimRotateComponent,
    AnimSkewComponent,
    ProgressBarComponent,
    BtnTroisDComponent,
    SabreJediComponent,
    MaskButtonComponent,
    HoverBtnComponent,
    AfterBeforeComponent,
    ProgessBarKeyframeComponent,
    ProgressBarKeyframe2Component,
    AnimFormKeyframComponent,
    AnimLoaderComponent,
    AnimSpinComponent,
    AnimMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
