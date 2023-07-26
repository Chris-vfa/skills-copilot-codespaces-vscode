function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    path: 'skills-copilot-codespaces-vscode',
    repo: 'skills-copilot-codespaces-vscode',
    branch: 'main',
    sha: 'main',
    dir: 'member',
    file: 'member.js',
    dependencies: [
      {
        name: 'skills-copilot-codespaces-vscode',
        type: 'repo',
        path: 'skills-copilot-codespaces-vscode',
        repo: 'skills-copilot-codespaces-vscode',
        branch: 'main',
        sha: 'main',
        dir: 'member',
        file: 'member.js',
      },
    ],
  };
}