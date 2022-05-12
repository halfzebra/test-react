import {
  getFee,
  USER_PERSON,
  USER_COMPANY,
  AD_AUCTION,
  AD_BUY_IT_NOW,
  AUCTION_COST,
  BUY_IT_NOW_COST,
  ENDING_TODAY_DISCOUNT,
  COMPANY_DISCOUNT,
} from './calculator';
import moment from 'moment';

// I've decided against generating test permutations programmatically,
// because there's only:
//   2 (ad types) * 2 (discounts) * 2 (user types) = 8 permutations

// TODO:
//   Later in this might need some smarter code organization(but more complicated)

const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
const today = moment().format('YYYY-MM-DD');

describe('getFee', () => {
  describe('Auction', () => {
    describe('Person', () => {
      it('returns price without "ending today" discount', () => {
        const fee = getFee({
          userType: USER_PERSON,
          itemType: AD_AUCTION,
          price: 0,
          endDate: tomorrow,
        });

        expect(fee).toBe(AUCTION_COST);
      });

      it('returns price with "ending today" discount', () => {
        const fee = getFee({
          userType: USER_PERSON,
          itemType: AD_AUCTION,
          price: 0,
          endDate: today,
        });

        expect(fee).toBe(AUCTION_COST - ENDING_TODAY_DISCOUNT);
      });
    });

    describe('Company', () => {
      it('returns price without "ending today" discount', () => {
        const fee = getFee({
          userType: USER_COMPANY,
          itemType: AD_AUCTION,
          price: 0,
          endDate: tomorrow,
        });

        expect(fee).toBe(AUCTION_COST - COMPANY_DISCOUNT);
      });

      it('returns price with "ending today" discount', () => {
        const fee = getFee({
          userType: USER_COMPANY,
          itemType: AD_AUCTION,
          price: 0,
          endDate: today,
        });

        expect(fee).toBe(
          AUCTION_COST - ENDING_TODAY_DISCOUNT - COMPANY_DISCOUNT
        );
      });
    });

    describe('Buy It Now', () => {
      describe('Person', () => {
        it('returns price without "ending today" discount', () => {
          const fee = getFee({
            userType: USER_PERSON,
            itemType: AD_BUY_IT_NOW,
            price: 0,
            endDate: tomorrow,
          });

          expect(fee).toBe(BUY_IT_NOW_COST);
        });
      });

      it('returns price with "ending today" discount', () => {
        const fee = getFee({
          userType: USER_PERSON,
          itemType: AD_BUY_IT_NOW,
          price: 0,
          endDate: today,
        });

        expect(fee).toBe(BUY_IT_NOW_COST - ENDING_TODAY_DISCOUNT);
      });
    });

    describe('Company', () => {
      it('returns price without "ending today" discount', () => {
        const fee = getFee({
          userType: USER_COMPANY,
          itemType: AD_BUY_IT_NOW,
          price: 0,
          endDate: tomorrow,
        });

        expect(fee).toBe(BUY_IT_NOW_COST - COMPANY_DISCOUNT);
      });

      it('returns price with "ending today" discount', () => {
        const fee = getFee({
          userType: USER_COMPANY,
          itemType: AD_BUY_IT_NOW,
          price: 0,
          endDate: today,
        });

        expect(fee).toBe(
          BUY_IT_NOW_COST - ENDING_TODAY_DISCOUNT - COMPANY_DISCOUNT
        );
      });
    });
  });
});
