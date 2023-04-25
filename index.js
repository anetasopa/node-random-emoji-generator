// Import the node-emoji library that we installed
import emoji from 'node-emoji';

// Get the emoji name that the user specified on the commond line
const emojiName = process.argv[2];


if (!emojiName) {
  // If the user did not specify an emoji, display a random emoji
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji)
} else if (emojiName) {
  // If the usr did specify an emoji, to find that emoji
  const foundEmoji = emoji.find(emojiName);
  if (foundEmoji) {
    // If the emoji exist (is valid), print the emoji
    console.log(foundEmoji.emoji)
  } else {
    // If does not exist, print the error message
    console.log('Invalid emoji name');
  }
}
