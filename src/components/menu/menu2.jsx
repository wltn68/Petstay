import React from 'react';

function Menu2() {
  return (
    <main className="site-content">
      <h2 className="title">
        <span>펫을 맡길 지역을 선택해주세요.</span> <br />안전하게 맡길 수 있는 장소를 추천드릴게요.
      </h2>

      <section className="gallery">
        <div className="prices">
          <h3>실시간 인기호텔</h3>
          <div className="img">
            <img src="/images/hotel/hotel1.jpg"/>
            <div className="price-stamp">
              1박: 25,000원~
              <br />
            </div>
            <div className="description">
              <h4>운남동 놀개나개</h4>
            </div>
          </div>

          <div className="img">
            <img src="/images/hotel/hotel3.jpg" />
            <div className="price-stamp">
              1박: 50,000원~
              <br />
            </div>
            <div className="description">
              <h4>남북동 독독</h4>
            </div>
          </div>

          <div className="img">
            <img src="/images/hotel/hotel4.jpg" />
            <div className="price-stamp">
              1박: 44,000원~
              <br />
            </div>
            <div className="description">
              <h4>중산동 훈트가르텐</h4>
            </div>
          </div>
        </div>

        <hr />

        <div className="gallery-places">
          <h3>다른 지역을 찾으시나요?</h3>

          <ul className="places">
            <li className="img-large">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Paris_480x320.jpg" />
              <h4 className="place-names">서울</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Rome_Piazza017_480x320.jpg" />
              <h4 className="place-names">인천</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Los_Angeles_480x320.jpg" />
              <h4 className="place-names">경기(북부)</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Lisbon_480x320.jpg" />
              <h4 className="place-names">경기(동부)</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Kyoto_480x320.jpg" />
              <h4 className="place-names">경기(서부)</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-London_480x320.jpg" />
              <h4 className="place-names">경기(남부)</h4>
            </li>

            <li className="img-large">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-New_York_480x320.jpg" />
              <h4 className="place-names">부산</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Barcelona_480x320.jpg" />
              <h4 className="place-names">대구</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Amsterdam_480x320.jpg" />
              <h4 className="place-names">광주</h4>
            </li>

            <li className="img-short">
              <img src="https://a0.muscache.com/airbnb/static/destinations/o-Berlin_480x320.jpg" />
              <h4 className="place-names">충청</h4>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Menu2;
