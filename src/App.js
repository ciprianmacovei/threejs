import React, { Fragment, useRef, Suspense, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

import Snow from './canvas-components/snow/snow';
import Background from './canvas-components/background/background';
import Loader from './canvas-components/loading/loading';

import mainBackground from './assets/background-layers/background.png';
import dayBackground from './assets/background-layers/day-background.png';
import light from './assets/background-layers/D letter in the sky.png';
import leftBuilding from './assets/background-layers/layer cladire.png';
import firstDoodleLayer from './assets/background-layers/1.png';
import secondDoodleLayer from './assets/background-layers/2.png';
import thirdDoodleLayer from './assets/background-layers/3.png';
import forthDoodleLayer from './assets/background-layers/4.png';
import fifthDoodleLayer from './assets/background-layers/5.png';

import { setTheme } from './Services/appService';

import './App.css';
import D3Boy from './canvas-components/boy/boy';

function App() {

  const textureLoader = new TextureLoader();
  textureLoader.crossOrigin = '';
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const { camera } = useThree();
  const mouse = useRef([0, 0]);
  let scrollValue = 0,
    clientX = 0,
    clientY = 0,
    seed1 = 0,
    seed2 = 0,
    seed3 = 0,
    seed4 = 0,
    seed5 = 0,
    seedLight = 0,
    stopMoveEffect = false,
    darkMode = false,
    backgroundObj;
  useEffect(() => {
    camera.position.z = 5;

    document.addEventListener('scroll', scrollEffect);

    document.addEventListener('mousemove', mouseEffect);

    document.body.addEventListener('touchmove', scrollEffect);

    setTheme.subscribe((res) => {
      setBackgroundTheme(res);
    })
  })

  useFrame((state) => {
    if (
      state.scene.children[2] &&
      state.scene.children[2].material &&
      !backgroundObj
    ) {
      backgroundObj = state.scene.children[2].material;
      setBackgroundTheme();
    }

    //ZOOM IN ZOOM OUT ANIMATION @@@@ TO DO @@@@
    if (clientY && clientX && !stopMoveEffect) {
      if (4 * clientY + 4 < 7) {
        state.camera.position.z = 4 * clientY + 4
      }
      state.camera.position.x = clientX;
      state.camera.position.y = clientY;
    }

    if (state.scene.children[3]) {
      seedLight++;
      if (Math.sin(seedLight * 0.2) > 0.5) {
        state.scene.children[3].position.y = 2;
      } else {
        state.scene.children[3].position.y = 0;
      }
      if (Math.sin(seedLight * 0.05) > 0.5 && darkMode) {
        state.scene.children[3].visible = true;
      } else {
        state.scene.children[3].visible = false;
        state.scene.children[3].position.y = 0;
      }
    }

    if (state.scene.children[9]) {
      state.scene.children[9].position.z = -37 * Math.sin(seed1 * 0.04);
      state.scene.children[9].position.y = -scrollValue * 0.1 - 6;
    }
    if (state.scene.children[8]) {
      state.scene.children[8].position.z = -46 * Math.sin(seed2 * 0.04) + 10;
      state.scene.children[8].position.y = -scrollValue * 0.1 - 6;
    }
    if (state.scene.children[7]) {
      state.scene.children[7].position.z = -49 * Math.sin(seed3 * 0.04);
      state.scene.children[7].position.y = -scrollValue * 0.1 - 6;
    }
    if (state.scene.children[6]) {
      state.scene.children[6].position.z = -39 * Math.sin(seed4 * 0.05);
      state.scene.children[6].position.y = -scrollValue * 0.1 - 6;
    }
    if (state.scene.children[5]) {
      state.scene.children[5].position.z = -39 * Math.sin(seed5 * 0.05);
      state.scene.children[5].position.y = -scrollValue * 0.1 - 6;
    }


    if (state.scene.children[6] && state.scene.children[6].position.z > -38) {
      seed4 += 1.0;
    } else if (state.scene.children[5] && state.scene.children[5].position.z > -38) {
      seed5 += 1.0;
    } else if (state.scene.children[9] && state.scene.children[9].position.z > -36) {
      seed1 += 1.0;
    } else if (state.scene.children[7] && state.scene.children[7].position.z > -36) {
      seed3 += 1.0;
    } else if (state.scene.children[8] && state.scene.children[8].position.z > -35) {
      seed2 += 1.0;
    }

    show3dBoy(scrollValue, state);

  })

  const scrollEffect = () => {
    scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
  }

  const mouseEffect = ($event) => {
    clientX = $event.clientX * 0.001;
    clientY = $event.clientY * 0.001;
  }

  const setBackgroundTheme = (color) => {
    if (backgroundObj) {
      const themeColor = color || localStorage.getItem('chakra-ui-color-mode');
      if (themeColor) {
        darkMode = themeColor === 'dark';
        textureLoader.load(darkMode ? mainBackground : dayBackground,
          function (txt) {
            backgroundObj.map = txt;
          })
      }
    }
  }

  const show3dBoy = (scrollValue, state) => {
    if (state.scene.children[10]) {
      if (scrollValue > 3000) {
        stopMoveEffect = true;
        state.camera.position.x = 0;
        state.camera.position.y = 0;
        state.camera.position.z = 5;
        state.scene.children[10].position.y = -1.5;
        state.scene.children[10].rotation.y += 0.1;
        state.scene.children[10].visible = true;
      } else {
        state.scene.children[10].visible = false;
        stopMoveEffect = false;
      }
    }
  }

  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Background position={[0, 0, -60]} scale={13.4} background={mainBackground} />
        <Background position={[-2, 0, -59]} scale={12.4} background={light} />
        <Background position={[0, 0, -58]} scale={12.4} background={leftBuilding} />
        <Background position={[4, 0, -39]} scale={8.8} background={firstDoodleLayer} fixedDim={true} />
        <Background position={[-3, 0, -39]} scale={8.8} background={secondDoodleLayer} fixedDim={true} />
        <Background position={[0, 0, -47]} scale={8.5} background={thirdDoodleLayer} fixedDim={true} />
        <Background position={[0, 0, -36]} scale={8.3} background={forthDoodleLayer} fixedDim={true} />
        <Background position={[0, 0, -37]} scale={8.5} background={fifthDoodleLayer} fixedDim={true} />
        <D3Boy />
        <Snow count={isMobile ? 700 : 2000} mouse={mouse} />
      </Suspense>
    </Fragment>
  );
}

export default App;
