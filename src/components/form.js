import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state={
            adults:1,
            children:0
        }
        this.adultChange = this.adultChange.bind(this)
        this.childChange = this.childChange.bind(this)
    }
    adultChange =()=>{
        // this.setState({
        //     adults:this.adult.value
        // })
        const adult = this.adult.value
        const room = this.props.room
        this.props.addAdult(adult, room)
    }
    childChange = () =>{
        const child =this.child.value
        const room = this.props.room
        //console.log(child)
        // this.setState({
        //     children:child
        // })
        // setTimeout(()=>{

        // })
        this.props.addChild(child, room)
        // this.setState({
        //     children:this.child.value
        // })
        // console.log(this.state.children)
        // this.props.addChild(this.state.children)
    }


    render(){
        return(
            <div>
                <lable>Adults(18+)</lable><br />
                <select disabled={this.props.disable} ref={(input)=>this.adult = input}
                    onChange={this.adultChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select><br />
                <lable>Childern(1-17)</lable><br />
                <select disabled={this.props.disable} ref={(input)=>this.child = input}
                    onChange={this.childChange}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        )
    }
}

export default Form