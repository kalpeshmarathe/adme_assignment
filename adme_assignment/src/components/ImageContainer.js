import React, { useState, useEffect } from "react";

export default function ImageContainer() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(50);

  useEffect(() => {
    fetchImages(currentPage);
  }, [currentPage]);

  const fetchImages = async (page) => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`);
      const data = await response.json();
      console.log("API Response Data:", data);

      setImages(data);
      setTotalPages(50);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container border border-dark">
        <div className="row">
          <div className="col-lg-8 col-12 mb-4">
            <div className="d-flex justify-content-center">
              <img
                src={images[0]?.download_url}
                alt="1"
                loading="lazy"
                className="img-fluid"
                style={{ height: '400px' }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-12 d-flex flex-column justify-content-between">
            <div className="mb-2">
              <img
                src={images[1]?.download_url}
                alt="2"
                loading="lazy"
                className="img-fluid"
                style={{ height: '200px' }}
              />
            </div>
            <div>
              <img
                src={images[2]?.download_url}
                alt="3"
                loading="lazy"
                className="img-fluid"
                style={{ height: '200px' }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-6 mb-4">
            <div className="d-flex justify-content-center">
              <img
                src={images[4]?.download_url}
                alt="4"
                loading="lazy"
                className="img-fluid"
                style={{ height: '300px' }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div className="d-flex justify-content-center">
              <img
                src={images[5]?.download_url}
                alt="5"
                loading="lazy"
                className="img-fluid"
                style={{ height: '300px' }}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-primary me-2"
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="align-self-center">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="btn btn-primary ms-2"
            disabled={currentPage >= totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

    </>
  );
}
