const config = require('./config');

function convertImageToBase64(imageElement) {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas dimensions to match the image
        canvas.width = imageElement.naturalWidth;
        canvas.height = imageElement.naturalHeight;

        // Draw the image onto the canvas
        context.drawImage(imageElement, 0, 0);

        // Convert the canvas content to a Data URL (Base64 string)
        const base64String = canvas.toDataURL('image/jpeg');

        // Resolve the promise with the Base64 string
        return base64String;

}

// if return message is "HARD_IMAGE" then the image is too hard to solve rigt now
function solveCaptcha(imageElement) {
    return new Promise((resolve, reject) => {
        // Convert the canvas content to a Data URL (Base64 string)
        const base64String = convertImageToBase64(imageElement);

        if(base64String.length < 100) {
            reject('BASE64_CONVERSION_FAILED');
            return;
        }

        // Make the GM_xmlhttpRequest with the Base64 string
        GM_xmlhttpRequest({
            method: 'POST',
            url: config.API_URL, // Replace with your API endpoint
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ image64: base64String }),
            onload: function(response) {
                if (response.status === 200) {
                    try {
                        const jsonResponse = JSON.parse(response.responseText);
                        if(jsonResponse.message === "HARD_IMAGE") {
                            reject(jsonResponse.message);
                        
                        }else{ resolve(jsonResponse.message);}

                       
                    } catch (error) {
                        reject(new Error('Failed to parse response JSON'));
                    }
                } else {
                    console.error('Failed to solve captcha:', JSON.parse(response.responseText).error);
                    reject(new Error('Failed to solve captcha'));
                }
            },
            onerror: function(error) {
                reject(error);
            }
        });
    });
}



// Export the function for use in other modules
module.exports = { solveCaptcha, convertImageToBase64 };