db = db.getSiblingDB('taskdb');
db.tasks.drop();
db.tasks.insertMany([
  { title: 'Buy groceries', completed: false },
  { title: 'Read a book',   completed: false },
  { title: 'Go for a run',  completed: true  }
]);
print('Database seeded successfully');
