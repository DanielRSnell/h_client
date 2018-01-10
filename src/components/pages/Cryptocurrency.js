import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Layout } from 'antd';
import CandleChart from '../widgets/charts/CandleStick'; 

class Cryptocurrency extends Component {

    render() {

        console.log(this.props);

        return (
            <CandleChart data={this.props} />
        );
    }
}

const query = gql`
{
    coins_rank {
      profile { id
      rank
      name
      symbol
      market_cap_usd
      price_usd
      percent_change_1h
      percent_change_24h
      percent_change_7d
      }
      charts {
        month {
          time
          open
          high
          low
          close
          volumefrom
          volumeto
        }
      }
    }
  }
`

export default graphql(query, {name: 'coins' })(Cryptocurrency);