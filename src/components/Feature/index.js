import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElement'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sauce topped with 5 variety cheese</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
