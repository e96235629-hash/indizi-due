const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lett = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789'
const alph = nums+lett;

const fsize = 16;
const cols = canvas.width/fsize;

const rainDrops = [];

for (let i = 0; i < cols; i++) {
    rainDrops[i] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0,0,0,0.05)';
    context.fillRect(0,0, canvas.width, canvas.height);
    context.fillStyle = '#0f0';
    context.font = fsize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++){
        const text = alph.charAt(Math.floor(Math.random() * alph.length));
        context.fillText(text, i*fsize, rainDrops[i]*fsize);

        if(rainDrops[i]*fsize > canvas.height && Math.random() > 0.975){
            rainDrops[i]=0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 30)