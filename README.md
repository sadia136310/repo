# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### GitHub commands
Common usages and options for git push
git push -f: Force a push that would otherwise be blocked, usually because it will delete or overwrite existing commits (Use with caution!)
git push -u origin [branch]: Useful when pushing a new branch, this creates an upstream tracking branch with a lasting relationship to your local branch
git push --all: Push all branches
git push --tags: Publish tags that aren't yet in the remote repository
You can see all of the options with git push in git-scm's documentation.

Why can't I push?
If you are trying to git push but are running into problems, there are a few common solutions.

Check your branch
Check what branch you are currently on with git status. If you are working on a protected branch, like main, you may be unable to push commits directly to the remote. If this happens to you, it's OK! You can fix this a few ways.

Work was not yet on any branch
Create and checkout to a new branch from your current commit: git checkout -b [branchname]
Then, push the new branch up to the remote: git push -u origin [branchname]
Accidentally committed to the wrong branch
Checkout to the branch that you intended to commit to: git checkout [branchname]
Merge the commits from the branch that you did accidentally commit to: git merge [main]
Push your changes to the remote: git push
Fix the other branch by checking out to that branch, finding what commit it should be pointed to, and using git reset --hard to correct the branch pointer
Related Terms
git commit -m "descriptive message": Records file snapshots permanently in version history.
git clone [url]: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.
git status: Always a good idea, this command shows you what branch you're on, what files are in the working or staging directory, and any other important information.
git pull: Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. git pull is a combination of git fetch and git merge.
