class Dialog {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

class Branch {
    dialogs: Dialog[];

    constructor(dialogs: Dialog[]) {
        this.dialogs = dialogs;
    }
}

class Chapter {
    name: string;
    branches: Object;

    constructor(name: string, branches: Object = {}) {
        this.name = name;
        this.branches = branches;
    }
}

class StoryManager {
    chapters: Chapter[];

    constructor() {
        this.chapters = [];
    }

    addChapter(chapter: Chapter) {
        this.chapters.push(chapter);
    }

    setChapters(...chapters: Array<Chapter>) {
        this.chapters = chapters;
    }
}