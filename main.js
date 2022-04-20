// array for quotes
quotes = [
    "We know what we are, but know not what we may be. William Shakespeare",
    "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. Maya Angelou",
    "It is during our darkest moments that we must focus to see the light. Aristotle Onassis",
    "The only way to discover the limits of the possible is to go beyond them into the impossible. Arthur C. Clarke",
    "Let us sacrifice our today so that our children can have a better tomorrow. A. P. J. Abdul Kalam",
    "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them. John F. Kennedy",
    "He who has a why to live can bear almost any how. Friedrich Nietzsche",
    "Life is too short for long-term grudges. Elon Musk",
    "Life isn't about finding yourself. Life is about creating yourself. George Bernard Shaw",
    "All you need in this life is ignorance and confidence, and then success is sure. Mark Twain",
    "The secret of getting ahead is getting started. Mark Twain",
    "Today you are you! That is truer than true! There is no one alive who is you-er than you! Dr. Seuss",
    "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not. Dr. Seuss",
    "All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost. J. R. R. Tolkien",
    "All we have to decide is what to do with the time that is given us. J. R. R. Tolkien",
    "Short cuts make long delays. J. R. R. Tolkien"

]
// function to display quotes
let newQuote = function() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

}