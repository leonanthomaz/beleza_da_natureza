
import React from "react";
import * as I from './IntroStyles'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/themes/splide-sea-green.min.css';

export const Intro = () => {
    return(
        <I.Container>
            <I.SplideContainer style={{ margin: 'auto'}}>
                <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src="https://39963.cdn.simplo7.net/static/39963/banner/topo_165892907252895.jpg" alt="banner1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://39963.cdn.simplo7.net/static/39963/banner/topo_165892894141835.jpg" alt="banner2"/>
                    </SplideSlide>
                </Splide>
            </I.SplideContainer>
        </I.Container>
    )
}