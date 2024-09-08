<script setup lang="ts">
import { ref } from 'vue';
import PostsService from '../services/posts';

interface IPost {
	id: string;
	title: string;
	description: string;
	created_by: string | undefined;
}

const posts = ref<IPost[]>([]);

async function init() {
	posts.value = await PostsService.findAll();
}

init();
</script>

<template>
	<div
		v-for="post in posts"
		class="card"
	>
		<h2>{{ post.title }}</h2>
		<p>{{ post.description }}</p>
		<p>Created by: {{ post.created_by }}</p>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
