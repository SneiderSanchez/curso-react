import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'
export default function Volume(props) {
    return (
        <button className="Volume">
            <div
                onClick={props.handleClickVolume}
                
            >
            {props.mute 
                ? 
            mute 
            : 
                <VolumeIcon
                    color="white"
                    size={25}

                />
            }

            </div>
            <div className="Volume-range">

                <input
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}