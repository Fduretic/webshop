import {Component, OnInit} from '@angular/core';
import {WebShopItem} from '../../models/items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: WebShopItem[];

  constructor() {
    this.items = [
      {
        id: '2100',
        label: 'Masažer M-3000 Plus',
        description: 'Doživite petu dimenziju sa ovim savršenim masažerom koji podržava više načina rada i brzina',
        price: 999.99
      },
      {
        id: '2101',
        label: 'Shaker Beast Mode',
        description: 'Uspostavite autoritet u teretani sa ovim shakerom',
        price: 99.99
      },
      {
        id: '2102',
        label: 'Set kalupa za kolače',
        description: 'Razveselite svoje najmilije sa ovim setom kalupa raznih oblika',
        price: 83.99
      },
      {
        id: '2103',
        label: 'Brusač noževa SharpBlade Ultra Pro',
        description: 'Neka vaši noževi više nikad ne budu tupi uz ovaj profesionalni alat za brušenje noževa',
        price: 149.99
      },
      {
        id: '2104',
        label: 'Pakiranje termo čarapa',
        description: 'Idealno za skijanje, planinarenje, boso hodanje po pločicama i ostale ekstremne sportove',
        price: 119.99
      },
      {
        id: '2105',
        label: 'Set Inox 34/10 lonaca',
        description: 'Set lonaca od nehrđajućeg 34/10 inoxa sa dodatnim premazom dna koje se briše jednim potezom krpice.',
        price: 439.99
      }
    ];
  }

  ngOnInit(): void {
  }

}
