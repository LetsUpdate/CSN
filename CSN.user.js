/*MIT License

Copyright (c) 2023 RED

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

// ==UserScript==
// @name         Captcha Solver for Neptun
// @namespace    https://github.com/LetsUpdate/CSN
// @version      0.3.2
// @description  No Captcha 4 u
// @author       RED
// @license      MIT

// @icon64         data:image/png;base64,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
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @grant          GM_setValue
// @grant          GM_getValue


// @updateURL    https://github.com/LetsUpdate/CSN/releases/latest/download/CSN.user.js
// @supportURL   https://github.com/LetsUpdate/CSN
// @contributionURL https://github.com/LetsUpdate/CSN

// ==/UserScript==

(function () {
    'use strict';

    const CALIBRATION_REQUIRED_ERROR = "CALIBRATION_REQUIRED"
    const AUDIO_LINK_NOT_FOUND_ERROR = "AUDIO_LINK_NOT_FOUND"
    const CALIBRATOR_VALUE_KEY = "CSN_CALIBRATOR_VALUE"
    let CALIBRATOR = 1.0;
    const BASE_NUMBERPRINTS = [260587, 137703, 144640, 74290, 107363, 99141, 35806, 64888, 268335, 123680];

    //Kezelehtővé teszi a hangot
    function NormalizeAudio(audioBuffer) {
        const channelData = audioBuffer.getChannelData(0);
        const bufferLength = channelData.length;
        const minAmplitude = 0;
        const maxAmplitude = 0.5;

        // Map the audio data to the range 0 to 255 (byte range)
        const amplitudeRange = maxAmplitude - minAmplitude;
        let normalizedAudio = [];
        for (let i = 0; i < bufferLength; i++) {
            const scaledAmplitude = (Math.abs(channelData[i]) - minAmplitude) / amplitudeRange;
            normalizedAudio.push(Math.round(scaledAmplitude * 255));
        }
        return normalizedAudio;
    }

    //Ha valamiért nem lenne pontos az olvasás
    function getClosest(count) {
        //                           0                   1                   2               3                   4                   5                    6                  7               8                       9
        //const oldnumbers = [295908.338132016, 144808.64692975077, 146017.76512430015, 200643.33916450525, 173056.1334383033, 116006.99633115364, 102563.54561544387, 132958.96139509347, 277033.17429445166, 209655.16578076393]
        let numbers = BASE_NUMBERPRINTS;

        //CalibratorModifier
        numbers = numbers.map((number, index) => Math.round(number * CALIBRATOR));

        const sensitivity = 8000;

        let closestIndex = 0;
        let closest = Math.abs(numbers[0] - count);

        for (let index = 0; index < numbers.length; index++) {
            const current = numbers[index];
            const closeness = Math.abs(current - count);
            if (closeness < closest) {
                closest = closeness;
                closestIndex = index;
            }
        }
        if (Math.abs(numbers[closestIndex] - count) > sensitivity) throw CALIBRATION_REQUIRED_ERROR;
        return closestIndex
    }

    // "Lenyomatokat" csinál a hangokból és tömb ként vissza adja azokat
    function AudioProcessor(audioBuffer) {

        const normalizedAudio = NormalizeAudio(audioBuffer)

        const bufferLength = normalizedAudio.length

        let AudioSums = [];
        const treshold = 50;
        const sensitivity = 10000;

        for (let index = 0; index < bufferLength - sensitivity; index++) {
            //Amíg minden nulla
            while (normalizedAudio[index] <= treshold && index < bufferLength) { index++ }

            let sum = 0.0;
            while (index < bufferLength) {

                if (normalizedAudio[index] > treshold) {
                    sum += normalizedAudio[index];
                }
                let isEnd = true;
                for (let i = index; i < index + sensitivity; i++) {
                    const element = normalizedAudio[i];
                    if (element > treshold) {
                        isEnd = false;
                        break;
                    }
                }
                if (isEnd) {
                    //decalibrator
                    //sum*=2

                    AudioSums.push(sum);
                    break
                } else {
                    index++;
                }

            }

        }
        return AudioSums;

    }

    async function audioToNumbers(audioLink) {
        return await fetch(audioLink)
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                return audioContext.decodeAudioData(buffer);
            })
            .then(decodedData => {
                return AudioProcessor(decodedData);
            })
            .catch(error => {
                console.error("Hiba történt az audió feldolgozása során:", error);
            });
    }


    // Az audió feldolgozása és tömbbe mentése
    async function _SolveChapcha(audioLink) {
        const audioNumbers = await audioToNumbers(audioLink);
        const button = document.getElementById(CSN_LOGO+"BUTTON");
        const ChaptchaInput = document.getElementById('cap');
        if(button){
            button.click();
        }
        try {
           
            var solution = "";
            console.log(audioNumbers);
            audioNumbers.forEach(element => {
                solution += getClosest(element);
            });
            ChaptchaInput.value = solution;
        } catch (error) {
            if (error == CALIBRATION_REQUIRED_ERROR) {

                let result = AutomaticCalibration(audioNumbers);
                if(result)
                {
                    ChaptchaInput.value = result.join('');
                }else{
                    CalibrationNeeded();
                }
            } else {
                console.error(error);
            }
        }

    }

    function AutomaticCalibration(gotNums) {

        let eredmeny;
         BASE_NUMBERPRINTS.forEach(be => {
            CALIBRATOR = gotNums[0]/be;
            eredmeny =[];
            try {
                gotNums.forEach(element => {
                    eredmeny.push(getClosest(element));
                    
                });
                
            } catch (error) {
                if (error === CALIBRATION_REQUIRED_ERROR) {
                    console.log("Calibrating...");
                }else{
                    console.log(error);
                }
                eredmeny=false;
            }
            
    
        });
        return eredmeny;
    }

    function GetAudioLink() {
        const audiolink = document.getElementById('loginCaptcha').getElementsByClassName('captchaImage')[0].src.replace('Captcha.ashx', 'CaptchaAudio.ashx');
        if (audiolink) {
            return audiolink;
        }
        throw AUDIO_LINK_NOT_FOUND_ERROR;
    }

    async function SolveChapcha() {

        const audioLink = GetAudioLink();
        await _SolveChapcha(audioLink);

    }



    function CalibrationNeeded() {
        //Alert the user that interaction needed for the scrip
        console.log(CALIBRATION_REQUIRED_ERROR);

        if (document.getElementById("CalibrateButton")) return;

        //Show calibrator button
        const ChaptchaRow = document.getElementById("captchaRow");
        if (!ChaptchaRow) { return };

        let CalibrateButton = document.createElement("BUTTON");
        CalibrateButton.id = "CalibrateButton";
        CalibrateButton.innerHTML = "Calibrate"
        CalibrateButton.addEventListener('click', async (event) => {
            event.preventDefault();
            await Calibrate();
        });
        RemoveLogo();

        const td = document.createElement('td');
        ChaptchaRow.append(td)
        td.append(CalibrateButton);


    }

    async function Calibrate() {
        /*
        Szükség van:
        Beírt számokra
        Kiszámolt számokra

        */

        const ChaptchaInput = document.getElementById('cap');
        const rawinput = ChaptchaInput.value;
        if (rawinput.length != 6) {
            alert("Írd be a Captcha-t pontosan!");
            return;
        }
        const inputNumbers = rawinput.split('').map((char, index) => parseInt(char));
        const generateNumbers = await audioToNumbers(GetAudioLink());
        let isSuccess = true;
        if (inputNumbers) {

            for (let index = 0; index < 6; index++) {
                const generated = generateNumbers[index];
                const input = inputNumbers[index];

                const expected = BASE_NUMBERPRINTS[input];

                CALIBRATOR = generated / expected;

                //Test Calibration
                isSuccess = true;
                try {
                    generateNumbers.forEach(gen => {
                        getClosest(gen);
                    });
                } catch (error) {
                    isSuccess = false;
                    if (error == CALIBRATION_REQUIRED_ERROR) {
                        console.log("Calibration: failed attempt: " + index);
                    }
                    console.log(error);
                }

                if (isSuccess) {

                    break;
                }

            }

        } else {
            alert("Valami nem jó");
        }
        if (isSuccess) {
            GM.setValue(CALIBRATOR_VALUE_KEY, CALIBRATOR);
            const cbutton = document.getElementById("CalibrateButton");
            if (cbutton) cbutton.remove();
            alert("A kalibráció sikeres")
        } else {
            alert("A kalibráció sikertelen")
        }
        return isSuccess;


    }
    const CSN_LOGO = "CSNLogo"
    function CreateLogo() {
        const div = document.createElement('div');
        div.id = CSN_LOGO;
        div.style = "background:transparent;position:absolute;padding-left: 5px;padding-top:1px;";

        let logo = document.createElement("img");
        logo.src = "data:image/png;base64,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";
        logo.style = 'float:right;width:21px;height:21px;background:transparent;position:absolute;vertical-align: top; z-index: 1;'
        logo.id = CSN_LOGO + "BUTTON"
        let rotation = 0;
        let clicks = 0;
        logo.addEventListener("click", () => {
            const bounceAngle = 360;
            const bounceDuration = 1000;

            rotation += bounceAngle;
            logo.style.transition = `transform ${bounceDuration}ms ease-in-out`;
            logo.style.transform = `rotate(${rotation}deg)`;

            if (clicks++ >= 10) {
                clicks = 0;
                window.open("https://ko-fi.com/red_official", "_blank")
            }
        });


        div.append(logo);
        document.getElementById("captchaRow").append(div);

    }
    function RemoveLogo() {
        const logo = document.getElementById(CSN_LOGO);
        if (logo) {
            logo.remove();
        }
    }

    //OnLoad...
    window.addEventListener('load', async () => {
        if (!document.getElementsByClassName("captchaPlayIcon")[0]) { return; }
        CreateLogo();
        CALIBRATOR = await GM.getValue(CALIBRATOR_VALUE_KEY, 1);

        SolveChapcha()


        const chapChaImage = document.getElementsByClassName("captchaImage")[0];
        if (!chapChaImage) { return }
        let observer;
        if (observer) {
            observer.disconnect()
        }
        const config = { attributes: true, childList: false, subtree: false };
        observer = new MutationObserver(() => { setTimeout(SolveChapcha, 300); });
        observer.observe(chapChaImage, config);
    }, false);
})();