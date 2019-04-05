import React, { Component } from 'react'

export default class HogCard extends Component {
    requireImage = (path)=>{
        let img =  require(`../hog-imgs/${path}`)
        return img
    }
  render() {
      const {name, specialty, greased, weight, medal} = this.props.hog
      const hogImg = this.requireImage(this.props.hog.img)
    return (
        <div className="pigTile">
            <div className="image">
                <img src={hogImg} alt="hog" />
            </div>
            <div className="content">
                <h3>{name}</h3>
                <div>
                    Higest Medal: {medal}
                </div>
                <div className="normalText">
                    Specialty: {specialty}
                </div>
                <div>
                    {greased? "Greased" : "Non-Greased"}
                </div>
                <div>
                    Weight: {weight}
                </div>
            </div>
        </div>
      )
  }
}

