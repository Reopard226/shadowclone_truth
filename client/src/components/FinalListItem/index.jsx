import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

import Avatar from "../Avatar";
import TextItem from "../TextItem";
import { VOTE_TYPE } from "../../config";
import CandidateShape from "../../types/candidate";

import "./FinalListItem.style.scss";

function FinalListItem({ data, onInfo, onRate }) {
  return (
    <div className="result-list-item">
      <div className="p-grid">
        <Link
          className="p-col-fixed"
          to={`/voter-reason/candidate/${data.candidate.id}`}
        >
          <Avatar
            url={data.candidate.photo}
            alt="avatar"
            label={data.candidate.vote_type}
          />
        </Link>
        <div className="p-col">
          <h4>{data.candidate.name}</h4>
          <div className="p-grid result-list-item__values">
            <div className="p-col">
              <TextItem label={VOTE_TYPE.top} value={`${data.tops}%`} />
            </div>
            <div className="p-col">
              <TextItem
                label={VOTE_TYPE.favorite}
                value={`${data.favorites}%`}
              />
            </div>
            <div className="p-col">
              <TextItem
                label={VOTE_TYPE.compromise}
                value={`${data.compromises}%`}
              />
            </div>
            <div className="p-col">
              <TextItem label={VOTE_TYPE.veto} value={`${data.vetos}%`} />
            </div>
            <div className="p-col">
              <TextItem label={"TBD"} value={`${data.tbd || 0}%`} />
            </div>
          </div>
          <div className="p-grid p-justify-between">
            <div className="p-col-5 p-fluid">
              <Button
                label="Info & News"
                className="p-button-secondary"
                onClick={onInfo}
              />
            </div>
            <div className="p-col-7 p-fluid">
              <Button
                label="Rate this candidate"
                className="p-button-secondary"
                onClick={onRate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FinalListItem.propTypes = {
  data: CandidateShape.isRequired,
  onInfo: PropTypes.func.isRequired,
  onRate: PropTypes.func.isRequired
};

export default FinalListItem;
