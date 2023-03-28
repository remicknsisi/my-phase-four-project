Student.create(year: 3, house: 'Gryffindor', name: 'Harry Potter', image:'https://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg/revision/latest?cb=20140603201724')
Student.create(year: 3, house: 'Gryffindor', name: 'Ron Weasley', image:'https://static.wikia.nocookie.net/harrypotter/images/8/85/Ron_Weasley.jpg/revision/latest?cb=20101104210200')
Student.create(year: 3, house: 'Gryffindor', name: 'Hermione Granger', image: 'https://static.wikia.nocookie.net/harrypotter/images/3/34/Hermione_Granger.jpg/revision/latest/scale-to-width-down/700?cb=20210522145306')

Teacher.create(classes: "Potions, Defense Against the Dark Arts", house: "Slytherin", name: "Severus Snape", specialty: 'Potions', image: 'https://static.wikia.nocookie.net/harrypotter/images/a/a3/Severus_Snape.jpg/revision/latest?cb=20150307193047')
Teacher.create(classes: "Transfiguration", house: "Gryffindor", name: "Minerva McGonagall", specialty: 'Transfiguration', image: 'https://static.wikia.nocookie.net/harrypotter/images/6/65/ProfessorMcGonagall-HBP.jpg/revision/latest/scale-to-width-down/700?cb=20100612114856')

Review.create(teacher_id: 1, student_id: 1, rating: 0, comment: "Let's old biases get to him and takes his anger out on students.")
Review.create(teacher_id: 2, student_id: 3, rating: 5, comment: "Amazing professor, highly recommend!")