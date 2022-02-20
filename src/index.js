import React, { FC } from 'react'
import {Explanation} from './components/explanation/Explanation.tsx'
import {HashRouter,Route} from 'react-router-dom'
const MainPage: FC = () => {
    return (
        <HashRouter>
        <div
            style={{
                position: 'relative',
                height: '100%',
                display: 'grid',
                gridTemplateRows: '900px auto'
            }}
        >
          <Route path="/" exact component={Explanation} />
            Hello
        </div>
        </HashRouter>
    )
}

export default MainPage
