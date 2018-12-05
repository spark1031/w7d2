# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

todo0 = Todo.create!(
  title: 'Do laundry',
  body: 'need do separate whites from colors',
  done: false
)

todo1 = Todo.create!(
  title: 'Finish homework',
  body: 'readings, videos, homework assignment',
  done: false
)

todo2 = Todo.create!(
  title: 'Meal prep',
  body: 'make meals for the next 3 days',
  done: false
)