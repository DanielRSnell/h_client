import React, { Component } from 'react';
import { Router, history } from 'react-router-dom';
import { Row, Col, Layout, Table, Pagination } from 'antd';
import n from 'numeral';



const { Content } = Layout;
const { Column } = Table;

var data = [];

class CoinsRanked extends Component {

state = { 
    ChartData: data,
    loading: false,
}


    CreateTable() {

        const Values = Object.values(this.props.data.coins.coins_rank);
    
        Values.forEach( item => {

            if ( item !== null || undefined ) {
                data.push(item.profile);
            }

        });

    }

    FormatInt(props) {

        const number = n(props);
        const format = number.format('0,0');
        const reFormat = number.value();
        return (<span><strong>{format}</strong></span>);

    }
   

   priceColor(props) {
    if ( props !== null ) {
     
        if ( props !== undefined ) {

        const itemName = props.toString();

        const checkStatus = itemName.includes("-");

            if ( checkStatus !== true ) {

                    return (<span><strong><font color="green">{props}</font> %</strong></span>)
            
                } else {

                return (<span><strong><font color="red">{props}</font> %</strong></span>);
            
            }

        } else { 

            return (<span><strong><font color="gray">{props}</font> %</strong></span>);
        
        }
    }    
} 

   ConvertDollar(props) {
       const number = n(props);
       n.defaultFormat(`$0,0.00`);
       const reFormat = number.format();
       return (<span><strong>{reFormat}</strong></span>);
   }

   LargeConvertDollar(props) {
    const number = n(props);
    n.defaultFormat(`$0,0`);
    const reFormat = number.format();
    return (<span><strong>{reFormat}</strong></span>);
}
   
   CheckSymbol(props) {
       if ( props !== 'MIOTA' ) {
           return ( <span>( <strong>{props}</strong> ) </span> )
       } else { 
           return ( <span>( <strong>IOT / IOTA</strong> ) </span> )
       }
   }

   rowClickHandler(symbol) {
        console.log(symbol);
        this.props.data.history.push('/cryptocurrency/' + symbol);
    }

    render() {
        
        if ( this.props.data.coins.loading ) {
            console.log(`Data is loading`);
            console.log(this.props);
        } else {
            this.CreateTable();
            console.log(this.props);
            console.log(`Data has loaded!`);
        }
        
     
        return (
       // <div> This is a test div </div>
        <Row type="flex" span={24} justify="center">
            <Col span={20} value={5}>
            <Content style={{ background: '#fff', padding: 0, margin: 0, minHeight: 280 }}>
        
            <Table
            loading={this.props.data.coins.loading}
            size="default"
            bordered={false}
            indentSize={20}
            pagination={{pageSize: 100}}
            dataSource={this.state.ChartData}
            rowKey={key => {key.id}}
            onRowClick={item => this.rowClickHandler(item.symbol)}
            >

            <Column
            title={<center><h4><strong>RANK</strong></h4></center>}
            keys="rank"
            render={item => ( <center><span><h3>{item.rank}</h3></span></center> )}
            />
            
            <Column
                keys="icon"
                width={100}
				render={item => (
		    <center><img src={ 
            'https://files.coinmarketcap.com/static/img/coins/32x32/' + item.id + '.png' }/>
        </center> )}
								/>

            <Column
            width={200}
            keys="name"
            render={item => ( <span><h3>{item.name}</h3></span> )}
            />

            <Column
            title={<h4><strong>MARKET CAP</strong></h4>}
            keys="market_cap_usd"
            render={item => { return this.LargeConvertDollar(item.market_cap_usd); }}
            />

            <Column
            title={<h4><strong>PRICE</strong></h4>}
            width={125}
            keys="price_usd"
            render={item => { return this.ConvertDollar(item.price_usd) }}
            />
            
            <Column
            title={<h4><strong>HOUR</strong></h4>}
            width={125}
            keys="percent_change_1h"
            render={item => {  return this.priceColor(item.percent_change_1h); }}
            />
            
            <Column
            title={<h4><strong>DAILY</strong></h4>}
            width={125}
            keys="percent_change_24h"
            render={item => { return this.priceColor(item.percent_change_24h); }}
            />
            
            <Column
            title={<h4><strong>WEEKLY</strong></h4>}
            width={125}
            keys="percent_change_7d"
            render={item => { return this.priceColor(item.percent_change_7d); }}
            />
            
            <Column
            title={<h4><strong>TICKER</strong></h4>}
            width={125}
            keys="symbol"
            render={item => { return this.CheckSymbol(item.symbol); }}
            />
            </Table>
            </Content>
            </Col>
        </Row>
            );
         
    }
}

export default CoinsRanked;