# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#The controller file contains code for the Class, it's a child class of Application controller, since it's a type of controller. After the route decides which controller and method to run from the url, the controller contains all the methods that run the CRUD actions that will be available to the view or API. The first method is being defined here as index, which represents the 'R' "read" action in CRUD.
class BlogPostsController < ApplicationController
  def index
    # ---2)
#The instance variable "posts" is being assigned a value that comes from the function being executed here. Here, the function gets all the objects of the BlogPost table through Active Record. Then in the view file, the developer can access the value by using that instance variable. Normally I'd take the list of all the BlogPosts to be rendered in the view with this method.
    @posts = BlogPost.all
  end

  # ---3)
#The method "show" is also a read action, which shows a specific post. This method accesses a specific row in the database table (BlogPost) according to the :id parameter set from the route. The route checks the value for that parameter from the url and the controller passes it through the method. In this case it picks out the particular blog post by the primary key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
# The new method represents a midway point between Create and Read from CRUD. The .new method on BlogPost will create a new BlogPost object but will not save it in the database, unless you run @post.save. This can be used alternatively to the create method if you'd like more tasks in the function before the object is added to the database.

  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
#The method "create" represents the create action from CRUD. This method creates a new Blog Post and adds it automatically to the database after the if conditional is checked. The conditional statement checks if the post has valid data without causing errors with valid? then does a redirect to the appropriate pages.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
#The "edit" method here is only the first part of editing a post on the client's end, and only accesses a singular Blog Post by its primary key (set in the params as :id. This method is just a Read action, but to actually make changes to the post, we would need to run the method after this one.
    @post = BlogPost.find(params[:id])
  end
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
#The "update" method is the second part to the act of editing a post. The first line calls the method to update the post but an argument "blog_post_params" is being passed through. The argument is a method near the bottom of the code after "private". Similar to the create method, there's a conditional to check if the data being submitted is valid and won't cause errors, then redirects to a specific path accordingly (either the new post if it's valid, or refreshes the edit page).
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
# This the else statement in the conditional for the destroy or delete method (which deletes the Blog Post) Basically if the Blog Post does not get deleted from the destroy method in if for whatever issue may occur, then you'll be redirected to the same post again, indicating to the user that the post is still there. You can probably also add some functionality here like an alert or message informing the user that the post was not deleted.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
#The private keyword in Ruby restricts the scope of where a method can be called. This is used for a strong params that's meant to only be called through being passed as an argument through another method, so this will prevent the strong params from being called anywhere else in the program outside of the controller. 
  private
  def blog_post_params
    # ---10)
#This line of code (which is the strong params method) is running the function required on a specific blog post, requiring that the blog_post value be filled and that the values for title and content are allowed to be filled or not. Any other column not specified in the permit argument is not permitted.
    params.require(:blog_post).permit(:title, :content)
  end
end
