import styled from 'styled-components'
import {motion} from 'framer-motion'

const Container = styled(motion.header)`
    width: 100%;
    height: 200px;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    position: fixed;
    z-index: 4;
`
export default Container;