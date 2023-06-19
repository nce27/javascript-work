const notifyByEmail = (emailAddress) => {
  return `Email sent to: ${emailAddress}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (formOfContact, notifyFunction) => {
  return notifyFunction(formOfContact);
}
console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));