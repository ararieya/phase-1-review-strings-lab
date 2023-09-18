const currentUser= 'Grace Hopper'; 
const welcomeMessage = `Welcome to Flatbook,${currentUser}! `;
console.log (welcomeMessage);

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

console.log ('Edsger Dijkstra'.charAt(0));
console.log ('Edsger Dijkstra'[0]);
console.log ('Edsger Dijkstra'.length);
console.log('Edsger Dijkstra'[15]);
console.log('Edsger Dijkstra'[14]);
console.log('Edsger Dijkstra'.slice());
console.log('Edsger Dijkstra'.slice(7));
console.log('Edsger Dijkstra'.slice(0,3));

console.log (currentUser.slice(0,1))

const shortGreeting= `Welcome, ${currentUser.slice(0,1)}!`;
console.log(shortGreeting)