import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // Import Swiper styles

function Review() {
  useEffect(() => {
    new Swiper('.review-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  // Users data with multiple reviews each
  const users = [
    {
      name: "Vijay",
      img: "images/img.1.jpg",
      reviews: [
        "“Dream Events made our special day truly unforgettable. Their team was professional, creative, and attentive to every detail. Highly recommend them for any event that deserves perfection and elegance.”",
      ],
    },
    {
      name: "Rohit",
      img: "images/img.2.jpg",
      reviews: [
        "“From start to finish, Dream Events exceeded our expectations. The décor, coordination, and energy were flawless. Guests still talk about it! We couldn’t have asked for a more perfect event.”",
      ],
    },
    {
      name: "Mohit",
      img: "images/img.3.jpg",
      reviews: [
        "“Every moment felt magical thanks to Dream Events. Their team handled everything with grace and professionalism. Truly the best experience we’ve had with any event company. Would hire them again!”",
      ],
    },
    {
      name: "Ankit",
      img: "images/img.4.jpg",
      reviews: [
        "“Incredible service and stunning execution. Dream Events brought our vision to life more beautifully than we imagined. Punctual, polite, and talented—highly recommended for anyone planning a memorable event.”",
      ],
    },
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">Client's <span>Review</span></h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">

          {users.map((user, i) => (
            <div className="swiper-slide" key={i}>
              <i className="fas fa-quote-right"></i>
              <div className="user">
                <img src={user.img} alt={user.name} />
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <span>happy customer</span>
                </div>
              </div>
              {/* Show all reviews for that user */}
              {user.reviews.map((review, idx) => (
                <p key={idx}>{review}</p>
              ))}
            </div>
          ))}

        </div>

        {/* Pagination dots */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Review;
