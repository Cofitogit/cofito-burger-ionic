import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
    private ngZone: NgZone
  ) {}

  cupones() {
    const main = document.querySelector('.voucher');
    if (!main) return;

    const animation = this.animationCtrl
      .create()
      .duration(250)
      .addElement(main)
      .fromTo('opacity', 1, 0)
      .fromTo('transform', 'translateX(0)', 'translateX(100%)');

    animation.onFinish(() => {
      this.ngZone.run(() => {
        this.router.navigate(['/tabs/tab3']);
        const animation = this.animationCtrl
          .create()
          .duration(0)
          .addElement(main)
          .fromTo('opacity', 0, 1)
          .fromTo('transform', 'translateX(100%)', 'translateX(0)');
        animation.play();
      });
    });

    animation.play();
  }

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
    }, 4000);
  }

  ionViewWillEnter() {
    const main = document.querySelector('.main');
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
