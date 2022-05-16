import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { connect } from "react-redux";
import { Avatar } from "@mui/material";
const Picture = ({ auth: { userInfo }, height, width }) => {
  let exists;
  exists = userInfo?.profilePicture ? true : false;
  let letter = userInfo.userName.substr(0, 1).toUpperCase();
  let ht = height ? height : "35px";
  let wd = width ? width : "40px";

  return (
    <div>
      {exists ? (
        <Image
          style={{ width: ht, height: wd, borderRadius: "50%" }}
          cloudName="faculty-selection"
          publicId={userInfo.profilePicture}
        />
      ) : (
        <Avatar style={{ height: ht, width: wd }}>{letter}</Avatar>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  hrProfile: state.hrProfile,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Picture);
