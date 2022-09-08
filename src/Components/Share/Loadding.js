// import React from 'react'

// const Loadding = () => {
//     return (
//         <div className='mx-auto h-[60vh]'>
//             <p className='text-center'> <progress className="progress w-3/5 mx-auto"></progress></p>
//             <p className='text-center text-primary'> <progress className="progress w-3/5 mx-auto"></progress></p>
//         </div>
//     )
// }

// export default Loadding


import React from 'react'
import { HashLoader } from 'react-spinners'

const Loadding = () => {
    return (
        <div className='h-[50vh]'>
            {/* <FadeLoader className='mx-auto' color="#36d7b7" /> */}
            {/* <GridLoader className='mx-auto' color="#36d7b7" />
            <SyncLoader className='mx-auto' color="#36d7b7" /> */}
            <HashLoader className='mx-auto mt-20' color="#800080" />
        </div>
    )
}

export default Loadding