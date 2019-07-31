import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class VideoGallery extends React.Component {
  items = [
    "https://www.youtube.com/embed/_XcVi_Urdic?start=19",
    "https://www.youtube.com/embed/zNm6YvTdFRg",
    "https://www.youtube.com/embed/-hU_X6Vr1MY",
    "https://www.youtube.com/embed/g5smb8De9h4",
    "https://www.youtube.com/embed/j2p6IT0SyQo"
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
      <iframe
        width="auto"
        height="auto"
        src={i}
        frameborder="0"
        allowfullscreen
        key={i}
      />
    ));
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    return (
      <div>
        <AliceCarousel
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
export default VideoGallery;
