import React from 'react'
import { Helmet } from "react-helmet";
import "../scss/components/_dashboard.scss"

function Dashboard() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
            <div className='dash-container'>Dashboard</div>
        </>
    )
}

export default Dashboard