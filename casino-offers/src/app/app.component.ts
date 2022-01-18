import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Offer } from './offer.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
    sub: Subscription;
    mappedOffers: Offer[] = [];
    buttonText: string = 'Play Now'
    hasError: boolean;
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.sub = this.apiService.getOffers().subscribe(
        (res) => {
          this.hasError = false;
          res['items'].forEach((offer) => {
            if (offer.entity) {
              const temp: Offer = {
                name: offer.entity.name,
                logo: offer.entity.content.casinoContent.INT.transparentDarkLogo.originalImageUrl,
                rating: offer.entity.content.ratings.aggregatedUserRating / 20,
                depositBonusTitle: offer.entity.content.casinoContent.INT.depositBonus.title,
                depositBonusDescription: offer.entity.content.casinoContent.INT.depositBonus.description,
                coinsTitle: offer.rewards[0].type,
                coinsValue: offer.rewards[0].value,
                buttonText: this.buttonText,
                websiteLink: offer.link
              };
              this.mappedOffers.push(temp);
            }
          });
        },
        (error) => {
          this.hasError = true;
        }
      );
    }
  
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
}
