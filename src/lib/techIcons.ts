import {
  siAdonisjs, siAngular, siClaude, siDocker, siExpress, siFlutter, siGit, siGithubactions, siGo, siKubernetes, siLaravel, siLinux,
  siMongodb, siMysql, siN8n, siNestjs, siNextdotjs, siNuxt, siNodedotjs, siOpenjdk, siPostgresql, siReact, siRedis, siSpringboot,
  siTypescript, siVuedotjs,
} from 'simple-icons'

/** Only the icons we use are imported, so the bundler drops the rest of simple-icons. */
export const techIcons: Record<string, { path: string; title: string }> = {
  nodedotjs: siNodedotjs, typescript: siTypescript, nestjs: siNestjs, adonisjs: siAdonisjs, laravel: siLaravel,
  openjdk: siOpenjdk, springboot: siSpringboot, go: siGo, react: siReact, angular: siAngular, vuedotjs: siVuedotjs,
  flutter: siFlutter, express: siExpress, claude: siClaude, nextdotjs: siNextdotjs, nuxt: siNuxt, postgresql: siPostgresql, mysql: siMysql, mongodb: siMongodb, redis: siRedis, docker: siDocker,
  kubernetes: siKubernetes, git: siGit, githubactions: siGithubactions, linux: siLinux, n8n: siN8n,
}
