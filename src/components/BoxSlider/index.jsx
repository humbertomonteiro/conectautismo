import "./boxSlider.css";

export default function BoxSlider({ array }) {
  return (
    <div className="boxSlide">
      {array.length > 1 ? (
        <div>
          <div className="showSlides">
            {array?.map((e) => (
              <div
                key={e.name}
                className={
                  array.length === 4
                    ? "slide"
                    : array.length === 3
                    ? "slide3"
                    : "slide2"
                }
              >
                <img src={e.img} alt={e?.name} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {array?.map((item) => (
            <div className="slideShow">
              <img key={item.name} src={item.img} alt={item?.name} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
