export interface ICourse {
   readonly link: string;
   readonly image: string;
   readonly title: string;
   readonly author: string;
   readonly ratingStars: number;
   readonly ratingCount: number;
   readonly price: number;
   readonly hoursCount: number;
   readonly lecturesCount: number;
   readonly difficulty: string;
}