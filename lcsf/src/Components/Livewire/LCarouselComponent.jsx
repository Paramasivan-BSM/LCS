const LCarouselComponent = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1</h5>
            <p>Description for Slide 1.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 2</h5>
            <p>Description for Slide 2.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block w-100"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 3</h5>
            <p>Description for Slide 3.</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default LCarouselComponent;
