### Steps to reuse template

+ Navigate to the template repo [here](https://gitlab.consulting.redhat.com/sos/client-template) & copy git-repo-url.

+ From terminal window, navigate to desired directory & enter `git clone <git-repo-url> project-name`.
+ From project root directory & remove the `.git` directory. Enter command: `rm -rf .git`.
+ Initilaise a new git repo, enter command: `git init`.
+ Update the name and verison number in the `package.json`.
+ Install all project dependencies via `npm i`.
+ If targeting mobile platform, open `config.xml` & update bundleId