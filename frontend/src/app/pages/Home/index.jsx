import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { News } from '../../components/Containers/News';
import { Topbar } from '../../components/Topbar';
import * as H from './HomeStyles';
import { Top } from '../../components/Containers/Top';
import { Whatsapp } from '../../components/Whatsapp'

export const Home = () => {

    const pathImage = process.env.REACT_APP_PATH_IMG_LOCAL

    return (
        <H.Container>
            <Topbar/>
            <Header/>
            <Intro/>
            <News/>
            <div className='home-container-bird' style={{ backgroundImage: `url(${pathImage + 'passaros.png'})`}}>
                <div className='home-container-opacity'>
                    <H.Wrapper>
                        {/* <H.Left></H.Left>
                        <H.Right></H.Right> */}
                        <H.Items>
                            <div className='home-items-container'>
                                <div className='home-items-container-header'>
                                    <h4>Natural e Vegano</h4>
                                </div>
                                <div className='home-items-container-body'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </H.Items>
                        <H.Items>
                            <div className='home-items-container'>
                                <div className='home-items-container-header'>
                                    <h4>Frete Grátis</h4>
                                </div>
                                <div className='home-items-container-body'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </H.Items>
                        <H.Items>
                            <div className='home-items-container'>
                                <div className='home-items-container-header'>
                                    <h4>Parcelamento</h4>
                                </div>
                                <div className='home-items-container-body'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </H.Items>
                    </H.Wrapper>
                </div>
            </div>
            <Top/>
            <Whatsapp />
        </H.Container>
    )
}
