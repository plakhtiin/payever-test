import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { WindowResizeService } from '../services/window-resize.service';

// The viewport widths based on Bootstrap 4.0 Grid
export interface IScreenConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export const SCREEN_CONFIG: IScreenConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export enum ScreenSize {
  ExtraSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
}

@Directive({
  selector: '[appOnlyForScreen]'
})
export class OnlyForScreenDirective {
  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private windowResizeService: WindowResizeService,
  ) {
  }

  @Input() set appOnlyForScreen(widthType: ScreenSize) {
    this.windowResizeService.windowSizeChanged.subscribe((width: number) => {
      this.viewContainer.clear();
      switch (widthType) {
        case ScreenSize.ExtraSmall:
          if (width < SCREEN_CONFIG.sm) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
          break;
        case ScreenSize.Small:
          if (width >= SCREEN_CONFIG.sm && width < SCREEN_CONFIG.md) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
          break;
        case ScreenSize.Medium:
          if (width >= SCREEN_CONFIG.md && width <= SCREEN_CONFIG.lg) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
          break;
        case ScreenSize.Large:
          if (width >= SCREEN_CONFIG.lg && width < SCREEN_CONFIG.xl) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
          break;
        case ScreenSize.ExtraLarge:
          if (width >= SCREEN_CONFIG.xl) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
          break;
        default:
          this.viewContainer.clear();
          break;
      }
    });
  }
}
