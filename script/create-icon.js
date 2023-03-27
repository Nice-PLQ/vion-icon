import fs from 'fs/promises';
import path from 'path';
import glob from 'fast-glob';
import uppercamelcase from 'uppercamelcase';

async function createTemplate(svg, name) {
  const componentName = uppercamelcase(name);
  const content = `
<template>
  <i class="v-icon" @click="click" :style="iconStyle">${svg}</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ${componentName} = defineComponent({
    name: '${componentName}',
    props: {
      color: String,
      size: String,
    },
    emits: ['click'],
    setup(props, ctx) {
      const iconStyle = computed(() => ({
        display: 'inline-block',
        fontSize: props.size,
        color: props.color,
        width: '1em',
        height: '1em',
        lineHeight: '1em',
      }));

      const click = (e) => ctx.emit('click', e);

      return { iconStyle, click };
    }
  });

  ${componentName}.install = (app) => {
    app.component(${componentName}.name, ${componentName});
  }

  export default ${componentName};
</script>
`;

  await fs.writeFile(path.resolve(`./src/components/${name}.vue`), content, 'utf-8');
}

async function createEntry(components) {
  const componentsList = components.map(name => {
    return `export { default as ${uppercamelcase(name)}} from './components/${name}.vue';`;
  }).join('\n');

  await fs.writeFile(path.resolve(`./src/components.js`), componentsList, 'utf-8');

  const typeList = components.map(name => {
    return `declare class ${uppercamelcase(name)} extends IconComponent { };`;
  }).join('\n');

  const typeExport = components.map(name => `  ${uppercamelcase(name)}`).join(',\n');

  const typeTpl = `
import { App } from 'vue';

class IconComponent {
  static name: string;
  static install(app: App): void;
}

export const version: string;

export function install(app: App): void;

${typeList}

export {
${typeExport}
};
`;

  await fs.writeFile(path.resolve(`./types/index.d.ts`), typeTpl, 'utf-8');
}

async function createIcon() {
  const icons = await glob(['./src/svg/*.svg'], { dot: true });
  const components = [];
  icons.forEach(async (iconPath) => {
    const name = iconPath.substring(iconPath.lastIndexOf('/') + 1).split('.')[0];
    components.push(name);
    let svg = await fs.readFile(path.resolve(iconPath), 'utf-8');
    svg = svg.replace(/(fill)="(none|black)"/ig, 'fill="currentColor"')
      .replace(/(stroke)="(none|black)"/ig, 'stroke="currentColor"')
      .replace(/(fill2)="(none)"/ig, 'fill="none"')
      .replace('width="48"', 'width="1em"')
      .replace('height="48"', 'height="1em"')

    await createTemplate(svg, name);
  });

  await createEntry(components);

}


createIcon();