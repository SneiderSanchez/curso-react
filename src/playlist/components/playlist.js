//import React, { Component } from 'react';
import React from 'react';
import Media from './media.js'
import './playlist.css'
/* import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume.js';
import FullScreen from '../../icons/components/fullScreen.js'; */
//component puro
function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return (
                        <Media 
                            openModal={props.handleOpenModal}
                            {...item} 
                            key={item.id} 
                        />
                    )
                })
            }
        </div>

    )
}
/* //component puro
function Playlist(props) {
    const playlist = props.data.categories[0]
    const playlist2 = props.data.categories[1]
    const playlist3 = props.data.categories[2]
    return (
        <div className="Playlist">
            <div className="tituloPlaylist">
                <h2>{playlist.title}</h2>
                <h4>{playlist.description}</h4>
                <div className="actionsPlaylist">
                    <Play
                        size={40}
                        color="#182952"
                    />
                    <Pause
                        size={40}
                        color="#2b3595"
                    />
                    <Volume
                        size={40}
                        color="#7045af"
                    />
                    <FullScreen
                        size={40}
                        color="#e14594"
                    />
                </div>
            </div>

            <div className="contentPlaylist">
                {
                    playlist.playlist.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
            <div className="tituloPlaylist">
                <h2>{playlist2.title}</h2>
                <h4>{playlist2.description}</h4>
            </div>
                           <div className="actionsPlaylist">
                    <Play
                        size={40}
                        color="#182952"
                    />
                    <Pause
                        size={40}
                        color="#2b3595"
                    />
                    <Volume
                        size={40}
                        color="#7045af"
                    />
                    <FullScreen
                        size={40}
                        color="#e14594"
                    />
                </div>
            <div className="contentPlaylist">
                {
                    playlist2.playlist.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }.
        </div>
            <div className="tituloPlaylist">
                <h2>{playlist3.title}</h2>
                <h4>{playlist3.description}</h4>
            </div>
                           <div className="actionsPlaylist">
                    <Play
                        size={40}
                        color="#182952"
                    />
                    <Pause
                        size={40}
                        color="#2b3595"
                    />
                    <Volume
                        size={40}
                        color="#7045af"
                    />
                    <FullScreen
                        size={40}
                        color="#e14594"
                    />
                </div>
            <div className="contentPlaylist">

                {
                    playlist3.playlist.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
} */

/*  component normi
    class Playlist extends Component {
    render() {
        const playlist = this.props.data.categories[0]
        const playlist2 = this.props.data.categories[1]
        const playlist3 = this.props.data.categories[2]
        console.log(playlist)
        return (
            <div className="Playlist">
                <div className="tituloPlaylist">
                    <h2>{playlist.title}</h2>
                    <h4>{playlist.description}</h4>
                </div>
                <div className="contentPlaylist">
                    {
                        playlist.playlist.map((item) => {
                            return <Media {...item} key={item.id} />
                        })
                    }
                </div>
                <div className="tituloPlaylist">
                    <h2>{playlist2.title}</h2>
                    <h4>{playlist2.description}</h4>
                </div>
                <div className="contentPlaylist">
                    {
                        playlist2.playlist.map((item) => {
                            return <Media {...item} key={item.id} />
                        })
                    }.
                </div>
                <div className="tituloPlaylist">
                    <h2>{playlist3.title}</h2>
                    <h4>{playlist3.description}</h4>
                </div>
                <div className="contentPlaylist">

                    {
                        playlist3.playlist.map((item) => {
                            return <Media {...item} key={item.id} />
                        })
                    }
                </div>
            </div>
        )
    }
} */

export default Playlist