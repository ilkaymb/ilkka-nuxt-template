<script setup lang="ts">
const canvasEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null

onMounted(async () => {
  await nextTick()
  if (!canvasEl.value) return
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

  // Loaded lazily, client-side only, after the page has already painted.
  const THREE = await import('three')

  const canvas = canvasEl.value
  const parent = canvas.parentElement!
  let width = parent.clientWidth
  let height = parent.clientHeight

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.set(0, 0, 8)

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)

  const group = new THREE.Group()
  group.position.set(0, 0.4, -2)
  scene.add(group)

  const geometry = new THREE.IcosahedronGeometry(1.9, 0)
  const material = new THREE.MeshBasicMaterial({
    color: 0xdc2626,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  })
  const mesh = new THREE.Mesh(geometry, material)
  group.add(mesh)

  const innerGeometry = new THREE.IcosahedronGeometry(1.25, 0)
  const innerMaterial = new THREE.MeshBasicMaterial({
    color: 0xef4444,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  })
  const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial)
  group.add(innerMesh)

  const particleCount = 90
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const radius = 3.2 + Math.random() * 1.8
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }
  const particlesGeometry = new THREE.BufferGeometry()
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.03, transparent: true, opacity: 0.3 })
  const particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0
  function onPointerMove(e: PointerEvent) {
    const rect = parent.getBoundingClientRect()
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.3
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3
  }
  window.addEventListener('pointermove', onPointerMove)

  let frameId = 0
  const startTime = performance.now()
  function animate() {
    frameId = requestAnimationFrame(animate)
    const elapsed = (performance.now() - startTime) / 1000
    // Damped follow instead of snapping straight to the pointer, for a calmer, less jumpy motion.
    currentX += (targetX - currentX) * 0.02
    currentY += (targetY - currentY) * 0.02
    group.rotation.y = elapsed * 0.05 + currentX
    group.rotation.x = elapsed * 0.025 + currentY
    particles.rotation.y = -elapsed * 0.012
    renderer.render(scene, camera)
  }
  animate()

  function onResize() {
    width = parent.clientWidth
    height = parent.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', onResize)

  cleanup = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('pointermove', onPointerMove)
    geometry.dispose()
    material.dispose()
    innerGeometry.dispose()
    innerMaterial.dispose()
    particlesGeometry.dispose()
    particlesMaterial.dispose()
    renderer.dispose()
  }
})

onUnmounted(() => cleanup?.())
</script>

<template>
  <div class="pointer-events-none [mask-image:radial-gradient(ellipse_48%_45%_at_50%_32%,black_15%,transparent_100%)]">
    <canvas ref="canvasEl" class="w-full h-full" />
  </div>
</template>
