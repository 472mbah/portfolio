const styles = (pref, ext) => {
    switch(pref){
        case 0:
            return {
                background: ext.selected ? ext.color:ext.dm ? '#000' : '#fff',
                border: `${ext.selected ? '2px':'1px'} solid #000`,
                fontFamily: ext.selected ? 'rob_med':'rob_reg',
                boxShadow: ext.selected ? '2px 0px 2px rgba(0, 0, 0, 0.25)' : '1px 0px 1px rgba(0, 0, 0, 0.25)',
                padding : '0.5em 0.8em',
                fontSize : '1em',
                position : 'relative',
                marginLeft : '-0.5em', 
                color : '#000',               
                zIndex : ext.z,
                display:'flex',
                alignItems:'center',
                cursor:'pointer',
                borderRadius:'0px',
                outline:'none'
            }
        case 2:

            let gridTemplateColumns = "";
            for(let a = 0; a < ext.len; a++){
                gridTemplateColumns += "auto "
            }

            return {
                display: 'grid',
                gridTemplateColumns,
                background: ext.dm ? '#000' : '#FFFFFF',               
            }
        case 3:
            return {
                background: '#000',
                boxSizing: 'border-box',
                borderRadius: '0px 0px 5px 5px',
                boxShadow: `0px 0px 2px rgba(0, 0, 0, 1)`,
                width: '100%',
                borderTopWidth: '0px',
                marginTop: '-2px',
                marginLeft: '-1px',
                padding: '10px',
                display: 'grid',
                gridTemplateColumns: '10fr auto',
                
            }

        default :
            return {}
    }
}

export default styles;