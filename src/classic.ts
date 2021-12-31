// Classic HTML DOM element model
import { GameManager } from "./story";

export const options = {
    flexBoxGameContainer: true,
    defaultStyle: true
};

export function initializeGame(gameManager: GameManager, parent: HTMLElement = document.body) {
    const game = document.createElement("main");
    game.classList.add("game");
    if(options.flexBoxGameContainer) {
        game.style.display = "flex";
        game.style.flexDirection = "column";
        game.style.alignItems = "center";
        game.style.justifyContent = "center";
    }
    if(options.defaultStyle) {
        // @ts-ignore
        import("./basic.css");
    }

    gameManager.scenes[0].render(game, gameManager.storyManager);

    parent.appendChild(game);
}
