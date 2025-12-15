/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Physical AI and Robotics',
      items: ['qwen/qwen', 'qwen/readme'],
    },
    {
      type: 'category',
      label: 'Qwen Textbook',
      items: [
        'qwen-textbook/physical-ai-foundations',
        'qwen-textbook/ros2-fundamentals',
        'qwen-textbook/gazebo-simulation',
        'qwen-textbook/unity-visualization',
        'qwen-textbook/nvidia-isaac',
        'qwen-textbook/humanoid-robotics',
        'qwen-textbook/vision-language-action',
        'qwen-textbook/conversational-robotics',
        'qwen-textbook/hardware-requirements',
        'qwen-textbook/assessments',
        'qwen-textbook/projects-applications',
        'qwen-textbook/glossary',
        'qwen-textbook/index',
        'qwen-textbook/safety-security',
        'qwen-textbook/future-trends'
      ],
    },
  ],
};

module.exports = sidebars;