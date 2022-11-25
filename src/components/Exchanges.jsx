import { Col, Row } from 'antd'
import * as React from 'react'

import { useGetExchangesQuery } from '../services/cryptoApi'
import Loader from './Loader'



const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery()
    const exchangesList = data?.data?.exchanges

    console.log(exchangesList)
    if (isFetching) {
        return <Loader />
    }
    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {/* map */}
            </Row>
        </>
    )
}

export default Exchanges