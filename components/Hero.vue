<template lang='pug'>
div(
	id='hero'
	class='container-hero'
)

	section(class='hero')
		div(class='hero__body')
			//- div(class='hero__avatar')
			//-   img(
			//-     src='https://pbs.twimg.com/profile_images/984998667286282240/kByXV1jU_400x400.jpg'
			//-     class='hero__avatar-image'
			//-   )
			//-   p(class='hero__avatar-name') Juma Stevens
			h1(class='hero__headline') {{ headline }}
			p(class='hero__text')
				| I help businesses like&nbsp;
				a(
					href='https://feastables.com/'
					target='_blank'
				) MrBeast Feastables
				| ,&nbsp;
				a(
					href='https://lunarsolargroup.com/'
					target='_blank'
				) Lunar Solar Group
				| &nbsp;and&nbsp;
				a(
					href='https://cloudfour.com/'
					target='_blank'
				) Cloud Four
				| &nbsp;build exceptional user experiences.
			NuxtLink(
				:to='{ "name": "contact" }'
				class='hero__link'
			) {{ link }}

		//- HeroComposite(class='hero__composite')
		//- video(
		//-   :src='image'
		//-   class='video'
		//-   autoplay
		//-   loop
		//-   muted
		//-   playsinline
		//- )
		img(
			src='https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80'
			class='video'
		)
</template>


<script>
import Card from '~/components/Card.vue'
import HeroComposite from '~/components/HeroComposite.vue'
import heroImage from '~/assets/images/heroBanner.jpg'


export default {
	components: {
		HeroComposite,
		Card
	},
	props: {},
	data () {
		return {
			headline: 'Front-end Developer',
			text: 'I help Shopify Plus agencies like Lunar Solar Group, Cloud Four and others to build great digital experiences.',
			link: 'Let\'s Talk',
			image: heroImage
		}
	},
	computed: {},
	methods: {}
}
</script>


<style lang='sass' scoped>
.container-hero
	@extend %container-main

.hero
	@extend %container-content
	position: relative
	// height: calc(100vh + 200px)
	display: grid
	grid-template-rows: 1fr auto
	grid-template-columns: 1fr
	+mq-s
		// grid-template-rows: 100vh auto
		// grid-template-columns: repeat(2, 1fr)

	&__body
		height: 100%
		max-height: 1000px
		position: relative
		z-index: 3
		grid-row: 1 / 2
		grid-column: 1 / 2
		padding: $unit*10 0
		text-align: center

	// &__avatar
	//   display: grid
	//   grid-template-columns: auto 1fr
	//   grid-gap: $unit
	//   align-items: center
	//   width: min-content
	//   margin: 0 auto
	//
	//   &-image
	//     width: $unit*5
	//     height: $unit*5
	//     border-radius: 50%
	//     overflow: hidden
	//
	//   &-name
	//     white-space: nowrap
	//     font-weight: $fw-med

	&__headline
		font-size: $fs3
		font-weight: $fw-bold
		+mq-xs
			font-size: $fs4
		+mq-s
			font-size: $fs4*1.5

	&__text
		@extend %text-copy
		max-width: $fs*28
		margin-top: $unit*2
		margin: $unit*2 auto 0 auto
		color: $label
		// font-size: $fs1

		& > a
			color: $link
			font-size: inherit

	&__link
		@extend %card-container
		display: inline-block
		padding: $unit*2 $unit*3
		margin-top: $unit*4
		background: $link
		border-radius: $unit
		width: 100%
		max-width: 420px

	&__composite
		grid-row: 2 / 3
		grid-column: 1 / 2

.video
	grid-row: 2 / 3
	grid-column: 1 / 2
	width: 100%
	height: 480px
	background: $grey
	object-fit: cover
	margin: $unit*5 0 0 0
	// box-shadow: 0px 8px 24px rgba(34, 34, 34, 0.5)
	border-radius: $unit
</style>
