import { Chip, Link } from "@heroui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { GitHubIcon, DiscordIcon } from "./icons";
import { LINKS, COLORS } from "../constants";

interface HeaderProps {
  isDark: boolean;
  version: string | null;
  onThemeChange: (isDark: boolean) => void;
}

export function Header({ isDark, version, onThemeChange }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            YMMC
          </span>
          {version && (
            <Chip
              size="sm"
              color="warning"
              variant="flat"
              className={`font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {version}
            </Chip>
          )}
        </div>
        <div className="flex gap-3 items-center">
          <Link
            href={LINKS.GITHUB_REPO}
            isExternal
            className="px-4 py-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur-sm transition-all flex items-center gap-2 text-sm font-medium"
          >
            <GitHubIcon />
            <span className={isDark ? "text-white" : "text-gray-900"}>
              GitHub
            </span>
          </Link>
          <Link
            href={LINKS.DISCORD}
            isExternal
            style={{
              backgroundColor: COLORS.DISCORD_BLURPLE,
            }}
            className="px-4 py-2 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-sm font-medium"
          >
            <DiscordIcon className="w-4 h-4 text-white" />
            <span className="text-white">Discord</span>
          </Link>
          <ThemeSwitcher onThemeChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}
