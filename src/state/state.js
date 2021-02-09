import css1 from '../components/Content/img/css_1.png';
import css2 from '../components/Content/img/css_2.png';
import css3 from '../components/Content/img/css_3.png';



const state = {
   screenFirstData: {
      itemSelected: {
         item: 'html',
         price: 9
      },
      options: [
         { option: 'Button', price: 6 },
         { option: 'Checkbox', price: 7.5 },
         { option: 'Submit', price: 6 },
      ]
   },
   screenSecondData: {
      mensCuts: {
         cutsPrice: 5,
         appointedTo: '',
         time: '',
      },
      infoPerson: 'Ibrahim Debbagh',
      available: 'Today',
      timeDay: [
         { time: '08:30' },
         { time: '02:30' },
         { time: '12:20' },
         { time: '03:30' },
         { time: '12:30' },
         { time: '04:20' },
         { time: '01:00' },
         { time: '05:20' },
      ]
   },
   screenThirdData: {
      subtotal: 5,
      tax: 0.15,
      total() {
         return this.subtotal + this.tax;
      }
   },
   screenFourthData: {
      item: [
         { itemName: 'Hair Cut', price: 15, img: css1 },
         { itemName: 'Hair Wash', price: 12.7, img: css2 },
         { itemName: 'Buzz Cut', price: 18, img: css3 },
      ]
   },
   screenFifthData: {
      date: 'Sunday, Apr 14th',
      price: 28.39,
   },
   screenEighthData: {
      options: [
         { option: 'Wash', price: 6 },
         { option: 'Buz Cut', price: 7.5 },
         { option: 'X Cut', price: 6 },
         { option: 'Y Cut', price: 6 },
      ]
   },
   screenNinthData: {
      gitItems: [
         { value: 'checkout' },
         { value: 'add' },
         { value: 'commit' },
         { value: 'pull' },
         { value: 'push' },
      ]
   }
}



export default state;