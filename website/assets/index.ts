import AutoPlay from '@massimokris/mediaplayer/lib/plugins/AutoPlay';
import Autopause from '@massimokris/mediaplayer/lib/plugins/AutoPause';
import MediaPlayer from '@massimokris/mediaplayer';
import Ads from '@massimokris/mediaplayer/lib/plugins/Ads/index';

const video = document.querySelector("video");
const play: HTMLElement = document.querySelector('#playButton');
const mute: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay, new Autopause, new Ads()] });
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}
