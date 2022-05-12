import moment from 'moment';

type UserTypePerson = 0
type UserTypeCompany = 1

type UserType = UserTypePerson | UserTypeCompany;

export const USER_PERSON: UserTypePerson = 0;
export const USER_COMPANY: UserTypeCompany = 1;

type Auction = 0
type BuyItNow = 1

export const AD_AUCTION: Auction = 0;
export const AD_BUY_IT_NOW: BuyItNow = 1;

type AdType = Auction | BuyItNow;

export interface Item {
  userType: UserType;
  itemType: AdType;
  price: number;
  endDate: string;
}

export const AUCTION_COST = 25;
export const BUY_IT_NOW_COST = 35;

export const ENDING_TODAY_DISCOUNT = 10;
export const COMPANY_DISCOUNT = 5;

export function getFee({ userType, itemType, price, endDate }: Item): number {
  let fee = itemType === AD_AUCTION ? AUCTION_COST : BUY_IT_NOW_COST;
  const endDateIsToday = moment(endDate).isSame(moment(), 'day');

  if (userType === USER_COMPANY) {
    fee = fee - COMPANY_DISCOUNT;
  }

  if (endDateIsToday) {
    fee = fee - ENDING_TODAY_DISCOUNT;
  }

  return fee + price;
}