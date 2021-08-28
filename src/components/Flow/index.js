import React from "react";
import ReactFlow from "react-flow-renderer";

import Text from "./Text";

const panchBhut = [
  {
    id: "1-1-1",
    data: { label: <Text label='आकाश' /> },
    position: { x: 9, y: 191 },
    type: "input",
  },
  {
    id: "1-1-2",
    data: { label: <Text label='वायु' /> },
    position: { x: 77, y: 256 },
    type: "input",
  },
  {
    id: "1-1-3",
    data: { label: <Text label='अग्नि' /> },
    position: { x: 144, y: 321 },
    type: "input",
  },
  {
    id: "1-1-4",
    data: { label: <Text label='जल' /> },
    position: { x: 206, y: 386 },
    type: "input",
  },
  {
    id: "1-1-5",
    data: { label: <Text label='पृथ्‍वी' /> },
    position: { x: 278, y: 453 },
    type: "input",
  },
];

const suksmSarirParts = [
  {
    id: "1-3-1",
    data: { label: <Text label='5 कर्म इन्द्र्य' /> },
    position: { x: 731, y: 241 },
  },
  {
    id: "1-3-2",
    data: { label: <Text label='5 ज्ञान इन्द्र्य' /> },
    position: { x: 731, y: 306 },
  },
  {
    id: "1-3-3",
    data: { label: <Text label='5 प्राण' /> },
    position: { x: 731, y: 370 },
  },
  {
    id: "1-3-4",
    data: { label: <Text label='मन' /> },
    position: { x: 731, y: 435 },
  },
  {
    id: "1-3-5",
    data: { label: <Text label='बुद्धि' /> },
    position: { x: 731, y: 500 },
  },
];

const elements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "शरीर" },
    position: { x: 734, y: -9 },
  },
  // default node
  {
    id: "1-1",
    // you can also pass a React component as a label
    data: { label: <Text label='स्थूल' /> },
    position: { x: 528, y: 104 },
  },
  ...panchBhut,
  {
    id: "1-2",
    data: { label: <Text label='कारण' /> },
    position: { x: 953, y: 104 },
  },
  {
    id: "1-3",
    data: { label: <Text label='सूछ्म' /> },
    position: { x: 731, y: 104 },
  },
  {
    id: "1-4",
    data: {
      label: <Text label='वासना+अहंकार' />,
    },
    position: { x: 956, y: 206 },
  },

  ...suksmSarirParts,

  // animated edge
  { id: "e1-2", source: "1", target: "1-1", animated: false },
  { id: "e1-3", source: "1", target: "1-2" },
  { id: "e1-4", source: "1", target: "1-3" },
  { id: "e1-5", source: "1-1", target: "1-1-1", type: "step" },
  { id: "e1-6", source: "1-1", target: "1-1-2", type: "step" },
  {
    id: "e1-7",
    source: "1-1",
    target: "1-1-3",
    label: "पांच भौतिक शरीर",
    type: "step",
    labelStyle: { fill: "black", fontSize: "1rem" },
    labelBgPadding: [5, 5],
    labelBgBorderRadius: 4,
    labelBgStyle: {
      fill: "#FFCC00",
      fontWeight: "500",
      color: "#fff",
      fillOpacity: 0.7,
    },
  },
  {
    id: "e1-8",
    source: "1-3",
    target: "1-3-1",
    label: "17 तत्व से बना",
    labelStyle: { fill: "black", fontSize: "1rem" },
    labelBgPadding: [5, 5],
    labelBgBorderRadius: 4,
    type: "step",
    labelBgStyle: {
      fill: "#FFCC00",
      fontWeight: "500",
      color: "#fff",
      fillOpacity: 1,
    },
  },
  { id: "e1-9", source: "1-1", target: "1-1-5", type: "step" },
  { id: "e1-10", source: "1-3", target: "1-3-1", type: "step" },
  { id: "e1-11", source: "1-3", target: "1-3-2", type: "step" },
  { id: "e1-12", source: "1-3", target: "1-3-3", type: "step" },
  { id: "e1-13", source: "1-3", target: "1-3-4", type: "step" },
  { id: "e1-14", source: "1-3", target: "1-3-5", type: "step" },
  { id: "e1-15", source: "1-2", target: "1-4" },
];

const Flow = () => {
  return (
    <div className='container'>
      <ReactFlow elements={elements} />
    </div>
  );
};

export default Flow;
