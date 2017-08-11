// I gave up on getting the mashup api call to work... which is unfortunate as I think that was the point of this project. I've gone with putting the quotes in a local variable.
$(document).ready(function() {
var quotes = [
{"quote": "From the moment I picked up your book until I laid it down, I was convulsed with laughter. Some day I intend reading it.", "author": "Groucho Marx (1890 - 1977)"},
{"quote": "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.", "author": "Groucho Marx (1890 - 1977)"},
{"quote": "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.", "author": "Groucho Marx (1890 - 1977)"},
{"quote": "There is no such thing as a moral or an immoral book. Books are well written or badly written.", "author": "Oscar Wilde (1854 - 1900)"},
{"quote": "The greatest university of all is a collection of books.", "author": "Thomas Carlyle (1795 - 1881)"},
{"quote": "A bookstore is one of the only pieces of evidence we have that people are still thinking.", "author": "Jerry Seinfeld (1954 - )"},
{"quote": "Do give books - religious or otherwise - for Christmas. They're never fattening, seldom sinful, and permanently personal.", "author": "Lenore Hershey"},
{"quote": "Just the knowledge that a good book is awaiting one at the end of a long day makes that day happier.", "author": "Kathleen Norris"},
{"quote": "Books are the quietest and most constant of friends; they are the most accessible and wisest of counsellors, and the most patient of teachers.", "author": "Charles W. Eliot (1834 - 1926)"},
{"quote": "In the highest civilization, the book is still the highest delight.", "author": "Ralph Waldo Emerson (1803 - 1882)"},
{"quote": "The love of learning, the sequestered nooks, And all the sweet serenity of books.", "author": "Henry Wadsworth Longfellow (1807 - 1882)"},
{"quote": "Be as careful of the books you read, as of the company you keep; for your habits and character will be as much influenced by the former as by the latter.", "author": "Paxton Hood"},
{"quote": "Wear the old coat and buy the new book.", "author": "Austin Phelps"},
{"quote": "Don't join the book burners. Don't think you're going to conceal faults by concealing evidence that they ever existed.", "author": "Dwight D. Eisenhower (1890 - 1969)"},
{"quote": "Hold a book in your hand and you're a pilgrim at the gates of a new city.", "author": "Anne Michaels"},
{"quote": "Oh for a book and a shady nook...", "author": "John Wilson (1785 - 1854)"},
{"quote": "Woe be to him that reads but one book.", "author": "George Herbert (1593 - 1633)"},
{"quote": "I would be the most content if my children grew up to be the kind of people who think decorating consists mostly of building enough bookshelves.", "author": "Anna Quindlen (1953 - )"},
{"quote": "Books are the carriers of civilization. Without books, history is silent, literature dumb, science crippled, thought and speculation at a standstill.", "author": "Henry David Thoreau (1817 - 1862)"},
{"quote": "The hardest way of learning is that of easy reading; but a great book that comes from a great thinker is a ship of thought, deep freighted with truth and beauty.", "author": "Theodore Parker (1810 - 1860)"},
{"quote": "Literature is my Utopia. Here I am not disenfranchised. No barrier of the senses shuts me out from the sweet, gracious discourses of my book friends. They talk to me without embarrassment or awkwardness.", "author": "Helen Keller (1880 - 1968)"},
{"quote": "Books are not made for furniture, but there is nothing else that so beautifully furnishes a house.", "author": "Henry Ward Beecher (1813 - 1887)"},
{"quote": "Books are hindrances to persisting stupidity.", "author": "Spanish Proverb"},
{"quote": "The reading of all good books is indeed like a conversation with the noblest men of past centuries who were the authors of them, nay a carefully studied conversation, in which they reveal to us none but the best of their thoughts.", "author": "Rene Descartes (1596 - 1650)"},
{"quote": "It is a great thing to start life with a small number of really good books which are your very own.", "author": "Sir Arthur Conan Doyle (1859 - 1930)"},
{"quote": "Beware the man of one book.", "author": "Saint Thomas Aquinas (1225 - 1274)"},
{"quote": "To read a book for the first time is to make the acquaintance of a new friend; to read it a second time is to meet an old one.", "author": "Selwyn Champion"},
{"quote": "A room without books is like a body without a soul.", "author": "Cicero (106 BC - 43 BC)"},
{"quote": "When books are burned in the end people will be burned too.", "author": "Heinrich Heine (1797 - 1856)"},
{"quote": "A book holds a house of gold.", "author": "Chinese Proverb"},
{"quote": "A book tightly shut is but a block of paper.", "author": "Chinese Proverb"},
{"quote": "A good book has no ending.", "author": "R. D. Cumming"},
{"quote": "Everything comes to him who waits but a loaned book.", "author": "Kin Hubbard (1868 - 1930)"},
{"quote": "He who kills a man kills a reasonable creature, but he who destroys a good book kills reason itself.", "author": "John Milton (1608 - 1674)"},
{"quote": "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.", "author": "Carl Sagan (1934 - 1996)"},
{"quote": "A good book is the precious lifeblood of a master spirit, embalmed and treasured up on purpose to a life beyond life.", "author": "John Milton (1608 - 1674)"},
{"quote": "The man who is fond of books is usually a man of lofty thought, and of elevated opinions.", "author": "Christopher Dawson"},
{"quote": "Man ceased to be an ape, vanquished the ape, on the day the first book was written.", "author": "Yevgeny Zamyatin"},
{"quote": "Upon books the collective education of the race depends; they are the sole instruments of registering, perpetuating and transmitting thought.", "author": "Henry C. Rogers"},
{"quote": "A good book is the precious life-blood of the master spirit, embalmed and treasured up on purpose for a life beyond.", "author": "John Milton (1608 - 1674)"},
{"quote": "The pleasure of all reading is doubled when one lives with another who shares the same books.", "author": "Katherine Mansfield (1888 - 1923)"},
{"quote": "If we encounter a man of rare intellect, we should ask him what books he reads.", "author": "Ralph Waldo Emerson (1803 - 1882)"},
{"quote": "In the best books, great men talk to us, give us their most precious thoughts, and pour their souls into ours.", "author": "William E. Channing"},
{"quote": "That is a good book which is opened with expectation, and closed with delight and profit.", "author": "A. Bronson Alcott"},
{"quote": "If a book is worth reading, it is worth buying.", "author": "John Ruskin"},
{"quote": "God forbid that any book should be banned. The practice is as indefensible as infanticide.", "author": "Rebecca West (1892-1983)"},
{"quote": "He hath never fed of the dainties that are bred in a book; he hath not et paper, as it were;he hath not drunk ink; his intellect is not replenished.", "author": "William Shakespeare (1564-1616)"},
{"quote": "A mind needs books as a sword needs a whetstone, if it is to keep its edge.", "author": "Tyrion Lannister"},
{"quote": "Child! do not throw this book about; Refrain from the unholy pleasure of cutting all the pictures out! Preserve it as your chiefest treasure.", "author": "Hilaire Belloc (1870-1953)"}
];

$("#next").click(function(){getQuote();});

function getQuote() {
  var selectQuote = Math.floor(Math.random() * Object.keys(quotes).length);
  $('#quote').html("<q>" + quotes[selectQuote].quote + "</q>");
  $('#author').html(quotes[selectQuote].author);
  $('#twit').html(document.getElementById("twit").innerHTML.replace("twitString", encodeURIComponent(quotes[selectQuote].quote) + "-" + encodeURIComponent(quotes[selectQuote].author)));
 }

  getQuote();
  });
