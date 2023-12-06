import React ,{ Component } from 'react';
import ActorsInfo from './ActorsInfo'
import ActorItem from './ActorsItem';
import '../App.css'

class Actors extends Component {

    constructor(){

        super()
        this.state = {
            actorsInfo : ActorsInfo,
            newActorsInfo : [],
            counter : 0,
        }

        this.addActor = this.addActor.bind(this)
    }

    addActor() {

        if(this.state.counter < this.state.actorsInfo.length) {

            this.state.newActorsInfo.push(this.state.actorsInfo[this.state.counter])
            this.setState( (prevState) => {

            return {counter : prevState.counter + 1}

            })

            console.log(this.state.actorsInfo)

            this.newActors = this.state.newActorsInfo.map((actor)=>{

            return (

                <ActorItem 
                    key={actor.id}
                    img={actor.img}
                    name={actor.name}
                    phoneNumber={actor.phoneNumber}
                    position={actor.position}
                />
                )
            })
        }
        
    }

    render () {

        return(

            <div className='row'>

                <button className='btn btn-primary btn-lg btn-block' onClick={this.addActor}>Add an Actor</button>

                {this.newActors}
            </div>
        )

    }

}

export default Actors