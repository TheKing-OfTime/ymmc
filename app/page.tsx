"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@heroui/react";
import { VibeBackground } from "./components/VibeBackground";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <VibeBackground isDark={isDark} />
      <div className="h-screen flex flex-col relative">
        {/* Header */}
        <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                YMMC
              </span>
              <Chip size="sm" color="warning" variant="flat">
                v5.x
              </Chip>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                as={Link}
                href="https://github.com/TheKing-OfTime/YandexMusicModClient"
                isExternal
                variant="light"
                className={isDark ? "text-white" : "text-gray-900"}
              >
                GitHub
              </Button>
              <Button
                as={Link}
                href="https://discord.gg/HGNKDxwHEH"
                isExternal
                color="secondary"
                variant="flat"
                className={isDark ? "text-white" : "text-gray-900"}
              >
                Discord
              </Button>
              <ThemeSwitcher onThemeChange={setIsDark} />
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
          {/* Content removed - only background, nav and footer remain */}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/20 dark:border-white/10 py-6 backdrop-blur-sm bg-white/5 dark:bg-black/5">
          <div className="container mx-auto px-6">
            <div className="flex gap-6 justify-between items-center flex-wrap">
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Not affiliated with Yandex. Made with ❤️ & opensource by
                community
              </p>

              <div className="flex gap-3 items-center flex-wrap">
                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30">
                  <span className="text-xl">⭐</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold ${
                        isDark ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      514+
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      stars
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm border border-pink-500/30">
                  <span className="text-xl">📥</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold ${
                        isDark ? "text-pink-300" : "text-pink-700"
                      }`}
                    >
                      10K+
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      downloads
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30">
                  <span className="text-xl">✨</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold ${
                        isDark ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      15+
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      features
                    </span>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
