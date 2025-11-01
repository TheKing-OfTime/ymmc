"use client";

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

export default function Home() {
  const features = [
    {
      icon: "🎮",
      title: "Discord Rich Presence",
      description: "Show your current track as Discord status",
    },
    {
      icon: "🎛️",
      title: "Remote Control",
      description: "Control playback from other devices",
    },
    {
      icon: "📊",
      title: "Last.FM Scrobbling",
      description: "Automatic track scrobbling support",
    },
    {
      icon: "⌨️",
      title: "Global Hotkeys",
      description: "Control playback with keyboard shortcuts",
    },
    {
      icon: "📂",
      title: "Custom Cache",
      description: "Choose where to store your music",
    },
    {
      icon: "💾",
      title: "Download Tracks",
      description: "Save tracks directly to your PC",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              YMMC
            </span>
            <Chip size="sm" color="warning" variant="flat">
              v5.x
            </Chip>
          </div>
          <div className="flex gap-4">
            <Button
              as={Link}
              href="https://github.com/TheKing-OfTime/YandexMusicModClient"
              isExternal
              variant="light"
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="https://discord.gg/HGNKDxwHEH"
              isExternal
              color="secondary"
              variant="flat"
            >
              Discord
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Yandex Music Mod Client
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Enhance your Yandex Music experience with powerful features missing
            from the vanilla client
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              as={Link}
              href="https://github.com/TheKing-OfTime/YandexMusicModPatcher"
              isExternal
              size="lg"
              color="primary"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold"
            >
              📥 Download Latest Build
            </Button>
            <Button
              as={Link}
              href="https://boosty.to/thekingoftime/donate"
              isExternal
              size="lg"
              color="warning"
              variant="flat"
            >
              💝 Support Developer
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            ⚠️ This modification does NOT provide free access without Yandex
            Plus subscription
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card>
            <CardBody className="text-center">
              <p className="text-4xl font-bold text-purple-600">514+</p>
              <p className="text-gray-600 dark:text-gray-400">GitHub Stars</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <p className="text-4xl font-bold text-pink-600">10K+</p>
              <p className="text-gray-600 dark:text-gray-400">Downloads</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <p className="text-4xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600 dark:text-gray-400">Features</p>
            </CardBody>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            ✨ Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardHeader className="flex gap-3">
                  <span className="text-3xl">{feature.icon}</span>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Installation */}
        <Card className="mb-20">
          <CardHeader>
            <h2 className="text-3xl font-bold">🚀 Quick Installation</h2>
          </CardHeader>
          <CardBody className="gap-4">
            <div className="flex gap-3 items-start">
              <Chip color="primary" variant="flat">
                1
              </Chip>
              <div>
                <p className="font-semibold mb-1">
                  Download Official Yandex Music Client
                </p>
                <Link
                  href="https://music.yandex.com/download/"
                  isExternal
                  size="sm"
                >
                  music.yandex.com/download
                </Link>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Chip color="primary" variant="flat">
                2
              </Chip>
              <div>
                <p className="font-semibold mb-1">Download the Patcher</p>
                <Link
                  href="https://github.com/TheKing-OfTime/YandexMusicModPatcher"
                  isExternal
                  size="sm"
                >
                  Get YandexMusicModPatcher
                </Link>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Chip color="primary" variant="flat">
                3
              </Chip>
              <div>
                <p className="font-semibold">Run patcher and click "Patch"</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Chip color="success" variant="flat">
                ✓
              </Chip>
              <div>
                <p className="font-semibold">Enjoy enhanced Yandex Music!</p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Platform Support */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold mb-6">Platform Support</h3>
          <div className="flex gap-4 justify-center">
            <Chip size="lg" variant="flat">
              ✅ Windows
            </Chip>
            <Chip size="lg" variant="flat">
              ✅ macOS
            </Chip>
            <Chip size="lg" variant="flat">
              ✅ Linux
            </Chip>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            Not affiliated with Yandex. Community-driven project under MIT
            License.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://github.com/TheKing-OfTime/YandexMusicModClient"
              isExternal
              size="sm"
            >
              Main Repository
            </Link>
            <Link
              href="https://discord.gg/HGNKDxwHEH"
              isExternal
              size="sm"
            >
              Discord Community
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
