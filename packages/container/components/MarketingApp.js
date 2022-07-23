import React, { useRef } from "react"
import { useEffect } from "react"

import {mount} from 'marketing/MarketingApp'

function MarketingApp() {
    const marketingElem = useRef(null)
    useEffect(()=> {
        mount(marketingElem.current)
    })
    return (
        <div ref={marketingElem} />
    )
}
export default MarketingApp