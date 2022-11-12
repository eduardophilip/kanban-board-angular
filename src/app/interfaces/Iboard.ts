interface Icolumn {
    title: string;
    tasks: string[];
}

export interface Iboard {
    name: string,
    path: string;
    columns: Icolumn[]
}
