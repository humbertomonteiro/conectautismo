import "./section.css";

import Title from "../Title";

export default function Section({
  title,
  styleImg,
  img,
  descriptionImg,
  styleComponent,
  component,
}) {
  return (
    <div className="containerSection">
      <Title text={title} />

      <div className="boxSection" data-aos="zoom-in">
        <div className={styleImg}>
          <img src={img} alt={descriptionImg} />
        </div>
        <div className={styleComponent}>{component}</div>
      </div>
    </div>
  );
}
