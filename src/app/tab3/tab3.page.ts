import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private animationCtrl: AnimationController) {}

  ionViewWillEnter() {
    const main = document.querySelector('.main3');
    if (main !== null) {
      const animation = this.animationCtrl
        .create()
        .duration(500)
        .addElement(main)
        .fromTo('opacity', 0, 1)

      animation.play();
    }
  }

}
