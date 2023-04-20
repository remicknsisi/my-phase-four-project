require 'faker'

puts "🌱 Seeding wizards..."

Student.create(year: 3, house: 'Gryffindor', name: 'Harry Potter', image:'https://fantasytopics.com/wp-content/uploads/2022/06/Harry-Potter.jpg.webp', username: "hpotter", password: "quidditchislife", password_confirmation: "quidditchislife")
Student.create(year: 3, house: 'Gryffindor', name: 'Ron Weasley', image:'https://fantasytopics.com/wp-content/uploads/2022/06/Ron-Weasley.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Gryffindor', name: 'Hermione Granger', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Hermione-Granger.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Slytherin', name: 'Draco Malfoy', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Draco-Malfoy.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 4, house: 'Ravenclaw', name: 'Cho Chang', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Cho-Chang.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 5, house: 'Hufflepuff', name: 'Cedric Diggory', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Cedric-Diggory.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Gryffindor', name: 'Dean Thomas', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Dean-Thomas.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Slytherin', name: 'Vincent Crabbe', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Vincent-Crabbe.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Slytherin', name: 'Gregory Goyle', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Gregory-Goyle.jpg.webp', password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Gryffindor', name: 'Neville Longbottom', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/neville-longbottom.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 2, house: 'Gryffindor', name: 'Ginny Weasley', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Ginny-Weasley.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Ravenclaw', name: 'Luna Lovegood', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Luna-Lovegood.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")
Student.create(year: 3, house: 'Slytherin', name: 'Pansy Parkinson', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Pansy-Parkinson.jpg.webp', username: Faker::Internet.username, password: 'password', password_confirmation: "password")

Teacher.create(classes: "Potions, Defense Against the Dark Arts", house: "Slytherin", name: "Severus Snape", specialty: 'Potions', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Severus-Snape.jpg.webp')
Teacher.create(classes: "Transfiguration", house: "Gryffindor", name: "Minerva McGonagall", specialty: 'Transfiguration', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Minerva-McGonagall.jpg.webp')
Teacher.create(classes: "N/A", house: "Gryffindor", name: "Albus Dumbledore", specialty: 'Transfiguration, Defense Against the Dark Arts', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Albus-Dumbledore.jpg.webp')
Teacher.create(classes: "Herbology", house: "Hufflepuff", name: "Pomona Sprout", specialty: 'Herbology', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Pomona-Sprout.jpg.webp')
Teacher.create(classes: "Care of Magical Creatures", house: "Gryffindor", name: "Rubeus Hagrid", specialty: 'Care of Magical Creatures', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Rubeus-Hagrid.jpg.webp')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Ravenclaw", name: "Gilderoy Lockhart", specialty: 'Memory Charms', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Gilderoy-Lockhart.jpg.webp')
Teacher.create(classes: "Charms", house: "Ravenclaw", name: "Filius Flitwick", specialty: 'Charms', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Filius-Flitwick.jpg.webp')
Teacher.create(classes: "Divination", house: "Ravenclaw", name: "Sybill Trelawney", specialty: 'Seer, Divination', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Sybill-Trelawney.jpg.webp')
Teacher.create(classes: "Potions", house: "Slytherin", name: "Horace Slughorn", specialty: 'Potions, Transfiguration', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Horace-Slughorn.jpg.webp')
Teacher.create(classes: "Defense Against the Dark Arts, Muggle Studies", house: "Ravenclaw", name: "Quirinus Quirrell", specialty: 'Defense Against the Dark Arts, Muggle Studies', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Quirinus-Quirrell-.jpg.webp')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Gryffindor", name: "Remus Lupin", specialty: 'Defense Against the Dark Arts', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Remus-Lupin.jpg.webp')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Hufflepuff", name: "Alastor Moody", specialty: 'Defense Against the Dark Arts', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Alastor-Mad-Eye-Moody.webp')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Slytherin", name: "Dolores Umbridge", specialty: 'Defense Against the Dark Arts, Upholding Order', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Dolores-Umbridge.jpg.webp')

Review.create(teacher_id: 1, student_id: 1, rating: 0, comment: "Let's old biases get to him and takes his anger out on students.")
Review.create(teacher_id: 2, student_id: 3, rating: 5, comment: "Amazing professor, highly recommend!")

Extracurricular.create(name: "Quidditch", image: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/02/Quidditch-25587ab.jpg', about: "Quidditch (formerly known as Kwidditch and Cuaditch) was a wizarding sport played on flying broomsticks. It was the most popular and well-known game among wizards and witches, and, according to Rubeus Hagrid, the wizard equivalent to Muggles' passion for football (Soccer). The game was played by two teams with seven members each. The object of the game was to score more points than the opposing team.", number_of_members: rand(0..13))
Extracurricular.create(name: "Frog Choir and Hogwarts Orchestra", image: 'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-frog-choir-hogwarts-2-frogs-4-students-b.jpg', about: "The Frog Choir was founded at some point in around the 1930s. It most likely required constant attendance, as Frog Choir members sometimes performed during feasts. Charms Master Filius Flitwick was the conductor in at least 1986-1997. This was a separate class from Music. It also had a limited number of spots, but members could leave in the middle of the school year, allowing new members to join. Despite the name, the Frog Choir used toads, not frogs.", number_of_members: rand(0..13))
Extracurricular.create(name: "Art", image: 'https://images.ctfassets.net/usf1vwtuqyxm/57P7p67jezSsST1veN1fYl/ecb885e183ff1f5418fc7b7d41c167b6/HP_F3_Prisoner_of_Azkaban_Fat_Lady_Portrait.jpg', about: "In this subject, students learn about magical art, including how portraits worked. It could only be taken by students in Year 3 or above. As she was extremely fascinated by magical portraits, Badeea Ali took classes in this subject. Barnaby Lee started taking art classes in his sixth year when he started his goal to become a Renaissance Wizard.", number_of_members: rand(0..13))
Extracurricular.create(name: "Muggle Music", image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Europe_the_band_in_Stockholm_2016.jpg', about: "This subject focused on Muggle music, and may have been taught by either the Music or the Muggle Studies teacher. During this class, students would occasionally listen to recent Muggle hits, including The Final Countdown in the 1986-1987 school year and Never Gonna Give You Up in the 1987-1988 school year. This was one of the classes that could be entered and left at any point.", number_of_members: rand(0..13))
Extracurricular.create(name: "Xylomancy", image: 'https://64.media.tumblr.com/61febe0acc041b844410dee8dc41869a/tumblr_pp6wuchLbM1tqfyozo1_640.jpg', about: "This was one of the rarer extra-curricular subjects. It was held at least once, during the 1991-1992 school year, in the North Tower. It was a form of Divination involving twigs. It may have been taught by the Divination teacher, but it was a separate subject.", number_of_members: rand(0..13))
Extracurricular.create(name: "Apparition", image: 'https://www.hp-lexicon.org/wp-content/uploads/2014/06/hbp.c18-birthday-surprises.jpg', about: "Apparition was an optional twelve-week class offered to sixth-years and seventh-years at Hogwarts. It was the most popular out of all extra-curricular classes, as Apparition was such a useful skill. Unlike other classes, this course cost money (12 Galleons), as it was offered by the Ministry of Magic instead of Hogwarts.", number_of_members: rand(0..13))

50.times do
    Review.create(
        teacher_id: rand(1..13),
        student_id: rand(1..13),
        rating: rand(1..5),
        comment: Faker::Movies::HarryPotter.quote,
    )
end

10.times do
    Signup.create(
        extracurricular_id: rand(1..6),
        student_id: rand(1..13)
    )
end

Signup.create(extracurricular_id: 1, student_id: 1)

puts "✅ Done seeding!"