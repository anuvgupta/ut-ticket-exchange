import { Sports } from './sports';

export interface Ticket {
   id: string;
   sport: Sports;
   day: number;
   month: number;
   year: number;
   highestPrice: number;
   collegeOne: string;
   collegeTwo: string;
   time: string;
   location: string;
   bidder: string;
}