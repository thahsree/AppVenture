"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import React, { useRef, Component, ErrorInfo, ReactNode } from "react";
import * as THREE from "three";

class ErrorBoundary extends Component<{children: ReactNode, fallback: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode, fallback: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.warn("WebGL or Canvas error caught:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#22d3ee"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-gray-300">
              <span className="text-accent">●</span> The Future of Digital Products
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Build Scalable <br />
            <span className="text-gradient">Digital Products</span> <br />
            for Modern Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            We design and develop high-performance websites, mobile apps, and SaaS platforms that help businesses grow and scale efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-primary text-white font-medium text-center hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-center hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-[500px] lg:h-[700px] w-full relative"
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <ErrorBoundary fallback={
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-3xl animate-pulse" />
            }>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#6366f1" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#22d3ee" />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </ErrorBoundary>
          </div>
          
          {/* Floating elements overlay */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-10 glass-card p-4 rounded-2xl z-10 hidden md:block"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Performance</p>
                <p className="text-xs text-gray-400">99.9% Uptime</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-0 glass-card p-4 rounded-2xl z-10 hidden md:block"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Security</p>
                <p className="text-xs text-gray-400">Enterprise Grade</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
