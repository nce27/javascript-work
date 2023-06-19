const lowercaseMessage = (text) => {
  return text.toLowerCase();
}

const transform = (text, transformFucntion) => {
  return transformFucntion(text);
}

transform("HELLO", lowercaseMessage)