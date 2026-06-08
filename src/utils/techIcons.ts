const skillIconMap: Record<string, string> = {
  'c++': 'cpp',
  'cpp': 'cpp',
  'python': 'py',
  'pytorch': 'pytorch',
  'typescript': 'ts',
  'ts': 'ts',
  'javascript': 'js',
  'js': 'js',
  'c#': 'cs',
  'csharp': 'cs',
  'cs': 'cs',
  'go': 'go',
  'golang': 'go',
  'c': 'c',
  'asp.net core': 'dotnet',
  '.net': 'dotnet',
  'dotnet': 'dotnet',
  'vue.js': 'vue',
  'vue': 'vue',
  'qt framework': 'qt',
  'qt': 'qt',
  'astro.js': 'astro',
  'astro': 'astro',
  'docker': 'docker',
  'git': 'git',
  'sql server': 'mssql',
  'mssql': 'mssql',
  'rabbitmq': 'rabbitmq',
  'github actions': 'githubactions',
  'cmake': 'cmake',
  'gcc': 'gcc',
  'r': 'r',
  'tidyverse': 'r',
  'estatística': 'r',
  'statistics': 'r',
  'entity framework': 'dotnet',
  'azure': 'azure',
  'html': 'html',
  'css': 'css',
  'razor pages': 'dotnet',
  'arch linux (aur)': 'arch',
  'arch linux': 'arch',
  'aur': 'arch',
  'nixos': 'nixos',
  'fedora': 'fedora',
  'freebsd': 'freebsd',
};

/**
 * Gets the SkillIcons.dev identifier for a given technology name.
 * Returns null if no matching icon is found.
 */
export function getSkillIconId(techName: string): string | null {
  if (!techName) return null;
  const normalized = techName.toLowerCase().trim();
  return skillIconMap[normalized] || null;
}

/**
 * Gets the SkillIcons.dev image URL for a given technology name.
 */
export function getSkillIconUrl(techName: string): string | null {
  const iconId = getSkillIconId(techName);
  if (!iconId) return null;
  // Use theme=dark or no theme for standard skillicons
  return `https://skillicons.dev/icons?i=${iconId}`;
}
