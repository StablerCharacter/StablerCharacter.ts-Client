import { StoryManager } from "../story";

export interface HTMLScene {
    render(game: HTMLElement, storyManager: StoryManager): void;
}