require 'faker'

puts "🌱 Seeding wizards..."

Student.create(year: 3, house: 'Gryffindor', name: 'Harry Potter', image:'https://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg/revision/latest?cb=20140603201724')
Student.create(year: 3, house: 'Gryffindor', name: 'Ron Weasley', image:'https://static.wikia.nocookie.net/harrypotter/images/8/85/Ron_Weasley.jpg/revision/latest?cb=20101104210200')
Student.create(year: 3, house: 'Gryffindor', name: 'Hermione Granger', image: 'https://static.wikia.nocookie.net/harrypotter/images/3/34/Hermione_Granger.jpg/revision/latest/scale-to-width-down/700?cb=20210522145306')
Student.create(year: 3, house: 'Slytherin', name: 'Draco Malfoy', image: 'https://static.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/revision/latest/scale-to-width-down/700?cb=20180116013508')
Student.create(year: 4, house: 'Ravenclaw', name: 'Cho Chang', image: 'https://static.wikia.nocookie.net/harrypotter/images/1/1e/Cho_Chang.jpg/revision/latest?cb=20180322164130')
Student.create(year: 5, house: 'Hufflepuff', name: 'Cedric Diggory', image: 'https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest/scale-to-width-down/700?cb=20161123045136')
Student.create(year: 3, house: 'Gryffindor', name: 'Dean Thomas', image: 'https://static.wikia.nocookie.net/harrypotter/images/9/93/Dean_Thomas_DHF2.jpg/revision/latest/scale-to-width-down/700?cb=20220628110512')
Student.create(year: 3, house: 'Slytherin', name: 'Vincent Crabbe', image: 'https://static.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/700?cb=20091224183746')
Student.create(year: 3, house: 'Slytherin', name: 'Gregory Goyle', image: 'https://static.wikia.nocookie.net/harrypotter/images/e/e7/Gregory_Goyle_DH2.jpg/revision/latest?cb=20180306163743')
Student.create(year: 3, house: 'Gryffindor', name: 'Neville Longbottom', image: 'https://static.wikia.nocookie.net/harrypotter/images/0/04/Harry-potter-and-the-deathly-hallowspart-2.jpg/revision/latest?cb=20161120035218')
Student.create(year: 2, house: 'Gryffindor', name: 'Ginny Weasley', image: 'https://static.wikia.nocookie.net/harrypotter/images/8/8b/Ginny_Weasley_hbp_promo.jpg/revision/latest?cb=20090317022440')
Student.create(year: 5, house: 'Gryffindor', name: 'Fred Weasley', image: 'https://static.wikia.nocookie.net/harrypotter/images/9/90/Fred_HS_TDH_promo.jpg/revision/latest/scale-to-width-down/700?cb=20161119235258')
Student.create(year: 5, house: 'Gryffindor', name: 'George Weasley', image: 'https://static.wikia.nocookie.net/harrypotter/images/2/2a/DH_promo_front_closeup_George_Weasley.jpg/revision/latest/scale-to-width-down/700?cb=20161119235305')

Teacher.create(classes: "Potions, Defense Against the Dark Arts", house: "Slytherin", name: "Severus Snape", specialty: 'Potions', image: 'https://static.wikia.nocookie.net/harrypotter/images/a/a3/Severus_Snape.jpg/revision/latest?cb=20150307193047')
Teacher.create(classes: "Transfiguration", house: "Gryffindor", name: "Minerva McGonagall", specialty: 'Transfiguration', image: 'https://static.wikia.nocookie.net/harrypotter/images/6/65/ProfessorMcGonagall-HBP.jpg/revision/latest/scale-to-width-down/700?cb=20100612114856')
Teacher.create(classes: "N/A", house: "Gryffindor", name: "Albus Dumbledore", specialty: 'Transfiguration, Defense Against the Dark Arts', image: 'https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/scale-to-width-down/700?cb=20150822232849')
Teacher.create(classes: "Herbology", house: "Hufflepuff", name: "Pomona Sprout", specialty: 'Herbology', image: 'https://static.wikia.nocookie.net/harrypotter/images/6/6e/Pomona_Sprout_DHF2.jpg/revision/latest?cb=20170730031333')
Teacher.create(classes: "Care of Magical Creatures", house: "Gryffindor", name: "Rubeus Hagrid", specialty: 'Care of Magical Creatures', image: 'https://static.wikia.nocookie.net/harrypotter/images/f/fe/Rubeus_Hagrid.png/revision/latest/scale-to-width-down/699?cb=20221014184333')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Ravenclaw", name: "Gilderoy Lockhart", specialty: 'Memory Charms', image: 'https://static.wikia.nocookie.net/harrypotter/images/7/7b/Gilderoy_Lockhart_promotional_image_COSF.jpg/revision/latest/scale-to-width-down/700?cb=20221104114009')
Teacher.create(classes: "Charms", house: "Ravenclaw", name: "Filius Flitwick", specialty: 'Charms', image: 'https://static.wikia.nocookie.net/harrypotter/images/4/4b/Flitwickarmourbattle.png/revision/latest?cb=20110628141204')
Teacher.create(classes: "Divination", house: "Ravenclaw", name: "Sybill Trelawney", specialty: 'Seer, Divination', image: 'https://static.wikia.nocookie.net/harrypotter/images/5/5d/Sybill_Trelawney.JPG/revision/latest/scale-to-width-down/649?cb=20110108192301')
Teacher.create(classes: "Potions", house: "Slytherin", name: "Horace Slughorn", specialty: 'Potions, Transfiguration', image: 'https://static.wikia.nocookie.net/harrypotter/images/a/a1/Horace_Slughorn_%28HBP_promo%29_1-1.jpg/revision/latest?cb=20100706114608')
Teacher.create(classes: "Defense Against the Dark Arts, Muggle Studies", house: "Ravenclaw", name: "Quirinus Quirrell", specialty: 'Defense Against the Dark Arts, Muggle Studies', image: 'https://static.wikia.nocookie.net/harrypotter/images/d/d2/Quirinus_Quirrell_PS_promo.jpg/revision/latest?cb=20110806132643')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Gryffindor", name: "Remus Lupin", specialty: 'Defense Against the Dark Arts', image: 'https://static.wikia.nocookie.net/harrypotter/images/e/e2/Remus_Lupin_Deathly_Hallows_promo_image.jpg/revision/latest/scale-to-width-down/700?cb=20161119235913')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Hufflepuff", name: "Alastor Moody", specialty: 'Defense Against the Dark Arts', image: 'https://static.wikia.nocookie.net/harrypotter/images/4/4d/MoodyProfile.png/revision/latest?cb=20210819174911')
Teacher.create(classes: "Defense Against the Dark Arts", house: "Slytherin", name: "Dolores Umbridge", specialty: 'Defense Against the Dark Arts, Upholding Order', image: 'https://static.wikia.nocookie.net/harrypotter/images/6/68/Dolores_Umbridge_Deathly_Hallows_promotional_image.jpg/revision/latest/scale-to-width-down/700?cb=20101127041001')

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