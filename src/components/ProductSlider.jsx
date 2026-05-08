import React from 'react';

const ProductCard = ({ title, modelName, bgImage, buttons }) => {
  return (
    <div className={`card`} style={{ backgroundImage: `url(${bgImage})` }}>
      <h3>{title}</h3>
      <div className="bottom-text">
        <h2 className="nanum-gothic-extrabold">{modelName}</h2>
        <div className="btn-wrap">
          {buttons.map((btn, idx) => (
            <button key={idx} className={btn.className}>
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductSlider = ({ items, indicatorsCount }) => {
  return (
    <section className="sec-slider">
      <div className="cardlist">
        {items.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
      <div className="indicator">
        {Array.from({ length: indicatorsCount }).map((_, idx) => (
          <div key={idx} className={idx === 0 ? 'active' : ''}></div>
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
