import React, { useMemo } from "react";
import { Feature, FeatureCollectionData } from "../../types";
import "./list-view.scss";
import { DataTable } from "../../components/DataTable";
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom";
import { TimeDisplay } from "../../components/TimeDisplay";

const TitleCell = ({
  cell: { value },
  row: {
    original: { id }
  }
}: {
  cell: { value: string };
  row: { original: { id: string } };
}) => <Link to={`${ROUTES.detail}/${id}`}> {value} </Link>;

const TimeCell = ({ cell: { value } }: { cell: { value: number } }) => (
  <TimeDisplay time={value} />
);

const tableColumns = [
  { Header: "Title", accessor: "title", Cell: TitleCell },
  { Header: "Magnitude", accessor: "magnitude" },
  { Header: "Time", accessor: "time", Cell: TimeCell }
];

export const ListView = ({
  featureData
}: {
  featureData: FeatureCollectionData;
}) => {
  const tableData = useMemo(
    () =>
      featureData.features.map((feature: Feature) => ({
        id: feature.id,
        title: feature.properties.title,
        magnitude: feature.properties.mag,
        time: feature.properties.time
      })),
    [featureData]
  );

  return (
    <div className="centered-wrapper">
      <h2> {featureData.metadata.title} </h2>
      <DataTable columns={tableColumns} data={tableData} />
    </div>
  );
};
