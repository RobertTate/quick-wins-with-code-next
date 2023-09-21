import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArticleFields {
    title: EntryFieldTypes.Symbol;
    teaser: EntryFieldTypes.RichText;
    articleImage: EntryFieldTypes.AssetLink;
    url: EntryFieldTypes.Symbol;
    originalPublishDate: EntryFieldTypes.Date;
}

export type TypeArticleSkeleton = EntrySkeletonType<TypeArticleFields, "article">;
export type TypeArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeArticleSkeleton, Modifiers, Locales>;
