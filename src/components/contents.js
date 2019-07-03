import React, {Component} from 'react'
import Form from './form'

class Contents extends Component{
    constructor(){
        super()
        this.state={
            title:"Assessment-2",
            check_2:true,
            check_3:true,
            check_4:true,
            adults:{},
            children:{}
        }
        this.handleCheck2 = this.handleCheck2.bind(this)
        this.handleCheck3 = this.handleCheck3.bind(this)
        this.handleCheck4 = this.handleCheck4.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addAdult = this.addAdult.bind(this)
        this.addChild = this.addChild.bind(this)
    }

    handleCheck2 = () =>{
        this.setState({
            check_2:!this.state.check_2,
        })
    }
    handleCheck3 = () =>{
        this.setState({
            check_2:!this.state.check_2,
            check_3:!this.state.check_3,
        })
    }
    handleCheck4=()=>{
        this.setState({
            check_4:!this.state.check_4,
            check_3:!this.state.check_3,
            check_2:!this.state.check_2
        })
    }

    addAdult=(adult, room)=>{
        const adults = {...this.state.adults}
        console.log(adults)
        adults[`room-${room}-adult-${adult}`]=adult
        this.setState({
            adults:adults
        })
    }
    addChild=(child, room)=>{
        const children = {...this.state.children}
        console.log(children)
        children[`room-${room}-child-${child}`]=child
        this.setState({
            children:children
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()   
    }
    componentWillMount(){
        const localStorageAdult = localStorage.getItem(`adult`);
        const localStorageChild = localStorage.getItem(`child`);
        console.log(localStorageAdult, localStorageChild)
        this.setState({
            adults:JSON.parse(localStorageAdult),
            children:JSON.parse(localStorageChild)  
        })
        // console.log(localStorageAdult)
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem(`adult`, JSON.stringify(nextState.adults))
        localStorage.setItem(`child`, JSON.stringify(nextState.children))
    }

    render(){
        return(
            <div className="rooms">
                <form onSubmit={this.handleSubmit} className="room-form">
                    <div className="room-1 room">
                        <h3>Room-1</h3>
                        <Form addAdult={this.addAdult} addChild={this.addChild} room={1} />
                    </div>
                    <div className="room-2 room">
                        <input type="checkbox" onChange={this.handleCheck2} checked={this.state.check_2 ? false : !this.state.check_2}/>
                        <h3>Room-2</h3>
                        <Form disable={this.state.check_2} addAdult={this.addAdult} addChild={this.addChild} room={2}/>
                    </div>
                    <div className="room-3 room">
                        <input type="checkbox" onChange={this.handleCheck3} checked={this.state.check_3 ? false : !this.state.check_3}/>
                        <h3>Room-3</h3>
                        <Form disable={this.state.check_3} addAdult={this.addAdult} addChild={this.addChild} room={3}/>
                    </div>
                    <div className="room-4 room">
                        <input type="checkbox" onChange={this.handleCheck4} />
                        <h3>Room-4</h3>
                        <Form disable={this.state.check_4} addAdult={this.addAdult} addChild={this.addChild} room={4}/>
                    </div><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contents