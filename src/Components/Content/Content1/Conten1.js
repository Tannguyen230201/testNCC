import img1 from "../../../assets/images/css-icon1.png";
import img2 from "../../../assets/images/html-icon1.png";
import img3 from "../../../assets/images/url-icon1.png";
import './Content1.scss'

function Content1() {
  return (
    <div className="content1">
      <div className="wrap_content">
        <p className="title">Lorem ipsum dolor sit amet</p>
        <div className="content">
          <img src={img1} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
      <div className="wrap_content center">
        <p className="title">Lorem ipsum dolor sit amet</p>
        <div className="content">
          <img src={img2} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
      <div className="wrap_content">
        <p className="title">Lorem ipsum dolor sit amet</p>
        <div className="content">
          <img src={img3} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content1;
