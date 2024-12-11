import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from '../../assets/Team/Team.1.jpg'
import team2 from '../../assets/Team/Team.2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <motion.img
                    src={team1}
                    animate = {{y: [50, 100, 50]}}
                    transition={{duration: 10,
                        repeat:Infinity, ease: easeOut}}
                    className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500  shadow-2xl" />
                <motion.img
                    src={team2}
                    animate = {{x: [100, 150, 100]}}
                    transition={{duration: 10,
                        repeat:Infinity, delay: 5, ease: easeOut}}
                    className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500  shadow-2xl" />
                </div>
                <div className='flex-1'>
                    
                    <motion.h1
                    animate={{x:50}}
                    transition={{duration: 2,
                        repeat:Infinity, delay: 1, ease: easeOut}}
                    r 
                    className="text-5xl font-bold">The <motion.span 
                    animate={{color: ['#33acff', '#337eff', '#3b33ff']}}
                    transition={{duration: 1.5, repeat: Infinity}}>Easiest Way</motion.span> to Get Your New Job
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;