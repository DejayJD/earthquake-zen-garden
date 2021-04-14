import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Feature } from "../../types";
import "./detail-view.scss";
import { TimeDisplay } from "../../components/TimeDisplay";

export const DetailView = ({ featureList }: { featureList: Feature[] }) => {
  const { id } = useParams<{ id: string }>();
  // Memoized since this will only change whenever we change routes again
  const feature: Feature = useMemo(
    () => featureList.find(feature => feature.id === id),
    [featureList, id]
  );
  return (
    <div className="centered-wrapper">
      <div className="detail-view-container">
        <h2>{feature.properties.title}</h2>
        <table className="detail-table">
          <tr>
            <td className="detail-table-left-column"> Title </td>
            <td> {feature.properties.title}</td>
          </tr>
          <tr>
            <td className="detail-table-left-column"> Magnitude </td>
            <td> {feature.properties.mag}</td>
          </tr>
          <tr>
            <td className="detail-table-left-column"> Time </td>
            <td>
              <TimeDisplay time={feature.properties.time} />
            </td>
          </tr>
          <tr>
            <td className="detail-table-left-column"> Status </td>
            <td> {feature.properties.status}</td>
          </tr>
          <tr>
            <td className="detail-table-left-column"> Tsunami </td>
            <td> {feature.properties.tsunami}</td>
          </tr>
          <tr>
            <td className="detail-table-left-column"> Type </td>
            <td> {feature.properties.type}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
