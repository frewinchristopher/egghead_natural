var natural = require('natural');
var fs = require('fs');

// // Lesson 1 
// var myString = "I'm surprised! I didn't know you could make it.";

var tokenizer = new natural.WordTokenizer({pattern: /[!?.]/});

// console.log(tokenizer.tokenize(myString));


// // Lesson 2
// var stemmer = natural.PorterStemmer;

// var myString = "I am baking cakes in the ovens.";

// console.log(stemmer.tokenizeAndStem(myString));

// // Lesson 3 
// var nounInflector = new natural.NounInflector();
// console.log(nounInflector.pluralize("mouse"));
// console.log(nounInflector.singularize("tomatoes"));

// var countInflector = natural.CountInflector;

// for (var i = 1; i <= 10; i++){
// 	console.log(countInflector.nth(i))
// }

// // Lesson 4 - bigrams, trigrams and ngrams
// var NGrams = natural.NGrams;

// var myString = "Jane Smith, along with Mary Adams and John Black, created the projects";

// console.log(NGrams.bigrams(myString));

// var myString2 = "This little piggy went to market, this little piggy stayed home, this little piggy had roast beef, this little piggy had none. This little piggy went wee, wee, wee, all the way home!";

// console.log(NGrams.trigrams(myString2));

// var myString3 = "The monkey ate all of the bananas.";

// console.log(NGrams.ngrams(myString3,4));

// console.log(NGrams.ngrams(myString3,3, '[S]', '[E]'));

// // Lesson 5
// var Tagger = natural.BrillPOSTagger;

// var myString4 = "Lys soldered the beautiful jewelry pieces".split(" ");

// var baseFolder = "./node_modules/natural/lib/natural/brill_pos_tagger";
// var rules = baseFolder + "/data/English/tr_from_posjs.txt";
// var lexicon = baseFolder + "/data/English/lexicon_from_posjs.json";
// var defaultCategory = "N";

// var tagger = new Tagger(lexicon, rules, defaultCategory, function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(tagger.tag(myString4));
// 	}
// });

// // Lesson 6

// var string5 = "Winter wind";
// var string6 = "December tenth";
// var string7 = "simpletons"

// //JaroWinklerDistance, Levenshtein, DiceCoefficient
// console.log(natural.JaroWinklerDistance(string5,string6));
// console.log(natural.JaroWinklerDistance(string5,string7));

// console.log(natural.LevenshteinDistance(string5,string6));
// console.log(natural.LevenshteinDistance(string5,string7));

// console.log(natural.DiceCoefficient(string5,string6));
// console.log(natural.DiceCoefficient(string5,string7));


// // Lesson 7
// var classifier = new natural.BayesClassifier();


// var trainingData = [
//     {text: 'RE: Canadian drugs now on sale', label: 'spam'}, 
//     {text: 'Earn more from home', label: 'spam'},
//     {text: 'Information now available!!!', label: 'spam'},
//     {text: 'Earn easy cash', label: 'spam'},
//     {text: 'Your business trip is confirmed for Monday the 4th', label: 'notspam'},
//     {text: 'Project planning - next steps', label: 'notspam'},
//     {text:'Birthday party next weekend', label: 'notspam'},
//     {text: 'Drinks on Monday?', label: 'notspam'}
// ];

// var testData = [
//     {text: 'Drugs for cheap', label: 'spam'},
//     {text: 'Next deadline due Monday', label: 'notspam'},
//     {text: 'Meet me at home?', label: 'notspam'},
//     {text: 'Hang out with someone near you', label: 'spam'}
// ];



// trainingData.forEach(function(item){
// 	classifier.addDocument(item.text, item.label);
// });

// classifier.train();


// testData.forEach(function(item){
// 	var labelGuess = classifier.classify(item.text);
// 	console.log(item.text);
// 	console.log("Label:", labelGuess);
// 	console.log(classifier.getClassifications(item.text));
// });

// //Lesson 8 - classify JSON text (science/space comments vs political)

// var classifier2 = new natural.LogisticRegressionClassifier();

// fs.readFile('training_data.json', 'utf-8', function(err,data){
//     if (err){
//         console.log(err);
//     } else {
//         var trainingData2 = JSON.parse(data);
//         train(trainingData2);
//     }
// });

// function train(trainingData2) {
//     console.log("Training");
//     trainingData2.forEach(function(item){
//         classifier2.addDocument(item.text, item.label);
//     });
//     var startTime = new Date();
//     classifier2.train();
//     var endTime  = new Date();
//     var trainingTime = (endTime-startTime)/1000.0;
//     console.log("Training time:", trainingTime, "seconds");
//     console.log("(Length of trainingData2 was", trainingData2.length ,")");
//     loadTestData();
// }

// function loadTestData() {
//     console.log("Loading test data");
//     fs.readFile('test_data.json', 'utf-8', function(err,data){
//         if (err) {
//             console.log(err);
//         } else {
//             var testData = JSON.parse(data);
//             testClassifier(testData);
//         }
//     });
// }

// function testClassifier(testData) {
//     console.log("Testing classifier");
//     var numCorrect = 0;
//     testData.forEach(function(item) {
//         var labelGuess = classifier2.classify(item.text);
//         if (labelGuess === item.label) {
//             numCorrect++;
//         }
//     });
//     console.log("Correct %:", numCorrect/testData.length);
//     console.log("(Length of testData was", testData.length ,")");
//     saveClassifier(classifier2);
// }

// // Lesson 9 - Save that classifier we just wrote!!!
// function saveClassifier(classifier2) {
//     classifier2.save('classifier2.json', function(error, classifier2){
//         if (err){
//             console.log(err);
//         } else {
//             console.log("Classifier saved!");
//         }
//     });
// }

// // To load classifier
// natural.LogisticRegressionClassifier.load('classifier2.json', null, function(){
//     if (err) {
//         console.log(err);
//     } else {
//         var testComment = "is this about the sun and the moon?";
//         console.log(classifier.classify(testComment));
//     }
// })


// Lesson 10 - ftidf

var tfidf = new natural.TfIdf();

var documents = [
    "Stick charts were made and used by the Marshallese to navigate the Pacific Ocean by canoe off the coast of the Marshall Islands.",
    "The charts represented major ocean swell patterns and the ways the islands disrupted those patterns, typically determined by sensing disruptions in ocean swells by islands during sea navigation.",
    "Most stick charts were made from the midribs of coconut fronds that were tied together to form an open framework.",
    "Island locations were represented by shells tied to the framework, or by the lashed junction of two or more sticks.",
    "The threads represented prevailing ocean surface wave-crests and directions they took as they approached islands and met other similar wave-crests formed by the ebb and flow of breakers.",
    "Individual charts varied so much in form and interpretation that the individual navigator who made the chart was the only person who could fully interpret and use it.",
    "The use of stick charts ended after World War II when new electronic technologies made navigation more accessible and travel among islands by canoe lessened.",
    "The stick charts are a significant contribution to the history of cartography because they represent a system of mapping ocean swells, which was never before accomplished.",
    "They also use different materials from those common in other parts of the world. They are an indication that ancient maps may have looked very different, and encoded different features from the earth, than the maps we use today.",
    "Marshallese navigators used their senses and memory to guide them on voyages by crouching down or lying prone in the canoe to feel how the canoe was being pitched and rolled by underlying swells."
];


// 
documents.forEach(function(item){
    tfidf.addDocument(item);
}); 


// "Term Frequency Inverse Document Frequency"
var tf = 2;
var idf = 1 + Math.log(10/(1+3)); // log helps emphasize rare words 
var combinedTfidf = tf * idf;
console.log(combinedTfidf);

// specific word search
tfidf.tfidfs('canoe', function(docIndex,measure) {
    console.log("Document", docIndex, ":", measure);
});

// first 9 terms
tfidf.listTerms(9).forEach(function(item){
    console.log(item.term, ":", item.tfidf);
})

// serialize and deserialize JSON
var json = JSON.stringify(tfidf);
var newTfidf = new natural.TfIdf(JSON.parse(json));

// Lesson 11 - WordNet in Natural
var wordnet = new natural.WordNet();

var myWord = 'desert';

wordnet.lookup(myWord, function(result){
    result.forEach(function(result){
        console.log("\n");
        console.log(result.synsetOffset);
        console.log(result.pos);
        console.log(result.synonyms);
        console.log(result.gloss);
    })
});

// get directly
wordnet.get(8522594, 'n', function(result){
    console.log(result.gloss);
});

// Lesson 12 - Natural.trie (simplify and speed up search)
var trie = new natural.Trie();

var birdNames = ['albatross','anhinga','auklet','avocet','bishop','bittern','blackbird','bluebird','bobolink','booby','brant','bufflehead','bunting','canvasback','cardinal','catbird','chat','chickadee','chukar','coot','cormorant','cowbird','crane','creeper','crossbill','crow','cuckoo'];

birdNames.forEach(function(item){
    trie.addString(item);
});
console.log(trie.contains("crane"));
console.log(trie.findMatchesOnPath("cuckoohead"));

console.log(trie.keysWithPrefix("cr"));

// Lesson 13 - Include spell-check in text
var genTokenizer = new natural.WordTokenizer();
var text = fs.readFileSync('lotsofwords.txt', 'utf-8');
var corpus = genTokenizer.tokenize(text);
var spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.isCorrect("birtday"));

var sentance = "Tey hade truble fiinding the thng".split(" ");

sentance.forEach(function(word){
    console.log(spellcheck.getCorrections(word));
});

// in this case, selecting the first index of the returned array gives us
// the correct sentance:
sentance.forEach(function(word){
    console.log(spellcheck.getCorrections(word)[0]);
});


// Lesson 14 - If words sound similiar in Natural
var soundex = natural.SoundEx;
var metaphone = natural.Metaphone;

var word1 = "pair";
var word2 = "pear";

if (soundex.compare(word1,word2)){
    console.log("SoundEx: Alike!");
} else {
    console.log("SoundEx: Unalike!");
}

if (metaphone.compare(word1,word2)){
    console.log("Metaphone: Alike!");
} else {
    console.log("Metaphone: Unalike!");
}

console.log(soundex.process(word1));
console.log(soundex.process(word2));

// metaphone is generally stronger than soundex (see words 'write' and 'right')
console.log(metaphone.process(word1));
console.log(metaphone.process(word2));
