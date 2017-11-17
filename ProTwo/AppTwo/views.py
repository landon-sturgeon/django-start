from django.shortcuts import render
from AppTwo.forms import NewUserForm
from django.http import HttpResponse


def index(request):
    return HttpResponse("<em>My Second App</em>")

def help(request):
    help_dict = {'help_insert': "<em>This is the help insert portion<\em>"}
    return render(request, 'AppTwo/help.html', context=help_dict)

def users(request):
    # users_list = User.objects.order_by('first_name')
    #
    # user_dict = {'users': users_list}
    #
    # return render(request, "AppTwo/user.html", context=user_dict)
    form = NewUserForm()
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('Error form invalid')
    return render(request, 'AppTwo/user.html', {'form': form})
