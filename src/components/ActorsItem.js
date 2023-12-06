import '../App.css'
import { Component } from "react";


class ActorItem extends Component {

    render() {

        return (

            <div className='col-md-3 col-sm-6'>

                <div className="card">

                    <div className="card-header">

                        <img className="img-actor" style={{ maxWidth: '100%' }} src={this.props.img} alt={this.props.name} />
                    </div>

                    <div className="card-body">

                        <h2>{this.props.name}</h2>
                        <h5>{this.props.position}</h5>
                        <div>{this.props.phoneNumber}</div>
                        <div>{this.props.position}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActorItem