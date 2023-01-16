// Graphics
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { ShaderMaterial, Mesh } from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
// Shaders
import { vertexShader, fragmentShader } from './shaders'
// Controls
// import { useControls, folder } from 'leva'
// Hooks
import { useEffect, useRef } from 'react'
// Config
import * as config from './config'

const WaveShaderMaterial = shaderMaterial(
  config.uniforms,
  vertexShader,
  fragmentShader
)

extend({ WaveShaderMaterial })

const WaveShader = () => {
  const shaderRef = useRef<ShaderMaterial>(null)
  const sphereRef = useRef<Mesh>(null)

  // const {
  //   colorALight,
  //   intensityALight,
  //   phiALight,
  //   thetaALight,
  //   colorBLight,
  //   intensityBLight,
  //   phiBLight,
  //   thetaBLight,
  //   frecuencyDistortion,
  //   strengthDistortion,
  //   frecuencyDisplacement,
  //   strengthDisplacement,
  //   offsetFresnel,
  //   multiplierFresnel,
  //   powerFresnel,
  //   frecuencyTime
  // } = useControls('Sphere', {
  //   Light: folder(config.controls.lights),
  //   Distortion: folder(config.controls.distortion),
  //   Displacement: folder(config.controls.displacement),
  //   Fresnel: folder(config.controls.fresnel),
  //   Time: folder(config.controls.time)
  // })

  useEffect(() => {
    const node = sphereRef.current
    if (node) {
      node.geometry.computeTangents()
    }
  }, [])

  // Light A

  // useEffect(() => {
  //   shaderRef.current.uniforms.uLightAColor.value.set(colorALight)
  // }, [colorALight])

  // useEffect(() => {
  //   config.lights.a.spherical.phi = phiALight
  //   shaderRef.current.uniforms.uLightAPosition.value.setFromSpherical(config.lights.a.spherical)
  // }, [phiALight])

  // useEffect(() => {
  //   config.lights.a.spherical.theta = thetaALight
  //   shaderRef.current.uniforms.uLightAPosition.value.setFromSpherical(config.lights.a.spherical)
  // }, [thetaALight])

  // Light B

  // useEffect(() => {
  //   shaderRef.current.uniforms.uLightBColor.value.set(colorBLight)
  // }, [colorBLight])

  // useEffect(() => {
  //   config.lights.b.spherical.phi = phiBLight
  //   shaderRef.current.uniforms.uLightBPosition.value.setFromSpherical(config.lights.b.spherical)
  // }, [phiBLight])

  // useEffect(() => {
  //   config.lights.b.spherical.theta = thetaBLight
  //   shaderRef.current.uniforms.uLightBPosition.value.setFromSpherical(config.lights.b.spherical)
  // }, [thetaBLight])

  // Time

  useFrame(() => {
    const node = shaderRef.current
    if (node) {
      // shaderRef.current.uniforms.uTime.value += config.delta * frecuencyTime
      shaderRef.current.uniforms.uTime.value += config.delta * config.uniforms.uTime
    }
  })

  return (
    <mesh ref={sphereRef}>
      {/* @ts-ignore */}
      <waveShaderMaterial
        // uLightAIntensity={intensityALight}
        // uLightBIntensity={intensityBLight}
        // uDistortionFrecuency={frecuencyDistortion}
        // uDistortionStrength={strengthDistortion}
        // uDisplacementFrecuency={frecuencyDisplacement}
        // uDisplacementStrength={strengthDisplacement}
        // uFresnelOffset={offsetFresnel}
        // uFresnelMultiplier={multiplierFresnel}
        // uFresnelPower={powerFresnel}
        ref={shaderRef}
      />
      <sphereGeometry
        attach='geometry'
        args={[2.6, config.size.width, config.size.height]}
      />
    </mesh>
  )
}

/**
 * A configurable morphing sphere
 * @returns A morphing sphere component
 */
const Sphere = () => {
  return (
    <Canvas dpr={Math.min(Math.max(window.devicePixelRatio, 1), 2)}>
      <WaveShader />
      <EffectComposer disableNormalPass>
        <Bloom
          mipmapBlur
          levels={9}
          intensity={1.5}
          luminanceThreshold={1}
          luminanceSmoothing={1}
        />
      </EffectComposer>
    </Canvas>
  )
}

export default Sphere
