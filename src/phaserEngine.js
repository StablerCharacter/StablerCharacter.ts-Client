// @ts-check
// StablerCharacter.ts - Phaser based system
import "../node_modules/phaser/dist/phaser";
// @ts-ignore
import { GameManager } from "./story.ts";
"use strict";

const phaserConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
};

/**
 * @param {GameManager} gameManager
 * @param {Object} physics
 */
export function initializeGame(gameManager, physics = false) {
    if(physics) {
        phaserConfig.physics = physics;
    }
    phaserConfig.scene = gameManager.scenes;
    const game = new Phaser.Game(phaserConfig);
}
