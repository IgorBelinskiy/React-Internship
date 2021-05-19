import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './css/Biography.module.css';
import TableBody from './components/TableBody';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { SwitchContext } from '../../context';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';

const Biography = (props) => {
  const { t } = useTranslation();
  const { theme } = useContext(SwitchContext);

  const {
    biographyPageData,
    addEvent,
    updateNewYear,
    updateNewText,
    deleteLastPost,
    deleteSelectPost,
    toMax,
    toMin,
    minMax,
    rndm,
    bubbleSort,
    // addState
  } = props;

  const handleKeyDown = (e) => {
    if (e.code === 'KeyZ' && e.shiftKey) {
      deleteLastPost();
    }
    if (e.code === 'KeyX' && e.shiftKey) {
      minMax();
    }
    if (e.code === 'KeyC' && e.shiftKey) {
      rndm();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);
    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  const { biographyData, newText, newYear } = biographyPageData;

  return (
    <div className={theme === 'night' ? classes.biography : `${classes.biography} ${classes.day}`}>
      <div className={classes.biography_dayNight}><SwitchDayNight /></div>
      <div className={classes.biography_wrapper}>
        <div className={classes.table}>
          <div className={classes.table_title}>
            <div className={classes.title_number}>#</div>
            <div className={classes.title_year}>{t('biographyPage.titleYear')}</div>
            <div className={classes.title_event}>{t('biographyPage.titleEvent')}</div>
          </div>
          {
            biographyData
              .map((el, index) => (
                <TableBody
                  deleteSelectPost={deleteSelectPost}
                  key={el.event}
                  index={index}
                  year={el.year}
                  event={el.event}
                />
              ))
          }
          <div className={classes.form}>
            <div className={classes.form_input}>
              <textarea
                onChange={updateNewYear}
                value={newYear}
                placeholder={t('biographyPage.placeholderYear')}
                maxLength="4"
              />
              <textarea
                onChange={updateNewText}
                value={newText}
                placeholder={t('biographyPage.placeholderEvent')}
              />
            </div>
            <div className={classes.form_button}>
              <button type="button" onClick={addEvent}>
                {t('biographyPage.addEvent')}
              </button>
              <button
                type="button"
                onClick={deleteLastPost}
                className={classes.del_btn}
              >
                {t('biographyPage.delEvent')}
              </button>
            </div>
            <div className={classes.form_action}>
              <div
                className={classes.action_title}
              >
                {t('biographyPage.sort')}
              </div>
              <div className={classes.action_items}>
                <div
                  aria-hidden="true"
                  onClick={() => { toMax(); }}
                  className={classes.items}
                >
                  #1
                </div>
                <div
                  aria-hidden="true"
                  onClick={() => { toMin(); }}
                  className={classes.items}
                >
                  #2
                </div>
                <div
                  aria-hidden="true"
                  onClick={() => { minMax(); }}
                  className={classes.items}
                >
                  #3
                </div>
                <div
                  aria-hidden="true"
                  onClick={() => { rndm(); }}
                  className={classes.items}
                >
                  #4
                </div>
                <div
                  aria-hidden="true"
                  onClick={() => { bubbleSort(); }}
                  className={classes.items}
                >
                  #5
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonHome />
      </div>
    </div>
  );
};

Biography.propTypes = {
  biographyPageData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  addEvent: PropTypes.func.isRequired,
  updateNewYear: PropTypes.func.isRequired,
  updateNewText: PropTypes.func.isRequired,
  deleteLastPost: PropTypes.func.isRequired,
  deleteSelectPost: PropTypes.func.isRequired,
  toMax: PropTypes.func.isRequired,
  toMin: PropTypes.func.isRequired,
  minMax: PropTypes.func.isRequired,
  rndm: PropTypes.func.isRequired,
  bubbleSort: PropTypes.func.isRequired,
  // addState: PropTypes.func.isRequired,
};

export default Biography;
