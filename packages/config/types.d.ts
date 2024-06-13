
export type Icon = `/${string}.${"svg" | "png" | "jpg" | "jpeg"}`;

export type Tag = string;

export type EmailPattern = `${string}@${string}`;

export interface Tool {
    handler: string;
    name?: string;
    icon?: Icon;
}

export interface Scope {
    name:
    | "read"
    | "write-exec"
    | "repldb:read"
    | "repldb:write"
    | "experimental-api";
    reason: string;
}

export interface FileHandler {
    glob: `${
    // regexp kind for glob patterns
    | "*"
    | "**"
    | "?"
    | "+"
    | "{"
    | "}"
    | "|"
    | "\\"
    | "["
    | "]"
    | "^"
    | "$"
    | "."
    | "!"
    | "*"
    | "?"
    | "+"
    | "{"
    }`;
    handler: string;
    name?: string;
    icon?: Icon;
}

export type BackgroundScript = {
    page: string;
};

export type ExtensionConfig =
| {
    name: string;
    description: string;
    tools: Tool[];
}
| { scopes: Scope[] }
| {
    longDescription?: string;
    tags?: Tag[];
    authorEmail?: EmailPattern;
    fileHandlers?: FileHandler[];
    icon?: Icon;
    background?: BackgroundScript;
};
