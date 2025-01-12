# Tracy Lane Portfolio Website

A minimalist portfolio website I built for my friend Tracy Lane.

🌐 [tracylane.work](https://tracylane.work)

## Design & Tech

Built with React, TypeScript, and Vite. Uses Unbounded for headers and JetBrains Mono for body text. The site uses a dark theme with a deep space background (#0a0a0f), white text (#e0e0ff), and blue accents (#2b35ff).

## Adding Projects

Projects are configured in `src/data/projects.ts`. Each project follows this structure:

```typescript
interface Project {
  id: string;                   // URL-friendly identifier
  title: string;                // Project title
  description: string;          // Short description
  body: string;                 // Full project description
  credits?: Credit[];          // Optional array of credits
  imageUrl: string;            // Main project image
  imageAlt?: string;           // Image alt text
  backgroundImage?: string;    // Optional hero background
  aspectRatio: 'square' | 'portrait' | 'landscape';  // Image aspect ratio
  links: {
    youtube?: string;
    spotify?: string;
    appleMusic?: string;
  };
}
```

### Example Project:

```typescript
{
  id: "project-name",
  title: "Project Title",
  description: "Short Description",
  body: "Full project description goes here...",
  credits: [
    {
      role: "Director",
      name: "Peter Blaine"
    }
  ],
  imageUrl: "/projectpics/image.jpg",
  imageAlt: "Project Image",
  backgroundImage: "/projectpics/background.jpg",
  aspectRatio: "landscape",
  links: {
    youtube: "https://youtube.com/..."
  }
}
```

Add project images to the `public/projectpics/` directory and reference them in the project configuration.

## License

- Website code: MIT License
- Content and media: © 2025 Tracy Lane

## Credits

- Built by [Jamino](https://jamino.me)
- Content © Tracy Lane