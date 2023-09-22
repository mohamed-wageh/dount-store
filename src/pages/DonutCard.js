import React from "react";

const DonutCard = (props) => {
  const { dount, navigate } = props;
  function handlePlus(id) {
    navigate(`/product/${id}`, { state: { dount } });
  }
  return (
    <>
      <img src={dount.img} className="card-img-top " alt="..." />
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
          <h5>{dount.name}</h5>
          <h6 className="text-danger">{dount.price}$</h6>
        </div>
        <div className="card-text d-flex justify-content-between">
          <p className="d-flex flex-wrap">{dount.description}</p>
          <button
            className="btn btn-light card-btn border border-secondary p-0 py-1"
            onClick={() => handlePlus(dount.id)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default DonutCard;
