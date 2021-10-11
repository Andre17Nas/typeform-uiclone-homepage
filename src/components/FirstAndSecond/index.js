import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Sticky } from "../../styles";

function FirstAndSecond(){
    const { scrollYProgress } = useViewportScroll()
    const frameOpacity = useTransform(scrollYProgress,[0.196, 0.198], [0, 1]);
    
    const  frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8]);


    return(
        <Sticky className='second'>
            <First/>
        
            <motion.div style={{
               position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                borderRadius: '4px',
                height: '100vh',
                border: '4px solid #FFF',
                opacity: frameOpacity,
                scale: frameScale,
                }}>

            </motion.div>
        </Sticky>
    )
}

function First(){

    const { scrollYProgress } = useViewportScroll()
    const firstScale = useTransform(scrollYProgress, [0.198, 0.264, 0.558, 0.627], [1, 0.511, 0.511, 1])
    const firstRadius = useTransform(scrollYProgress, [0.198, 0.264, 0.558, 0.627], [0, 4, 4, 0])
    
    const leftSideHeight = useTransform(scrollYProgress,
       [0, 0.058],['20vh', '100vh'] 
        )

    const rightSideScale = useTransform(scrollYProgress, [0.047, 0.093], [0, 0.511])
    const rightSideY = useTransform(scrollYProgress, [0.047, 0.093], ['58vh', '0vh'])

    const offSetY = useTransform(scrollYProgress, 
        [0.328, 0.397, 0.461, 0.53],
        ['0%', '-100%', '-100%', '-200%'])

    return(
        <Sticky className='first' style={{
            scale: firstScale,
            borderRadius: firstRadius,
        }}>

        <motion.div className='offset' style={{
            y: offSetY,
        }}>
            <div className='a'>
                <motion.div  className="left-side" style={{
                    height: leftSideHeight
                }}>

                </motion.div>
                <div className="right-side">
                    <motion.div className="right-img" style={{
                        scale: rightSideScale,
                        y: rightSideY,
                    }}>
                    
                    </motion.div>
                </div>
            </div>
            <div className='b'><h1>b</h1></div>
            <div className='c'><h1>c</h1></div>
        </motion.div>

        </Sticky>
        
    )
}

export default FirstAndSecond;