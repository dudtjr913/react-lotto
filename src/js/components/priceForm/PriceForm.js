import React from 'react';
import PropTypes from 'prop-types';
import { LOTTO } from '../../constants/lottoData';
import { ERROR_MESSAGE } from '../../constants/messages';
import './PriceForm.scss';

const PriceForm = (props) => {
  const onSubmitPrice = (event) => {
    event.preventDefault();

    const price = event.target.price.value;

    if (price < LOTTO.PRICE) {
      alert(ERROR_MESSAGE.LESS_THAN_MIN_PRICE);

      return;
    }

    const change = price % LOTTO.PRICE;
    if (change > 0) {
      alert(ERROR_MESSAGE.HAS_CHANGE(change));
    }

    props.createLottoList(Math.floor(price / LOTTO.PRICE));
  };

  const handleChangeInputValue = ({ target }) => {
    props.onPriceChange(target.value);
  };

  return (
    <section className="PriceForm">
      <form className="price-form" onSubmit={onSubmitPrice}>
        <label className="price-label">
          <span className="price-text">구입할 금액을 입력해주세요.</span>
          <input
            onChange={handleChangeInputValue}
            value={props.price}
            className="price-input"
            name="price"
            placeholder="구입 금액"
            type="number"
            min="1000"
            step="1000"
          />
        </label>
        <div className="price-submit-btn-box">
          <button className="price-submit-btn">확인</button>
        </div>
      </form>
    </section>
  );
};

PriceForm.propTypes = {
  createLottoList: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
};

export default PriceForm;
