import React from 'react';
import { Box } from '@mui/material';
export const GreyDotsRight = (props) => {
    return <div>
        <Box sx={{ position: 'absolute', right: '0' }}>
            <img src={require("../../Assets/home/Dot Ornament.png")} alt="Ornament" />
        </Box>
    </div>;
};


export const GreyDotsLeft = () => {
    return <div>
        <Box sx={{ position: 'absolute', left: '0' }}>
            <img src={require("../../Assets/home/Dot Ornament.png")} alt="Ornament" />
        </Box>
    </div>;
};

export const GreyDotTriangleRight = () => {
    return <div>
        <Box sx={{ position: 'absolute', right: '0', top: '0' }}>
            <img src={require("../../Assets/Group@2x.png")} alt="Ornament" />
        </Box>
    </div>;
};

export const GreyDotCircleLeft = () => {
    return <div>
        <Box sx={{ position: 'absolute', left: '0', bottom: '0' }}>
            <img src={require("../../Assets/Group.png")} alt="Ornament" />
        </Box>
    </div>;
};


export const BabyPink = () => {
    return <div>
        <Box sx={{ position: 'absolute', left: '0', bottom: '-50px' }}>
            <img src={require("../../Assets/Vector.png")} alt="Ornament" />
        </Box>
    </div>;
};

