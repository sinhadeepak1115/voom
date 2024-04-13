import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Meeting Room: #{params.id}
      <div></div>
    </div>
  );
};

export default Meeting;
