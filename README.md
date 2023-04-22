# Hogwarts.edu: React/Rails API

## About Hogwarts.edu
For my Phase 4 project for the Flatiron School's Software Engineering program, I have developed an SPA entitled 'Hogwarts.edu' using a React/Rails API. This application is suitable for students attending Hogwarst School of Witchcraft and Wizardry, and should be used to rate their past professors, read reviews written by other students, sign up for extracurriculars, and gleam basic information about their fellow students. In other words, I've built a magical alternative to Canvas or RateMyProfessors.com - an online management system to assist students in preparing for their school year.

Hogwarts.edu has built-in authentication functinoality so that existing students may log in to view information about the school and their account, as well as permit new users to sign up. From within the app, most features are made accessible from the Dashboard (which includes a personalized welcome message and image of the logged in user). From the Dashboard, students may view all reviews authored by themselves, submit a new review for any existing professor in the system, as well as have the ability to delete reviews. Students are only authorized to delete their own reviews. Additionally, users may use the Dashboard to view their Hogwarts Acceptance letters or sign up / leave any extracurriculars. Lastly, students may edit or delete their account informaiton via the last two options on the Dashboard.

From the 'Fellow Students' tab, students may view other students enrolled in Hogwarts at that time. They have the option to view students based upon which Hogwarts house they belong in, in case incoming first year students especially wish to match names to faces prior to their first day on campus. 

For students seeking further information on any prospective professors, they may navigate to the 'Your Teachers' tab. From here, they have the option to sort professors from highest to lowest ratings. Each teacher also has their own details page on which students may view all reviews written about that teacher in the past.

Finally, from the 'Extracurriculars' section, students may view an exhaustive list of all clubs available for signups at the school. Of course, the application shall validate that students do not join the same club more than once.

While these are all of the features I have built out for this Phase 4 project, I like to imagine how else I could expand upon what I have created. I would love to create a 'Course' model and controller in my backend that has many students and teachers, so that users could keep track of what classes they are taking in the upcoming academic term. Eventually, I'd also love to develop login functionality for teachers to utilize this app, and perhaps also leave grades for student viewing. I am curious about investigating the authorization side of the code that would go into allowed proessors these permissions, but not ordinary student users.

Thank you for reading to the end of this README - I hope you enjoy the app, and may the magic be with you!

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Sources

Special thank you to J.K. Rowling for creating a magical world that inspired me to build this application. As well as a thanks to the creators of Hogwarts Legacy which has placed these themes at the forefront of my mind while working through this section of the program!

Images and some magical descriptions borrowed from:

https://fantasytopics.com/harry-potter-characters-list/
https://pngtree.com/freebackground/mysterious-starry-sky-background_1337171.html
https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-frog-choir-hogwarts-2-frogs-4-students-b.jpg
https://images.ctfassets.net/usf1vwtuqyxm/57P7p67jezSsST1veN1fYl/ecb885e183ff1f5418fc7b7d41c167b6/HP_F3_Prisoner_of_Azkaban_Fat_Lady_Portrait.jpg
https://64.media.tumblr.com/61febe0acc041b844410dee8dc41869a/tumblr_pp6wuchLbM1tqfyozo1_640.jpg
https://harrypotter.fandom.com/wiki/Quidditch?so=search
