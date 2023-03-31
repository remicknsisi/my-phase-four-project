require 'faker'

puts "🌱 Seeding wizards..."

Student.create(year: 3, house: 'Gryffindor', name: 'Harry Potter', image:'https://fantasytopics.com/wp-content/uploads/2022/06/Harry-Potter.jpg.webp', username: "hpotter", password: "quidditchislife")
Student.create(year: 3, house: 'Gryffindor', name: 'Ron Weasley', image:'https://fantasytopics.com/wp-content/uploads/2022/06/Ron-Weasley.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Gryffindor', name: 'Hermione Granger', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Hermione-Granger.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Slytherin', name: 'Draco Malfoy', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Draco-Malfoy.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 4, house: 'Ravenclaw', name: 'Cho Chang', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Cho-Chang.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 5, house: 'Hufflepuff', name: 'Cedric Diggory', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Cedric-Diggory.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Gryffindor', name: 'Dean Thomas', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Dean-Thomas.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Slytherin', name: 'Vincent Crabbe', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Vincent-Crabbe.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Slytherin', name: 'Gregory Goyle', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Gregory-Goyle.jpg.webp')
Student.create(year: 3, house: 'Gryffindor', name: 'Neville Longbottom', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/neville-longbottom.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 2, house: 'Gryffindor', name: 'Ginny Weasley', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Ginny-Weasley.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Ravenclaw', name: 'Luna Lovegood', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Luna-Lovegood.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)
Student.create(year: 3, house: 'Slytherin', name: 'Pansy Parkinson', image: 'https://fantasytopics.com/wp-content/uploads/2022/06/Pansy-Parkinson.jpg.webp', username: Faker::Internet.username, password: Faker::Internet.password)

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

# update these numebrs to reflect how many students and teachers made
50.times do
    Review.create(
        teacher_id: rand(0..13),
        student_id: rand(0..13),
        rating: rand(0..5),
        comment: Faker::Movies::HarryPotter.quote,
    )
end

puts "✅ Done seeding!"