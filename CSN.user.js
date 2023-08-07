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
// @name         Chaptca Solver for Neptun
// @namespace    http://example.net/
// @version      0.1
// @description  No chapcha 4 u
// @author       RED
// @license      MIT

// @icon64         data:image/png;base64,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
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*Hallgatoi*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato
// @include      https://nappw.dfad.duf.hu/hallgato/*
// @grant        none


// @updateURL    https://github.com/LetsUpdate/CSN/releases/download/release/CSN.user.js
// @supportURL   https://github.com/LetsUpdate/CSN
// @contributionURL https://github.com/LetsUpdate/CSN

// ==/UserScript==

(function() {
    'use strict';

    function getAudioSlice(audioBuffer, startTime, endTime) {
        const sampleRate = audioBuffer.sampleRate;
        const startFrame = Math.floor(startTime * sampleRate);
        const endFrame = Math.min(Math.ceil(endTime * sampleRate), audioBuffer.length);

        const frameCount = endFrame - startFrame;
        const audioSlice = new Float32Array(frameCount);

        for (let i = 0; i < frameCount; i++) {
            audioSlice[i] = audioBuffer.getChannelData(0)[startFrame + i];
        }

        return audioSlice;
    }

    function sumFloat32Array(arr) {
        let sum = 0.0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]>0){
                sum += arr[i]*500;
            }
        }
        return sum;
    }

    function getClosest(count){
        //                  0                   1                   2               3                   4                   5                    6                  7               8                       9
        const numbers = [295908.338132016,144808.64692975077,146017.76512430015,200643.33916450525,173056.1334383033,116006.99633115364,102563.54561544387,132958.96139509347,277033.17429445166,209655.16578076393]
        let closestIndex =0;
        let closest=Math.abs(numbers[0]-count);

        for (let index = 0; index < numbers.length; index++) {
            const current = numbers[index];
            const closeness =Math.abs(current-count);
            if(closeness<closest){
                closest = closeness;
                closestIndex=index;
            }
        }
        return closestIndex
    }


    // Az audió feldolgozása és tömbbe mentése
    function processAudio(audioLink) {
        fetch(audioLink)
            .then(response => response.arrayBuffer())
            .then(buffer => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            return audioContext.decodeAudioData(buffer);
        })
            .then(decodedData => {
            const audioDuration = decodedData.duration;
            const segmentDuration = audioDuration / 6; // Hat egyenlő részre osztjuk az audiót

            const audioSegments = [];
            for (let i = 0; i < 6; i++) {
                const startTime = i * segmentDuration;
                const endTime = startTime + segmentDuration-segmentDuration/10;

                // A kívánt időintervallumra vonatkozóan lekérjük az audió adatokat
                const audioSlice = getAudioSlice(decodedData, startTime, endTime);
                audioSegments.push(audioSlice);
            }

            // Itt használhatod a "audioSegments" tömböt a szükséges további műveletekkel
            //console.log("Audio részek: ", audioSegments);
            //const jsonArray = JSON.stringify(Array.from(audioSegments));

            //console.log(jsonArray);
            const ChaptchaInput = document.getElementById('cap');
            var solution ="";
            for (let i = 0; i < audioSegments.length; i++) {
                const sum =sumFloat32Array(audioSegments[i])
                console.log(sum);
                solution+=getClosest(sum);
                ChaptchaInput.value = solution;
            }

        })
            .catch(error => {
            console.error("Hiba történt az audió feldolgozása során:", error);
        });
    }

    // Hívjuk meg a függvényt, amikor az oldal betöltődött
    window.addEventListener('load', async () => {

        //setTimeout(myScript, 300);
        const audioLink = document.getElementById('loginCaptcha').getElementsByClassName('captchaImage')[0].src.replace('Captcha.ashx', 'CaptchaAudio.ashx');
        processAudio(audioLink);
    },false);
})();