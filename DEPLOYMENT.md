# GitHub Pages Deployment Guide

## Setup Complete! ✅

Your project is now configured for GitHub Pages deployment. Here's what was done:

1. ✅ Updated `vite.config.ts` with base path `/the-great-awakening/`
2. ✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
3. ✅ Initialized Git repository and committed all files
4. ✅ Added remote: `https://github.com/aashishaj/the-great-awakening.git`

## Next Steps

### 1. Create the GitHub Repository

Go to [GitHub](https://github.com) and create a new repository:
- Repository name: `the-great-awakening`
- Make it public (required for free GitHub Pages)
- **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Push Your Code

Once the repository is created, run:

```bash
cd /Users/aashishprakash/Projects/Archive/the-great-awakening.-main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Click on **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. Save the changes

### 4. Wait for Deployment

- The GitHub Actions workflow will automatically trigger on push
- You can monitor the deployment progress in the **Actions** tab
- First deployment takes 2-3 minutes

### 5. Access Your Site

Once deployed, your site will be available at:
```
https://aashishaj.github.io/the-great-awakening/
```

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:8080` in your browser.

## Future Updates

After initial setup, any push to the `main` branch will automatically trigger a new deployment to GitHub Pages.

```bash
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

### Blank Page After Deployment
- Ensure the `base` path in `vite.config.ts` matches your repository name
- Check browser console for errors

### 404 Errors
- Make sure GitHub Pages is enabled in repository settings
- Verify the source is set to "GitHub Actions"

### Build Failures
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Try building locally with `npm run build` to catch errors early
