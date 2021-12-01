<template>
  <div>
    <canvas
      id="bgndcanvas"
      style="width: 100%; height: 100%; object-fit: contain"
      width="640px"
      height="480px"
    ></canvas>
    <canvas
      id="bgndcanvasHidden"
      width="640px"
      height="480px"
      style="visibility: hidden"
    ></canvas>
  </div>
</template>

<script>

import imageUtils from '@/components/utils/ImageUtils.js'

export default {
  name: 'BgndImagePlayer',
  data () {
    return {
      imagePlayer: null,
      currentImages: ''
    }
  },
  mounted () {
    if (!this.imagePlayer) {
      this.initialize()
    }
  },

  methods: {
    initialize () {
      // console.log(this.$refs)
      this.imagePlayer = this.$refs.imagePlayer
    },

    showImages (value) {
      if (!value || value === '') return

      this.currentImages = value

      let canvas = document.getElementById('bgndcanvasHidden')
      let ctx = canvas.getContext('2d')

      imageUtils.showImages(value, canvas, ctx, true)
        .finally(() => {
          this.copyHiddenToVisibleCanvas()
        })
    },

    copyHiddenToVisibleCanvas () {
      let destCanvas = document.getElementById('bgndcanvas')
      let sourceCanvas = document.getElementById('bgndcanvasHidden')

      // grab the context from your destination canvas
      var destCtx = destCanvas.getContext('2d')

      // call its drawImage() function passing it the source canvas directly
      destCtx.drawImage(sourceCanvas, 0, 0)
    },

    clearImages () {
      let canvas = document.getElementById('bgndcanvas')
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.currentImages = ''
    }
  }
}
</script>

<style scoped>
</style>
