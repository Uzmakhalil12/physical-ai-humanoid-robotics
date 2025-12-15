# Physical AI and Humanoid Robotics Textbook

This repository contains a comprehensive textbook platform on Physical AI & Humanoid Robotics, built with Docusaurus. The platform includes 15+ chapters covering key topics in Physical AI, interactive features like an AI chatbot and personalization options, and Urdu translation capabilities.

## Features

- **Complete Textbook**: 15+ chapters covering Physical AI foundations to advanced applications
- **Interactive AI Assistant**: RAG-based chatbot for answering questions about textbook content
- **Multilingual Support**: Urdu translation feature
- **Personalization**: Theme, font size, and reading preference options
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **GitHub Pages Deployment**: Automatically deployed via GitHub Actions

## Table of Contents

1. [Physical AI Foundations](../qwen-textbook/01-physical-ai-foundations.md)
2. [ROS2 Fundamentals](../qwen-textbook/02-ros2-fundamentals.md)
3. [Gazebo Simulation](../qwen-textbook/03-gazebo-simulation.md)
4. [Unity Visualization](../qwen-textbook/04-unity-visualization.md)
5. [NVIDIA Isaac Platform](../qwen-textbook/05-nvidia-isaac.md)
6. [Humanoid Robotics](../qwen-textbook/06-humanoid-robotics.md)
7. [Vision-Language-Action Models](../qwen-textbook/07-vision-language-action.md)
8. [Conversational Robotics](../qwen-textbook/08-conversational-robotics.md)
9. [Hardware Requirements](../qwen-textbook/09-hardware-requirements.md)
10. [Assessments](../qwen-textbook/10-assessments.md)
11. [Projects & Applications](../qwen-textbook/11-projects-applications.md)
12. [Glossary](../qwen-textbook/12-glossary.md)
13. [Index](../qwen-textbook/13-index.md)
14. [Safety & Security](../qwen-textbook/14-safety-security.md)
15. [Future Trends](../qwen-textbook/15-future-trends.md)

## How to Run Locally

### Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager

### Installation

1. Navigate to the docusaurus directory:
   ```bash
   cd docusaurus
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the textbook platform.

### Available Scripts

In the `docusaurus` directory, you can run:

- `npm start` - Runs the development server
- `npm build` - Builds the static website for production
- `npm serve` - Serves the built website locally for testing
- `npm deploy` - Deploys to GitHub Pages (if configured)

## Deployment to GitHub Pages

The project is configured with a GitHub Actions workflow that automatically deploys the site to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

If you want to deploy manually:

1. Ensure you have the `gh-pages` package installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Run the deployment script:
   ```bash
   npm run deploy
   ```

### Configuration

To deploy to GitHub Pages:

1. Ensure the `homepage` field in `docusaurus/package.json` is set to your GitHub Pages URL
2. Update the `baseUrl` in `docusaurus/docusaurus.config.js` to match your repository name
3. Update the organization and project name in `docusaurus/docusaurus.config.js`

## How to Extend the Book

### Adding New Chapters

1. Create a new Markdown file in the `docusaurus/docs/` directory
2. Follow the existing chapter format with frontmatter:
   ```markdown
   ---
   title: Chapter Title
   sidebar_position: X
   description: Brief description of the chapter
   ---
   ```
3. Add the new chapter to the sidebar navigation in `docusaurus/sidebars.js`

### Customizing Components

1. Components are located in `docusaurus/src/components/`
2. Modify existing components or add new ones
3. Components are implemented in React

### Adding New Features

1. Docusaurus allows for custom React components
2. You can add new pages in `docusaurus/src/pages/`
3. Styles can be customized in `docusaurus/src/css/`
4. Additional plugins can be added via the `plugins` array in `docusaurus.config.js`

## Project Structure

```
docusaurus/
├── docs/                     # Documentation content
│   ├── qwen/                 # Physical AI and Robotics documentation
│   └── qwen-textbook/        # Textbook content
├── src/                      # React components and pages
│   ├── components/
│   ├── pages/
│   └── css/
├── static/                   # Static assets
├── docusaurus.config.js      # Docusaurus configuration
├── sidebars.js              # Navigation configuration
└── package.json
```

## Technical Architecture

### Frontend
- Built with Docusaurus v3
- React-based custom components
- Responsive design for all device sizes
- Integrated search functionality

### Features Implemented
- **AI Assistant**: Placeholder for RAG-based chatbot
- **Urdu Translation**: Language switching capability
- **Personalization**: Theme and preference options
- **Accessibility**: Following WCAG 2.1 AA standards

## Contributing

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Support

If you encounter any issues or have questions:

1. Check the [Docusaurus documentation](https://docusaurus.io/docs)
2. Open an issue in the repository
3. Consult the textbook content for technical explanations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Components based on [React](https://reactjs.org/)