"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";

export function VibeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(true);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Initialize the vibe animation worker
    const initAnimation = async () => {
      try {
        // Create offscreen canvas for the worker
        const offscreen = canvas.transferControlToOffscreen();
        
        // Load the vibeAnimation worker script
        const worker = new Worker("/vibeAnimation.js");
        
        worker.postMessage(
          {
            type: "vibe-animation-worker-init",
            payload: {
              canvas: offscreen,
              collectionHue: 280,
              fps: 60,
              shaderOptions: {
                transparent: false,
                antialias: true,
                canvasSize: {
                  mobileSizePx: 430,
                  desktopSizePx: 650,
                  mobileScale: 0.4,
                  desktopScale: 0.35,
                },
              },
            },
          },
          [offscreen]
        );

        // Apply initial settings
        worker.postMessage({
          type: "vibe-animation-worker-apply-settings",
          payload: {
            backgroundColor: isDark ? 0 : 1,
            energy: 0.4,
            baseScale: 1,
          },
        });

        // Start play animation
        worker.postMessage({
          type: "vibe-animation-worker-play-animation",
          payload: {
            hue: 280,
            collectionHue: 280,
            energy: 0.5,
          },
        });

        animationRef.current = worker;
      } catch (error) {
        console.error("Failed to initialize vibe animation:", error);
      }
    };

    initAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.postMessage({
          type: "vibe-animation-worker-disable",
        });
        animationRef.current.terminate();
      }
    };
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.postMessage({
        type: "vibe-animation-worker-apply-settings",
        payload: {
          backgroundColor: isDark ? 0 : 1,
        },
      });
    }
  }, [isDark]);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{
            background: isDark ? "#000000" : "#ffffff",
          }}
        />
      </div>
      
      {/* Theme Switcher */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          isIconOnly
          variant="flat"
          className="bg-white/10 backdrop-blur-md"
          onPress={() => setIsDark(!isDark)}
        >
          {isDark ? "🌞" : "🌙"}
        </Button>
      </div>
    </>
  );
}
