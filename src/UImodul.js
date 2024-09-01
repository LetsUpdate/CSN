const icons = {
    "logo": "https://raw.githubusercontent.com/LetsUpdate/CSN/main/.github/icon.png",
    "networkError": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIT0lEQVR4nO3ZT2wcVx0H8GmLIkBcAHEogtqxnTSxY+/sP+//nR3v7uz/zdrr8a4jEDekliJUVUitKgg0AhUoPXHgQMWlHHBODTSN0zacgBOIHuLajhvH3p2Z/b+zs07pJrV/6M1k7f0/+89piuYnfS/2+PB57817v3nGMKWUUkoppZRSSimljq/SNP2VciDmKIdizwmB2OvlYOyNcjC2UvbH3hACS68LvqWXSr6ob88z/yT2f4UOx38gBOM3hGD803IwDuVgTEoAZQkEPwotxYeyCCVP9GbJG71Uds+fwz6PdTcc/2Y5HH+1HIwVyyGEbgdfqoMLXiklT1QM74kelKj5a0VP1IF9HgouXnz8bujC94VQ/G4/cMErwcVQC1LcKPPAu+b/UnAFn8Ie1SpFYqfLweW/i/DQ8OASPiLFGRF4MrKMPWolBGK2cjDOdwenO8OplnDgneelzKGEfo1WG/Yo1F4w5hOXfAO8boPrGV6Lr4WHoUhKKZDBP37mg7AXWPYIgXhFFu4bHrxIhqDokFIgAr//zPAfn499uxxYynYHX+wbfoQ/gheJ4IME0CA889DxQNMnyoHYP5vO8k5wjxw80hvcLiVv9X9SsAW+V7D57QWTf+ShDIDgj738UOGOKjx4CC/Y/Eex+qBg8UHe4oWc2ZvPmz2X8yZvfJsgvjh0fCkS+brgX+Ll4dEmeMudfVC4VYLnzSgeyJtQKMgbKcga3dmcwfUjoOknhjYAgp9+rVP31jW8aYOTgdvbwC3N8JzRDTkDigtysy7I6p0fZLRzmoHxPEV/reSlP5ZvYoYJD3SGm9vDxeidaAAgqyP3cvq5+cEGwEc/10f3JqKLzvNQIBuWOtkenrP7Id8z3N0CPidFS0JG69jPahzP9j0AJe/i3/rp3vJkGHbtfvjI6gUW7eAd4Hl7ABiLB7aMbrhjdEO2im6EmxCc6gouRuOAjMYBaTWxn8Ht/p7gQNNPCF6a4KmFSq9ta54MwY7ND4mXfg53//0BbC18B5I2LxRaHWnoOQsFW+Fl2PvXf2Dnxz+B2wYXZBC45j3P1c56l/CMmpCC2yGN2wvpKXJcFi546W8InoXf8NRCpp8mJu+o4n8GB/fvA6p7qTRsRb8LSZtHnO3qOy7izW7YCsehkmTFZw/29yHx8iXYnnVC1uSuhxvk4dkGuBgVig3SM9a3ZPCLz5Y8C+VB2tY0EYBbodghvlr3WA62IhfE2UbwvNUn4m+Fl6HCcnXPor/dpBaANTgbNjinhJeFEw1wEQ/paSukp6yWVsv9RIla+HN38M5neZYIwpaVAn71/TrU4SCEL4jwhAnh41Bh6vGoilffhQ0dCSkEroXr28Ed8vBpC6TPoZhu1OMJ4gslT/TyMLu3lM0HmxYKilevNw8Cl4ZbkQtwKxiDSpJp+j1//QZs6Elg9XMd4GQfcDOkpszATZoOUtPWsaNdnopeOo7uLWX1wqaZAv7ae01INOvtZn5d6wBWT9bDq/gB4KkpE6QmTZA6awJu0vhDEc+7ojqeWrgvD++ve0tZPLBpckPx7dUmbNPMr96ADZ0DWB3ZfmcfBC7ijZA6YwTujOGyNPvuyDvH3bZyZgo2DE4o/nVVFs8gfKcjrSe4uR5+VoQD9zSK/iYmzIUneff8wXG3rTmzB3YMc7AZWoaDyr0mPPrZenAJtjUEZGTO8s5wS2e4iJ8F7vQssKf1PMa7Ii92htfi++vXcyYKdhHev9Ryw6vWPS4Fm34a7qjtErrlWd4It8rCU7VwEa8H7pQe2FPaTzF+LvJuL/Da7k3+Q0XC78wiPN0RfzgIbAo2vFHYRtAG+CG+AZ7uEc6d0gE7oQNmXLeH8c7w9vDg9Z+nWSPCkw/wUodXW+h4bLUxooFad0dgG81y7XIfBF6d9QkJz45rgRnX3sF4MrzX6tJxEDhqW7NGN+zoSdj0LUIl0TzzxdX3YV1DwIe4DQpX3mkeBJaDDWoebqOlPTME+KkjuJgxDbBj6utYkQyVe4e3v4mp9uvcrBPWrb62M4/gjNoOSdwOayorFN9ubpbQwK3pSUieM/cIn22GT9TCNcCcVKO8ghWI0IY8vP7urRO82q9z+jlYt3igkki2xCN49UhLqqywNm1peh0+2UnAmpaAJDrDO8IN8vDxOjgwozgwYzNWrOAIXO/20rEbeG3buqMhxGVc2UlI+GvvwYc4mnVb01memLbAzWkTFN66Ks0+w8K6MwQfIehUI9zYO3ysBj6KQ3IU3wYMewwr2gMvyN699QQ/6t4yWhJ21ARsuCKQ/MVr4lJPot28zVmOlvrNKSMkXvkVrBF+uH3WgHr2xu6tP/hJCV5NYkT1vNQGE6GJQS4dW8Frm5i0xgG7Khtsz9iAEY+yzt1bYtIEW2cNcKeKb+reuoOzbeBiRvBd5kntlw8/hPI2/5XBLh0HbVtlurcWcE4WfrTca5McxQ+YEVWk7lM4a6LO5Mze+4NcOvbWtvbYvXUFb9jg2iQ5qvply1ugnJn66aCXju3b1uF1b0dwbU/wB0v/CmBY6/8qA4Y9ljdRK4NeOjbN+sDdWxWu6x8uzfyfdr9l/FLHu0CYpE9kDa4/DH7pWLPch9699QrH95kR/EXxyOu2snrXM1mdszDQpWN1gxt+99YVXIrqH+yYWof1U/y09asZDflqVkuy/V06ysENxwRX/ZcZUV1mTuJubBgF2MXHOa3DkFETz6dx4rdp3P5mZsa2gpISY11JTaOYV1JTNZk0STljOAyH8jTK7Ap3CkUnhkGZQNGuMGMoaiknH2QEb5vkKP4mM4r/LjmCv5B8Su2Ufc+VUkoppZRSSimllFJKKaUwpbD/AfKWSLQvIrmGAAAAAElFTkSuQmCC",
    "scriptError": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nO2XUY6DMAxE0+1Z+pfrcAb641X2BFzK6YlKTrGqV/0r0ao0KgqUvJHmC4Xg0YxtnAOgCi4x/kbV26s0s4PbE6Lq7RKjvcphGL7cnhARQPflgCC9PTKqPmVe4H/nH5/Pve/n+zw5X12wMFPAHPMCSs/n9yPA0LgDuq47Vi04jeOEJR+/BMfrdXJ//n0IsDQCDuiJQHjSA+6857IW87tX7wFpZSKA4AAjAkIPMJqgMAVsE2NQT37C0rFWen5zU0ARwOMAbTkCqbCgdyODAIIDjAjIhntAWjjzH9cDEgKMOCC1HAFlD/AsQsom6NtZhZW/Qd/236AigG/bAakyEUBwgBEBoQcYTVCYAsYYFPYAYxFaGoFNsG97Fc6RX7g2XW2EDRSNAIIDbLUIAAAAcJ+PP+cSOT5diQGeAAAAAElFTkSuQmCC",
    "warning": "https://cdn.iconscout.com/icon/free/png-256/warning-213-569319.png"
}

const id = "CSN_LOGO"

function getCaptchaWindow()    {
    return $('#step2Captcha > div:nth-child(1)')
}


function PlaceLogo() {
    const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
document.getElementsByTagName('head')[0].appendChild(style);

    getCaptchaWindow().append(
        `<div id="${id}" style="display: flex; align-items: center;">
            <img src="${icons.logo}" alt="logo" style="width: 25px; height: 25px; float: left; margin-left: 10px;">
         </div>`
    )
    //onclick event open https://github.com/LetsUpdate/CSN
    $(`#${id}`).click(() => {
        window.open('https://github.com/LetsUpdate/CSN', '_blank');
    });
    
}

const LogoState = {
"default": "default",
"solving": "solving",
"error":"error",
"networkError":"networkError",
}

function SetState(state){
    const logo = $(`#${id} > img`)
    switch(state){
        case LogoState.default:
            logo.attr('src', icons.logo)
            logo.css('animation', 'none')
            break;
        case LogoState.solving:
            logo.attr('src', icons.logo)
            logo.attr('title', 'Megoldás folyamatban...')
            //rotate the logo
            logo.css({
                'animation': 'spin 0.8s linear infinite',
                '-webkit-animation': 'spin 0.8s linear infinite', // For Safari
                '-moz-animation': 'spin 0.8s linear infinite', // For Firefox
                '-o-animation': 'spin 0.8s linear infinite' // For Opera
            });
            break;
        case LogoState.error:
            logo.attr('src', icons.scriptError)
            logo.css('animation', 'none')
            //add hint
            logo.attr('title', 'Ismeretlen hiba megoldás közben')
            break;
        case LogoState.networkError:
            logo.attr('src', icons.networkError)
            logo.css('animation', 'none')
            logo.attr('title', 'CSN Szerver Hiba / offline')
            break;
    }
}


module.exports = { PlaceLogo, SetState, LogoState }