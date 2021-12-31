export interface GameEvent {
    invoke(): void;
}

export class ShowSprite implements GameEvent {
    sprite: string;

    constructor(sprite: string) {
        this.sprite = sprite;
    }

    public invoke(): void {
        console.log("Show sprite");
    }
}

export class PlaySound implements GameEvent {
    sound: string;
    loop: boolean;
    playbackRate: number;
    private audioInstance: HTMLAudioElement;

    constructor(sound: string, loop: boolean = false, playbackRate: number = 1) {
        this.sound = sound;
        this.loop = loop;
        this.playbackRate = playbackRate;
    }

    public invoke(): void {
        this.audioInstance = new Audio(this.sound);
        this.audioInstance.loop = this.loop;
        this.audioInstance.play();
    }

    public pause(): void {
        this.audioInstance.pause();
    }
}
