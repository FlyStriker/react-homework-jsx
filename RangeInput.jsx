import "./RangeInput.css"
import React from "react"

class RangeInput extends React.Component {
    state = {
      text: ''
    } 
    render(){
          return (
            <>
             <div className="Range_input">
              <p>Текст должен быть более <b>{this.props.min}</b> и менее <b>{this.props.max}</b> символов</p><p> Сейчас в тексте  <b>{this.state.text.length}</b> символов</p>
              <p><b>Напиши свой текст</b></p><br/>
              <input type="text" 
                onChange={(e) => {
                 this.setState({text : e.target.value})
                 }
                }          
                style={this.state.text.length > this.props.min && this.state.text.length < this.props.max ? {background : 'orange'} : {background : 'red'}}
                /><br/>
             </div>
            </>
        )
    }
  }

export default RangeInput ;
