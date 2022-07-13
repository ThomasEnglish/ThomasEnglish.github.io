import { defineConfig } from 'astro/config';

var owner: string = import.meta.env.GITHUB_REPOSITORY_OWNER
var repo_name: string = import.meta.env.GITHUB_REPOSITORY_NAME;
var [_, project_name] = repo_name.split("/", 2);

if (project_name == `${owner}.github.io`) {
    var site = `https://${project_name}`;
} else {
    var site = `https://${owner}.github.io`;
    var base = `/${project_name}`;
}

// https://astro.build/config
export default defineConfig({
    site,
    base,
});
