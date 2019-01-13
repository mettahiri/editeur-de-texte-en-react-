import React, { Component } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

class Wysiwyg extends Component {
  
state = { text: '',body:null } 

handleChange = (value) =>{
    this.setState({ text: value })
    console.log(this.state.text)
}

HandleSubmit = (e) =>{
    e.preventDefault();
    document.querySelector("#body").innerHTML =this.state.text;
    this.setState({ text:""  });
}
 
render() {
    return (
      <div  className="App">
        <form  onSubmit={this.HandleSubmit} >
          
          <ReactQuill 
           value={this.state.text}
           onChange={this.handleChange}
           theme="snow"
           modules={Wysiwyg.modules}
          />
          <input type="submit" value="Envoyer" />
        
          <div id="body">Le contenu va s'afficher ici ...</div>
        </form>
      </div>
    )
  }
}
Wysiwyg.modules = {
  toolbar : [
      [{header:"1"},{header:"2"}],
      ['bold', 'italic'],
      [{ 'color': [] }, { 'background': [] }],
      ["image"],['code-block']
    ]
};
export default Wysiwyg;
