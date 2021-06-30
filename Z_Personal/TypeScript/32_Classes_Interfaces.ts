// Loosely connected Interface with Class

interface User {
    email : string;
    firstName? :  string;
    lastName? : string;
}

class Admin {
    role : string;
    constructor(public email : string) {
        this.role = 'Admin';
    }
}

function profile(user : User) : string {
    return `Welcome ${user.email}`;
}

var joe = new Admin('joe@you.com');
console.log(joe.role);

// Direct implementation

interface IPost {
    title : string;
    body : string;
}

class Post {
    title: string;
    body: string;

    constructor(post : IPost) {
        this.title = post.title;
        this.body = post.body;
    }

    printPost() {
        console.log(this.title);
        console.log(this.body);
    }
}

var post = new Post ({ title : "A Nice Title", body : "Content is great!" });
console.log(post.title);
console.log(post.body);
post.printPost();