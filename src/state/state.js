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
      title: "Ibrahim's Barbershop",
      mensCuts: {
         cutsPrice: 5,
         appointedTo: '',
         time: '',
      },
      infoPerson: 'Ibrahim Debbagh',
      available: 'Today',
      timeDay: [
         { time1: '08:30', time2: '02:30' },
         { time1: '02:30', time2: '12:20' },
         { time1: '03:30', time2: '11:30' },
         { time1: '05:30', time2: '15:30' },

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
         { option: 'Wash', price: 6, active: false },
         { option: 'Buz Cut', price: 7.5, active: false },
         { option: 'X Cut', price: 6, active: true },
         { option: 'Y Cut', price: 6, active: false },
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