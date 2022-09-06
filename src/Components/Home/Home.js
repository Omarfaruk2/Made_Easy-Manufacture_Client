import React from 'react'
import Banner from './Banner'
import BussneissSamary from './BussneissSamary'
import Items from './Items/Items'
import Review from './Review'

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <BussneissSamary />
            <Review />
        </div>
    )
}

export default Home