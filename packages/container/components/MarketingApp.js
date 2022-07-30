import React, { useRef } from "react"
import { useEffect } from "react"
import { useHistory } from 'react-router-dom'

import {mount} from 'marketing/MarketingApp'

function MarketingApp() {
    const marketingElem = useRef(null)
    const history = useHistory();
    
    useEffect(()=> {
        const {onParentNavigate} = mount(marketingElem.current, {
            onNavigate: ({pathname: nextPathname})=> {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        })
        history.listen(onParentNavigate)
    }, [])
    
    
    return (
        <div ref={marketingElem} />
    )
}
export default MarketingApp