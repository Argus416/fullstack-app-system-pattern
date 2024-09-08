<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';

interface IPost {
	id: string;
	title: string;
	description: string;
	created_by: string | undefined;
}

const posts = ref<IPost[]>([]);

async function init() {
	const response = await axios.get('http://localhost:5000/api/v1/posts');
	posts.value = response.data;
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
