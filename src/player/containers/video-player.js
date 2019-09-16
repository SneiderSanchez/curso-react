import React, { Component } from 'react'
import VideoPlayerLayout from '../component/videoPlayerLayout'
import Video from '../component/video'
import Title from '../component/title'
import PlayPause from '../component/playPause'
import Timer from '../component/timer.js'
import Controls from '../component/video-player-controls.js'
import timeFormat from '../../utilities/timeFormat'
import ProgressBar from '../component/progress-bar';
import Spinner from '../component/spinner';
import Volume from '../component/volume';
import FullScreen from '../component/fullScreen';

export default class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        lastVolume:false
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoPlay)
        })
    }
    hanldeLoadedMetadata = event => {
        this.video = event.target;

        this.setState({
            duration: this.video.duration

        })
    }
    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    handleProgressChange = event => {
        /* event.target.value */
        this.video.currentTime = event.target.value
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value
        this.setState({
            lastVolume: event.target.value
        })
    }
    handleClickVolume = event =>{
        let actual = this.video.volume
        this.video.volume = actual > 0 ? 0 : this.state.lastVolume
    }
    handleFullScreenClick = event =>{
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullscreen()
        }else{
            document.webkitExitFullscreen()
        }
    }
    setRef= element =>{
        this.player = element
    }
    render() {
        return (
            <VideoPlayerLayout
            setRef={this.setRef}
            >
                <Title
                    title={this.props.tittle}
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                        duration={timeFormat(this.state.duration)}
                        currentTime={timeFormat(this.state.currentTime)}
                    />
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume
                    handleVolumeChange={this.handleVolumeChange}
                    handleClickVolume={this.handleClickVolume}
                    mute={this.state.mute}
                    />
                    <FullScreen
                    handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    autoPlay={this.props.autoPlay}
                    pause={this.state.pause}
                    hanldeLoadedMetadata={this.hanldeLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeked={this.handleSeeked}
                    handleSeeking={this.handleSeeking} 
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}
