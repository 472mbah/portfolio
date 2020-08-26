import React from 'react';
import style from './index.module.css';

export default class Card extends React.Component {

    state = {
        shades: [],
        hover: false,
    } 

    componentDidMount = () => {
        this.set_colors();
    }

    get_color = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    find_color = (opacity=false) => {
        const { shades } = this.state;
        return `rgb${opacity?'a':''}(${shades[0]}, ${shades[1]}, ${shades[2]}${opacity?', 0.3':''})`
    }

    set_colors = () => {
        let shades = [];
        shades.push(this.get_color(0, 255))
        shades.push(this.get_color(0, 255))
        shades.push(this.get_color(0, 255))
        this.setState({shades})
    }

    background_style = () => ( {background:this.state.hover? this.find_color(true) : null, border:this.state.hover? `1px solid ${this.find_color(true)}` : null} )

    render(){


        const { link, title, description, main_language, tags, read_time, color } = this.props.data;
        const { hover } = this.state;

        return (
            <div style={this.background_style()} onMouseEnter={()=>this.setState({hover:true})} 
            onMouseLeave={()=>this.setState({hover:false})} className={style.container}>

                <div className={style.inner_mid_section}>
                    <img className={style.icon} src={require('../../icons/link.svg')} alt=""/>
                    <a href={"http://"+link} className={style.link} >{link}</a>                    
                </div>

                <h1 className={style.header}>{title}</h1>
                <p className={style.description}>{description}</p>
                <div className={style.mid_section}>
                    <div className={style.inner_mid_section}>
                        <div style={{border:`2px solid ${this.find_color()}`}} className={style.circle}></div>
                        <p className={style.mid_section_text_style} >{main_language}</p>
                    </div>
                    {
                        read_time != null ? 
                            <div className={style.inner_mid_section}>
                                <img className={style.icon} src={require('../../icons/time.svg')} alt=""/>
                                <p className={style.mid_section_text_style} >{read_time}</p>
                            </div>
                        : null
                    }
                </div>
                <div>
                {
                    tags.map((tag, i)=><p key={i} className={style.tags_text}>#{tag}</p>)
                }
                </div>
            </div>
        )
    }
}  