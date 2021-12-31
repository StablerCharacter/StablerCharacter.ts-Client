import { StoryManager } from "../story";
import { HTMLScene } from "./HTMLScene";

export class GameScene implements HTMLScene {
    dialog: HTMLElement;
    storyManager: StoryManager;
    onStoryEnd: Function;

    constructor(options: {
        onStoryEnd?: Function
    } = {}) {
        this.onStoryEnd = options.onStoryEnd;
    }
    
    nextDialog(): void {
        const dialog = this.storyManager.nextDialog();
        if(dialog == undefined) {
            this.onStoryEnd();
            return;
        }
        this.dialog.innerHTML = dialog.content;
        dialog.events.forEach(event => event.invoke());
    }

    public render(game: HTMLElement, storyManager: StoryManager): void {
        game.style.height = "97.655vh";
        this.storyManager = storyManager;
        this.dialog = document.createElement("p");
        this.dialog.id = "dialog";
        this.dialog.innerHTML = storyManager.getCurrentDialog().content;
        game.appendChild(this.dialog);
        
        const continueButton = document.createElement("button");
        continueButton.id = "continue";
        continueButton.innerText = "Continue";
        continueButton.addEventListener("click", () => {
            this.nextDialog();
        });
        game.appendChild(continueButton);
    }
}