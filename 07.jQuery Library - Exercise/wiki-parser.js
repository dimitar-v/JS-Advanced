function wikiParser(selector) {
    let wiki = $(selector);
    let h3Regex = /===(.*?)===/g;
    let h2Regex = /==(.*?)==/g;
    let h1Regex = /=(.*?)=/g;
    let boldRegex = /'''(.*?)'''/g;
    let italicRegex = /''(.*?)''/g;
    let linkRegex =  /\[\[([^\[\]]+?)]]/g;   // /\[\[(.*?)]]/g; ?? =>> "Normal text[ [ [[hyperlink]] [[not a hyperlink] ] [[still not[ a hyperlink]]"

    let html = wiki.text()
        .replace(h3Regex, (t, g1) => `<h3>${g1}</h3>`)
        .replace(h2Regex, (t, g1) => `<h2>${g1}</h2>`)
        .replace(h1Regex, (t, g1) => `<h1>${g1}</h1>`)
        .replace(boldRegex, (t, g1) => `<b>${g1}</b>`)
        .replace(italicRegex, (t, g1) => `<i>${g1}</i>`)
        .replace(linkRegex, (t, g1) => {
            [link,text] = g1.split('|');
            return `<a href="/wiki/${link}">${text || link}</a>`;
        });

    wiki.html(html);
}
