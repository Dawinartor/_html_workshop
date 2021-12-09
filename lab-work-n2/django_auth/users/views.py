from django.shortcuts import render

# Create your views here.
 
def home(request):
    return render(request,"home.html")


class SignUo(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"