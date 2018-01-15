import React, { Component } from 'react';
import getData from './services/apiRequests';
import ProductList from './components/productsList';
import Pagination from './components/pagination';

class App extends Component { 
    constructor(props) {
        super(props);
        this.getNewData = this.getNewData.bind(this);

        this.state = { dataList : undefined };
    }

    componentDidMount() {
        this.getNewData();
    }

    getNewData(query = '') {
        getData(query).then(res => this.setState({
            dataList: res.data
        }));
    }
  
    render() {
        const { dataList } = this.state;
        const paginationData = {
            getNewData: this.getNewData,
            totalPageNumber: dataList ? dataList.totalPageNumber : 1
        };

        return (
            <div className="App">
                <h1>Products List</h1>
                {dataList && <div>
                    <ProductList products={dataList.data}/>
                    <Pagination {...paginationData}/>
                </div>}
                {!dataList && <h3>LOADING...</h3>}
            </div>
        );
      }
}

export default App;
