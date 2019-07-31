import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class Gallery extends React.Component {
  items = [
    "https://www.egypttoday.com/images/larg/49279.jpg",
    "https://i.ytimg.com/vi/_b1_r5cs_0g/maxresdefault.jpg",
    "https://www.lastminutemusicians.com/user_photos/800/1517920756/63096.jpg",
    "https://t4.ftcdn.net/jpg/01/74/61/73/240_F_174617373_RQMYsgw05SE62iTfZYqj3NH7qbkNWiIo.jpg",
    "https://t4.ftcdn.net/jpg/01/74/61/73/240_F_174617373_RQMYsgw05SE62iTfZYqj3NH7qbkNWiIo.jpg"
  ];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 3 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  galleryItems() {
    return this.items.map(i => (
      <img
        style={{ marginRight: "3em", marginLeft: "3em", width: "99%" }}
        key={i}
        src={i}
      />
    ));
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div >
        <AliceCarousel className="PhotoGallery"
          dotsDisabled={true}
          buttonsDisabled={false}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
      </div>
    );
  }
}
export default Gallery;
