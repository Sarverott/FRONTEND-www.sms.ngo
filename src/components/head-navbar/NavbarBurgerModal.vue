<script setup>
const menuLister = [
	{
		label: "pracownie",
		list: [
			{
				href: "/",
				title: "qwertyuiop",
			},
			{
				href: "/",
				title: "qwertyuiop",
			},
			{
				href: "/",
				title: "qwertyuiop",
			},
		],
	},
	{
		label: "pracownie2",
		list: [
			{
				href: "/fff",
				title: "qwertyuiop",
			},
		],
	},
];
</script>
<template>
  <div class="menu">
    <div v-for="section in menuLister">
      <p class="menu-label navbar-burger-modal">
        {{ section.label }}
      </p>
      <ul class="menu-list">
        <li v-for="element in section.list">
          <a :href="element.href">
            {{ element.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="css" scoped>
.menu-label.navbar-burger-modal {
  text-align: right;
}
</style>
