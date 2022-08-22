<template lang="pug">
span(
  :style='maxHeightStyle'
  class='image-container'
)
  span(
    :style='aspectRatioStyle'
    :class='{ isLoaded }'
    class='image-container__inner-wrapper'
  )
    img(
      v-if='!isBackgroundImage && !isVideo'
      v-lazy='src'
      @load='onLoad'
      :alt='alt'
      class='image-container__image'
    )
    span(
      v-else-if='isBackgroundImage && !isVideo'
      v-lazy:background-image='src'
      @load='onLoad'
      class='image-container__background-image'
    )
    video(
      v-else-if='!isBackgroundImage && isVideo'
      :lazy='isLoaded ? "loaded" : "loading"'
      ref='video'
      autoplay
      loop
      muted
      playsinline
      class='image-container__video'
    )
      source(
        :src='src'
        type='video/mp4'
      )
</template>

<script>
export default {
  components: {},
  props: {
    alt: {
      type: String,
      default: ''
    },
    aspectRatio: {
      type: Number,
      default: 1
    },
    isBackgroundImage: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      aspectRatioStyle: {
        paddingTop: `calc(${this.aspectRatio} * 100%)`
      },
      isLoaded: false,
      maxHeightStyle: this.maxHeight
        ? {
            maxWidth: `calc(${this.maxHeight} / ${this.aspectRatio})`
          }
        : {},
      videoRef: null
    }
  },
  computed: {
    isVideo() {
      const videoExtensions = ['.gif', '.mp4']
      return videoExtensions.some((extension) => this.src.includes(extension))
    }
  },
  mounted() {
    if (this.isVideo) this.$nextTick(() => this.videoListenerAdd())
  },
  beforeDestroy() {
    if (this.isVideo) this.videoListenerRemove()
  },
  methods: {
    onLoad() {
      this.isLoaded = true
    },

    videoListenerAdd() {
      this.$refs.video.addEventListener('loadeddata', this.onLoad)
    },

    videoListenerRemove() {
      this.$refs.video.removeEventListener('loadeddata', this.onLoad)
    }
  }
}
</script>

<style lang="sass" scoped>
.image-container
  display: flex
  width: 100%

  &__inner-wrapper
    position: relative
    width: 100%
    height: 0
    // Fixes Safari square border when set to round bug
    z-index: 1

    &:not(.isLoaded)
      background: #fafafa
      background: $secondary-system-fill

  &__image,
  &__background-image,
  &__video
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transition: opacity 150ms ease-in

    &:not([lazy=loaded])
      opacity: 0

  &__image,
  &__video
    object-fit: cover

  &__background-image
    background-position: center
    background-repeat: no-repeat
    background-size: cover

  &__video
    opacity: 1 !important
</style>
