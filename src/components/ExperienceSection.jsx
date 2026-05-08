import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Tesla 경험하기",
      desc: "지금 시승 신청하세요",
      imgUrl: "/src/assets/images/02.jpg",
      btnText: "시승 신청하기",
      itemClass: "item01"
    },
    {
      title: "액세서리",
      desc: "차량 액세서리 및 Tesla 브랜드 상품을 만나보세요.",
      imgUrl: "/src/assets/images/03.jpg",
      btnText: "지금 쇼핑하기",
      itemClass: "item02"
    }
  ];

  return (
    <section id="sec02">
      {experiences.map((exp, idx) => (
        <div key={idx} className={`sec02-card ${exp.itemClass}`}>
          <div className="sec02-img" style={{ backgroundImage: `url(${exp.imgUrl})` }}></div>
          <div className="sec02-txt">
            <h2 className="nanum-gothic-extrabold" style={{ fontSize: '24px' }}>{exp.title}</h2>
            <p>{exp.desc}</p>
            <div className="btn-wrap">
              <button className="btn-white">{exp.btnText}</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
