import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import classes from './css/Content.module.css';
import ScreenFirst from './components/ScreenFirst';
import ScreenSecond from './components/ScreenSecond';
import ScreenThird from './components/ScreenThird';
import ScreenFourth from './components/ScreenFourth';
import ScreenFifth from './components/ScreenFifth';
import ScreenSixth from './components/ScreenSixth';
import ScreenSeventh from './components/ScreenSeventh';
import ScreenEighth from './components/ScreenEighth';
import ScreenNinth from './components/ScreenNinth';
import css1 from '../../assets/img/css_1.png';
import css2 from '../../assets/img/css_2.png';
import css3 from '../../assets/img/css_3.png';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';
import { SwitchContext } from '../../context';

const data = {
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

const Content = () => {
  const { t } = useTranslation();
  const [state, setState] = useState(data);
  const [visibleArrowDown, setVisibleArrowDown] = useState(true);
  const [visibleArrowUp, setVisibleArrowUp] = useState(false);

  const { theme } = useContext(SwitchContext);

  const changeArrowDown = () => {
    setVisibleArrowDown(window.scrollY < 200);
  };

  const changeArrowUp = () => {
    setVisibleArrowUp(window.scrollY > 650);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeArrowDown);
    return () => {
      window.removeEventListener('scroll', changeArrowDown);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeArrowUp);
    return () => {
      window.removeEventListener('scroll', changeArrowUp);
    };
  }, []);

  const screenFirstBtnToggle = () => {
    setState((prevState) => (
      { ...prevState, screenFirst: { ...prevState.screenFirst, isBtnActive: !prevState.screenFirst.isBtnActive } }
    ));
  };

  const screenEightBtnToggle = () => {
    setState((prevState) => (
      { ...prevState, screenEighth: { ...prevState.screenEighth, isBtnActive: !prevState.screenEighth.isBtnActive } }
    ));
  };

  const screenFirstOptionsToggle = (index) => {
    const { screenFirst } = state;
    const { options } = screenFirst;
    const updateScreenFirst = options.map((option, id) => {
      if (index === id) {
        return { ...option, active: !option.active };
      }
      return option;
    });
    setState(() => ({ ...state, screenFirst: { ...state.screenFirst, options: updateScreenFirst } }));
  };

  const screenEightOptionsToggle = (index) => {
    const { screenEighth } = state;
    const { options } = screenEighth;
    const updateScreenEight = options.map((option, id) => {
      if (index === id) {
        return { ...option, active: !option.active };
      }
      return option;
    });
    setState(() => ({ ...state, screenEighth: { ...state.screenEighth, options: updateScreenEight } }));
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const {
    screenFirst, screenSecond, screenThird, screenFourth, screenFifth, screenEighth, screenNinth
  } = state;
  return (
    <div className={theme === 'night' ? classes.content : `${classes.content} ${classes.day}`}>
      <div
        aria-hidden="true"
        onClick={scrollToBottom}
        className={visibleArrowDown ? classes.arrow_down : `${classes.arrow_down} ${classes.actD}`}
      >
        <AiOutlineArrowDown />
      </div>
      <div
        aria-hidden="true"
        onClick={scrollToTop}
        className={visibleArrowUp ? classes.arrow_up : `${classes.arrow_up} ${classes.actU}`}
      >
        <AiOutlineArrowUp />
      </div>
      <div className={classes.content_switchDayNight}>
        <SwitchDayNight />
      </div>
      <div className={classes.content_body}>
        <div className={classes.body_columns}>
          <ScreenFirst
            t={t}
            screenFirstBtnToggle={screenFirstBtnToggle}
            screenFirstData={screenFirst}
            screenFirstOptionsToggle={screenFirstOptionsToggle}
          />
          <ScreenSecond screenSecondData={screenSecond} />
        </div>
        <div className={classes.body_columns}>
          <ScreenThird screenThirdData={screenThird} />
          <ScreenFourth t={t} screenFourthData={screenFourth} />
          <ScreenFifth screenFifthData={screenFifth} />
        </div>
        <div className={classes.body_columns}>
          <ScreenSixth t={t} />
          <ScreenSeventh t={t} />
        </div>
        <div className={classes.body_columns}>
          <ScreenEighth
            options={screenEighth.options}
            screenEightOptionsToggle={screenEightOptionsToggle}
            isBtnActive={screenEighth.isBtnActive}
            screenEightBtnToggle={screenEightBtnToggle}
          />
          <ScreenNinth t={t} screenNinthData={screenNinth} />
        </div>
      </div>
      <ButtonHome />
    </div>
  );
};

export default Content;
