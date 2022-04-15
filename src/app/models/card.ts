export interface Card {
    public_id: string;
    created_at: string;
    context: Context;
}

export interface Context {
    custom: Custom;
}

export interface Custom {
    caption: string;
    alt: string;
}