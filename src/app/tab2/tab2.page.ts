import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private animationCtrl: AnimationController) {}

  ionViewWillEnter() {

    const main = document.querySelector('.main-comprar');
    if (main !== null) {
      const animation = this.animationCtrl
        .create()
        .duration(200)
        .addElement(main)
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateY(10%)', 'translateY(0)');

      animation.play();
    }
  }

}
