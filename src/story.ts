import { HTMLScene } from "./classicEngine/HTMLScene";
import { GameEvent } from "./events";

export class Dialog {
    public content: string;
    public events: GameEvent[];

    constructor(content: string, ...events: GameEvent[]) {
        this.content = content;
        this.events = events;
    }
}

export class Branch {
    public dialogs: Dialog[];
    dialogIndex: number = 0;

    constructor(...dialogs: Dialog[]) {
        this.dialogs = dialogs;
    }

    getCurrentDialog(): Dialog {
        return this.dialogs[this.dialogIndex];
    }

    nextDialog(): Dialog {
        if(++this.dialogIndex >= this.dialogs.length) {
            return undefined;
        }
        return this.dialogs[this.dialogIndex];
    }
    
    addDialog(dialog: Dialog): void {
        this.dialogs.push(dialog);
    }
}

export class Chapter {
    public name: string;
    public branches: { [key: string]: Branch };
    public entryBranchName: string;

    constructor(name: string, branches: { [key: string]: Branch } = {}, entryBranchName: string = "main") {
        this.name = name;
        this.branches = branches;
        this.entryBranchName = entryBranchName;
    }

    getCurrentDialog(): Dialog {
        return this.branches[this.entryBranchName].getCurrentDialog();
    }

    nextDialog(): Dialog {
        return this.branches[this.entryBranchName].nextDialog();
    }

    addBranch(branchName: string, branch: Branch): void {
        this.branches[branchName] = branch;
    }
}

export class StoryManager {
    private chapters: Chapter[];
    chapterIndex: number = 0;

    constructor(...chapters: Chapter[]) {
        this.chapters = chapters;
    }

    addChapter(chapter: Chapter) {
        this.chapters.push(chapter);
    }

    setChapters(...chapters: Chapter[]) {
        this.chapters = chapters;
    }

    getCurrentDialog(): Dialog {
        return this.chapters[this.chapterIndex].getCurrentDialog();
    }

    nextDialog(): Dialog {
        return this.chapters[this.chapterIndex].nextDialog();
    }
}

export class GameManager {
    public storyManager: StoryManager;
    public scenes: HTMLScene[] | any[];

    constructor(storyManager: StoryManager, ...scenes: HTMLScene[] | any[]) {
        this.storyManager = storyManager;
        this.scenes = scenes;
    }
}
