from django.shortcuts import render
from . import models

def all_posts(request):
    all_post = models.Posts.objects.all()
    return render(request, "posts/posts.html", context={"posts": all_post})