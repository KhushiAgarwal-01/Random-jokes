

let jokes = ["How does the ocean say hi? It waves!",
"Name the kind of tree you can hold in your hand? A palm tree!",
"Where did the music teacher leave her keys? In the piano!",
"Why do birds fly south in the winter? Its faster than walking!",
"Which superhero hits home runs? Batman!",
"Why did the bird get in trouble at school? For tweeting on a test!",
"Why is a football stadium always cold? It has lots of fans!",
"Why did the chicken cross the playground? To get to the other slide?",
"What kind of math do birds love? Owl-gebra!",
"How does a barber drive to work? He takes shortcuts!",
"What kind of shoes do frogs love? Open-toa!",
"Why do ducks always pay with cash? Because they always have bills!",
"Where do most horses live? In neigh-borhoods!",
"Which planet loves to sing? Nep-tune!",
"Why are basketball courts always wet? Because the players dribble!",
"What kind of keys are sweet? Cookies!",
"Knock, knock!Whos there?Woo.Woo-ho No need to get so excited; its just a joke",
"What do you call cheese that belongs to someone else? Nacho cheese!",
"Why did the peanut get into a rocket? He wanted to be an astro-nut!",
"What fruit do twins love? Pears!",
"How do bees brush their hair? With honeycombs!",
"Why wont peanut butter tell you a secret? Hes afraid youll spread it!",
"Who eats snails? People who dont like fast food!",
"Why did the banana visit the doctor? He wasnt peeling well!",
"Why did the computer get sick? It caught a virus!",
"Why did the teacher have birdseed? For her parrot-teacher conference!",
"Why are elephants to wrinkly? Have you ever tried to iron one?",
"Why was the broom late to school? It over-swept!",
"What is the strongest animal in the sea? Mussels!",
"What kind of chicken is the funniest? A comedi-hen!",
"What do you call a seagull that lives by the bay? A bagel!",
"What color do cats prefer? Purr-pl",
"What does a triceratops sit on? Its tricera-bottom!",
"What is a sleeping dinosaur? A dino-snore!",
"What kind of pizza do dogs eat? Pup-eroni pizza!",
"How do you help a baby astronaut fall asleep? You rock-et!",
"If cars run on gas, what do cats run on? Their paws!"]


let SASTE_JOKES = () =>{
    let b = Math.floor(Math.random() * jokes.length);
    let random = jokes[b];
    let a = document.querySelector(".container");
    a.innerHTML = random;
  }
  document.getElementById("btn").addEventListener("click",SASTE_JOKES);