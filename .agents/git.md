# How to use Git with this project

NEVER push to the main or master working branch on the remote. Only push your feature to a feature branch, so that a PR maybe be opened from there.

When making a new git branch for a new feature/build, the branch name should follow the pattern `<my-github-username>/<feature-name-in-kebab-case>`. If you do not know my GitHub user name, ask.

If asked to make a commit, follow the "Conventional Commits" standard for the first line of the commit message. For more information about the "Conventional Commits" standard, see here: https://www.conventionalcommits.org/en/v1.0.0/#specification. Fill the commit message body with a description of the changes include in the commit. Do not be too verbose, there should be approximately one sentence per modified file. Add a footer to the commmit message that includes two lines: first, the name of the AI code agent making a commit, and second, the name/slug of the LLM model in use.

If asked to push a branch to GitHub, use a shell command such as `git remote -v` to check which git remote is GitHub. If there are mutliple options, ask which one to use.
