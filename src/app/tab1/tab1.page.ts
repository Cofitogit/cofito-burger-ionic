import { Component } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    setTimeout(() => {
      const logoImg: HTMLElement | null = document.querySelector('.slide-img');
      if (logoImg !== null) {
        // Verificar si no es nulo
        const logo: Animation = this.animationCtrl
          .create()
          .addElement(logoImg)
          .duration(2300)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'translate(0)' },
            { offset: 0.25, transform: 'translate(-5%) rotate(3deg)' },
            { offset: 0.5, transform: 'translate(5%) rotate(-3deg)' },
            { offset: 1, transform: 'translate(0)' },
          ]);
  
        logo.play();
      }
    }, 4000)
  }

}
