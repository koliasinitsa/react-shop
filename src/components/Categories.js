import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Categories: [
                {
                    key: 'all',
                    name: 'всё'
                },
                {
                    key: 'crossover',
                    name: 'кроссовер'
                },
                {
                    key: 'cupe',
                    name: 'купе'
                },
                {
                    key: 'sportcar',
                    name: 'спорткар'
                },
                
            ]
        }
    }


  render() {
    return (
      <div className='categories'>
          {this.state.Categories.map(el => (
              <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name} </div>
          ))}
      </div>
    )
  }
}

export default Categories