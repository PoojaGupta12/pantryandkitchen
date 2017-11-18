import {OverlayContainer} from '@angular/cdk/overlay';
import {Component, ElementRef, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pk-start-app',
  templateUrl: './start-app.component.html',
  styleUrls: ['./start-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class StartAppComponent  {
  dark = false;
  navItems =[
    {name: 'Item1', route: '/item1'},
    {name:'Item2', route: '/item2'},
    {name: 'Item3', route: '/item3'}
]

items = [
  {text: 'Profile'},
  {text: 'Settings'},
  {text: 'Help', disabled: true},
  {text: 'SignOut'}
];

user ={userName: 'ABCD', imageSrc: "../assets/images/cat.jpg"};

    constructor(private _element: ElementRef,
      private _renderer: Renderer2,
      private _overlayContainer: OverlayContainer) { }

      toggleFullscreen() {
        let elem = this._element.nativeElement.querySelector('.demo-content');
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.msRequestFullScreen) {
          elem.msRequestFullScreen();
        }
      }

      toggleTheme() {
        const darkThemeClass = 'unicorn-dark-theme';
        this.dark = !this.dark;
        if (this.dark) {
          this._renderer.addClass(this._element.nativeElement, darkThemeClass);
          this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
        } else {
          this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
          this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
        }
      }

}
