# Photowall

A minimal photo gallery theme for Hugo.

**Demo:** [photo.molodtsov.me](https://photo.molodtsov.me)

## About

This repository contains a complete Hugo blog setup with Tailwind CSS and PostCSS, not just a theme. While you technically only need the `themes/photowall` folder to use the theme, the full project structure demonstrates how to configure the build process, set up PostCSS with Tailwind, and organize your content. Use it as a reference or fork the entire thing as a starting point.

## Configuration

Most customization happens in `hugo.toml`. You can change the site title, description, author information, social links, and various theme-specific settings there. The theme supports automatic dark mode based on system preferences, configurable photo grid layouts, and lightbox galleries for individual posts. Check the example configuration to see all available options.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Both platforms auto-detect Hugo projects and handle the build process automatically. Simply connect your GitHub repository, and any push to the main branch will trigger a new deployment. For Vercel, you may need to set the Hugo version in the build settings; Netlify typically handles this via a `netlify.toml` file.

## Content Management

You can edit content directly through [Sveltia CMS](https://github.com/sveltia/sveltia-cms) using your GitHub account. Once deployed, access the CMS at `/admin` on your site. Sveltia CMS provides a friendly interface for creating posts, uploading images, and managing your content without touching code. The CMS configuration is already included in the `static/admin` folder.

## Need Help?

If you're not sure how to get started or run into issues, install [Claude Code](https://claude.ai/download) and ask it to guide you through setup and customization. It can help you configure the theme, add new features, or troubleshoot problems.

## License

Apache License 2.0
