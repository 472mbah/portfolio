import React from 'react';
import adapt from './adapt';
import style from './index.module.css';



class App extends React.Component {

    click = index => {
        this.props.change(index)
    }


    render(){
        let { options, value } = this.props;
        const len = options.length;

        return(
            <div className={style.container}>
                <div style={adapt(2, {len:options.length} )} >
                    {
                        options.map((element, index)=>
                            <button key={index} onClick={()=>this.click(index)}
                            key={index} 
                            style={adapt(0, {index, selected:value===index, color:element.color, index, z:(len-index)})}>
                                {element.text}
                            </button>
                            )       
                    }
                </div>

            </div>
        )
    }
}

export default App;