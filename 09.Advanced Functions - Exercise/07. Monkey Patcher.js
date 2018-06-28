let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

function solution(arg) {
    switch (arg) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let score = this.upvotes - this.downvotes;
            let total = this.upvotes + this.downvotes;
            let rating = 'new';
            let add = 0;
            if (total >= 10) {
                switch (true) {
                    case this.upvotes / total > 0.66:
                        rating = 'hot';
                        break;
                    case this.downvotes > this.upvotes :
                        rating = 'unpopular';
                        break;
                    case this.upvotes > 100 || this.downvotes > 100 :
                        rating = 'controversial';
                        break;
                }
            }
            if (total > 50) {
                add = Math.ceil(Math.max(this.upvotes, this.downvotes) / 4);
            }
            return [this.upvotes + add, this.downvotes + add, score, rating];
    }
}


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++)
    solution.call(post, 'downvote');        // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);