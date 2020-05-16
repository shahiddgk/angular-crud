import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserFacade } from '@app/core/user.facade';

@Injectable()
export class DiscountService {
  constructor(private http: HttpClient, private userFacade: UserFacade) {}

  loadDiscount(discountId) {
    const url = this.userFacade.urlBase + 'discounts/get_discounts.php';
    const post = { where: 'd.id = ' + discountId };
    return this.http.post(url, JSON.stringify(post));
  }

  loadAllDiscounts() {
    const url = this.userFacade.urlBase + 'discounts/get_discounts.php';
    const post = { fields: { discount_id: true, name: true, category: true, type: true, amount: true, description: true } };
    return this.http.post(url, JSON.stringify(post));
  }
}
