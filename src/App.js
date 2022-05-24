import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'lamborgini',
          img: '1.png',
          descr: 'huracan 700hp',
          category: 'sportcar',
          price: '299.99'
        },
        {
          id: 2,
          title: 'corvete',
          img: '2.png',
          descr: 'corvete 500hp',
          category: 'sportcar',
          price: '199.99'
        },
        {
          id: 3,
          title: 'lamborgini',
          img: '4.png',
          descr: 'urus 750hp',
          category: 'crossover',
          price: '399.99'
        },
        {
          id: 4,
          title: 'audi',
          img: '5.png',
          descr: 'r8 750hp',
          category: 'cupe',
          price: '299.99'
        },
        {
          id: 5,
          title: 'nissan',
          img: '9.png',
          descr: 'GTR 700hp',
          category: 'sportcar',
          price: '149.99'
        },
        {
          id: 6,
          title: 'chevrolet',
          img: '6.png',
          descr: 'camaro 400hp',
          category: 'cupe',
          price: '199.99'
        },
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addOrder = this.addOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addOrder} />
        {this.state.ShowFullItem && <ShowFullItem  onAdd={this.addOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items} )
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id) })
  }

  addOrder(item) {
    let isArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isArray = true
    })
    if(!isArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
