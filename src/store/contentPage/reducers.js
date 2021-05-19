import css1 from '../../assets/img/css_1.png';
import css2 from '../../assets/img/css_2.png';
import css3 from '../../assets/img/css_3.png';
import {
  TOGGLE_BTN_SCREEN_EIGHT,
  TOGGLE_BTN_SCREEN_FIRST,
  TOGGLE_OPTIONS_SCREEN_EIGHT,
  TOGGLE_OPTIONS_SCREEN_FIRST
} from './types';

const initialState = {
  screenFirst: {
    itemSelected: {
      item: 'html',
      price: 9
    },
    isBtnActive: false,
    options:
      [
        {
          id: 1, option: 'Button', price: 6, active: false
        },
        {
          id: 2, option: 'Checkbox', price: 7.5, active: false
        },
        {
          id: 3, option: 'Submit', price: 6, active: false
        },
      ],
  },
  screenSecond: {
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
  screenThird: {
    subtotal: 5,
    tax: 0.15,
    total() {
      return this.subtotal + this.tax;
    }
  },
  screenFourth: {
    item: [
      {
        id: 1, itemName: 'Hair Cut', price: 15, img: css1
      },
      {
        id: 2, itemName: 'Hair Wash', price: 12.7, img: css2
      },
      {
        id: 3, itemName: 'Buzz Cut', price: 18, img: css3
      },
    ]
  },
  screenFifth: {
    date: 'Sunday, Apr 14th',
    price: 28.39,
  },
  screenEighth: {
    options: [
      {
        id: 1, option: 'Wash', price: 6, active: false
      },
      {
        id: 2, option: 'Buz Cut', price: 7.5, active: false
      },
      {
        id: 3, option: 'X Cut', price: 6, active: true
      },
      {
        id: 4, option: 'Y Cut', price: 6, active: false
      },
    ],
    isBtnActive: true,
  },
  screenNinth: {
    gitItems: [
      { value: 'checkout' },
      { value: 'add' },
      { value: 'commit' },
      { value: 'pull' },
      { value: 'push' },
    ]
  }
};

const contentReducer = (state = initialState, action) => {
  const { screenFirst, screenEighth } = state;
  switch (action.type) {
    case TOGGLE_BTN_SCREEN_FIRST:
      return {
        ...state,
        screenFirst: { ...screenFirst, isBtnActive: !screenFirst.isBtnActive }
      };
    case TOGGLE_OPTIONS_SCREEN_FIRST:
      return {
        ...state,
        screenFirst: {
          ...screenFirst,
          options: screenFirst.options.map((i, id) => {
            if (id === action.index) {
              return { ...i, active: !i.active };
            }
            return i;
          }) 
        }
      };
    case TOGGLE_BTN_SCREEN_EIGHT:
      return {
        ...state,
        screenEighth: { ...screenEighth, isBtnActive: !screenEighth.isBtnActive }
      };
    case TOGGLE_OPTIONS_SCREEN_EIGHT:
      return {
        ...state,
        screenEighth: {
          ...screenEighth,
          options: screenEighth.options.map((i, id) => {
            if (id === action.index) {
              return { ...i, active: !i.active };
            }
            return i;
          })
        }
      };
    default:
      return state;
  }
};

export default contentReducer;
