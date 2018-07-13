function posts() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let comments = '';
            if (this.comments.length){
                comments = this.comments.slice();
                comments.unshift('Comments:');
                comments = '\n' + comments.join('\n * ');
            }
            return super.toString() + '\nRating: ' + (this.likes - this.dislikes) + comments;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + '\nViews: ' + this.views;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let post = posts().Post;
let socialPost = posts().SocialMediaPost;
let blogPost = posts().BlogPost;

let p = new post('Test', 'Content');
console.log('' + p);
console.log();
let sp = new socialPost('Title', 'Content', 15, 10);
console.log('' + sp);
console.log();
sp.addComment('First comment');
sp.addComment('2 comment');
sp.addComment('3 comment');
sp.addComment('4 comment');
sp.addComment('5 comment');
console.log('' + sp);
console.log();

let bp = new blogPost('Blog title', 'Blog content', 5);
console.log('' + bp);
bp.view().view();
bp.view();
bp.view();
console.log('' + bp);
console.log();


