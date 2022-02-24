const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// const getVideo = () => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: false })
//         .then(localMediaStream => {
//             console.log(localMediaStream);
//             video.srcObject = localMediaStream;
//             video.play();
//         });
// }

const getVideo = async () => {
    const localMediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    console.log(localMediaStream);
    video.srcObject = localMediaStream;
    video.play();
}

const paintToCanvas = () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        // pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.1;
        // pixels = greenScreen(pixels);

        ctx.putImageData(pixels, 0, 0);
    }, 16)

}

const takePhoto = () => {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Photo taken"/>`;
    strip.insertBefore(link, strip.firstChild);
}

const redEffect = pixels => {
    for (let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i] = pixels.data[i] + 100; // r
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // b
    }

    return pixels;
}

const rgbSplit = pixels => {
    for (let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i - 150] = pixels.data[i]; // r
        pixels.data[i + 100] = pixels.data[i + 1]; // g
        pixels.data[i - 150] = pixels.data[i + 2]; // b
    }

    return pixels;
}

const greenScreen = pixels => {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
    });

    // console.log(levels);
    

    for (let i = 0; i < pixels.data.length; i = i + 4){
        let red = pixels.data[i + 0];
        let green = pixels.data[i + 1];
        let blue = pixels.data[i + 2];
        let alpha = pixels.data[i + 3];

        // console.log(red, green, blue);

        if (red >= parseInt(levels.rmin)
            && green >= parseInt(levels.gmin)
            && blue >= parseInt(levels.bmin)
            && red <= parseInt(levels.rmax)
            && green <= parseInt(levels.gmax)
            && blue <= parseInt(levels.bmax)
        ){
            pixels.data[i + 3] = 0;
        }

    }

    return pixels;
}

getVideo();
// paintToCanvas();
video.addEventListener('canplay', paintToCanvas);