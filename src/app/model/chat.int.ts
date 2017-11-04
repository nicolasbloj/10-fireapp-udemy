export interface Chat {
    name: string;
    message: string;
    date?: number;
    uid?: string; // key del user que envio el mensaje. AUTH0
}
