# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 
You can fix this easily with a migration, which is a file that you generate when making changes to the shape of the database. First you would generate the migration file, edit the file to add the changes you want. In this case, you would add a column for Cohort_id and integer as the data type under the Student model, because the foreign id is used to associate the row of data in the Student model to a particular Cohort in the Cohort model through that Cohort's primary key.
After you edit the file, run the migration command then confirm if the schema is updated with the new column under the Student model.

  Researched answer:
You can make changes to the shape of the database, or model, with migrations.

First you would generate the migration file in terminal:

$ rails generate migration add_column_for_foreign_key

after the word migration you would add a description of what change you are making in snake_case.
after the file is generated, edit the file under db/migrate and add between the class tags (under the Student model)

add_column :students, :cohort_id, :integer

First key ":students" refers to the name of the table you're editing
Tecond key ":cohort_id" is the name of the column you're adding. When you add a foreign key column, it needs to be the name of the table it's associated with (singular form) followed by _id. The foreign key goes to the students model because the foreign key is used to refer to the associated Cohort by the specific Cohort's primary key.
Third key is the data type, which for foreign key you'd need to set as an integer

Once you save the changes, go back to terminal and run the migration:
rails db:migrate

and then check your schema file to confirm that the new cohort_id column has been added to the Student model.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
From what I remember working with full stack Rails apps, routes that need params, or a parameters to be passed through the url, would be used for specific data entries in the database. For example for the blog app prototype I worked on, a singular blog post that needs to be viewed, edited or deleted will use RESTful routes: GET, PATCH or DELETE which needs to use the id of the blog post. The ID can be passed to the url using params with the route including "blogs/:id" The HTTP verb CREATE doesn't need params since it doesn't need a particular blog post entry to be passed through the url. You're creating a new blog post of which the id doesn't exist yet.

  Researched answer:
The RESTful routes that must always be passed params include GET, PATCH or DELETE HTTP verb requests.
Params in RESTful routes allows the developer to establish CRUD actions on specific resources from the database such as a row of data in the table referred to by its primary key as the params, a particular category/type that the row is labeled as the params, or even date range as params.


3. Name three rails generator commands. What is created by each?

  Your answer:
In a Rails app, you can generate files through commands which Rails automatically sets up for you without directly making the files manually. Three commands I use a lot are: generate model, generate migration and generate controller. When you generate a model, it creates a schema.rb file which establishes the shape of the database, kind of like setting a template for a table with rows and columns. When you want to make a change to that model you would generate a migration, which would make a migration file labeled with the change you would want to make, which you then edit and run a migration command. And lastly, the generate controller command makes a controller file which manages what gets rendered to View based on the Model.

  Researched answer:
Three rails generate commands include generate model, generate migration and generate controller. The generate model command needs to include the name of the model in PascalCase since it is creating a Class, as well as the name of each column and data type of each column as arguments. Running the generate command for model lets Rails create a migration file, a model file, and a schema file for the database. The generate migrations command generates a migration file under the migrate directory which can be edited with the changes the developer wants to make to the schema and resolves those changes via the rails db:migrate command. Last with the generate controller command, Rails will create files associated with the controller including the actual controller file under app/controllers, a folder with the name of the controller under app/views, a helper file under app/helpers (which in my experience isn't really needed yet) and a style sheet under app/assets/stylesheets/main.scss

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students 
the method needed would be "index" which would display all the data entries for the students table ( a list of students)         

action: "POST"   location: /students   
the method needed would be "create", which would allow a user to add an entry for a new student   

action: "GET"    location: /students/new
the method "new" would obtain and render the data from a newly created student (right after the create action)

action: "GET"    location: /students/2  
the method "show" would be used here to display a single particular student

action: "GET"    location: /students/2/edit  
the method "edit" would render the edit page of that particular student  

action: "PATCH"  location: /students/2    
the method "update" would allow changes to be made to data about a particular student  

action: "DELETE" location: /students/2      
the method "destroy" would completely delete the data entry for that particular student


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can view all of my todos in a list.
As a user, I view the list of todos when I go to the home page.
As a user, I can click on a todo which will bring me to a page with that todo's name and notes about that todo.
As a user, I can add a new todo by clicking on a "New Todo" link.
As a user, when I click on the "New Todo" link, it brings me to a page with a form for "Todo Name" and "Notes".
As a user, when I submit my new todo, I can see my new todo added to the full list back at the home page.
As a user, I can delete any todo on the list by clicking the delete link next to it.
As a user, I can see the todo disappear from my todo list after deleting.
As a user I can edit my todo by clicking the "Edit" link next to the todo.
As a user when I click on the "Edit" link, it brings me to a page with a form for "Todo Name" and "Notes" populated with the existing text.
As a user, when I submit my edit changes to the todo, I can see my new todo "Todo Name" updated in the list of todos.