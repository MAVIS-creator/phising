const questions = [
    { category: "Entertainment", question: "Who won the Grammy for Album of the Year in 2023?", options: ["Adele", "Beyoncé", "Harry Styles", "Taylor Swift"], correct: 2 },
    { category: "Entertainment", question: "Who is known as the 'Queen of Pop'?", options: ["Madonna", "Beyoncé", "Lady Gaga", "Britney Spears"], correct: 0 },
    { category: "Entertainment", question: "Which artist had a hit with the song 'Blinding Lights'?", options: ["Drake", "The Weeknd", "Post Malone", "Kanye West"], correct: 1 },
    { category: "Entertainment", question: "What is the highest-grossing animated film of all time?", options: ["Frozen", "Frozen II", "The Lion King", "Toy Story 4"], correct: 2 },
    { category: "Entertainment", question: "Which music festival is held annually in Indio, California?", options: ["Coachella", "Burning Man", "Lollapalooza", "Glastonbury"], correct: 0 },
    { category: "Entertainment", question: "Which TV show features a chemistry teacher turned methamphetamine manufacturer?", options: ["Breaking Bad", "Better Call Saul", "The Sopranos", "The Wire"], correct: 0 },
    { category: "Entertainment", question: "Which singer is known as the 'King of Pop'?", options: ["Michael Jackson", "Elvis Presley", "Prince", "Frank Sinatra"], correct: 0 },
    { category: "Entertainment", question: "What year did MTV launch?", options: ["1975", "1980", "1981", "1985"], correct: 2 },
    { category: "Entertainment", question: "Which artist painted the Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"], correct: 0 },
    { category: "Entertainment", question: "What is the name of the fictional town where the TV show 'Stranger Things' is set?", options: ["Hawkins", "Springfield", "Sunnydale", "Twin Peaks"], correct: 0 },
    { category: "Entertainment", question: "Which pop group was known as 'The Fab Four'?", options: ["The Rolling Stones", "The Beatles", "The Beach Boys", "The Monkees"], correct: 1 },
    { category: "Entertainment", question: "Which 90s boy band had hits like 'I Want It That Way'?", options: ["NSYNC", "Backstreet Boys", "New Kids on the Block", "Boyz II Men"], correct: 1 },
    { category: "Entertainment", question: "Which TV show is based on a series of books by George R.R. Martin?", options: ["The Witcher", "Game of Thrones", "Shadow and Bone", "The Expanse"], correct: 1 },
    { category: "Entertainment", question: "Who is the host of 'The Tonight Show' as of 2024?", options: ["Jimmy Fallon", "Jay Leno", "Conan O'Brien", "Stephen Colbert"], correct: 0 },
    { category: "Entertainment", question: "What is the name of Beyoncé's 2016 visual album?", options: ["Lemonade", "Formation", "Renaissance", "4"], correct: 0 },
    { category: "Entertainment", question: "Who starred as the titular character in 'The Matrix'?", options: ["Keanu Reeves", "Brad Pitt", "Johnny Depp", "Tom Cruise"], correct: 0 },
    { category: "Entertainment", question: "Which video game series features the character 'Master Chief'?", options: ["Halo", "Gears of War", "Call of Duty", "Destiny"], correct: 0 },
    { category: "Entertainment", question: "Which music star was known for his signature moonwalk?", options: ["Michael Jackson", "James Brown", "Prince", "Elvis Presley"], correct: 0 },
    { category: "Entertainment", question: "In which year did The Beatles break up?", options: ["1968", "1969", "1970", "1971"], correct: 2 },
    { category: "Entertainment", question: "Which artist's real name is Stefani Joanne Angelina Germanotta?", options: ["Lady Gaga", "Madonna", "Beyoncé", "Katy Perry"], correct: 0 },
    { category: "Entertainment", question: "Which animated TV show features characters named Homer, Marge, Bart, Lisa, and Maggie?", options: ["The Simpsons", "Family Guy", "South Park", "Bob's Burgers"], correct: 0 },
    { category: "Entertainment", question: "Who won the first season of 'American Idol'?", options: ["Carrie Underwood", "Kelly Clarkson", "Fantasia Barrino", "Ruben Studdard"], correct: 1 },
    { category: "Entertainment", question: "Which book series was adapted into an HBO show titled 'True Blood'?", options: ["Twilight", "The Southern Vampire Mysteries", "The Vampire Diaries", "Buffy the Vampire Slayer"], correct: 1 },
    { category: "Entertainment", question: "What is the highest-grossing concert tour of all time?", options: ["U2's 360° Tour", "Ed Sheeran's ÷ Tour", "Rolling Stones' A Bigger Bang Tour", "Taylor Swift's Reputation Stadium Tour"], correct: 1 },
    { category: "Entertainment", question: "Which 80s song includes the lyrics 'Just a small-town girl, living in a lonely world'?", options: ["Don't Stop Believin'", "Livin' on a Prayer", "Sweet Child o' Mine", "Eye of the Tiger"], correct: 0 },
    { category: "Entertainment", question: "Who directed the 1994 film 'Pulp Fiction'?", options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Ridley Scott"], correct: 0 },
    { category: "Entertainment", question: "Which artist is known for the album '25'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], correct: 0 },
    { category: "Entertainment", question: "Who played the character of 'Jack Sparrow' in the 'Pirates of the Caribbean' movies?", options: ["Johnny Depp", "Orlando Bloom", "Keanu Reeves", "Tom Hanks"], correct: 0 },
    { category: "Entertainment", question: "Which artist released the album 'Thriller'?", options: ["Michael Jackson", "Prince", "David Bowie", "Madonna"], correct: 0 },
    { category: "Entertainment", question: "What year did the first 'Harry Potter' movie release?", options: ["1999", "2000", "2001", "2002"], correct: 2 },
    { category: "Entertainment", question: "Which artist had a hit with the song 'Uptown Funk'?", options: ["Bruno Mars", "Pharrell Williams", "Justin Timberlake", "The Weeknd"], correct: 0 },
    { category: "Entertainment", question: "Which actor starred in 'Top Gun' and 'Mission Impossible'?", options: ["Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Matt Damon"], correct: 0 },
    { category: "Entertainment", question: "Which TV show features the character of Sheldon Cooper?", options: ["The Big Bang Theory", "Friends", "How I Met Your Mother", "Parks and Recreation"], correct: 0 },
    { category: "Entertainment", question: "Which movie won the Best Animated Feature at the 2022 Oscars?", options: ["Encanto", "Soul", "Luca", "Raya and the Last Dragon"], correct: 0 },
    { category: "Entertainment", question: "Who is the lead singer of the band 'Queen'?", options: ["Freddie Mercury", "Robert Plant", "Mick Jagger", "Axl Rose"], correct: 0 },
    { category: "Entertainment", question: "Which actor plays the character of 'Deadpool'?", options: ["Ryan Reynolds", "Chris Hemsworth", "Hugh Jackman", "Robert Downey Jr."], correct: 0 },


    { category: "Movies", question: "Which movie won Best Picture at the 2023 Oscars?", options: ["The Fabelmans", "Top Gun: Maverick", "Everything Everywhere All at Once", "Elvis"], correct: 2 },
    { category: "Movies", question: "Which actor played the Joker in 'The Dark Knight'?", options: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"], correct: 0 },
    { category: "Movies", question: "In which movie does the character Forrest Gump appear?", options: ["Cast Away", "Saving Private Ryan", "Forrest Gump", "The Green Mile"], correct: 2 },
    { category: "Movies", question: "Which film features the song 'My Heart Will Go On'?", options: ["Gladiator", "Titanic", "Moulin Rouge!", "Avatar"], correct: 1 },
    { category: "Movies", question: "Who directed the movie 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"], correct: 1 },
    { category: "Movies", question: "Which movie is based on the novel 'The Lord of the Rings'?", options: ["The Hobbit", "Harry Potter", "The Lord of the Rings", "The Chronicles of Narnia"], correct: 2 },
    { category: "Movies", question: "Which movie features the quote 'Here's looking at you, kid'?", options: ["Casablanca", "Gone with the Wind", "Citizen Kane", "The Godfather"], correct: 0 },
    { category: "Movies", question: "Who directed the movie 'Jurassic Park'?", options: ["Steven Spielberg", "James Cameron", "George Lucas", "Ridley Scott"], correct: 0 },
    { category: "Movies", question: "Which movie is based on the sinking of the RMS Titanic?", options: ["A Night to Remember", "Titanic", "The Abyss", "Poseidon"], correct: 1 },
    { category: "Movies", question: "Which actor starred as Indiana Jones?", options: ["Harrison Ford", "Tom Hanks", "Mel Gibson", "Bruce Willis"], correct: 0 },
    { category: "Movies", question: "Which movie features a character named 'Neo'?", options: ["The Matrix", "Blade Runner", "Inception", "Equilibrium"], correct: 0 },
    { category: "Movies", question: "Who played the role of 'Forrest Gump'?", options: ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio", "Matt Damon"], correct: 0 },
    { category: "Movies", question: "Which movie features the quote 'I'll be back'?", options: ["Terminator", "Predator", "RoboCop", "Total Recall"], correct: 0 },
    { category: "Movies", question: "Which movie won the first-ever Oscar for Best Picture?", options: ["Wings", "Sunrise", "All Quiet on the Western Front", "The Jazz Singer"], correct: 0 },
    { category: "Movies", question: "Which movie is set in the fictional land of Pandora?", options: ["Avatar", "Star Wars", "Star Trek", "The Fifth Element"], correct: 0 },
    { category: "Movies", question: "Which movie franchise is based on J.K. Rowling's books?", options: ["Harry Potter", "Twilight", "The Hunger Games", "Percy Jackson"], correct: 0 },
    { category: "Movies", question: "Which movie features a character named 'Tony Stark'?", options: ["Iron Man", "Batman", "Superman", "Spider-Man"], correct: 0 },
    { category: "Movies", question: "Which movie won the Best Picture Oscar in 1994?", options: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "The Lion King"], correct: 0 },
    { category: "Movies", question: "Which actor played 'The Joker' in 'The Dark Knight'?", options: ["Heath Ledger", "Jack Nicholson", "Jared Leto", "Mark Hamill"], correct: 0 },
    { category: "Movies", question: "Which movie features the quote 'Houston, we have a problem'?", options: ["Apollo 13", "Gravity", "The Martian", "Interstellar"], correct: 0 },
    { category: "Movies", question: "Which movie won the Best Picture Oscar in 2020?", options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], correct: 0 },
    { category: "Movies", question: "Which actor played 'Captain Jack Sparrow'?", options: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Tom Cruise"], correct: 0 },
    { category: "Movies", question: "Which movie is based on the life of the mathematician John Nash?", options: ["A Beautiful Mind", "The Imitation Game", "Good Will Hunting", "The Theory of Everything"], correct: 0 },
    { category: "Movies", question: "Which actor starred in the movie 'Gladiator'?", options: ["Russell Crowe", "Joaquin Phoenix", "Brad Pitt", "Mel Gibson"], correct: 0 },
    { category: "Movies", question: "Which movie features the song 'Let It Go'?", options: ["Frozen", "Moana", "Tangled", "Brave"], correct: 0 },
    { category: "Movies", question: "Which movie features a character named 'Darth Vader'?", options: ["Star Wars", "Star Trek", "Blade Runner", "The Matrix"], correct: 0 },
    { category: "Movies", question: "Which movie is set in the fictional town of Hill Valley?", options: ["Back to the Future", "The Goonies", "E.T.", "Ghostbusters"], correct: 0 },
    { category: "Movies", question: "Which movie features a character named 'Marty McFly'?", options: ["Back to the Future", "Ferris Bueller's Day Off", "The Breakfast Club", "The Goonies"], correct: 0 },
    { category: "Movies", question: "Which movie features the quote 'I see dead people'?", options: ["The Sixth Sense", "The Exorcist", "The Shining", "Psycho"], correct: 0 },
    { category: "Movies", question: "Which movie features the quote 'You can't handle the truth'?", options: ["A Few Good Men", "The Godfather", "Scarface", "Goodfellas"], correct: 0 },
    { category: "Movies", question: "Which actor played the character of 'James Bond' in 'Skyfall'?", options: ["Daniel Craig", "Sean Connery", "Pierce Brosnan", "Roger Moore"], correct: 0 },
    { category: "Movies", question: "Which movie is based on the novel 'The Shining'?", options: ["The Shining", "Carrie", "It", "Misery"], correct: 0 },
    { category: "Movies", question: "Which movie features the character of 'Vito Corleone'?", options: ["The Godfather", "Goodfellas", "Scarface", "Casino"], correct: 0 },
    { category: "Movies", question: "Which movie won the Best Picture Oscar in 1998?", options: ["Titanic", "Good Will Hunting", "L.A. Confidential", "Shakespeare in Love"], correct: 0 },
    { category: "Movies", question: "Who directed the movie 'Jaws'?", options: ["Steven Spielberg", "Alfred Hitchcock", "Francis Ford Coppola", "Martin Scorsese"], correct: 0 },
    { category: "Movies", question: "Which movie features a character named 'Jack Dawson'?", options: ["Titanic", "The Great Gatsby", "Inception", "The Revenant"], correct: 0 },
    { category: "Movies", question: "Which film features the quote 'To infinity and beyond!'?", options: ["Toy Story", "WALL-E", "Finding Nemo", "Monsters, Inc."], correct: 0 },
    { category: "Movies", question: "Which movie is about a young boy named 'E.T.'?", options: ["E.T. the Extra-Terrestrial", "Close Encounters of the Third Kind", "The Goonies", "Back to the Future"], correct: 0 },







    { category: "Sports", question: "Who won the FIFA World Cup 2022?", options: ["France", "Argentina", "Brazil", "Germany"], correct: 1 },
    { category: "Sports", question: "Who holds the record for the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"], correct: 1 },
    { category: "Sports", question: "Which country has won the most FIFA World Cups?", options: ["Brazil", "Germany", "Italy", "Argentina"], correct: 0 },
    { category: "Sports", question: "Which sport is known as 'the beautiful game'?", options: ["Basketball", "Soccer", "Tennis", "Cricket"], correct: 1 },
    { category: "Sports", question: "Who is the all-time leading scorer in NBA history?", options: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Kobe Bryant"], correct: 2 },
    { category: "Sports", question: "In which sport would you perform a slam dunk?", options: ["Tennis", "Soccer", "Basketball", "Volleyball"], correct: 3 },
    { category: "Sports", question: "Which country won the 2016 Summer Olympics?", options: ["USA", "China", "Great Britain", "Brazil"], correct: 0 },
    { category: "Sports", question: "Which team won the NBA Championship in 2023?", options: ["Denver Nuggets", "Golden State Warriors", "Miami Heat", "Los Angeles Lakers"], correct: 0 },
    { category: "Sports", question: "Who holds the record for the most goals scored in a single World Cup tournament?", options: ["Just Fontaine", "Pele", "Miroslav Klose", "Cristiano Ronaldo"], correct: 0 },
    { category: "Sports", question: "Which sport is known as the 'King of Sports'?", options: ["Soccer", "Basketball", "Cricket", "Tennis"], correct: 0 },
    { category: "Sports", question: "Who won the 2020 Formula 1 World Championship?", options: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Charles Leclerc"], correct: 0 },
    { category: "Sports", question: "Which sport features the Super Bowl?", options: ["American Football", "Soccer", "Baseball", "Hockey"], correct: 0 },
    { category: "Sports", question: "Which tennis Grand Slam is played on grass?", options: ["Wimbledon", "US Open", "Australian Open", "French Open"], correct: 0 },
    { category: "Sports", question: "Which country won the 2018 FIFA World Cup?", options: ["France", "Croatia", "Germany", "Argentina"], correct: 0 },
    { category: "Sports", question: "Who is the all-time leader in home runs in Major League Baseball?", options: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Ken Griffey Jr."], correct: 0 },
    { category: "Sports", question: "Which boxer was known as 'The Greatest'?", options: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Sugar Ray Leonard"], correct: 0 },
    { category: "Sports", question: "Which team won the 2019 UEFA Champions League?", options: ["Liverpool", "Tottenham Hotspur", "Barcelona", "Real Madrid"], correct: 0 },
    { category: "Sports", question: "Which athlete is known for the 'Black Power' salute at the 1968 Olympics?", options: ["Tommy Smith", "John Carlos", "Jesse Owens", "Carl Lewis"], correct: 1 },
    { category: "Sports", question: "Which golfer is known for winning the most major championships?", options: ["Jack Nicklaus", "Tiger Woods", "Arnold Palmer", "Phil Mickelson"], correct: 0 },
    { category: "Sports", question: "Which country has the most Olympic gold medals in Winter Games history?", options: ["Norway", "USA", "Canada", "Germany"], correct: 0 },
    { category: "Sports", question: "Which team won the 2022 World Series?", options: ["Houston Astros", "Atlanta Braves", "Los Angeles Dodgers", "Tampa Bay Rays"], correct: 0 },
    { category: "Sports", question: "Which football club has won the most UEFA Champions League titles?", options: ["Real Madrid", "AC Milan", "Liverpool", "Barcelona"], correct: 0 },
    { category: "Sports", question: "Which swimmer is known for the 'Fly' in the butterfly stroke?", options: ["Michael Phelps", "Ian Thorpe", "Ryan Lochte", "Caeleb Dressel"], correct: 0 },
    { category: "Sports", question: "Which event is the pinnacle of professional boxing?", options: ["The Heavyweight Championship", "The World Cup", "The Grand Slam", "The Super Bowl"], correct: 0 },
    { category: "Sports", question: "Which country is known for producing the most Olympic gymnasts?", options: ["USA", "China", "Russia", "Romania"], correct: 0 },
    { category: "Sports", question: "Which NFL team has the most Super Bowl wins?", options: ["New England Patriots", "Pittsburgh Steelers", "San Francisco 49ers", "Dallas Cowboys"], correct: 1 },
    { category: "Sports", question: "Which tennis player has the most Grand Slam singles titles in history?", options: ["Margaret Court", "Serena Williams", "Steffi Graf", "Martina Navratilova"], correct: 0 },
    { category: "Sports", question: "Which sport is known for the Stanley Cup?", options: ["Ice Hockey", "Soccer", "Basketball", "Baseball"], correct: 0 },
    { category: "Sports", question: "Who is considered the greatest soccer player of all time?", options: ["Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"], correct: 0 },
    { category: "Sports", question: "Which country won the gold medal in men's basketball at the 2020 Tokyo Olympics?", options: ["USA", "France", "Australia", "Spain"], correct: 0 },
    { category: "Sports", question: "Which athlete won the 2021 Nobel Peace Prize for their advocacy in sports?", options: ["Naomi Osaka", "Lewis Hamilton", "Serena Williams", "Roger Federer"], correct: 0 },
    { category: "Sports", question: "Which country has the most wins in the Rugby World Cup?", options: ["New Zealand", "South Africa", "Australia", "England"], correct: 0 },
    { category: "Sports", question: "Which NBA team drafted Kobe Bryant?", options: ["Charlotte Hornets", "Los Angeles Lakers", "Philadelphia 76ers", "Miami Heat"], correct: 0 },
    { category: "Sports", question: "Which sport is played in the annual Wimbledon Championship?", options: ["Tennis", "Cricket", "Soccer", "Badminton"], correct: 0 },
    { category: "Sports", question: "Who won the gold medal in men's soccer at the 2016 Rio Olympics?", options: ["Brazil", "Germany", "Argentina", "Mexico"], correct: 0 },
    { category: "Sports", question: "Which player holds the record for the most assists in NBA history?", options: ["John Stockton", "Magic Johnson", "Steve Nash", "Jason Kidd"], correct: 0 },
    { category: "Sports", question: "Which country is known for its strong presence in the Winter Olympics and has produced many successful skiers?", options: ["Norway", "Canada", "Sweden", "USA"], correct: 0 },
    { category: "Sports", question: "Which athlete won the 2021 Tokyo Marathon?", options: ["Eliud Kipchoge", "Brigid Kosgei", "Shura Kitata", "Tadese Tola"], correct: 0 },

    

    { category: "Technology", question: "What is the name of Apple's mixed reality headset?", options: ["Vision Pro", "Reality One", "HoloLens", "MetaQuest"], correct: 0 },
    { category: "Technology", question: "Which company developed the Android operating system?", options: ["Apple", "Microsoft", "Google", "Samsung"], correct: 2 },
    { category: "Technology", question: "What does 'HTTP' stand for?", options: ["Hyper Text Transfer Protocol", "Hyperlink Transfer Protocol", "Hyper Tool Transfer Protocol", "Hyperlink Text Protocol"], correct: 0 },
    { category: "Technology", question: "Who is known as the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Larry Page", "Mark Zuckerberg"], correct: 1 },
    { category: "Technology", question: "What was the first video game console ever made?", options: ["Atari 2600", "Nintendo Entertainment System", "Magnavox Odyssey", "Sega Genesis"], correct: 2 },
    { category: "Technology", question: "Which programming language is known as the language of the web?", options: ["Python", "Java", "C++", "JavaScript"], correct: 3 },
    { category: "Technology", question: "Which company developed the iPhone?", options: ["Apple", "Microsoft", "Google", "Samsung"], correct: 0 },
    { category: "Technology", question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"], correct: 0 },
    { category: "Technology", question: "Which technology company is known for its search engine and Android OS?", options: ["Google", "Apple", "Microsoft", "Amazon"], correct: 0 },
    { category: "Technology", question: "What programming language is known for its use in web development?", options: ["JavaScript", "Python", "Java", "C++"], correct: 0 },
    { category: "Technology", question: "Which company is known for its popular video conferencing app Zoom?", options: ["Zoom Video Communications", "Google", "Microsoft", "Cisco"], correct: 0 },
    { category: "Technology", question: "What does 'HTML' stand for?", options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "Hypertext Transfer Markup Language", "Hyperlink Transfer Markup Language"], correct: 0 },
    { category: "Technology", question: "Which company created the Windows operating system?", options: ["Microsoft", "Apple", "IBM", "Dell"], correct: 0 },
    { category: "Technology", question: "What does 'AI' stand for in the context of technology?", options: ["Artificial Intelligence", "Automated Integration", "Artificial Integration", "Advanced Intelligence"], correct: 0 },
    { category: "Technology", question: "Which company is known for its personal assistant AI named Siri?", options: ["Apple", "Google", "Amazon", "Microsoft"], correct: 0 },
    { category: "Technology", question: "What is the primary function of a 'router' in a network?", options: ["Directing data packets", "Storing data", "Processing data", "Encrypting data"], correct: 0 },
    { category: "Technology", question: "What does 'GPU' stand for?", options: ["Graphics Processing Unit", "General Processing Unit", "Graphics Programming Unit", "General Programming Unit"], correct: 0 },
    { category: "Technology", question: "Which technology company is known for the development of the Linux operating system?", options: ["Red Hat", "Apple", "Microsoft", "Google"], correct: 0 },
    { category: "Technology", question: "Which technology is used for creating virtual reality experiences?", options: ["VR", "AR", "AI", "IoT"], correct: 0 },
    { category: "Technology", question: "What does 'USB' stand for?", options: ["Universal Serial Bus", "Universal System Bus", "Uniform Serial Bus", "Universal Service Bus"], correct: 0 },
    { category: "Technology", question: "What is the main function of a 'firewall' in computing?", options: ["Protecting a network from unauthorized access", "Storing data", "Processing data", "Connecting devices"], correct: 0 },
    { category: "Technology", question: "Which company developed the Android operating system?", options: ["Google", "Apple", "Microsoft", "Samsung"], correct: 0 },
    { category: "Technology", question: "What does 'IoT' stand for?", options: ["Internet of Things", "Internal Operations Technology", "Internet of Text", "Internal Online Technology"], correct: 0 },
    { category: "Technology", question: "Which programming language is commonly used for web development and known for its use in client-side scripting?", options: ["JavaScript", "Python", "Ruby", "PHP"], correct: 0 },
    { category: "Technology", question: "What is the name of Apple's line of laptops?", options: ["MacBook", "Surface", "ThinkPad", "Chromebook"], correct: 0 },
    { category: "Technology", question: "Which company is known for creating the PlayStation gaming console?", options: ["Sony", "Microsoft", "Nintendo", "Sega"], correct: 0 },
    { category: "Technology", question: "What does 'SSD' stand for in computing?", options: ["Solid State Drive", "System Storage Drive", "Sequential Storage Device", "Solid State Device"], correct: 0 },
    { category: "Technology", question: "Which technology company is known for its cloud computing services under the name AWS?", options: ["Amazon", "Microsoft", "Google", "IBM"], correct: 0 },
    { category: "Technology", question: "What does 'VPN' stand for?", options: ["Virtual Private Network", "Virtual Public Network", "Virtual Personal Network", "Virtual Protected Network"], correct: 0 },
    { category: "Technology", question: "Which technology company is known for its search engine and online advertising?", options: ["Google", "Apple", "Microsoft", "IBM"], correct: 0 },
    { category: "Technology", question: "What is the purpose of 'encryption' in data security?", options: ["To protect data from unauthorized access", "To speed up data processing", "To increase data storage capacity", "To enhance data visualization"], correct: 0 },
    { category: "Technology", question: "Which company is known for its software products like Photoshop and Illustrator?", options: ["Adobe", "Corel", "Autodesk", "Microsoft"], correct: 0 },
    { category: "Technology", question: "What does 'HTTP' stand for?", options: ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hypertext Technical Protocol", "Hyperlink Transfer Procedure"], correct: 0 },
    { category: "Technology", question: "What is the name of the programming language developed by Sun Microsystems and widely used in enterprise applications?", options: ["Java", "C#", "Python", "Ruby"], correct: 0 },
    { category: "Technology", question: "Which technology is commonly used for real-time communication and online meetings?", options: ["Video Conferencing", "Email", "File Transfer", "Text Messaging"], correct: 0 },
    { category: "Technology", question: "Which company is known for its mobile operating system called iOS?", options: ["Apple", "Samsung", "Google", "Microsoft"], correct: 0 },
    { category: "Technology", question: "What is the primary function of 'cloud storage'?", options: ["Storing data on remote servers", "Processing data locally", "Encrypting data", "Providing internet connectivity"], correct: 0 },
    { category: "Technology", question: "Which company developed the Windows operating system?", options: ["Microsoft", "Apple", "IBM", "Dell"], correct: 0 },
    { category: "Technology", question: "What does 'AI' stand for in technology?", options: ["Artificial Intelligence", "Automated Interface", "Artificial Integration", "Automated Intelligence"], correct: 0 },
    { category: "Technology", question: "Which technology company is known for its online retail platform and cloud services?", options: ["Amazon", "eBay", "Alibaba", "Walmart"], correct: 0 },
    { category: "Technology", question: "What is the purpose of 'machine learning' in AI?", options: ["To enable computers to learn from data", "To enhance internet connectivity", "To improve graphic design", "To create virtual reality"], correct: 0 },
    { category: "Technology", question: "Which technology is used to track the physical location of a device?", options: ["GPS", "Wi-Fi", "Bluetooth", "NFC"], correct: 0 },

];

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getDailyQuestions() {
    const seed = new Date().toISOString().slice(0, 10); 
    Math.seedrandom(seed);

    if (questions.length < 20) {
        console.error("Not enough questions available. Please add more questions.");
        return [];
    }

    const shuffledQuestions = shuffle([...questions]);
    return shuffledQuestions.slice(0, 20);
}

function generateQuestions() {
    const form = document.getElementById('survey-form');
    const dailyQuestions = getDailyQuestions();

    form.innerHTML = '';

    dailyQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Create HTML structure for each question and options
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${i}" ${q.answered ? 'disabled' : ''} />
                    ${option}
                </label><br>
            `).join('')}
            <div id="feedback-${index}" class="feedback"></div>
        `;

        form.appendChild(questionDiv);
    });

    // Add event listeners after rendering options
    form.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.addEventListener('click', (event) => {
            const questionIndex = parseInt(event.target.name.replace('q', ''));
            const selectedOption = parseInt(event.target.value);
            handleAnswer(questionIndex, selectedOption);
        });
    });
}

function handleAnswer(questionIndex, selectedOption) {
    const question = questions[questionIndex];
    const feedback = document.getElementById(`feedback-${questionIndex}`);
    
    if (question.answered) return;

    // Mark question as answered and disable all options for the question
    question.answered = true;
    const options = document.querySelectorAll(`input[name="q${questionIndex}"]`);
    options.forEach(option => option.disabled = true);

    // Provide feedback for correct or incorrect answers
    if (selectedOption === question.correctAnswer) {
        feedback.innerHTML = '<p style="color: green;">Correct!</p>';
        balance += 0.05; // Update balance or perform other actions as required
    } else {
        feedback.innerHTML = '<p style="color: red;">Incorrect!</p>';
    }

    // Update balance display if applicable
    document.getElementById('balance-popup').querySelector('p').innerText = `$${balance.toFixed(2)}`;
}

function togglePopup(popupId) {
    const popup = document.getElementById(`${popupId}-popup`);
    popup.classList.toggle('show');
}

function logout() {
    window.location.href = 'countdown.html';
}

document.addEventListener('DOMContentLoaded', () => {
    generateQuestions();
});