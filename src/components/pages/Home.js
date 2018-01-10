import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Layout } from 'antd';
import CoinsRanked from '../widgets/tables/CoinsRanked';

class Home extends Component { 
        
    render() { 
       
       return ( 
         
         <div className="main-container">       
           <CoinsRanked data={this.props} />
            </div>
         
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
    }
  }
`;


export default graphql(query, {name: 'coins' })(Home);