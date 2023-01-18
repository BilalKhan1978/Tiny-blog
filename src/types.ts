 
export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

export interface RootObject {
    posts: Post[];
    
}