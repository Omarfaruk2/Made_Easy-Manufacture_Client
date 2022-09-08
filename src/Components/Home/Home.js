import React from 'react'
import Banner from './Banner'
import BussneissSamary from './BussneissSamary'
import Items from './Items/Items'
import Review from './Review'
import "./Home.css"
import Contact from './Contact'

const Home = () => {
    return (
        <div className='background-home'>
            <Banner />
            <Items />
            <BussneissSamary />
            <Review />
            <Contact />
        </div>
    )
}

export default Home