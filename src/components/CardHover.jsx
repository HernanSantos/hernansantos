import React from 'react'
import { Wrapper } from '../styledComponents/CardHoverStyle'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export const CardHover = () => {

  return (
    <Wrapper>
        <img src="http://res.cloudinary.com/dtfmesfi0/image/upload/v1666969252/pokemon-app/g3mapmtlazjnzdlcvula.png" alt="" />
            <div className='overlay'>
                <div className='content'>
                    <h1>Pokedex</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className='buttonContainer'>
                        <button className='button'><GitHubIcon /></button>
                        <button className='button'><LaunchIcon /></button>
                    </div>
                </div>
            </div>
    </Wrapper>
  )
}
