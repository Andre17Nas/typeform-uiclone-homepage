import styled from 'styled-components';
import {motion} from 'framer-motion'

export const Main = styled(motion.main)`
    .first {
        background-color: red;
        overflow: hidden;

        .offset{
            width: 100%;
            height: 100%;
        }

        .a{ 
            background: #faf1ea;
            height: 100%;
            display: flex;
            align-items: flex-end;

            .left-side{
                background: #7dbb91;
                width: 50%;
                height: 100%;
            }

            .right-side{
                width: 50%;
                height: 100%;
            }

            .right-img{
                background: #7dbb91;
                width: 100%;
                height: 100%;
            }

         }
        .b{ background: #582534; 
            width: 100%;
                height: 100%;
        }
        .c{ background: #0a7397;
            width: 100%;
            height: 100%;
        }
    }

    .second{
        background: green;
    }

    .third {
        background: yellow;
    }

    .fourth{
        background: blue;
    }

`;

export const Section = styled(motion.div)`
    position: relative;
`;

export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top:0;
    left:0;
    right: 0;
`;

