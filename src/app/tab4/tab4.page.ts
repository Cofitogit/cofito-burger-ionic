import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {}

  

  ionViewWillEnter() {
    const main = document.querySelector('.main-more');
    const accordion = document.querySelector('.accordion');
    if (main !== null) {
      const animation = this.animationCtrl
        .create()
        .duration(200)
        .addElement(main)
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateY(10%)', 'translateY(0)');

      animation.play();
    }
    if (accordion !== null) {
      const animation = this.animationCtrl
        .create()
        .duration(200)
        .addElement(accordion)
        .fromTo('opacity', 0, 1)
        .fromTo('transform', 'translateY(10%)', 'translateY(0)');

      animation.play();
    }
  }

  home() {
    this.router.navigate(['/tabs/tab1']);
  }

  cupones() {
    this.router.navigate(['/tabs/tab3']);
  }

  comprar() {
    this.router.navigate(['/tabs/tab2']);
  }
}
