import  React,{Component} from 'react'
import './video.css'

export default class  Video extends Component {
    togglePlay(){
        if(this.props.pause){

            this.video.play()
        }else{
            this.video.pause()
        }
    }
    setRef= element => {
        this.video =element;
    }
    componentWillReceiveProps(newProps){
        if(newProps.pause !== this.props.pause){
            this.togglePlay();
        }
    }
    render () {
        const {
            hanldeLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        }= this.props;
        return(
            <div className="Video">
                <video 
                    autoPlay = {this.props.autoPlay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={hanldeLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                    />
            </div>
        )
    }
}