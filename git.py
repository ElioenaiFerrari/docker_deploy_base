import os




commit = str(input('add a commit: '))
branch = str(input('branch name: '))


os.system('git config --global user.email elioenaiferrari@gmail.com')
os.system('git config --global user.name elioenaiferrari')

os.system('git add .')
os.system(f'git commit -m {commit}')
os.system(f'git push -u origin {branch}')
