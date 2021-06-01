import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import userPhoto from '../../../assets/img/user.png';
import arrowLeft from '../../../assets/img/arrowleft.svg';
import arrowRight from '../../../assets/img/arrowright.svg';

const User = ({
  users, current, activeUserTitle, prevSlide, nextSlide, isActiveUserTitle, isActiveItem
}) => {
  const { t } = useTranslation();
  return (
    <>
      <img className="left" src={arrowLeft} alt="left" onClick={prevSlide} aria-hidden="true" />
      <img className="right" src={arrowRight} alt="right" onClick={nextSlide} aria-hidden="true" />
      {users.map(({ photo, name, id }, index) => (
        <div key={id} className={current === index ? 'slide active' : 'slide'}>
          {index === current && (
            <div className={isActiveItem ? 'items itemsActive' : 'items'}>
              <div className="item">
                <img
                  // onError={() => alert('Ошибка во время загрузки изображения')}
                  // onLoad={() => alert(`Изображение загружено`)}
                  src={photo || userPhoto}
                  alt="userphoto"
                />
              </div>
              <div
                onClick={activeUserTitle}
                className={isActiveUserTitle ? 'user-title activeTitle' : 'user-title'}
                aria-hidden="true"
              >
                {name}
              </div>
              <Link
                to={{
                  pathname: `/api/${id}`,
                  state: { id }
                }}
                className="userBtn"
              >
                {t('apiPage.more')}
              </Link>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

User.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  current: PropTypes.number.isRequired,
  isActiveUserTitle: PropTypes.bool.isRequired,
  isActiveItem: PropTypes.bool.isRequired,
  activeUserTitle: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default User;
