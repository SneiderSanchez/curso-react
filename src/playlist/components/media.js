import React, { PureComponent } from "react";
import Proptypes from 'prop-types'
import './media.css';

class Media extends PureComponent{
/*     constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
        //this.handleClick = this.handleClick.bind(this);
    } */
    state ={
        author:'Smolder'
    }
    handleClick = (event) =>{
        this.props.openModal(this.props)
    } 
    render(){
        const { title, image } = this.props;
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                        className="Media-image" 
                        src={this.props.cover} 
                        alt=""
                        width={240}
                        height={160}
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}


Media.propTypes = {
    cover: Proptypes.string,
    title: Proptypes.string.isRequired,
    author : Proptypes.string,
    type: Proptypes.oneOf(['video','audio'])
}
export default Media;