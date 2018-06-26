function getArticleGenerator(articles){
    let mainDiv = $('#content');
    return function () {
        if(articles.length > 0){
            let article = $('<article>')
                .append($('<p>')
                    .append(articles.shift()));
            mainDiv.append(article);
        }
    };
}