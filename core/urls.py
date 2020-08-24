from django.urls import path
from posts import views as posts_views

app_name = "core"

urlpatterns = [
    path("", posts_views.all_posts, name="home")
]
