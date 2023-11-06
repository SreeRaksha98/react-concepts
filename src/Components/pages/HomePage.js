import React from 'react'
import { IncrementDecrement } from "../IncDec"
import { ClassComponent, DidMountComponent, DidUpdateComponent } from "../ClassComponentExample"
const HomePage = () => {
    return (<>
        <div>HomePage</div>
        <div>
            <div className="ml-2">
                <div>Title : IncrementDecrement Component</div>
                <IncrementDecrement />
            </div>
            <div className="ml-2">
                <div>Title : ClassComponent</div>
                <ClassComponent />
                <div className="ml-2">
                    <div>Title : Did Mount</div>
                    <DidMountComponent />
                    <div>Title : Did Update </div>
                    <DidUpdateComponent />
                </div>
            </div>

        </div>
    </>
    )
}

export default HomePage