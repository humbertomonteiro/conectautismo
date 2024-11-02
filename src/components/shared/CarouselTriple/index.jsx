// export default function CarouselTriple({ array }) {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false,
//         }}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         breakpoints={{
//           "@0.75": {
//             slidesPerView: 1,
//           },
//           "@1.50": {
//             slidesPerView: 2,
//           },
//         }}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {testimonials.map((testimony) => (
//           <SwiperSlide>
//             <div key={testimony.name} className={styles.testimony}>
//               <div className={styles.img}>
//                 <img
//                   src={
//                     testimony.img === "" || !testimony.img
//                       ? logo
//                       : testimony.img
//                   }
//                   alt={testimony.name}
//                 />
//               </div>
//               <div className={styles.content}>
//                 <strong>{testimony.name}</strong>
//                 <div className={styles.stars}>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//                 <p>{testimony.comment}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
