import { Component } from '@angular/core';
import { ITransation } from '../../core/interfaces/itransation';
import { NgClass } from '@angular/common';

@Component({  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [NgClass],
  templateUrl: './last-few-transactions.component.html',
  styleUrl: './last-few-transactions.component.scss'
})
export class LastFewTransactionsComponent {
  transations:ITransation[] = [
    {
      id:1,
      title: 'Rayen 5 Processor',
      price: '$299',
      shop: 'Tech Pro',
      location: 'East Hartford',
      status: 'pending',
      imgSrc: '../../../assets/images/review-1.jpg',
    },
    {
      id:2,
      title: 'Denver Blackcode',
      price: '$7.98',
      shop: 'Pick The Best',
      location: 'Miamisburg',
      status: 'shipping',
      imgSrc: '../../../assets/images/review-3.jpg',
    },
    {
      id:3,
      title: 'Nike Shoes',
      price: '$96',
      shop: 'Quality Leathers',
      location: 'Phoenix',
      status: 'confirmed',
      imgSrc: '../../../assets/images/review-4.jpg',
    },
    {
      id:4,
      title: 'Joe Doe',
      price: '$120',
      shop: 'Television',
      location: 'Ankara',
      status: 'shipping',
      imgSrc: '../../../assets/images/review-5.jpg',
    }
  ]
}
