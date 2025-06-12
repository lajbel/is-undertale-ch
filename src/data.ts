export type NameData = {
    isAllowed?: boolean;
    name: string;
    jpName: string;
    message?: string;
};

export type TrueNames = typeof names[number]["name"];

export const names = [
    {
        isAllowed: false,
        name: "",
        jpName: "",
        message: "You must choose a name.",
    },
    {
        isAllowed: false,
        name: "Alphys",
        jpName: "アルフィー",
        message: "D-don't do that.",
    },
    {
        isAllowed: false,
        name: "Asgore",
        jpName: "アズゴア",
        message: "You cannot.",
    },
    {
        isAllowed: false,
        name: "Asriel",
        jpName: "アズリエル",
        message: "...",
    },
    {
        isAllowed: false,
        name: "Flowey",
        jpName: "フラウィ",
        message: "I already CHOSE that name.",
    },
    {
        isAllowed: false,
        name: "Sans",
        jpName: "サンズ",
        message: "nope.",
    },
    {
        isAllowed: false,
        name: "Toriel",
        jpName: "トリエル",
        message: "I think you should think of your own name, my child.",
    },
    {
        isAllowed: false,
        name: "Undyne",
        jpName: "アンダイン",
        message: "Get your OWN name!",
    },
    {
        isAllowed: true,
        name: "Frisk",
        jpName: "フリスク",
        message: "WARNING: This name will make your life hell. Proceed anyway?",
    },
    {
        isAllowed: true,
        name: "Murder",
        jpName: "ころす",
        message: "That's a little on-the-nose, isn't it...?",
    },
    {
        isAllowed: true,
        name: "Mercy",
        jpName: "みのがす",
    },
    {
        isAllowed: true,
        name: "AAAAAA",
        jpName: "ああああああ",
        message: "Not very creative...?",
    },
    {
        isAllowed: true,
        name: "Aaron",
        jpName: "アーロン",
        message: "Is this name correct? ;)",
    },
    {
        isAllowed: true,
        name: "Alphy",
        jpName: "アルっち",
        message: "Uh.... OK?",
    },
    {
        isAllowed: true,
        name: "Catty",
        jpName: "キャッティ",
        message: "Bratty! Bratty! That's MY name!",
    },
    {
        isAllowed: true,
        name: "Bratty",
        jpName: "アリゲッティ",
        message: "Like, OK I guess.",
    },
    {
        isAllowed: true,
        name: "Bpants",
        jpName: "バガパン",
        message: "You are really scraping the bottom of the barrel.",
    },
    {
        isAllowed: true,
        name: "Chara",
        jpName: "キャラ",
        message: "The true name.",
    },
    {
        isAllowed: true,
        name: "Gerson",
        jpName: "ガーソン",
        message: "Wah ha ha! Why not?",
    },
    {
        isAllowed: true,
        name: "Jerry",
        jpName: "ジェリー",
        message: "Jerry.",
    },
    {
        isAllowed: true,
        name: "Metta",
        jpName: "メタトン",
        message: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
    },
    {
        isAllowed: true,
        name: "Mett",
        jpName: "メタ",
        message: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
    },
    {
        isAllowed: true,
        name: "Mtt",
        jpName: "メタ",
        message: "OOOOH!!! ARE YOU PROMOTING MY BRAND?",
    },
    {
        isAllowed: true,
        name: "Napsta",
        jpName: "ナプスタ",
        message: "............ (They are powerless to stop you.)",
    },
    {
        isAllowed: true,
        name: "Blooky",
        jpName: "ブルっち",
        message: "............ (They are powerless to stop you.)",
    },
    {
        isAllowed: true,
        name: "Papyru",
        jpName: "パピルス",
        message: "I'LL ALLOW IT!!!!",
    },
    {
        isAllowed: true,
        name: "Shyren",
        jpName: "シャイレーン",
        message: "...?",
    },
    {
        isAllowed: true,
        name: "Temmie",
        jpName: "テミー",
        message: "hOI!",
    },
    {
        isAllowed: true,
        name: "Woshua",
        jpName: "ウォッシュア",
        message: "Clean name.",
    },
] as const satisfies readonly NameData[];
