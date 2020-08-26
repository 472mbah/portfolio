import React, { Component } from 'react';
import About from './pages/about';
import style from './index.module.css';
import Switch from './components/switch';
import Projects from './pages/projects';

class App extends Component {

    state = {
      options:[{text:'About', color:'#60FFD9'}, {text:'Projects', color:'#A6EA86'}],
      page:1,
      hover_on:-1,
    }

    change_page = page => {
        this.setState({page})
    }

    return_link_to_show = () => {
        const { hover_on } = this.state;
        switch(hover_on){
            case 0:
              return "London, UK";
            case 1:
              return "linkedin.com/in/472mbah";
            case 2:
              return "github.com/472mbah";
            default:
              return "@472mbah";
        }
    } 

    copy_link = () => {
        const copy_text = this.return_link_to_show()
        navigator.clipboard.writeText(copy_text)
        alert(copy_text + " has been copied to clipboard!")
    }

    icons_container = (mobile) => {
      return (
        <div className={style.icon_container}>
            <img className={mobile?style.icons:style.img} onClick={()=>mobile ? null : this.copy_link()} onMouseEnter={()=>mobile ? null : this.setState({hover_on:0})} onMouseLeave={()=>mobile ? null : this.setState({hover_on:-1})} src={require('./icons/location.png')}/>  
            <img className={mobile?style.icons:style.img} onClick={()=>mobile ? null : this.copy_link()} onMouseEnter={()=>mobile ? null : this.setState({hover_on:1})} onMouseLeave={()=>mobile ? null : this.setState({hover_on:-1})} src={require('./icons/linked_in.png')}/>  
            <img className={mobile?style.icons:style.img} onClick={()=>mobile ? null : this.copy_link()} onMouseEnter={()=>mobile ? null : this.setState({hover_on:2})} onMouseLeave={()=>mobile ? null : this.setState({hover_on:-1})} src={require('./icons/github.png')}/>  
        </div>
      )
    }
    

    render(){

      const { options, page, hover_on } = this.state;
      const mobile  = navigator.userAgent.indexOf("Mobi") > -1
      

        return(
          <div>
            <header >
                <div className={mobile? style.header_title_mobile:style.header_title}>
                  <h4>Momodou Bah</h4>
                { mobile ? this.icons_container(mobile) : null }
                </div> 
                <div className={mobile? style.header_inner_mobile:style.header_inner}>
                  { !mobile ? this.icons_container(mobile) : null }


                    <div className={style.header_github_name}>
                      {
                        !mobile && hover_on!=-1 ? 
                          <p className={style.prompt}>Click icon to copy</p>
                        : null
                      }
                      {this.return_link_to_show()}
                    </div> 
                    <Switch change={this.change_page} options={options} value={page}/>
                  </div>


              </header> 
              <main className={mobile?style.mobile_main:null}>
                {
                  page ? <Projects mobile={mobile}/> : <About mobile={mobile}/>
                }
              </main>
          </div>
        )
    }
}

export default App;
